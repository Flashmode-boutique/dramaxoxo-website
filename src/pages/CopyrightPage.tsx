import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../config/siteConfig';
import { Mail, AlertCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export const CopyrightPage: React.FC = () => {
  const { t } = useTranslation();
  const cp = t.copyright;

  return (
    <LegalLayout
      title={cp.title}
      subtitle={cp.subtitle}
      lastUpdated={cp.lastUpdated}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cp.s1_title}
        </h2>
        <p>{cp.s1_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cp.s2_title}
        </h2>
        <p>{cp.s2_intro}</p>
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 text-xs sm:text-sm">
          {cp.s2_elements.map((el, idx) => (
            <div key={idx} className="flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">
                {el.num}
              </span>
              <span>
                <strong>{el.strong} </strong>{el.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cp.s3_title}
        </h2>
        {siteConfig.copyrightEmail ? (
          <div className="p-4 rounded-xl bg-brand-card border border-brand-border flex items-center space-x-3">
            <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
            <p className="text-sm">
              Envoyez votre notification à : <strong className="text-white">{siteConfig.copyrightEmail}</strong>
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-brand-card/60 border border-brand-border/60 flex items-start space-x-3 text-xs sm:text-sm text-brand-textMuted">
            <AlertCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
            <p>
              {cp.s3_p_unconfigured_before}
              <a href="/support" className="text-brand-red underline">
                {cp.s3_p_unconfigured_link}
              </a>
              {cp.s3_p_unconfigured_after}
            </p>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cp.s4_title}
        </h2>
        <p>{cp.s4_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cp.s5_title}
        </h2>
        <p>{cp.s5_p}</p>
      </section>
    </LegalLayout>
  );
};
