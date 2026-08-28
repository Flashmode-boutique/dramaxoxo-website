import React from 'react';
import { Search, Smartphone, Unlock, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { useTranslation } from '../../i18n/LanguageContext';

export const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: <Search className="w-6 h-6 text-brand-red" />,
      title: t.howItWorks.s1.title,
      description: t.howItWorks.s1.desc
    },
    {
      number: "02",
      icon: <Smartphone className="w-6 h-6 text-brand-gold" />,
      title: t.howItWorks.s2.title,
      description: t.howItWorks.s2.desc
    },
    {
      number: "03",
      icon: <Unlock className="w-6 h-6 text-rose-400" />,
      title: t.howItWorks.s3.title,
      description: t.howItWorks.s3.desc
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-gold">
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.howItWorks.title}
          </h2>

          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card className="h-full flex flex-col justify-between p-8 hover:border-brand-red/40 transition-all duration-300">
                <div className="space-y-6">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl sm:text-5xl font-black text-brand-borderLight group-hover:text-brand-red/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-textSecondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/40 flex items-center text-xs font-semibold text-brand-textMuted group-hover:text-brand-red transition-colors">
                  <span>{t.howItWorks.stepLabel} {step.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
