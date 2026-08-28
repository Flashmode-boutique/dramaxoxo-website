import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../config/siteConfig';
import { useTranslation } from '../i18n/LanguageContext';

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  const p = t.privacy;

  return (
    <LegalLayout
      title={p.title}
      subtitle={p.subtitle}
      lastUpdated={p.lastUpdated}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s1_title}
        </h2>
        <p>{p.s1_p1}</p>
        <p>{p.s1_p2}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s2_title}
        </h2>
        <p>{p.s2_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {p.s2_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s3_title}
        </h2>
        <p>{p.s3_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {p.s3_points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s4_title}
        </h2>
        <p>{p.s4_intro}</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          {p.s4_points.map((pt, idx) => (
            <li key={idx}>
              <strong>{pt.strong} </strong>{pt.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s5_title}
        </h2>
        <p>{p.s5_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s6_title}
        </h2>
        <p>{p.s6_p1}</p>
        <p>
          {p.s6_p2_before}
          <a href="/delete-account" className="text-brand-red underline hover:text-white">
            {p.s6_p2_link}
          </a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s7_title}
        </h2>
        <p>{p.s7_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s8_title}
        </h2>
        <p>{p.s8_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s9_title}
        </h2>
        <p>{p.s9_p}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          {p.s10_title}
        </h2>
        <p>
          {p.s10_p_before}
          <a href="/support" className="text-brand-red underline hover:text-white">
            {p.s10_p_supportLink}
          </a>
          {siteConfig.legalEmail ? (
            <> ou à l'adresse officielle : <strong className="text-white">{siteConfig.legalEmail}</strong>.</>
          ) : (
            <>{p.s10_p_unconfigured}</>
          )}
        </p>
      </section>
    </LegalLayout>
  );
};
