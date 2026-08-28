import React, { useState } from 'react';
import { HelpCircle, Mail, Send, CheckCircle2, AlertCircle, Key, CreditCard, Film, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { Card } from '../components/ui/Card';
import { siteConfig } from '../config/siteConfig';
import { useTranslation } from '../i18n/LanguageContext';

export const SupportPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'account',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const supportCategories = [
    { value: 'account', label: t.support.topics.account.title },
    { value: 'coins_vip', label: t.support.topics.coins.title },
    { value: 'playback', label: t.support.topics.playback.title },
    { value: 'legal', label: t.support.topics.legal.title },
  ];

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-red">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t.support.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {t.support.title}
        </h1>

        <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
          {t.support.description}
        </p>
      </div>

      {/* Quick Help Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-card border border-brand-border/60 space-y-2">
          <Key className="w-6 h-6 text-brand-red" />
          <h3 className="font-bold text-white text-sm">{t.support.topics.account.title}</h3>
          <p className="text-xs text-brand-textMuted">{t.support.topics.account.desc}</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-brand-border/60 space-y-2">
          <CreditCard className="w-6 h-6 text-brand-gold" />
          <h3 className="font-bold text-white text-sm">{t.support.topics.coins.title}</h3>
          <p className="text-xs text-brand-textMuted">{t.support.topics.coins.desc}</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-brand-border/60 space-y-2">
          <Film className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white text-sm">{t.support.topics.playback.title}</h3>
          <p className="text-xs text-brand-textMuted">{t.support.topics.playback.desc}</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-brand-border/60 space-y-2">
          <ShieldAlert className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-sm">{t.support.topics.legal.title}</h3>
          <p className="text-xs text-brand-textMuted">{t.support.topics.legal.desc}</p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {t.support.faqTitle}
        </h2>

        <Accordion>
          <AccordionItem title="Comment débloquer les épisodes d'une mini-série ?" defaultOpen={true}>
            <p>
              Les premiers épisodes de la plupart de nos séries sont accessibles gratuitement. Pour continuer l'histoire, vous pouvez utiliser vos <strong>Coins</strong> (obtenus gratuitement via les récompenses quotidiennes ou achetés dans l'application) ou souscrire à un <strong>Pass VIP</strong> pour un visionnage illimité.
            </p>
          </AccordionItem>

          <AccordionItem title="Comment restaurer mes achats si je change de téléphone ?">
            <p>
              Tous vos déblocages et soldes sont liés à votre compte utilisateur Drama Xoxo ou à votre identifiant Apple ID / Google Play. En vous reconnectant avec les mêmes identifiants sur votre nouvel appareil et en appuyant sur « Restaurer les achats » dans le menu Profil, votre solde sera automatiquement synchronisé.
            </p>
          </AccordionItem>

          <AccordionItem title="Comment devenir créateur ou studio partenaire sur Drama Xoxo ?">
            <p>
              Les créateurs peuvent soumettre leur projet de mini-série ou portfolio via notre programme partenaire. Dès l'ouverture officielle des candidatures, vous pourrez soumettre vos épisodes au format vertical 9:16 après validation de votre compte selon les termes de l'<a href="/creator-agreement" className="text-brand-red underline">Accord Créateur</a>.
            </p>
          </AccordionItem>

          <AccordionItem title="Comment signaler un problème de lecture vidéo ?">
            <p>
              Si une vidéo ne se charge pas correctement, vérifiez votre connexion réseau, redémarrez l'application ou videz le cache dans les paramètres de votre téléphone. Si le souci persiste, contactez-nous via le formulaire ci-dessous avec le titre de la série et le numéro de l'épisode concerné.
            </p>
          </AccordionItem>

          <AccordionItem title="Comment demander la suppression définitive de mon compte ?">
            <p>
              Vous pouvez demander l'effacement complet de vos données et la suppression de votre compte en consultant directement notre page <a href="/delete-account" className="text-brand-red underline">Suppression de Compte</a>.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-brand-border/60">
        
        {/* Left info */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-2xl font-bold text-white">{t.support.contactTitle}</h2>
          <p className="text-sm text-brand-textSecondary leading-relaxed">
            {t.support.contactDesc}
          </p>

          <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-3">
            <p className="text-xs font-semibold uppercase text-brand-textMuted tracking-wider">
              {t.support.hoursTitle}
            </p>
            <p className="text-sm text-white font-medium">
              {t.support.hoursTime}
            </p>
            <p className="text-xs text-brand-textSecondary">
              {t.support.hoursNote}
            </p>
          </div>

          {siteConfig.supportEmail ? (
            <div className="p-4 rounded-xl bg-brand-card border border-brand-border flex items-center space-x-3 text-xs">
              <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>E-mail : <strong className="text-white">{siteConfig.supportEmail}</strong></span>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-brand-card/60 border border-brand-border/60 text-xs text-brand-textMuted flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>{t.support.emailNotice}</span>
            </div>
          )}
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 space-y-6 bg-brand-surface border-brand-borderLight/60">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{t.support.form.successTitle}</h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary max-w-sm mx-auto leading-relaxed">
                  {t.support.form.successDesc}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFormSubmitted(false)}
                >
                  {t.support.form.resetBtn}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-textSecondary block">
                      {t.support.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.support.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none placeholder-brand-textMuted"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-textSecondary block">
                      {t.support.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.support.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none placeholder-brand-textMuted"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-textSecondary block">
                    {t.support.form.categoryLabel}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                  >
                    {supportCategories.map((c) => (
                      <option key={c.value} value={c.value} className="bg-brand-card text-white">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-textSecondary block">
                    {t.support.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.support.form.subjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none placeholder-brand-textMuted"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-textSecondary block">
                    {t.support.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.support.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none placeholder-brand-textMuted resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full font-bold"
                >
                  {t.support.form.submitBtn}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
