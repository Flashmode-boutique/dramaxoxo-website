import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useTranslation } from '../i18n/LanguageContext';

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  const tm = t.terms;

  return (
    <LegalLayout
      title={tm.title}
      subtitle={tm.subtitle}
      lastUpdated={tm.lastUpdated}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s1_title}
        </h2>
        <p>{tm.s1_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s2_title}
        </h2>
        <p>{tm.s2_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s3_title}
        </h2>
        <p>{tm.s3_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s4_title}
        </h2>
        <p>
          <strong>{tm.s4_p1_strong} </strong>{tm.s4_p1_text}
        </p>
        <p>
          <strong>{tm.s4_p2_strong} </strong>{tm.s4_p2_text}
        </p>
        <p>
          <strong>{tm.s4_p3_strong} </strong>{tm.s4_p3_text}
        </p>
        <p>
          <strong>{tm.s4_p4_strong} </strong>{tm.s4_p4_text}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s5_title}
        </h2>
        <p>{tm.s5_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {tm.s5_points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s6_title}
        </h2>
        <p>{tm.s6_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s7_title}
        </h2>
        <p>{tm.s7_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s8_title}
        </h2>
        <p>{tm.s8_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s9_title}
        </h2>
        <p>{tm.s9_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {tm.s10_title}
        </h2>
        <p>
          {tm.s10_p_before}
          <a href="/support" className="text-brand-red underline hover:text-white">
            {tm.s10_p_supportLink}
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
};
