import React, { useState } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { Trash2, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useTranslation } from '../i18n/LanguageContext';

export const DeleteAccountPage: React.FC = () => {
  const { t } = useTranslation();
  const [emailInput, setEmailInput] = useState('');
  const [confirmCheck, setConfirmCheck] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmCheck && emailInput) {
      setRequestSubmitted(true);
    }
  };

  return (
    <LegalLayout
      title={t.footer.links.deleteAccount}
      subtitle="Guide officiel et formulaire de demande d'effacement de compte conformément aux exigences de l'App Store et du Google Play Store."
    >
      {/* Alert Warning Box */}
      <div className="p-5 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-rose-200 text-xs sm:text-sm space-y-2 mb-8">
        <div className="flex items-center space-x-2 font-bold text-white">
          <AlertTriangle className="w-5 h-5 text-brand-red flex-shrink-0" />
          <span>{t.deleteAccount.warningTitle}</span>
        </div>
        <p>
          {t.deleteAccount.warningDesc}
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {t.deleteAccount.appMethodTitle}
        </h2>
        <p>
          {t.deleteAccount.appMethodDesc}
        </p>
        <div className="p-4 rounded-xl bg-brand-surface border border-brand-border text-xs sm:text-sm space-y-1.5">
          <p className="font-semibold text-white">{t.deleteAccount.appStepTitle}</p>
          <ol className="list-decimal list-inside space-y-1 text-brand-textSecondary">
            {t.deleteAccount.appSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {t.deleteAccount.consequencesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <Trash2 className="w-4 h-4 text-brand-red" />
              <span>{t.deleteAccount.deletedTitle}</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 text-brand-textMuted">
              {t.deleteAccount.deletedList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <Info className="w-4 h-4 text-brand-gold" />
              <span>{t.deleteAccount.retainedTitle}</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 text-brand-textMuted">
              {t.deleteAccount.retainedList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {t.deleteAccount.subscriptionNoteTitle}
        </h2>
        <p className="text-sm text-brand-textSecondary">
          {t.deleteAccount.subscriptionNoteDesc}
        </p>
      </section>

      {/* Online Deletion Request Form Section */}
      <section className="space-y-4 pt-6 border-t border-brand-border/60">
        <h2 className="text-xl font-bold text-white">
          {t.deleteAccount.webFormTitle}
        </h2>
        <p className="text-sm">
          {t.deleteAccount.webFormDesc}
        </p>

        <Card className="p-6 sm:p-8 bg-brand-surface border-brand-borderLight/60 max-w-xl">
          {requestSubmitted ? (
            <div className="text-center py-6 space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.deleteAccount.successTitle}</h3>
              <p className="text-xs text-brand-textSecondary leading-relaxed">
                {t.deleteAccount.successDesc}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setRequestSubmitted(false);
                  setEmailInput('');
                  setConfirmCheck(false);
                }}
              >
                {t.deleteAccount.resetBtn}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-brand-textSecondary block">
                  {t.deleteAccount.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none placeholder-brand-textMuted"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="confirmDelete"
                  required
                  checked={confirmCheck}
                  onChange={(e) => setConfirmCheck(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded bg-brand-card border-brand-border text-brand-red focus:ring-brand-red"
                />
                <label htmlFor="confirmDelete" className="text-xs text-brand-textSecondary leading-relaxed cursor-pointer select-none">
                  {t.deleteAccount.confirmCheckbox}
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={!confirmCheck || !emailInput}
                leftIcon={<Trash2 className="w-4 h-4" />}
                className="w-full font-bold bg-brand-red hover:bg-brand-redHover"
              >
                {t.deleteAccount.submitBtn}
              </Button>
            </form>
          )}
        </Card>
      </section>
    </LegalLayout>
  );
};
