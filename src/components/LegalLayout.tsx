import React from 'react';
import { ShieldCheck, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { LanguageSelector } from './ui/LanguageSelector';

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = "Août 2026",
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Bar: Back button & Language Selector */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-semibold text-brand-textSecondary hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          {t.common.backToHome}
        </Link>
        <LanguageSelector variant="nav" />
      </div>

      {/* Header */}
      <div className="border-b border-brand-border/80 pb-8 mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-medium text-brand-textSecondary mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
          <span>{t.common.officialDocument}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex items-center space-x-2 text-xs text-brand-textMuted mt-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.common.lastUpdated} {lastUpdated}</span>
        </div>
      </div>

      {/* Legal Prose Content */}
      <div className="prose prose-invert max-w-none space-y-8 text-brand-textSecondary text-sm sm:text-base leading-relaxed">
        {children}
      </div>

      {/* Legal Footer Note */}
      <div className="mt-16 p-6 rounded-2xl bg-brand-surface border border-brand-border text-xs text-brand-textMuted">
        <p className="font-semibold text-brand-textPrimary mb-1">
          {t.common.legalFooterTitle}
        </p>
        <p>
          {t.common.legalFooterDesc}
        </p>
      </div>
    </div>
  );
};
