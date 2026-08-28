import React, { useState } from 'react';
import { Play, Sparkles, Smartphone, ChevronRight, CheckCircle2, Shield, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
      {/* Background Gradients & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-radial from-brand-red/20 via-brand-red/5 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Top Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border/80 text-xs font-semibold text-brand-textSecondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.1]">
                {t.hero.title1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-brand-red to-rose-400">
                  {t.hero.title2}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-brand-textSecondary max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            {/* Genre Sub-line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold tracking-wider text-brand-textMuted uppercase">
              <span className="text-white/90">{t.hero.genres}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="glow"
                size="lg"
                onClick={() => setModalOpen(true)}
                leftIcon={<Smartphone className="w-5 h-5" />}
                className="w-full sm:w-auto text-sm sm:text-base font-bold shadow-red-glow"
              >
                {t.hero.ctaPrimary}
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                href="#creators"
                rightIcon={<ChevronRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-border/60 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-brand-surface/40 border border-brand-border/40">
                <p className="text-white font-bold text-sm sm:text-base flex items-center">
                  <Play className="w-3.5 h-3.5 text-brand-red fill-brand-red mr-1.5" /> 9:16
                </p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">{t.hero.formatVertical}</p>
              </div>
              
              <div className="p-3 rounded-xl bg-brand-surface/40 border border-brand-border/40">
                <p className="text-white font-bold text-sm sm:text-base flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold mr-1.5" /> 1-2 min
                </p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">{t.hero.shortEpisodes}</p>
              </div>

              <div className="p-3 rounded-xl bg-brand-surface/40 border border-brand-border/40">
                <p className="text-white font-bold text-sm sm:text-base flex items-center">
                  <Shield className="w-3.5 h-3.5 text-rose-400 mr-1.5" /> 100%
                </p>
                <p className="text-[11px] text-brand-textMuted mt-0.5">{t.hero.mobileFirst}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup Visual */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Phone Container */}
            <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] bg-brand-surface rounded-[46px] p-3 border-4 border-brand-borderLight/60 shadow-2xl shadow-black ring-1 ring-white/10">
              
              {/* Dynamic Island / Top Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-border" />
              </div>

              {/* Inside Screen Content */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-brand-bg flex flex-col justify-between">
                
                {/* Poster Background */}
                <img
                  src={siteConfig.featuredSeries[0].coverUrl}
                  alt="Drama Xoxo Series Preview"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-black/60 z-10" />

                {/* In-app Top bar teaser */}
                <div className="relative z-20 pt-8 px-4 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-black text-sm text-white tracking-wider">DRAMA <span className="text-brand-red">XOXO</span></span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-amber-400/30">
                    {t.hero.vipPreview}
                  </span>
                </div>

                {/* In-app Floating UI Teaser */}
                <div className="relative z-20 p-4 space-y-3">
                  <Badge variant="red" className="text-[10px]">
                    {t.discover.series.s1.tag}
                  </Badge>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow-md">
                      {t.discover.series.s1.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mt-1 drop-shadow">
                      {t.discover.series.s1.synopsis}
                    </p>
                  </div>

                  {/* Play teaser bar */}
                  <div className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center shadow-red-glow">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Épisode 1</p>
                        <p className="text-[10px] text-gray-400">{t.hero.freeEpisode}</p>
                      </div>
                    </div>
                    <Heart className="w-4 h-4 text-brand-red fill-brand-red" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Cards */}
            <div className="hidden sm:block absolute -bottom-4 -left-8 p-4 rounded-2xl glass-card border border-brand-border shadow-xl z-30 max-w-[200px] animate-float">
              <div className="flex items-center space-x-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-bold text-white">{t.hero.cliffhangerBadge}</span>
              </div>
              <p className="text-[11px] text-brand-textSecondary leading-snug">
                {t.hero.cliffhangerDesc}
              </p>
            </div>

            <div className="hidden sm:block absolute top-12 -right-6 p-3.5 rounded-2xl glass-card border border-brand-border shadow-xl z-30 max-w-[180px]">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-white">{t.hero.qualityBadge}</span>
              </div>
              <p className="text-[10px] text-brand-textMuted">
                {t.hero.qualityDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-md w-full rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-red to-rose-400 p-[2px] mx-auto shadow-red-glow">
              <div className="w-full h-full bg-brand-bg rounded-[14px] flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-brand-red" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">{t.hero.modalTitle}</h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                {t.hero.modalDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-card/80 border border-brand-border/60 text-left space-y-2 text-xs text-brand-textSecondary">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t.hero.modalPoint1}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t.hero.modalPoint2}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t.hero.modalPoint3}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-full font-bold"
              onClick={() => setModalOpen(false)}
            >
              {t.hero.modalClose}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
