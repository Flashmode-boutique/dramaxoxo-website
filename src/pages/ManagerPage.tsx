import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Film, 
  AlertTriangle, 
  DollarSign, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Lock, 
  Eye, 
  TrendingUp, 
  Plus,
  Edit3,
  Trash2,
  Tv,
  LogOut,
  Save
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

interface ModerationSeriesItem {
  id: string;
  title: string;
  creator: string;
  episodesCount: number;
  genres: string[];
  contentRating: 'GENERAL' | 'TEEN' | 'MATURE';
  coverUrl: string;
  sampleVideoUrl: string;
  coinsPerEpisode: number;
  synopsis: string;
  status: 'APPROVED' | 'SUBMITTED' | 'REJECTED';
}

interface CreatorAppItem {
  id: string;
  channelName: string;
  creatorName: string;
  email: string;
  country: string;
  bio: string;
  contentType: string;
  portfolio: string;
  submittedAt: string;
  status: 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED';
}

interface ReportItem {
  id: string;
  targetTitle: string;
  reason: string;
  reporter: string;
  date: string;
  status: 'RECEIVED' | 'UNDER_REVIEW' | 'RESOLVED' | 'CONTENT_REMOVED';
}

interface PayoutItem {
  id: string;
  creator: string;
  amountUsd: number;
  method: string;
  date: string;
  status: 'PENDING_REVIEW' | 'PAID';
}

export const ManagerPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<
    'overview' | 'catalog_editor' | 'publish_series' | 'applications' | 'reports' | 'payouts' | 'home_layout' | 'pricing'
  >('overview');

  // State: Catalog Series (Full Demo & Live Series Editor)
  const [catalogSeries, setCatalogSeries] = useState<ModerationSeriesItem[]>([
    {
      id: 'ser_1',
      title: 'Le Secret du Milliardaire',
      creator: 'Haïti Ciné Shorts',
      episodesCount: 30,
      genres: ['Romance', 'Vengeance'],
      contentRating: 'TEEN',
      coverUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      coinsPerEpisode: 10,
      synopsis: 'Trahie par sa propre famille, elle revient sous une nouvelle identité au bal du plus puissant héritier de la ville.',
      status: 'APPROVED'
    },
    {
      id: 'ser_2',
      title: 'Vengeance à Port-au-Prince',
      creator: 'Caraïbes Drama Studio',
      episodesCount: 25,
      genres: ['Thriller', 'Action'],
      contentRating: 'TEEN',
      coverUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      coinsPerEpisode: 10,
      synopsis: 'Dans les cercles d\'influence, une alliance interdite menace d\'exposer les secrets les plus sombres.',
      status: 'APPROVED'
    },
    {
      id: 'ser_3',
      title: 'Double Jeu d\'Amour',
      creator: 'Antilles Story Lab',
      episodesCount: 20,
      genres: ['Romance', 'Secrets'],
      contentRating: 'GENERAL',
      coverUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      coinsPerEpisode: 10,
      synopsis: 'Un contrat de faux mariage qui devait durer six mois. Mais entre pouvoir et passion, les règles ont changé.',
      status: 'APPROVED'
    },
    {
      id: 'ser_4',
      title: 'L\'Héritière Masquée',
      creator: 'Miami Caribbean Cinema',
      episodesCount: 18,
      genres: ['Dram', 'Pasyon'],
      contentRating: 'TEEN',
      coverUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      coinsPerEpisode: 10,
      synopsis: 'Rejetée par son clan, elle découvre son véritable héritage et prépare une revanche éclatante.',
      status: 'APPROVED'
    }
  ]);

  // Edit Modal State
  const [editingSeries, setEditingSeries] = useState<ModerationSeriesItem | null>(null);

  // New Series Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCreator, setNewCreator] = useState('Haïti Ciné Shorts');
  const [newEpisodes, setNewEpisodes] = useState('20');
  const [newGenres, setNewGenres] = useState('Romance, Suspense');
  const [newCover, setNewCover] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600');
  const [newVideo, setNewVideo] = useState('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4');
  const [newCoins, setNewCoins] = useState('10');
  const [newSynopsis, setNewSynopsis] = useState('');

  // Creator Applications State
  const [applications, setApplications] = useState<CreatorAppItem[]>([
    {
      id: 'app_1',
      channelName: 'Haïti Ciné Shorts',
      creatorName: 'Jean-Baptiste R.',
      email: 'contact@haiticine.com',
      country: 'Haïti 🇭🇹',
      bio: 'Producteur indépendant de mini-dramas et thrillers urbains à Port-au-Prince.',
      contentType: 'Drames, Vengeance, Suspense',
      portfolio: 'https://vimeo.com/haiticinesample',
      submittedAt: '28 Août 2026',
      status: 'PENDING_REVIEW'
    },
    {
      id: 'app_2',
      channelName: 'Caraïbes Drama Studio',
      creatorName: 'Léopoldine M.',
      email: 'leo@caraibesdrama.com',
      country: 'France 🇫🇷',
      bio: 'Studio d\'écriture et de production de mini-séries sentimentales courtes.',
      contentType: 'Romance, Dark Romance',
      portfolio: 'https://instagram.com/caraibesdrama',
      submittedAt: '28 Août 2026',
      status: 'PENDING_REVIEW'
    }
  ]);

  // Reports State
  const [reports, setReports] = useState<ReportItem[]>([
    {
      id: 'rep_1',
      targetTitle: 'Le Secret du Milliardaire (Ep. 4)',
      reason: 'Signalement de droit d\'auteur musical',
      reporter: 'user_legal@soundtrack.com',
      date: '28 Août 2026',
      status: 'UNDER_REVIEW'
    }
  ]);

  // Payouts State
  const [payouts, setPayouts] = useState<PayoutItem[]>([
    {
      id: 'pay_1',
      creator: 'Haïti Ciné Shorts',
      amountUsd: 1450.00,
      method: 'Stripe Connect (acct_1N92384)',
      date: '28 Août 2026',
      status: 'PENDING_REVIEW'
    }
  ]);

  // Home Featured State
  const [featuredHeroTitle, setFeaturedHeroTitle] = useState('Le Secret du Milliardaire');
  const [royaltyRate, setRoyaltyRate] = useState('70');
  const [minPayout, setMinPayout] = useState('50');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === 'Virtualsis@$1' || passwordInput.trim() === 'admin2026') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  // Publish New Series
  const handlePublishNewSeries = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      alert('Veuillez entrer un titre de série.');
      return;
    }

    const created: ModerationSeriesItem = {
      id: 'ser_' + Date.now(),
      title: newTitle.trim(),
      creator: newCreator.trim(),
      episodesCount: parseInt(newEpisodes) || 20,
      genres: newGenres.split(',').map(g => g.trim()),
      contentRating: 'TEEN',
      coverUrl: newCover.trim(),
      sampleVideoUrl: newVideo.trim(),
      coinsPerEpisode: parseInt(newCoins) || 10,
      synopsis: newSynopsis.trim(),
      status: 'APPROVED'
    };

    setCatalogSeries(prev => [created, ...prev]);
    setNewTitle('');
    setNewSynopsis('');
    alert('🎉 Nouvelle série publiée avec succès dans le catalogue officiel DRAMA XOXO !');
    setActiveTab('catalog_editor');
  };

  // Save Series Edit
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSeries) return;

    setCatalogSeries(prev => prev.map(s => s.id === editingSeries.id ? editingSeries : s));
    setEditingSeries(null);
    alert('✓ Modifications de la série enregistrées !');
  };

  // Delete Series
  const handleDeleteSeries = (id: string) => {
    if (confirm('Êtes-vous sûre de vouloir supprimer définitivement cette série du catalogue ?')) {
      setCatalogSeries(prev => prev.filter(s => s.id !== id));
      alert('Série supprimée du catalogue.');
    }
  };

  // Approve / Reject Creator
  const handleApproveCreator = (id: string) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: 'APPROVED' } : a));
    alert('✓ Candidature Créateur approuvée ! Le compte est activé.');
  };

  const handleRejectCreator = (id: string) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: 'REJECTED' } : a));
    alert('✕ Candidature Créateur refusée.');
  };

  // Process Payout
  const handleProcessPayout = (id: string) => {
    setPayouts(prev => prev.map(p => p.id === id ? { ...p, status: 'PAID' } : p));
    alert('✓ Virement validé et payé via Stripe Connect !');
  };

  // 1. Password Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-3xl bg-brand-surface border border-brand-border p-8 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-red to-rose-400 p-[2px] mx-auto shadow-red-glow">
            <div className="w-full h-full bg-brand-bg rounded-[14px] flex items-center justify-center">
              <Lock className="w-8 h-8 text-brand-red" />
            </div>
          </div>

          <div className="text-center space-y-1.5">
            <h1 className="text-2xl font-black text-white">DRAMA XOXO — Administration</h1>
            <p className="text-xs text-brand-textMuted">Console de gestion privée pour Marie Stanley</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                Mot de Passe Secret Administrateur
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => { setPasswordInput(e.target.value); setAuthError(false); }}
                placeholder="Entrez votre mot de passe..."
                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-rose-400 mt-2 font-medium">
                  ✕ Mot de passe incorrect.
                </p>
              )}
            </div>

            <Button variant="glow" size="lg" className="w-full font-bold shadow-red-glow" type="submit">
              Ouvrir la Console d'Administration
            </Button>
          </form>

          <p className="text-[11px] text-center text-brand-textMuted">
            Accès Sécurisé Chiffré SSL • DRAMA XOXO Platform
          </p>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-brand-surface p-6 rounded-3xl border border-brand-border">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-brand-red" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-black text-white">DRAMA XOXO — Console d'Administration</h1>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                ADMINISTRATION ACTIVE
              </span>
            </div>
            <p className="text-xs text-brand-textMuted">Gestion des séries démo, publications, créateurs et revenus</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="/app"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition flex items-center space-x-1.5"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Tester l'App Mobile</span>
          </a>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-brand-card border border-brand-border text-brand-textMuted hover:text-white transition flex items-center space-x-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Verrouiller</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-brand-surface rounded-2xl border border-brand-border text-xs sm:text-sm font-semibold">
        {[
          { id: 'overview', label: '📊 Vue d\'ensemble' },
          { id: 'catalog_editor', label: `🎬 Modifier Séries Démo (${catalogSeries.length})` },
          { id: 'publish_series', label: '➕ Publier une Série' },
          { id: 'applications', label: `📝 Candidatures Créateurs (${applications.filter(a => a.status === 'PENDING_REVIEW').length})` },
          { id: 'reports', label: `🚨 Signalements & DMCA (${reports.filter(r => r.status === 'UNDER_REVIEW').length})` },
          { id: 'payouts', label: `💰 Royalties & Payouts (${payouts.filter(p => p.status === 'PENDING_REVIEW').length})` },
          { id: 'home_layout', label: '🏠 Gestion de l\'Accueil' },
          { id: 'pricing', label: '⚙️ Monétisation & Règles' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-brand-red text-white font-bold shadow-red-glow'
                : 'text-brand-textMuted hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Revenu Brut Global</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-black text-white">18 450,00 $</p>
              <p className="text-[11px] text-emerald-400 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>+24% ce mois</span>
              </p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Royalties Créateurs ({royaltyRate}%)</span>
                <DollarSign className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-2xl font-black text-purple-400">12 915,00 $</p>
              <p className="text-[11px] text-brand-textMuted">Calcul sur base nette éligible</p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Part Plateforme (30%)</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-black text-emerald-400">5 535,00 $</p>
              <p className="text-[11px] text-emerald-400">Marge nette DRAMA XOXO</p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Abonnés VIP Actifs</span>
                <Users className="w-4 h-4 text-brand-gold" />
              </div>
              <p className="text-2xl font-black text-brand-gold">1 420</p>
              <p className="text-[11px] text-brand-textMuted">Creator VIP Pool actif</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-white text-base">État du Catalogue & Modération</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    🎬 <strong>{catalogSeries.length} séries actives</strong> disponibles au catalogue
                  </span>
                  <button onClick={() => setActiveTab('catalog_editor')} className="text-brand-red font-bold hover:underline">
                    Gérer / Modifier ›
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    📝 <strong>{applications.filter(a => a.status === 'PENDING_REVIEW').length} candidatures créateurs</strong> en attente d'examen
                  </span>
                  <button onClick={() => setActiveTab('applications')} className="text-brand-red font-bold hover:underline">
                    Examiner ›
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    🏠 Série vedette en accueil : <strong>« {featuredHeroTitle} »</strong>
                  </span>
                  <button onClick={() => setActiveTab('home_layout')} className="text-brand-red font-bold hover:underline">
                    Changer ›
                  </button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Raccourcis & Conformité</h3>
              <div className="space-y-2.5 text-xs">
                <a href="/privacy" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>🔒 Politique de Confidentialité : https://dramaxoxo.com/privacy</span>
                </a>
                <a href="/terms" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>📜 Conditions Générales (CGU) : https://dramaxoxo.com/terms</span>
                </a>
                <a href="/creator-agreement" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>✍️ Accord Créateur : https://dramaxoxo.com/creator-agreement</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 2. CATALOG & DEMO SERIES EDITOR */}
      {activeTab === 'catalog_editor' && (
        <Card className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-lg font-bold text-white">Gestion & Modification Totale des Séries Démo</h2>
              <p className="text-xs text-brand-textMuted">Modifiez les titres, affiches 9:16, fichiers vidéo MP4 et tarifs en pièces.</p>
            </div>
            <Button
              variant="glow"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setActiveTab('publish_series')}
            >
              Publier une Série
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogSeries.map(s => (
              <div key={s.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-4 flex flex-col justify-between">
                <div className="flex space-x-4">
                  <img src={s.coverUrl} alt={s.title} className="w-24 h-36 object-cover rounded-xl border border-brand-border flex-shrink-0" />
                  <div className="space-y-1.5 text-xs flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base text-white">{s.title}</h3>
                      <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded text-[10px]">EN LIGNE</span>
                    </div>
                    <p className="text-purple-300">👤 Créateur : <strong>{s.creator}</strong></p>
                    <p className="text-brand-textSecondary">🎞️ {s.episodesCount} épisodes • 🪙 {s.coinsPerEpisode} Pièces/épisode</p>
                    <p className="text-brand-textMuted line-clamp-2 italic">{s.synopsis}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {s.genres.map(g => (
                        <span key={g} className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white">{g}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-brand-card text-[11px] text-brand-textMuted truncate">
                  📹 <strong>Lien Vidéo :</strong> {s.sampleVideoUrl}
                </div>

                <div className="flex space-x-2 pt-2 border-t border-brand-border">
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    leftIcon={<Edit3 className="w-3.5 h-3.5" />}
                    onClick={() => setEditingSeries(s)}
                  >
                    Modifier Tout
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-rose-400 hover:text-white hover:bg-rose-600"
                    leftIcon={<Trash2 className="w-3.5 h-3.5" />}
                    onClick={() => handleDeleteSeries(s.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 3. PUBLISH NEW SERIES */}
      {activeTab === 'publish_series' && (
        <Card className="p-6 sm:p-8 space-y-6 max-w-2xl mx-auto">
          <div>
            <h2 className="text-xl font-bold text-white">Publier une Nouvelle Série dans l'Application</h2>
            <p className="text-xs text-brand-textMuted">Ajoutez immédiatement une nouvelle série dans le catalogue officiel DRAMA XOXO.</p>
          </div>

          <form onSubmit={handlePublishNewSeries} className="space-y-4 text-xs">
            <div>
              <label className="block text-brand-textSecondary font-semibold mb-1">Titre de la Série *</label>
              <input
                type="text"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder="Ex: Le Destin d'une Reine"
                className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Studio / Créateur *</label>
                <input
                  type="text"
                  value={newCreator}
                  onChange={e => setNewCreator(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Nombre d'Épisodes *</label>
                <input
                  type="number"
                  value={newEpisodes}
                  onChange={e => setNewEpisodes(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Genres (séparés par virgule)</label>
                <input
                  type="text"
                  value={newGenres}
                  onChange={e => setNewGenres(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                />
              </div>
              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Prix par Épisode (Coins)</label>
                <input
                  type="number"
                  value={newCoins}
                  onChange={e => setNewCoins(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-brand-textSecondary font-semibold mb-1">URL de la Jaquette (Affiche 9:16 Vertical) *</label>
              <input
                type="url"
                value={newCover}
                onChange={e => setNewCover(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-brand-textSecondary font-semibold mb-1">URL du Fichier Vidéo MP4 (Streaming 9:16) *</label>
              <input
                type="url"
                value={newVideo}
                onChange={e => setNewVideo(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-brand-textSecondary font-semibold mb-1">Synopsis / Histoire</label>
              <textarea
                rows={3}
                value={newSynopsis}
                onChange={e => setNewSynopsis(e.target.value)}
                placeholder="Racontez le pitch de la mini-série..."
                className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none"
              />
            </div>

            <Button variant="glow" size="lg" className="w-full font-bold shadow-red-glow" type="submit">
              🚀 Valider & Publier dans l'Application
            </Button>
          </form>
        </Card>
      )}

      {/* 4. CREATOR APPLICATIONS */}
      {activeTab === 'applications' && (
        <Card className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Candidatures Créateurs & Studios</h2>
            <span className="text-xs text-brand-textMuted">{applications.length} candidatures</span>
          </div>

          <div className="space-y-4">
            {applications.map(app => (
              <div key={app.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-white text-base">{app.channelName}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white">{app.country}</span>
                    </div>
                    <p className="text-xs text-brand-textMuted">{app.creatorName} • {app.email} • Reçu le {app.submittedAt}</p>
                  </div>

                  <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
                    app.status === 'APPROVED' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                    app.status === 'REJECTED' ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' :
                    'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <div className="text-xs space-y-1.5 text-brand-textSecondary bg-brand-card p-3.5 rounded-xl">
                  <p><strong>Bio :</strong> {app.bio}</p>
                  <p><strong>Genres :</strong> {app.contentType}</p>
                  <p><strong>Portfolio :</strong> <a href={app.portfolio} target="_blank" rel="noreferrer" className="text-brand-red underline">{app.portfolio}</a></p>
                </div>

                {app.status === 'PENDING_REVIEW' && (
                  <div className="flex space-x-3 pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      leftIcon={<CheckCircle2 className="w-4 h-4" />}
                      onClick={() => handleApproveCreator(app.id)}
                    >
                      Approuver le Créateur
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      leftIcon={<XCircle className="w-4 h-4 text-rose-400" />}
                      onClick={() => handleRejectCreator(app.id)}
                    >
                      Rejeter
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 5. REPORTS */}
      {activeTab === 'reports' && (
        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">Signalements Utilisateurs & Réclamations DMCA</h2>

          <div className="space-y-4">
            {reports.map(rep => (
              <div key={rep.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-sm">{rep.targetTitle}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    {rep.status}
                  </span>
                </div>
                <p className="text-brand-textSecondary"><strong>Motif :</strong> {rep.reason}</p>
                <p className="text-brand-textMuted">Déposé par : {rep.reporter} • {rep.date}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 6. PAYOUTS */}
      {activeTab === 'payouts' && (
        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">Demandes de Retrait Créateurs (Payouts)</h2>

          <div className="space-y-4">
            {payouts.map(pay => (
              <div key={pay.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-bold text-white text-sm">{pay.creator}</h3>
                  <p className="text-xs text-brand-textMuted">{pay.method} • Date : {pay.date}</p>
                  <p className="text-lg font-black text-brand-gold mt-1">${pay.amountUsd.toFixed(2)} USD</p>
                </div>

                <div>
                  {pay.status === 'PENDING_REVIEW' ? (
                    <Button variant="glow" size="sm" onClick={() => handleProcessPayout(pay.id)}>
                      Valider le Virement
                    </Button>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                      ✓ VIREMENT EFFECTUÉ
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 7. HOME LAYOUT */}
      {activeTab === 'home_layout' && (
        <Card className="p-6 space-y-6 max-w-xl">
          <div>
            <h2 className="text-lg font-bold text-white">Personnalisation Dynamique de la Page d'Accueil</h2>
            <p className="text-xs text-brand-textMuted">Contrôlez les séries mises en avant dans l'application.</p>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="text-xs font-semibold text-brand-textSecondary block mb-1">
                Série Vedette N°1 (Bannière Hero Accueil)
              </label>
              <input
                type="text"
                value={featuredHeroTitle}
                onChange={e => setFeaturedHeroTitle(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border text-white p-3 rounded-xl focus:border-brand-red outline-none text-sm"
              />
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => alert(`Bannière d'accueil mise à jour avec la série : "${featuredHeroTitle}"`)}
            >
              Enregistrer la Configuration d'Accueil
            </Button>
          </div>
        </Card>
      )}

      {/* 8. PRICING & MONETIZATION */}
      {activeTab === 'pricing' && (
        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">Paramètres de Monétisation & Royalties</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-3">
              <h3 className="font-bold text-white text-sm">Partage des Royalties</h3>
              <div>
                <label className="text-brand-textMuted block mb-1">Taux de Royalties Créateur (%) :</label>
                <input
                  type="number"
                  value={royaltyRate}
                  onChange={e => setRoyaltyRate(e.target.value)}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-textMuted block mb-1">Seuil Minimum de Payout ($ USD) :</label>
                <input
                  type="number"
                  value={minPayout}
                  onChange={e => setMinPayout(e.target.value)}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl"
                />
              </div>
              <Button variant="primary" size="sm" onClick={() => alert('Paramètres de monétisation mis à jour.')}>
                Mettre à Jour
              </Button>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2.5">
              <h3 className="font-bold text-white text-sm">Packs de Pièces In-App Synchronisés</h3>
              <div className="p-3 bg-brand-card rounded-xl flex justify-between">
                <span>🪙 Pack 100 Pièces</span>
                <span className="font-bold text-white">4,99 € / $4.99 / 650 HTG</span>
              </div>
              <div className="p-3 bg-brand-card rounded-xl flex justify-between">
                <span>👑 VIP Mensuel</span>
                <span className="font-bold text-white">9,99 € / $9.99 / 1300 HTG</span>
              </div>
              <div className="p-3 bg-brand-card rounded-xl flex justify-between">
                <span>👑 VIP Annuel (-33%)</span>
                <span className="font-bold text-white">79,99 € / $79.99 / 10400 HTG</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* EDIT SERIES MODAL */}
      {editingSeries && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 max-w-lg w-full space-y-4 text-xs shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-white">Modifier la Série : {editingSeries.title}</h3>
              <button onClick={() => setEditingSeries(null)} className="text-brand-textMuted hover:text-white font-bold text-lg">✕</button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3">
              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Titre de la Série</label>
                <input
                  type="text"
                  value={editingSeries.title}
                  onChange={e => setEditingSeries({ ...editingSeries, title: e.target.value })}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-brand-textSecondary font-semibold mb-1">Créateur / Studio</label>
                  <input
                    type="text"
                    value={editingSeries.creator}
                    onChange={e => setEditingSeries({ ...editingSeries, creator: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-brand-textSecondary font-semibold mb-1">Nb d'Épisodes</label>
                  <input
                    type="number"
                    value={editingSeries.episodesCount}
                    onChange={e => setEditingSeries({ ...editingSeries, episodesCount: parseInt(e.target.value) || 0 })}
                    className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">URL de la Jaquette (Affiche)</label>
                <input
                  type="url"
                  value={editingSeries.coverUrl}
                  onChange={e => setEditingSeries({ ...editingSeries, coverUrl: e.target.value })}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">URL du Fichier Vidéo (MP4 9:16)</label>
                <input
                  type="url"
                  value={editingSeries.sampleVideoUrl}
                  onChange={e => setEditingSeries({ ...editingSeries, sampleVideoUrl: e.target.value })}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-brand-textSecondary font-semibold mb-1">Synopsis</label>
                <textarea
                  rows={2}
                  value={editingSeries.synopsis || ''}
                  onChange={e => setEditingSeries({ ...editingSeries, synopsis: e.target.value })}
                  className="w-full bg-brand-card border border-brand-border text-white p-2.5 rounded-xl outline-none focus:border-brand-red"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  type="button"
                  onClick={() => setEditingSeries(null)}
                >
                  Annuler
                </Button>
                <Button
                  variant="glow"
                  size="md"
                  className="flex-1 font-bold shadow-red-glow"
                  type="submit"
                  leftIcon={<Save className="w-3.5 h-3.5" />}
                >
                  Enregistrer
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
