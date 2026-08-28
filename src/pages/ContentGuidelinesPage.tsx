import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { AlertTriangle, Ban, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export const ContentGuidelinesPage: React.FC = () => {
  const { t } = useTranslation();
  const cg = t.contentGuidelines;

  return (
    <LegalLayout
      title={cg.title}
      subtitle={cg.subtitle}
      lastUpdated={cg.lastUpdated}
    >
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-start space-x-3 mb-6">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p>{cg.alert}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <Ban className="w-5 h-5 text-brand-red" />
          <span>{cg.s1_title}</span>
        </h2>
        <p>{cg.s1_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {cg.s1_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-brand-gold" />
          <span>{cg.s2_title}</span>
        </h2>
        <p>{cg.s2_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {cg.s2_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{cg.s3_title}</span>
        </h2>
        <p>{cg.s3_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {cg.s3_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cg.s4_title}
        </h2>
        <p>{cg.s4_intro}</p>
        <ul className="list-disc list-inside space-y-1.5 pl-4">
          {cg.s4_points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {cg.s5_title}
        </h2>
        <p>
          {cg.s5_p_before}
          <a href="/support" className="text-brand-red underline hover:text-white">
            {cg.s5_p_supportLink}
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
};
