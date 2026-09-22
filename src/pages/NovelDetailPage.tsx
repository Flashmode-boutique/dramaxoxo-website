import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Star, Lock, Unlock, ArrowLeft, Eye, Bookmark, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ChapterOutline {
  id: string;
  chapterIndex: number;
  title: string;
  wordCount: number;
  isPaid: boolean;
  coinPrice: number;
  publishedAt?: number;
}

interface NovelDetail {
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
}

export const NovelDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [novel, setNovel] = useState<NovelDetail | null>(null);
  const [chapters, setChapters] = useState<ChapterOutline[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastReadChapter, setLastReadChapter] = useState<number | null>(null);
  const [inMyList, setInMyList] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      fetchNovelDetail(slug);
      loadSavedProgress(slug);
    }
  }, [slug]);

  const fetchNovelDetail = async (novelSlug: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/novels/${novelSlug}`);
      const data = await res.json();
      if (data.success && data.novel) {
        setNovel(data.novel);
        setChapters(data.chapters || []);
      }
    } catch (err) {
      console.error('Error fetching novel detail:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadSavedProgress = (novelSlug: string) => {
    try {
      const saved = localStorage.getItem(`reading_progress_${novelSlug}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.chapterIndex) {
          setLastReadChapter(parsed.chapterIndex);
        }
      }
      const myList = JSON.parse(localStorage.getItem('dramaxoxo_my_novel_list') || '[]');
      if (myList.includes(novelSlug)) {
        setInMyList(true);
      }
    } catch (e) {}
  };

  const toggleMyList = () => {
    if (!slug) return;
    try {
      let list = JSON.parse(localStorage.getItem('dramaxoxo_my_novel_list') || '[]');
      if (inMyList) {
        list = list.filter((s: string) => s !== slug);
        setInMyList(false);
      } else {
        list.push(slug);
        setInMyList(true);
      }
      localStorage.setItem('dramaxoxo_my_novel_list', JSON.stringify(list));
    } catch (e) {}
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07070C] flex items-center justify-center text-slate-400">
        <div className="text-center space-y-3">
          <BookOpen className="w-8 h-8 text-rose-500 animate-bounce mx-auto" />
          <p className="text-xs font-bold">Chargement du roman...</p>
        </div>
      </div>
    );
  }

  if (!novel) {
    return (
      <div className="min-h-screen bg-[#07070C] flex flex-col items-center justify-center p-6 text-center text-slate-400 space-y-4">
        <p className="text-base font-bold text-white">Roman introuvable.</p>
        <Link to="/novels" className="text-xs bg-rose-600 text-white font-bold px-4 py-2 rounded-xl">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07070C] text-slate-100 pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-[#0A0A12]/95 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/novels')}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-bold transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'ht' ? 'Katalòg' : (language === 'en' ? 'Catalog' : 'Catalogue')}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMyList}
            className={`p-2 rounded-full border transition text-xs ${
              inMyList
                ? 'bg-rose-600/20 text-rose-400 border-rose-500/40'
                : 'bg-[#161626] text-slate-400 hover:text-white border-white/10'
            }`}
            title="Ajouter aux favoris"
          >
            <Bookmark className={`w-4 h-4 ${inMyList ? 'fill-rose-400' : ''}`} />
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: novel.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('✓ Lien copié !');
              }
            }}
            className="p-2 rounded-full bg-[#161626] text-slate-400 hover:text-white border border-white/10 transition text-xs"
            title="Partager"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Book Hero Info */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1A0F24] via-[#11111E] to-[#07070C] px-4 sm:px-8 pt-6 pb-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={novel.coverUrl}
            alt={novel.title}
            className="w-36 sm:w-48 aspect-[9/14] object-cover rounded-2xl shadow-2xl border-2 border-white/10 flex-shrink-0"
          />

          <div className="flex-1 text-center sm:text-left space-y-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="bg-rose-600/20 text-rose-400 border border-rose-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                {novel.genre}
              </span>
              {novel.tags?.map((t, idx) => (
                <span key={idx} className="bg-white/5 text-slate-300 text-[10px] px-2 py-0.5 rounded-full">
                  #{t}
                </span>
              ))}
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-white leading-tight">
              {novel.title}
            </h1>

            <p className="text-xs text-purple-300 font-bold">
              {language === 'ht' ? 'Otè :' : (language === 'en' ? 'Author:' : 'Auteur :')}{' '}
              <span className="text-white">{novel.authorName}</span>
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 py-1">
              <div className="flex items-center gap-1 text-amber-400 font-black">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{novel.rating}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{chapters.length} chapitres</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>{novel.viewsCount.toLocaleString()} lectures</span>
              </div>
            </div>

            {/* Read Call To Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/novels/${novel.slug}/read/${lastReadChapter || 1}`}
                className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-black text-xs px-8 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>
                  {lastReadChapter
                    ? (language === 'ht' ? `Kontinye Chapit ${lastReadChapter}` : (language === 'en' ? `Continue Ch. ${lastReadChapter}` : `Reprendre au Chapitre ${lastReadChapter}`))
                    : (language === 'ht' ? 'Kòmanse Chapit 1 (Gratis)' : (language === 'en' ? 'Start Chapter 1 (Free)' : 'Commencer le Chapitre 1 (Gratuit)'))}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Synopsis & Chapter List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-6 space-y-8">
        {/* Synopsis */}
        <div className="bg-[#11111E] border border-white/5 rounded-3xl p-5 sm:p-6 space-y-2.5 shadow-lg">
          <h3 className="text-sm font-black text-white uppercase tracking-wider text-rose-400">
            {language === 'ht' ? 'Rezime Istwa a' : (language === 'en' ? 'Story Synopsis' : 'Synopsis')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            {novel.synopsis}
          </p>
        </div>

        {/* Chapters Directory */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>{language === 'ht' ? 'Lis Chapit yo' : (language === 'en' ? 'Table of Contents' : 'Sommaire des Chapitres')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-semibold">{chapters.length} chapitres</span>
          </div>

          <div className="bg-[#11111E] border border-white/5 rounded-3xl overflow-hidden divide-y divide-white/5 shadow-xl">
            {chapters.map((chap) => (
              <Link
                key={chap.id}
                to={`/novels/${novel.slug}/read/${chap.chapterIndex}`}
                className="p-4 flex items-center justify-between hover:bg-[#18182B] transition group text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-[#1A1A2B] text-slate-400 group-hover:text-rose-400 font-mono font-bold flex items-center justify-center flex-shrink-0">
                    {chap.chapterIndex}
                  </span>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-rose-400 transition">
                      {chap.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      ~{chap.wordCount} mots
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {chap.isPaid ? (
                    <span className="bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>{chap.coinPrice} pièces</span>
                    </span>
                  ) : (
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Unlock className="w-3 h-3" />
                      <span>{language === 'ht' ? 'Gratis' : (language === 'en' ? 'Free' : 'Gratuit')}</span>
                    </span>
                  )}
                  <span className="text-slate-500 font-bold">›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NovelDetailPage;
