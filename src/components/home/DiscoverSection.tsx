import React, { useState } from 'react';
import { Film, Sparkles, Flame, Eye, Compass, HeartHandshake, Zap } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';

export const DiscoverSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategoryKey, setActiveCategoryKey] = useState<'all' | 'romance' | 'thriller' | 'secrets'>('all');

  const categories = [
    { key: 'all', label: t.discover.categories.all },
    { key: 'romance', label: t.discover.categories.romance },
    { key: 'thriller', label: t.discover.categories.thriller },
    { key: 'secrets', label: t.discover.categories.secrets },
  ] as const;

  const concepts = [
    {
      icon: <Film className="w-5 h-5 text-brand-red" />,
      title: t.discover.concepts.vertical.title,
      desc: t.discover.concepts.vertical.desc
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-gold" />,
      title: t.discover.concepts.short.title,
      desc: t.discover.concepts.short.desc
    },
    {
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      title: t.discover.concepts.cliffhangers.title,
      desc: t.discover.concepts.cliffhangers.desc
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-purple-400" />,
      title: t.discover.concepts.romance.title,
      desc: t.discover.concepts.romance.desc
    },
    {
      icon: <Eye className="w-5 h-5 text-sky-400" />,
      title: t.discover.concepts.suspense.title,
      desc: t.discover.concepts.suspense.desc
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: t.discover.concepts.exclusive.title,
      desc: t.discover.concepts.exclusive.desc
    }
  ];

  const seriesList = [
    { ...t.discover.series.s1, id: "series_1", coverUrl: siteConfig.featuredSeries[0].coverUrl, episodesCount: siteConfig.featuredSeries[0].episodes },
    { ...t.discover.series.s2, id: "series_2", coverUrl: siteConfig.featuredSeries[1].coverUrl, episodesCount: siteConfig.featuredSeries[1].episodes },
    { ...t.discover.series.s3, id: "series_3", coverUrl: siteConfig.featuredSeries[2].coverUrl, episodesCount: siteConfig.featuredSeries[2].episodes },
    { ...t.discover.series.s4, id: "series_4", coverUrl: siteConfig.featuredSeries[3].coverUrl, episodesCount: siteConfig.featuredSeries[3].episodes },
  ];

  return (
    <section id="discover" className="py-20 sm:py-28 relative overflow-hidden bg-brand-surface/50 border-t border-brand-border/40">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-xs font-semibold text-brand-red">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.discover.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.discover.title}
          </h2>

          <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
            {t.discover.description}
          </p>
        </div>

        {/* Core Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {concepts.map((concept, idx) => (
            <Card key={idx} className="space-y-3 hover:border-brand-red/30 group">
              <div className="w-10 h-10 rounded-xl bg-brand-card flex items-center justify-center border border-brand-border group-hover:scale-110 transition-transform">
                {concept.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-red transition-colors">
                {concept.title}
              </h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                {concept.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Featured Mini-Series Preview Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>{t.discover.seriesTitle}</span>
              <span className="text-xs font-normal text-brand-textMuted px-2 py-0.5 rounded bg-brand-card border border-brand-border">
                {t.discover.comingSoonTag}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-textSecondary mt-1">
              {t.discover.seriesSubtitle}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategoryKey === cat.key
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                    : 'bg-brand-card text-brand-textSecondary hover:text-white border border-brand-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Series Poster Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seriesList.map((series) => (
            <div
              key={series.id}
              className="group relative rounded-2xl overflow-hidden glass-card border border-brand-border/60 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Poster Image */}
              <div className="relative aspect-[9/13] w-full overflow-hidden bg-brand-surface">
                <img
                  src={series.coverUrl}
                  alt={series.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-black/40" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <Badge variant="red" className="text-[10px]">
                    {series.tag}
                  </Badge>
                </div>

                {/* Episode count */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/10">
                  {series.episodesCount} {t.discover.episodes}
                </div>

                {/* Genre Overlay on Bottom of Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                    {series.genre}
                  </p>
                </div>
              </div>

              {/* Card Meta & Synopsis */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-white text-base group-hover:text-brand-red transition-colors leading-snug">
                    {series.title}
                  </h4>
                  <p className="text-xs text-brand-textSecondary mt-1.5 line-clamp-2 leading-relaxed">
                    {series.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/40 text-[11px] text-brand-textMuted flex items-center justify-between">
                  <span>{series.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
