-- ====================================================================
-- MIGRATION: IDEMPOTENT SECURE COIN & VIP PURCHASES
-- ====================================================================

-- 1. Procédure transactionnelle sécurisée avec protection anti-rejeu (Idempotence)
CREATE OR REPLACE FUNCTION public.process_coin_purchase(
    p_tx_id TEXT,
    p_user_id UUID,
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
    UPDATE public.admin_ledger
    SET balance_usd = balance_usd + p_amount_usd,
        updated_at = timezone('utc'::text, now())
    WHERE id = 'primary_ledger'
    RETURNING balance_usd INTO v_new_balance;

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
