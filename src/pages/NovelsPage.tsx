import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Star, Sparkles, TrendingUp, Compass, ArrowRight, Bookmark, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NovelItem {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  slug: string;
  synopsis: string;
  coverUrl: string;
  genre: string;
  tags: string[];
  viewsCount: number;
  rating: number;
  chaptersCount: number;
  firstFreeChapters: number;
}

export const NovelsPage: React.FC = () => {
  const { language } = useLanguage();
  const [novels, setNovels] = useState<NovelItem[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const genres = [
    { id: 'all', label: language === 'ht' ? 'Tout' : (language === 'en' ? 'All' : 'Tout'), icon: '✨' },
    { id: 'romance', label: language === 'ht' ? 'Romance' : (language === 'en' ? 'Romance' : 'Romance'), icon: '💖' },
    { id: 'dark', label: language === 'ht' ? 'Dark Romance' : (language === 'en' ? 'Dark Romance' : 'Dark Romance'), icon: '🌹' },
    { id: 'thriller', label: language === 'ht' ? 'Thriller & Mistè' : (language === 'en' ? 'Thriller' : 'Thriller & Mystère'), icon: '🔍' },
    { id: 'heritage', label: language === 'ht' ? 'Eritaj Ayisyen' : (language === 'en' ? 'Haitian Heritage' : 'Héritage Haïtien'), icon: '🇭🇹' },
  ];

  useEffect(() => {
    fetchNovels();
  }, [selectedGenre]);

  const fetchNovels = async () => {
    setLoading(true);
    try {
      const url = selectedGenre === 'all' ? '/api/novels' : `/api/novels?genre=${encodeURIComponent(selectedGenre)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success && Array.isArray(data.novels)) {
        setNovels(data.novels);
      }
    } catch (err) {
      console.error('Error loading novels:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredNovels = novels.filter(n => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return n.title.toLowerCase().includes(q) || n.authorName.toLowerCase().includes(q) || n.synopsis.toLowerCase().includes(q);
  });

  const featuredNovel = novels[0];

  return (
    <div className="min-h-screen bg-[#07070C] text-slate-100 pb-24">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#180D1D] via-[#0E0E18] to-[#07070C] pt-6 pb-8 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Top navigation toggle: Séries vs Romans */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 bg-[#141422] p-1 rounded-full border border-white/10 shadow-lg">
              <Link
                to="/app"
                className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5"
              >
                <span>🎬</span> <span>{language === 'ht' ? 'Seri Kout' : (language === 'en' ? 'Mini-Series' : 'Séries')}</span>
              </Link>
              <div className="px-4 py-1.5 rounded-full text-xs font-black text-white bg-gradient-to-r from-rose-600 to-purple-600 shadow flex items-center gap-1.5">
                <span>📖</span> <span>{language === 'ht' ? 'Woman' : (language === 'en' ? 'Web Novels' : 'Romans')}</span>
              </div>
            </div>

            <Link
              to="/author"
              className="text-xs font-bold text-purple-300 hover:text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5"
            >
              <span>✍️</span> <span>{language === 'ht' ? 'Espas Otè' : (language === 'en' ? 'Author Hub' : 'Espace Auteur')}</span>
            </Link>
          </div>

          <div className="text-center sm:text-left mb-6">
            <div className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DRAMA XOXO NOVELS & STORIES</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {language === 'ht' ? 'Li Pi Bèl Istwa ak Roman Pasyon' : (language === 'en' ? 'Read Binge-Worthy Web Novels' : 'Découvrez les Meilleurs Romans Web')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
              {language === 'ht'
                ? 'Plonje nan istwa amou, dram ak mistè ki ekri pa pi gwo otè yo. Li premye chapit yo gratis !'
                : (language === 'en'
                  ? 'Immerse yourself in romance, dark fantasy, and drama novels. Read the first chapters for free!'
                  : 'Plongez dans des histoires d\'amour, de pouvoir et de vengeance captivantes. Premiers chapitres 100% gratuits !')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ht' ? 'Chèche yon woman, yon otè...' : (language === 'en' ? 'Search novels, authors, tags...' : 'Rechercher un roman, un auteur...')}
              className="w-full bg-[#141424] border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition shadow-inner"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6 space-y-8">
        {/* Genre Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGenre(g.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedGenre === g.id
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-lg shadow-rose-600/20'
                  : 'bg-[#141422] text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              <span>{g.icon}</span>
              <span>{g.label}</span>
            </button>
          ))}
        </div>

        {/* Featured Novel Spotlight (If exists and no search query) */}
        {!searchQuery && featuredNovel && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#18182C] to-[#121220] border border-purple-500/30 p-5 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src={featuredNovel.coverUrl}
                alt={featuredNovel.title}
                className="w-32 sm:w-44 aspect-[9/16] object-cover rounded-2xl shadow-2xl border-2 border-white/10 flex-shrink-0"
              />
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="bg-rose-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    ⭐ À LA UNE
                  </span>
                  <span className="bg-purple-900/60 text-purple-200 border border-purple-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {featuredNovel.genre}
                  </span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  {featuredNovel.title}
                </h2>
                <p className="text-xs text-purple-300 font-semibold">
                  {language === 'ht' ? 'Pa' : (language === 'en' ? 'By' : 'Par')} {featuredNovel.authorName}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {featuredNovel.synopsis}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                  <Link
                    to={`/novels/${featuredNovel.slug}`}
                    className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white text-xs font-black px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{language === 'ht' ? 'Kòmanse Li' : (language === 'en' ? 'Start Reading' : 'Commencer la Lecture')}</span>
                  </Link>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-white">{featuredNovel.rating}</span>
                    <span>• {featuredNovel.chaptersCount} chapitres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Novels Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose-500" />
              <span>{language === 'ht' ? 'Tout Roman yo' : (language === 'en' ? 'All Web Novels' : 'Catalogue des Romans')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-semibold">{filteredNovels.length} titre(s)</span>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-[#141424] rounded-2xl aspect-[9/16] animate-pulse"></div>
              ))}
            </div>
          ) : filteredNovels.length === 0 ? (
            <div className="bg-[#12121E] border border-white/5 rounded-3xl p-12 text-center text-slate-400 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-sm font-bold text-white">Aucun roman trouvé dans cette catégorie.</p>
              <button onClick={() => setSelectedGenre('all')} className="text-xs text-rose-400 hover:underline">
                Afficher tous les romans
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {filteredNovels.map((novel) => (
                <Link
                  key={novel.id}
                  to={`/novels/${novel.slug}`}
                  className="group bg-[#11111D] hover:bg-[#18182A] border border-white/5 hover:border-purple-500/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <div className="relative aspect-[9/14] overflow-hidden bg-black">
                    <img
                      src={novel.coverUrl}
                      alt={novel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111D] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-slate-200 text-[9px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                      {novel.genre}
                    </span>

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-slate-300">
                      <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                        <Star className="w-3 h-3 fill-amber-400" /> {novel.rating}
                      </span>
                      <span className="bg-rose-600/90 text-white font-bold px-1.5 py-0.2 rounded text-[9px]">
                        {novel.chaptersCount} chap.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 flex-1 flex flex-col justify-between space-y-1.5">
                    <h4 className="font-bold text-xs text-white group-hover:text-rose-400 transition line-clamp-2 leading-tight">
                      {novel.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {novel.authorName}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NovelsPage;
