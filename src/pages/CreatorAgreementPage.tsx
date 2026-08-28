import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useTranslation } from '../i18n/LanguageContext';

export const CreatorAgreementPage: React.FC = () => {
  const { t } = useTranslation();
  const ca = t.creatorAgreement;

  return (
    <LegalLayout
      title={ca.title}
      subtitle={ca.subtitle}
      lastUpdated={ca.lastUpdated}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s1_title}
        </h2>
        <p>{ca.s1_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s2_title}
        </h2>
        <p>{ca.s2_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s3_title}
        </h2>
        <p>
          <strong>{ca.s3_p1_strong} </strong>{ca.s3_p1_text}
        </p>
        <p>
          <strong>{ca.s3_p2_strong} </strong>{ca.s3_p2_text}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s4_title}
        </h2>
        <p>{ca.s4_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {ca.s4_points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s5_title}
        </h2>
        <p>{ca.s5_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {ca.s5_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s6_title}
        </h2>
        <p>{ca.s6_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s7_title}
        </h2>
        <p>
          <strong>{ca.s7_p1_strong} </strong>{ca.s7_p1_text}
        </p>
        <p>
          <strong>{ca.s7_p2_strong} </strong>{ca.s7_p2_intro}
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-6">
          {ca.s7_p2_points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
        <p>
          <strong>{ca.s7_p3_strong} </strong>{ca.s7_p3_text}
        </p>
        <p>
          <strong>{ca.s7_p4_strong} </strong>{ca.s7_p4_text}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s8_title}
        </h2>
        <p>{ca.s8_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s9_title}
        </h2>
        <p>{ca.s9_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {ca.s10_title}
        </h2>
        <p>{ca.s10_p}</p>
      </section>
    </LegalLayout>
  );
};
