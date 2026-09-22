import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, List, Lock, Unlock, ChevronLeft, ChevronRight, Moon, Sun, BookOpen, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ChapterData {
  id: string;
  chapterIndex: number;
  title: string;
  content: string;
  wordCount: number;
  isPaid: boolean;
  coinPrice: number;
  locked?: boolean;
  message?: string;
}

interface NovelInfo {
  id: string;
  title: string;
  slug: string;
  authorName: string;
}

export const NovelReaderPage: React.FC = () => {
  const { slug, chapterId } = useParams<{ slug: string; chapterId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [novel, setNovel] = useState<NovelInfo | null>(null);
  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [purchasing, setPurchasing] = useState<boolean>(false);
  const [userCoins, setUserCoins] = useState<number>(195); // Default loaded from profile

  // Reader Settings
  const [theme, setTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<number>(17); // px
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('serif');
  const [lineHeight, setLineHeight] = useState<'normal' | 'relaxed'>('relaxed');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [allChapters, setAllChapters] = useState<{ id: string; chapterIndex: number; title: string; isPaid: boolean }[]>([]);

  useEffect(() => {
    // Load persisted reader preferences
    try {
      const savedTheme = localStorage.getItem('dramaxoxo_reader_theme') as any;
      if (savedTheme) setTheme(savedTheme);
      const savedSize = localStorage.getItem('dramaxoxo_reader_size');
      if (savedSize) setFontSize(parseInt(savedSize, 10));
      const savedFont = localStorage.getItem('dramaxoxo_reader_font') as any;
      if (savedFont) setFontFamily(savedFont);
      const savedCoins = localStorage.getItem('dramaxoxo_user_coins');
      if (savedCoins) setUserCoins(parseInt(savedCoins, 10));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (slug && chapterId) {
      fetchChapter(slug, chapterId);
      fetchNovelOutline(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, chapterId]);

  const fetchChapter = async (novelSlug: string, chap: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/novels/${novelSlug}/chapters/${chap}`);
      const data = await res.json();
      if (data.success && data.chapter) {
        setNovel(data.novel);
        setChapter(data.chapter);

        // Save reading progress
        localStorage.setItem(`reading_progress_${novelSlug}`, JSON.stringify({
          chapterIndex: data.chapter.chapterIndex,
          chapterId: data.chapter.id,
          updatedAt: Date.now(),
        }));

        // Background sync to server
        fetch('/api/reading-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            novelId: data.novel.id,
            chapterId: data.chapter.id,
            chapterIndex: data.chapter.chapterIndex,
            scrollPosition: 0,
          }),
        }).catch(() => {});
      }
    } catch (err) {
      console.error('Error fetching chapter:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchNovelOutline = async (novelSlug: string) => {
    try {
      const res = await fetch(`/api/novels/${novelSlug}`);
      const data = await res.json();
      if (data.success && data.chapters) {
        setAllChapters(data.chapters);
      }
    } catch (e) {}
  };

  const handlePurchaseChapter = async () => {
    if (!chapter || purchasing) return;
    setPurchasing(true);
    try {
      const res = await fetch(`/api/chapters/${chapter.id}/purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': localStorage.getItem('dramaxoxo_user_email') || 'spectateur@dramaxoxo.com',
        },
        body: JSON.stringify({ paymentMethod: 'coins', coinsSpent: chapter.coinPrice }),
      });
      const data = await res.json();
      if (data.success && data.unlocked) {
        // Deduct coins locally
        const newBalance = Math.max(0, userCoins - (chapter.coinPrice || 15));
        setUserCoins(newBalance);
        localStorage.setItem('dramaxoxo_user_coins', newBalance.toString());

        // Refresh chapter content from server
        if (slug) fetchChapter(slug, chapter.chapterIndex.toString());
      } else {
        alert(data.error || 'Erreur lors du déblocage.');
      }
    } catch (err: any) {
      alert('Erreur réseau lors de la transaction : ' + err.message);
    } finally {
      setPurchasing(false);
    }
  };

  const saveThemePref = (t: 'dark' | 'sepia' | 'light') => {
    setTheme(t);
    localStorage.setItem('dramaxoxo_reader_theme', t);
  };

  const saveSizePref = (delta: number) => {
    const newSize = Math.max(13, Math.min(26, fontSize + delta));
    setFontSize(newSize);
    localStorage.setItem('dramaxoxo_reader_size', newSize.toString());
  };

  const saveFontPref = (f: 'sans' | 'serif') => {
    setFontFamily(f);
    localStorage.setItem('dramaxoxo_reader_font', f);
  };

  // Dynamic theme classes
  const themeStyles = {
    dark: 'bg-[#08080E] text-[#D8D8E8]',
    sepia: 'bg-[#F4ECE1] text-[#2C241B]',
    light: 'bg-[#FFFFFF] text-[#1E1E24]',
  };

  const themeHeaderStyles = {
    dark: 'bg-[#0E0E18]/95 border-white/10 text-white',
    sepia: 'bg-[#EAE0D3]/95 border-[#D0C2B0] text-[#2C241B]',
    light: 'bg-white/95 border-slate-200 text-slate-900',
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${themeStyles[theme]}`}>
        <div className="text-center space-y-3">
          <BookOpen className="w-8 h-8 text-rose-500 animate-pulse mx-auto" />
          <p className="text-xs font-bold">Chargement du chapitre...</p>
        </div>
      </div>
    );
  }

  if (!chapter || !novel) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4 ${themeStyles[theme]}`}>
        <p className="text-base font-bold">Chapitre introuvable.</p>
        <button onClick={() => navigate(`/novels/${slug}`)} className="text-xs bg-rose-600 text-white font-bold px-4 py-2 rounded-xl">
          Retour au sommaire
        </button>
      </div>
    );
  }

  const currentIdx = chapter.chapterIndex;
  const hasPrev = currentIdx > 1;
  const hasNext = allChapters.some(c => c.chapterIndex === currentIdx + 1);

  return (
    <div className={`min-h-screen ${themeStyles[theme]} transition-colors duration-200 flex flex-col justify-between`}>
      {/* Sticky Reader Header */}
      <div className={`sticky top-0 z-40 border-b backdrop-blur-md px-4 py-3 flex items-center justify-between ${themeHeaderStyles[theme]} shadow-sm`}>
        <div className="flex items-center gap-2 truncate flex-1 mr-2">
          <button
            onClick={() => navigate(`/novels/${novel.slug}`)}
            className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition flex-shrink-0"
            title="Retour au roman"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="truncate">
            <h1 className="text-xs font-bold truncate leading-tight">{novel.title}</h1>
            <p className="text-[10px] opacity-70 truncate">{chapter.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 transition text-xs flex items-center gap-1 font-bold"
            title="Sommaire"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 transition text-xs"
            title="Paramètres de lecture"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reader Settings Floating Drawer */}
      {showSettings && (
        <div className="fixed top-14 right-4 z-50 w-72 bg-[#161626] text-white border border-white/10 rounded-2xl p-4 shadow-2xl space-y-4 text-xs animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="font-bold text-xs uppercase tracking-wider text-rose-400">Réglages de Lecture</span>
            <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
          </div>

          {/* Theme Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 uppercase font-semibold">Thème</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => saveThemePref('dark')}
                className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition ${
                  theme === 'dark' ? 'bg-black text-rose-400 border-rose-500' : 'bg-[#0D0D18] text-slate-300 border-white/10'
                }`}
              >
                <span>🌙 Sombre</span>
              </button>
              <button
                onClick={() => saveThemePref('sepia')}
                className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition ${
                  theme === 'sepia' ? 'bg-[#F4ECE1] text-[#2C241B] border-amber-600' : 'bg-[#EAE0D3] text-[#2C241B] border-transparent'
                }`}
              >
                <span>📜 Sépia</span>
              </button>
              <button
                onClick={() => saveThemePref('light')}
                className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition ${
                  theme === 'light' ? 'bg-white text-slate-900 border-rose-500' : 'bg-slate-200 text-slate-800 border-transparent'
                }`}
              >
                <span>☀️ Clair</span>
              </button>
            </div>
          </div>

          {/* Font Size Selector */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase font-semibold">
              <span>Taille de Police</span>
              <span className="text-white font-mono">{fontSize}px</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => saveSizePref(-1)}
                className="flex-1 py-1.5 bg-[#202035] hover:bg-[#282845] rounded-xl text-xs font-bold transition"
              >
                A -
              </button>
              <button
                onClick={() => saveSizePref(1)}
                className="flex-1 py-1.5 bg-[#202035] hover:bg-[#282845] rounded-xl text-xs font-bold transition"
              >
                A +
              </button>
            </div>
          </div>

          {/* Typography Mode */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 uppercase font-semibold">Style d'Écriture</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => saveFontPref('serif')}
                className={`py-1.5 rounded-xl font-serif text-xs font-bold border transition ${
                  fontFamily === 'serif' ? 'bg-purple-900/40 text-purple-300 border-purple-500/50' : 'bg-[#202035] text-slate-300 border-transparent'
                }`}
              >
                Serif (Livre)
              </button>
              <button
                onClick={() => saveFontPref('sans')}
                className={`py-1.5 rounded-xl font-sans text-xs font-bold border transition ${
                  fontFamily === 'sans' ? 'bg-purple-900/40 text-purple-300 border-purple-500/50' : 'bg-[#202035] text-slate-300 border-transparent'
                }`}
              >
                Sans-Serif (Moderne)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapters Summary Modal / Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141424] text-white border border-white/10 rounded-3xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#18182C]">
              <div>
                <h3 className="font-bold text-sm text-white">Sommaire des Chapitres</h3>
                <p className="text-[10px] text-slate-400">{novel.title}</p>
              </div>
              <button onClick={() => setShowDrawer(false)} className="p-1 text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-white/5 p-2 text-xs">
              {allChapters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setShowDrawer(false);
                    navigate(`/novels/${novel.slug}/read/${c.chapterIndex}`);
                  }}
                  className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition ${
                    c.chapterIndex === currentIdx ? 'bg-rose-600/20 text-rose-300 border border-rose-500/30' : 'hover:bg-white/5 text-slate-200'
                  }`}
                >
                  <span className="font-medium truncate">
                    {c.chapterIndex}. {c.title}
                  </span>
                  {c.isPaid ? (
                    <span className="text-[10px] text-amber-400 font-bold flex items-center gap-1 flex-shrink-0">
                      <Lock className="w-3 h-3" /> 15🪙
                    </span>
                  ) : (
                    <span className="text-[10px] text-emerald-400 font-bold flex-shrink-0">
                      Gratuit
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Chapter Content Area */}
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-8 flex-1 w-full">
        {/* Chapter Title Header */}
        <div className="text-center mb-8 space-y-2 border-b border-black/10 dark:border-white/10 pb-6">
          <span className="text-[11px] uppercase tracking-widest font-black text-rose-500">
            {novel.title}
          </span>
          <h2 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
            {chapter.title}
          </h2>
          <p className="text-[11px] opacity-60">
            {language === 'ht' ? 'Otè :' : (language === 'en' ? 'By' : 'Par')} {novel.authorName} • ~{chapter.wordCount} mots
          </p>
        </div>

        {/* Text Body */}
        <article
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight === 'relaxed' ? 1.85 : 1.6,
          }}
          className={`${
            fontFamily === 'serif' ? 'font-serif' : 'font-sans'
          } space-y-5 text-justify tracking-normal`}
        >
          {chapter.content.split('\n\n').map((paragraph, index) => {
            if (!paragraph.trim()) return null;
            return (
              <p key={index} className="indent-6 sm:indent-8 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Server-Side Locked Paywall Card */}
        {chapter.locked && (
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-b from-purple-950/80 to-[#121222] border-2 border-purple-500/50 text-white shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-purple-600/30 text-purple-300 border border-purple-400/40 flex items-center justify-center text-2xl mx-auto shadow-lg">
              🔒
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-white">Chapitre Verrouillé</h3>
              <p className="text-xs text-purple-200 max-w-md mx-auto leading-relaxed">
                {chapter.message || "Ce chapitre fait partie de l'histoire exclusive. Débloquez-le instantanément pour poursuivre votre lecture."}
              </p>
            </div>

            <div className="bg-[#18182E] p-3 rounded-2xl border border-white/10 flex items-center justify-between max-w-xs mx-auto text-xs">
              <span className="text-slate-400">Prix du Chapitre :</span>
              <span className="text-amber-400 font-black flex items-center gap-1">
                <span>🪙</span> <span>{chapter.coinPrice || 15} pièces</span>
              </span>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300">
              <span>Votre solde :</span>
              <span className="text-amber-400 font-black">🪙 {userCoins} pièces</span>
            </div>

            <div className="max-w-xs mx-auto space-y-2">
              <button
                onClick={handlePurchaseChapter}
                disabled={purchasing}
                className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {purchasing ? (
                  <span>Validation serveur en cours...</span>
                ) : (
                  <>
                    <Unlock className="w-4 h-4" />
                    <span>Débloquer le Chapitre ({chapter.coinPrice || 15} 🪙)</span>
                  </>
                )}
              </button>

              <p className="text-[9px] text-purple-300/80">
                ✓ 70% des revenus sont directement reversés à l'auteur {novel.authorName} via le grand livre officiel.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Sticky Chapter Switcher */}
      <footer className={`sticky bottom-0 z-30 border-t backdrop-blur-md px-4 py-3 ${themeHeaderStyles[theme]} shadow-lg`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(`/novels/${novel.slug}/read/${currentIdx - 1}`)}
            disabled={!hasPrev}
            className="flex-1 py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition flex items-center justify-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{language === 'ht' ? 'Presedan' : (language === 'en' ? 'Previous' : 'Précédent')}</span>
          </button>

          <button
            onClick={() => setShowDrawer(true)}
            className="px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>{currentIdx} / {allChapters.length || currentIdx}</span>
          </button>

          <button
            onClick={() => navigate(`/novels/${novel.slug}/read/${currentIdx + 1}`)}
            disabled={!hasNext}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 text-white hover:from-rose-500 hover:to-purple-500 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition flex items-center justify-center gap-1 shadow"
          >
            <span>{language === 'ht' ? 'Swivan' : (language === 'en' ? 'Next' : 'Suivant')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
export default NovelReaderPage;
