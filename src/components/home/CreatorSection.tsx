import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clapperboard, CheckCircle2, DollarSign, ShieldCheck, ArrowRight, Video, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';

export const CreatorSection: React.FC = () => {
  const [creatorModalOpen, setCreatorModalOpen] = useState(false);
  const { t } = useTranslation();

  const stepIcons = [
    <FileText className="w-4 h-4 text-brand-red" />,
    <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    <Video className="w-4 h-4 text-brand-gold" />,
    <ShieldCheck className="w-4 h-4 text-sky-400" />,
    <Clapperboard className="w-4 h-4 text-purple-400" />,
    <DollarSign className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="creators" className="py-20 sm:py-28 relative overflow-hidden bg-brand-surface border-t border-b border-brand-border/60">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Heading & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-semibold text-brand-gold">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>{t.creators.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {t.creators.title}
            </h2>

            <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
              {t.creators.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {siteConfig.studioUrl ? (
                <Button
                  variant="glow"
                  size="lg"
                  href={siteConfig.studioUrl}
                  isExternal
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {t.creators.ctaPrimary}
                </Button>
              ) : (
                <Button
                  variant="glow"
                  size="lg"
                  onClick={() => setCreatorModalOpen(true)}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {t.creators.ctaPrimary}
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                to="/creator-agreement"
              >
                {t.creators.ctaAgreement}
              </Button>
            </div>

            <p className="text-xs text-brand-textMuted pt-2 italic">
              {t.creators.royaltyDisclaimer}
            </p>
          </div>

          {/* Right Column: Highlights Card */}
          <div className="lg:col-span-5">
            <Card className="p-8 space-y-6 border-brand-borderLight/60 bg-brand-card/90">
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-border">
                <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-brand-red border border-brand-border">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{t.creators.cardTitle}</h3>
                  <p className="text-xs text-brand-textSecondary">{t.creators.cardSub}</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-brand-textSecondary">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                  <span>{t.creators.cardF1}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                  <span>{t.creators.cardF2}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                  <span>{t.creators.cardF3}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                  <span>{t.creators.cardF4}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border text-xs text-brand-textMuted space-y-1">
                <span className="font-semibold text-brand-textPrimary block">{t.creators.qualityTitle}</span>
                <span>{t.creators.qualityDesc}</span>
              </div>
            </Card>
          </div>
        </div>

        {/* The 6 Steps Flow */}
        <div className="space-y-6">
          <h3 className="text-center font-bold text-lg text-white">
            {t.creators.flowTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {t.creators.steps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-red/30 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-brand-surface text-brand-textSecondary border border-brand-border">
                    {idx + 1}
                  </span>
                  {stepIcons[idx]}
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] text-brand-textMuted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Creator Application Info Modal */}
      {creatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-lg w-full rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-card flex items-center justify-center text-brand-red border border-brand-border">
                <Clapperboard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.creators.modalTitle}</h3>
                <p className="text-xs text-brand-textSecondary">{t.creators.modalSubtitle}</p>
              </div>
            </div>

            <p className="text-sm text-brand-textSecondary leading-relaxed">
              {t.creators.modalDesc}
            </p>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs space-y-2 text-brand-textSecondary">
              <p className="font-semibold text-white">{t.creators.modalBeforeTitle}</p>
              <ul className="list-disc list-inside space-y-1 text-brand-textMuted">
                <li>{t.creators.modalP1}</li>
                <li>{t.creators.modalP2}</li>
                <li>{t.creators.modalP3}</li>
              </ul>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                to="/creator-agreement"
                onClick={() => setCreatorModalOpen(false)}
              >
                {t.creators.modalBtnRules}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setCreatorModalOpen(false)}
              >
                {t.creators.modalBtnClose}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
