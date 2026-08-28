import React from 'react';
import { Smartphone, Apple, PlaySquare, Bell, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';

export const AppDownloadSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="app-preview" className="py-20 sm:py-28 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-borderLight/60 relative overflow-hidden bg-gradient-to-br from-brand-card via-brand-surface to-brand-bg">
          
          {/* Subtle accent circle */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-gold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.appDownload.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {t.appDownload.title}
              </h2>

              <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
                {t.appDownload.description}
              </p>

              {/* App Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-brand-textSecondary text-left">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{t.appDownload.b1}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{t.appDownload.b2}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{t.appDownload.b3}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{t.appDownload.b4}</span>
                </div>
              </div>

              {/* App Store / Google Play Buttons with Configurable State */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                
                {/* Apple App Store Button */}
                {siteConfig.appStoreUrl ? (
                  <a
                    href={siteConfig.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-lg"
                  >
                    <Apple className="w-6 h-6 fill-current" />
                    <div className="text-left">
                      <p className="text-[10px] leading-tight text-gray-700 uppercase font-medium">{t.appDownload.appStoreSubtitle}</p>
                      <p className="text-sm font-bold leading-tight">App Store</p>
                    </div>
                  </a>
                ) : (
                  <div className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3.5 rounded-2xl bg-brand-surface border border-brand-border text-brand-textSecondary opacity-80 cursor-default">
                    <Apple className="w-6 h-6 text-brand-textMuted" />
                    <div className="text-left">
                      <p className="text-[10px] leading-tight text-brand-textMuted uppercase font-medium">App Store</p>
                      <p className="text-xs font-bold text-brand-gold">{t.appDownload.comingSoon}</p>
                    </div>
                  </div>
                )}

                {/* Google Play Button */}
                {siteConfig.googlePlayUrl ? (
                  <a
                    href={siteConfig.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-lg"
                  >
                    <PlaySquare className="w-6 h-6 fill-current" />
                    <div className="text-left">
                      <p className="text-[10px] leading-tight text-gray-700 uppercase font-medium">{t.appDownload.googlePlaySubtitle}</p>
                      <p className="text-sm font-bold leading-tight">Google Play</p>
                    </div>
                  </a>
                ) : (
                  <div className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3.5 rounded-2xl bg-brand-surface border border-brand-border text-brand-textSecondary opacity-80 cursor-default">
                    <PlaySquare className="w-6 h-6 text-brand-textMuted" />
                    <div className="text-left">
                      <p className="text-[10px] leading-tight text-brand-textMuted uppercase font-medium">Google Play</p>
                      <p className="text-xs font-bold text-brand-gold">{t.appDownload.comingSoon}</p>
                    </div>
                  </div>
                )}

              </div>

              <p className="text-[11px] text-brand-textMuted">
                {t.appDownload.disclaimer}
              </p>

            </div>

            {/* Right Card Mock */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-3xl bg-brand-surface/90 border border-brand-border max-w-sm w-full space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center mx-auto text-brand-red shadow-red-glow">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base">{t.appDownload.cardTitle}</h3>
                <p className="text-xs text-brand-textSecondary leading-relaxed">
                  {t.appDownload.cardDesc}
                </p>
                <div className="pt-2 text-[11px] text-brand-textMuted border-t border-brand-border/40">
                  {t.appDownload.cardBadge}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
