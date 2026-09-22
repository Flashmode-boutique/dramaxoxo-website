import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PenTool, BookOpen, PlusCircle, Clock, CheckCircle2, XCircle, DollarSign, ShieldCheck, FileText, Send, Sparkles, Lock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AuthorStatusData {
  role: 'VIEWER' | 'CREATOR_PENDING' | 'APPROVED_CREATOR' | 'ADMIN';
  application?: {
    id: string;
    penName: string;
    contactEmail: string;
    bio: string;
    sampleTitle: string;
    sampleContent: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    reviewerNote?: string;
    createdAt: number;
    reviewedAt?: number;
  };
  isApproved: boolean;
}

export const AuthorStudioPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [authStatus, setAuthStatus] = useState<AuthorStatusData>({
    role: 'VIEWER',
    isApproved: false,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'novels' | 'write' | 'royalties'>('novels');

  // Application Form State
  const [penName, setPenName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('mariestanley@virtualsis.com');
  const [bio, setBio] = useState<string>('');
  const [sampleTitle, setSampleTitle] = useState<string>('');
  const [sampleContent, setSampleContent] = useState<string>('');
  const [submittingApp, setSubmittingApp] = useState<boolean>(false);

  // Author Studio Data
  const [myNovels, setMyNovels] = useState<any[]>([]);
  const [royaltiesData, setRoyaltiesData] = useState<any>(null);

  // New Novel Form State
  const [showNewNovelModal, setShowNewNovelModal] = useState<boolean>(false);
  const [newNovelTitle, setNewNovelTitle] = useState<string>('');
  const [newNovelGenre, setNewNovelGenre] = useState<string>('Romance & Vengeance');
  const [newNovelSynopsis, setNewNovelSynopsis] = useState<string>('');
  const [newNovelCover, setNewNovelCover] = useState<string>('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800');

  // New Chapter Form State
  const [selectedNovelId, setSelectedNovelId] = useState<string>('');
  const [newChapterTitle, setNewChapterTitle] = useState<string>('');
  const [newChapterContent, setNewChapterContent] = useState<string>('');
  const [newChapterIsPaid, setNewChapterIsPaid] = useState<boolean>(true);
  const [submittingChapter, setSubmittingChapter] = useState<boolean>(false);

  useEffect(() => {
    fetchAuthorStatus();
  }, []);

  const fetchAuthorStatus = async () => {
    setLoading(true);
    try {
      const email = localStorage.getItem('dramaxoxo_user_email') || 'mariestanley@virtualsis.com';
      const res = await fetch('/api/author/status', {
        headers: { 'X-User-Email': email },
      });
      const data = await res.json();
      if (data.success) {
        setAuthStatus(data);
        if (data.isApproved) {
          fetchAuthorNovels(email);
          fetchAuthorRoyalties(email);
        }
      }
    } catch (err) {
      console.error('Error fetching author status:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthorNovels = async (email: string) => {
    try {
      const res = await fetch('/api/author/novels', {
        headers: { 'X-User-Email': email },
      });
      const data = await res.json();
      if (data.success && data.novels) {
        setMyNovels(data.novels);
        if (data.novels.length > 0 && !selectedNovelId) {
          setSelectedNovelId(data.novels[0].id);
        }
      }
    } catch (err) {}
  };

  const fetchAuthorRoyalties = async (email: string) => {
    try {
      const res = await fetch('/api/author/royalties', {
        headers: { 'X-User-Email': email },
      });
      const data = await res.json();
      if (data.success) {
        setRoyaltiesData(data);
      }
    } catch (err) {}
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!penName || !contactEmail || !sampleContent) return;
    setSubmittingApp(true);
    try {
      const res = await fetch('/api/author/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': contactEmail,
        },
        body: JSON.stringify({
          penName,
          contactEmail,
          bio,
          sampleTitle: sampleTitle || 'Premier Écrit',
          sampleContent,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert('✓ ' + (data.message || 'Candidature envoyée avec succès !'));
        fetchAuthorStatus();
      } else {
        alert(data.error || 'Erreur lors de la soumission.');
      }
    } catch (err: any) {
      alert('Erreur réseau : ' + err.message);
    } finally {
      setSubmittingApp(false);
    }
  };

  const handleCreateNovel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNovelTitle || !newNovelSynopsis) return;
    try {
      const email = localStorage.getItem('dramaxoxo_user_email') || 'mariestanley@virtualsis.com';
      const res = await fetch('/api/author/novels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': email,
        },
        body: JSON.stringify({
          title: newNovelTitle,
          genre: newNovelGenre,
          synopsis: newNovelSynopsis,
          coverUrl: newNovelCover,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert('✓ Roman créé et soumis avec succès !');
        setShowNewNovelModal(false);
        setNewNovelTitle('');
        setNewNovelSynopsis('');
        fetchAuthorNovels(email);
      } else {
        alert(data.error || 'Erreur lors de la création du roman.');
      }
    } catch (err: any) {
      alert('Erreur réseau : ' + err.message);
    }
  };

  const handleSubmitChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNovelId || !newChapterTitle || !newChapterContent) return;
    setSubmittingChapter(true);
    try {
      const email = localStorage.getItem('dramaxoxo_user_email') || 'mariestanley@virtualsis.com';
      const res = await fetch(`/api/author/novels/${selectedNovelId}/chapters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': email,
        },
        body: JSON.stringify({
          title: newChapterTitle,
          content: newChapterContent,
          isPaid: newChapterIsPaid,
          coinPrice: newChapterIsPaid ? 15 : 0,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert('✓ Chapitre soumis à la modération administrateur !');
        setNewChapterTitle('');
        setNewChapterContent('');
        fetchAuthorNovels(email);
        setActiveTab('novels');
      } else {
        alert(data.error || 'Erreur lors de la soumission du chapitre.');
      }
    } catch (err: any) {
      alert('Erreur réseau : ' + err.message);
    } finally {
      setSubmittingChapter(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080810] text-slate-400 flex items-center justify-center">
        <PenTool className="w-8 h-8 text-purple-400 animate-bounce" />
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: NON-REGISTERED USER (APPLICATION FORM)
  // =========================================================================
  if (!authStatus.isApproved && authStatus.role === 'VIEWER' && !authStatus.application) {
    return (
      <div className="min-h-screen bg-[#07070C] text-slate-100 pb-24 px-4 sm:px-8 pt-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <Link to="/novels" className="text-slate-400 hover:text-white transition text-xs flex items-center gap-1 font-bold">
              <ArrowLeft className="w-4 h-4" /> <span>Retour aux Romans</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-purple-950/60 via-[#18182D] to-[#10101E] border border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl">
            <div className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-black px-3 py-1 rounded-full uppercase">
              ✍️ DRAMA XOXO CREATOR PROGRAM
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Devenez Auteur & Touchez jusqu'à 70% de Royalties
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Rejoignez les écrivains de DRAMA XOXO. Publiez vos romans par épisodes et monétisez chaque chapitre lu par notre communauté passionnée.
            </p>
          </div>

          <form onSubmit={handleSubmitApplication} className="bg-[#12121F] border border-white/5 rounded-3xl p-6 space-y-4 shadow-xl text-xs">
            <h3 className="text-sm font-black text-white uppercase tracking-wider text-rose-400">
              Formulaire de Candidature Auteur
            </h3>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Nom de Plume / Pseudonyme d'Auteur *</label>
              <input
                type="text"
                required
                value={penName}
                onChange={(e) => setPenName(e.target.value)}
                placeholder="Ex: Stanley M. Imbry, Clara Saint-Fleur..."
                className="w-full bg-[#1A1A2C] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Adresse E-mail de Contact *</label>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-[#1A1A2C] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Bio / Présentation de votre univers littéraire</label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Parlez-nous de vos genres préférés (Romance, Thriller, Fantasy, Caraïbes...)..."
                className="w-full bg-[#1A1A2C] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Titre de votre projet ou extrait</label>
              <input
                type="text"
                value={sampleTitle}
                onChange={(e) => setSampleTitle(e.target.value)}
                placeholder="Ex: L'Héritière Inattendue - Extrait Chapitre 1"
                className="w-full bg-[#1A1A2C] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Extrait littéraire / Exemple de texte (200 à 500 mots) *</label>
              <textarea
                rows={6}
                required
                value={sampleContent}
                onChange={(e) => setSampleContent(e.target.value)}
                placeholder="Collez ici les premières lignes de votre histoire pour que notre comité de lecture puisse évaluer votre style..."
                className="w-full bg-[#1A1A2C] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500 font-serif"
              />
            </div>

            <button
              type="submit"
              disabled={submittingApp}
              className="w-full bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{submittingApp ? 'Envoi en cours...' : 'Envoyer ma Candidature au Comité de Lecture'}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: PENDING / REJECTED STATUS SCREEN
  // =========================================================================
  if (!authStatus.isApproved && (authStatus.role === 'CREATOR_PENDING' || authStatus.application?.status === 'PENDING')) {
    const app = authStatus.application;
    return (
      <div className="min-h-screen bg-[#07070C] text-slate-100 pb-24 px-4 sm:px-8 pt-6">
        <div className="max-w-xl mx-auto space-y-6 text-center">
          <Link to="/novels" className="text-slate-400 hover:text-white transition text-xs flex items-center justify-center gap-1 font-bold">
            <ArrowLeft className="w-4 h-4" /> <span>Retour aux Romans</span>
          </Link>

          <div className="bg-[#121222] border border-amber-500/30 rounded-3xl p-8 space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center text-3xl mx-auto animate-pulse">
              ⏳
            </div>

            <div className="space-y-1">
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full uppercase">
                CANDIDATURE EN COURS D'EXAMEN
              </span>
              <h2 className="text-xl font-black text-white pt-2">
                Votre dossier est entre les mains du Comité de Lecture
              </h2>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Merci <strong>{app?.penName}</strong>. Notre équipe éditoriale examine actuellement votre extrait littéraire. Vous recevrez une réponse sous 24 à 48 heures ouvrées.
            </p>

            <div className="bg-[#19192E] p-4 rounded-2xl border border-white/5 text-left text-xs space-y-2">
              <p className="text-slate-400"><strong>Nom de Plume :</strong> {app?.penName}</p>
              <p className="text-slate-400"><strong>E-mail :</strong> {app?.contactEmail}</p>
              <p className="text-slate-400"><strong>Extrait :</strong> « {app?.sampleTitle} »</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: APPROVED AUTHOR STUDIO
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#07070C] text-slate-100 pb-24 px-4 sm:px-8 pt-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Studio Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-purple-600/20 text-purple-300 border border-purple-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                👑 AUTEUR APPROUVÉ
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Studio Auteur & Écriture
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNewNovelModal(true)}
              className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-lg transition flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Créer un Roman</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
          <button
            onClick={() => setActiveTab('novels')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'novels' ? 'bg-[#1C1C30] text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Mes Romans ({myNovels.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('write')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'write' ? 'bg-[#1C1C30] text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Rédiger un Chapitre</span>
          </button>
          <button
            onClick={() => setActiveTab('royalties')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'royalties' ? 'bg-[#1C1C30] text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Grand Livre des Royalties (70%)</span>
          </button>
        </div>

        {/* TAB 1: NOVELS LIST */}
        {activeTab === 'novels' && (
          <div className="space-y-4">
            {myNovels.length === 0 ? (
              <div className="bg-[#121220] border border-white/5 rounded-3xl p-12 text-center text-slate-400 space-y-3">
                <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-white">Vous n'avez pas encore créé de roman.</h3>
                <p className="text-xs max-w-sm mx-auto">Cliquez sur « Créer un Roman » pour configurer votre premier livre et soumettre vos chapitres.</p>
                <button
                  onClick={() => setShowNewNovelModal(true)}
                  className="bg-purple-600 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  + Créer mon premier Roman
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myNovels.map((n) => (
                  <div key={n.id} className="bg-[#121222] border border-white/5 rounded-2xl p-4 flex gap-4">
                    <img src={n.coverUrl} alt={n.title} className="w-20 aspect-[9/14] object-cover rounded-xl border border-white/10 flex-shrink-0" />
                    <div className="flex-1 space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 font-bold px-2 py-0.5 rounded border border-purple-500/30">
                          {n.genre}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          n.status === 'PUBLISHED' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {n.status === 'PUBLISHED' ? '✓ PUBLIÉ' : '⏳ SOUMIS'}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-sm leading-tight">{n.title}</h3>
                      <p className="text-[10px] text-slate-400 line-clamp-2">{n.synopsis}</p>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-300">
                        <span>{n.chapters?.length || 0} chapitres</span>
                        <button
                          onClick={() => {
                            setSelectedNovelId(n.id);
                            setActiveTab('write');
                          }}
                          className="text-purple-400 hover:text-purple-300 font-bold"
                        >
                          + Ajouter chapitre ›
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: WRITE / SUBMIT CHAPTER */}
        {activeTab === 'write' && (
          <form onSubmit={handleSubmitChapter} className="bg-[#121222] border border-white/5 rounded-3xl p-6 space-y-4 text-xs shadow-xl">
            <h3 className="text-sm font-black text-white uppercase tracking-wider text-purple-400">
              Rédiger et Soumettre un Chapitre
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Sélectionner le Roman *</label>
                <select
                  value={selectedNovelId}
                  onChange={(e) => setSelectedNovelId(e.target.value)}
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                >
                  {myNovels.map((n) => (
                    <option key={n.id} value={n.id}>{n.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Titre du Chapitre *</label>
                <input
                  type="text"
                  required
                  value={newChapterTitle}
                  onChange={(e) => setNewChapterTitle(e.target.value)}
                  placeholder="Ex: Chapitre 4 : La Vérité Éclate"
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#18182D] rounded-xl border border-white/5">
              <input
                type="checkbox"
                id="isPaidCheck"
                checked={newChapterIsPaid}
                onChange={(e) => setNewChapterIsPaid(e.target.checked)}
                className="w-4 h-4 accent-rose-600 rounded"
              />
              <label htmlFor="isPaidCheck" className="text-slate-200 cursor-pointer flex-1">
                <strong>Chapitre Payant (15 pièces)</strong> — Les lecteurs devront débloquer ce chapitre, générant vos royalties de 70%.
              </label>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-300 font-bold">Contenu du Chapitre *</label>
                <span className="text-[10px] text-slate-400">
                  {newChapterContent.trim().split(/\s+/).filter(Boolean).length} mots
                </span>
              </div>
              <textarea
                rows={12}
                required
                value={newChapterContent}
                onChange={(e) => setNewChapterContent(e.target.value)}
                placeholder="Rédigez le texte de votre chapitre ici..."
                className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-500 font-serif leading-relaxed text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submittingChapter}
              className="w-full bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{submittingChapter ? 'Soumission en cours...' : 'Soumettre le Chapitre à la Modération'}</span>
            </button>
          </form>
        )}

        {/* TAB 3: ROYALTIES VERIFIABLE LEDGER */}
        {activeTab === 'royalties' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#121222] border border-white/5 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Total Brut Généré</span>
                <h3 className="text-2xl font-black text-white">{royaltiesData?.summary?.totalEarnedFormatted || '$0.00'}</h3>
                <p className="text-[10px] text-purple-300">Toutes ventes confondues</p>
              </div>

              <div className="bg-[#121222] border border-emerald-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold uppercase">Solde Cumulé Auteur (70%)</span>
                <h3 className="text-2xl font-black text-emerald-400">{royaltiesData?.summary?.accruedFormatted || '$0.00'}</h3>
                <p className="text-[10px] text-slate-400">Prêt pour virement Stripe/Banque</p>
              </div>

              <div className="bg-[#121222] border border-white/5 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Taux Contractuel</span>
                <h3 className="text-2xl font-black text-purple-400">70.0%</h3>
                <p className="text-[10px] text-slate-400">Part Auteur Certifiée</p>
              </div>
            </div>

            {/* Verifiable Ledger Lines */}
            <div className="bg-[#121222] border border-white/5 rounded-3xl overflow-hidden shadow-xl space-y-2 p-5 text-xs">
              <h3 className="font-bold text-white text-sm mb-3">Écritures du Grand Livre Certifié (Ledger)</h3>
              {!royaltiesData?.entries || royaltiesData.entries.length === 0 ? (
                <p className="text-slate-400 py-6 text-center">Aucune transaction enregistrée pour le moment.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-slate-300">
                    <thead className="border-b border-white/10 text-slate-400 text-[10px] uppercase">
                      <tr>
                        <th className="py-2">ID Transaction</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Brut</th>
                        <th className="py-2">Part Auteur (70%)</th>
                        <th className="py-2">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {royaltiesData.entries.map((r: any) => (
                        <tr key={r.id}>
                          <td className="py-2.5 font-mono text-[10px] text-purple-300">{r.id}</td>
                          <td className="py-2.5 text-slate-400">{new Date(r.createdAt).toLocaleDateString()}</td>
                          <td className="py-2.5">${(r.grossAmountCents / 100).toFixed(2)}</td>
                          <td className="py-2.5 text-emerald-400 font-bold">${(r.authorCutCents / 100).toFixed(2)}</td>
                          <td className="py-2.5">
                            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[9px] font-bold">
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MODAL: CREATE NEW NOVEL */}
        {showNewNovelModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleCreateNovel} className="bg-[#141424] text-white border border-white/10 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl animate-in zoom-in-95 text-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h3 className="font-bold text-sm text-white">Créer un Nouveau Roman</h3>
                <button type="button" onClick={() => setShowNewNovelModal(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Titre du Roman *</label>
                <input
                  type="text"
                  required
                  value={newNovelTitle}
                  onChange={(e) => setNewNovelTitle(e.target.value)}
                  placeholder="Ex: Le Cœur sous les Flammes"
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Genre *</label>
                <select
                  value={newNovelGenre}
                  onChange={(e) => setNewNovelGenre(e.target.value)}
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                >
                  <option value="Romance & Vengeance">Romance & Vengeance</option>
                  <option value="Dark Romance & Thriller">Dark Romance & Thriller</option>
                  <option value="Enemies to Lovers">Enemies to Lovers</option>
                  <option value="Héritage Haïtien">Héritage Haïtien</option>
                  <option value="Mystère & Drame">Mystère & Drame</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">URL de la Couverture (9:16) *</label>
                <input
                  type="text"
                  value={newNovelCover}
                  onChange={(e) => setNewNovelCover(e.target.value)}
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Synopsis de l'Histoire *</label>
                <textarea
                  rows={4}
                  required
                  value={newNovelSynopsis}
                  onChange={(e) => setNewNovelSynopsis(e.target.value)}
                  placeholder="Racontez le pitch de votre histoire..."
                  className="w-full bg-[#1A1A2E] text-white border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewNovelModal(false)}
                  className="flex-1 py-3 rounded-xl bg-[#202035] hover:bg-[#282845] font-bold text-slate-300 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-rose-600 font-bold text-white shadow-lg transition"
                >
                  Créer & Enregistrer
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default AuthorStudioPage;
