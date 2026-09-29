-- ====================================================================
-- MIGRATION: IDEMPOTENT SECURE COIN & VIP PURCHASES
-- ====================================================================

-- 1. S'assurer que les tables existent et autoriser la lecture/écriture
CREATE TABLE IF NOT EXISTS public.coin_transactions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    user_name TEXT,
    tx_type TEXT,
    amount_usd NUMERIC(10, 2) DEFAULT 0.00,
    amount_display TEXT,
    currency TEXT DEFAULT 'USD',
    coins_credited INTEGER DEFAULT 0,
    payment_method TEXT,
    country TEXT,
    item_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Assurer le type TEXT pour accepter aussi bien les UUID que les ID invités (GUEST-XXXX)
DO $$
BEGIN
    ALTER TABLE public.coin_transactions ALTER COLUMN user_id TYPE TEXT;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.admin_ledger (
    id TEXT PRIMARY KEY DEFAULT 'primary_ledger',
    balance_usd NUMERIC(12, 2) DEFAULT 0.00,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Initialiser le solde admin s'il n'existe pas encore
INSERT INTO public.admin_ledger (id, balance_usd)
VALUES ('primary_ledger', 0.00)
ON CONFLICT (id) DO NOTHING;

-- Désactiver RLS ou accorder tous les privilèges d'accès
ALTER TABLE public.coin_transactions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_ledger DISABLE ROW LEVEL SECURITY;

GRANT ALL ON public.coin_transactions TO anon, authenticated, service_role;
GRANT ALL ON public.admin_ledger TO anon, authenticated, service_role;

-- 2. Procédure transactionnelle sécurisée avec protection anti-rejeu (Idempotence)
CREATE OR REPLACE FUNCTION public.process_coin_purchase(
    p_tx_id TEXT,
    p_user_id TEXT,
    p_user_name TEXT,
    p_tx_type TEXT,
    p_amount_usd NUMERIC,
    p_amount_display TEXT,
    p_currency TEXT,
    p_coins_credited INTEGER,
    p_payment_method TEXT,
    p_country TEXT,
    p_item_name TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_new_balance NUMERIC;
    v_existing_id TEXT;
BEGIN
    -- 1. Vérification d'idempotence : Si l'ID Stripe ou Mobile Money existe déjà, on ne double pas le crédit
    SELECT id INTO v_existing_id FROM public.coin_transactions WHERE id = p_tx_id;
    IF FOUND THEN
        SELECT balance_usd INTO v_new_balance FROM public.admin_ledger WHERE id = 'primary_ledger';
        RETURN jsonb_build_object(
            'success', true,
            'status', 'already_processed',
            'tx_id', p_tx_id,
            'balance', v_new_balance
        );
    END IF;

    -- 2. Insertion dans le registre comptable des transactions
    INSERT INTO public.coin_transactions (
        id, user_id, user_name, tx_type, amount_usd, amount_display,
        currency, coins_credited, payment_method, country, item_name, created_at
    ) VALUES (
        p_tx_id, p_user_id, p_user_name, p_tx_type, p_amount_usd, p_amount_display,
        p_currency, p_coins_credited, p_payment_method, p_country, p_item_name, timezone('utc'::text, now())
    );

    -- 3. Crédit atomique du grand livre de Marie Stanley Imbry
    INSERT INTO public.admin_ledger (id, balance_usd, updated_at)
    VALUES ('primary_ledger', p_amount_usd, timezone('utc'::text, now()))
    ON CONFLICT (id) DO UPDATE
    SET balance_usd = public.admin_ledger.balance_usd + EXCLUDED.balance_usd,
        updated_at = timezone('utc'::text, now());

    SELECT balance_usd INTO v_new_balance FROM public.admin_ledger WHERE id = 'primary_ledger';

    -- 4. Retour de confirmation
    RETURN jsonb_build_object(
        'success', true,
        'status', 'completed',
        'tx_id', p_tx_id,
        'credited_usd', p_amount_usd,
        'new_balance', v_new_balance
    );
END;
$$;

GRANT EXECUTE ON FUNCTION public.process_coin_purchase TO anon, authenticated, service_role;
