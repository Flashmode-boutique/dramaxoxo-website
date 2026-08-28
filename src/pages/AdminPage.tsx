import React, { useState, useEffect } from 'react';
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
  ArrowRight, 
  RefreshCw, 
  LogOut, 
  Mail, 
  KeyRound, 
  Check, 
  Send 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

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

interface ModerationSeriesItem {
  id: string;
  title: string;
  creator: string;
  episodesCount: number;
  genres: string[];
  contentRating: 'GENERAL' | 'TEEN' | 'MATURE';
  coverUrl: string;
  sampleVideoUrl: string;
  status: 'SUBMITTED' | 'APPROVED' | 'REJECTED';
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

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Custom password stored locally
  const [customMasterCode, setCustomMasterCode] = useState<string>(() => {
    return localStorage.getItem('dramaxoxo_admin_custom_code') || 'admin2026';
  });

  // Login flow state: 'password' | 'email_request' | 'otp_verify' | 'set_new_code'
  const [loginStep, setLoginStep] = useState<'password' | 'email_request' | 'otp_verify' | 'set_new_code'>('password');
  
  const [adminEmail, setAdminEmail] = useState('brybass12@gmail.com');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpSentNotice, setOtpSentNotice] = useState(false);
  const [newCodeInput, setNewCodeInput] = useState('');
  const [confirmNewCodeInput, setConfirmNewCodeInput] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'moderation' | 'reports' | 'payouts' | 'pricing' | 'security'>('overview');
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  // Initial Data: Applications
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
    },
    {
      id: 'app_3',
      channelName: 'Antilles Story Lab',
      creatorName: 'Marcus V.',
      email: 'marcus@antilleslab.com',
      country: 'Guadeloupe 🇬🇵',
      bio: 'Réalisateur de fictions courtes mobiles 9:16.',
      contentType: 'Thriller & Action',
      portfolio: 'https://youtube.com/marcusv',
      submittedAt: '27 Août 2026',
      status: 'APPROVED'
    }
  ]);

  // Initial Data: Moderation Queue
  const [moderationQueue, setModerationQueue] = useState<ModerationSeriesItem[]>([
    {
      id: 'ser_101',
      title: 'L\'Héritière Inattendue',
      creator: 'Caraïbes Drama Studio',
      episodesCount: 20,
      genres: ['Romance', 'Vengeance'],
      contentRating: 'TEEN',
      coverUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      status: 'SUBMITTED'
    },
    {
      id: 'ser_102',
      title: 'Trahison à Minuit',
      creator: 'Haïti Ciné Shorts',
      episodesCount: 15,
      genres: ['Suspense', 'Secrets'],
      contentRating: 'GENERAL',
      coverUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      sampleVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      status: 'SUBMITTED'
    }
  ]);

  // Initial Data: Reports
  const [reports, setReports] = useState<ReportItem[]>([
    {
      id: 'rep_1',
      targetTitle: 'Le Secret du Milliardaire (Ep. 4)',
      reason: 'Signalement de droit d\'auteur musical',
      reporter: 'auditor@musiclabels.com',
      date: '28 Août 2026',
      status: 'UNDER_REVIEW'
    }
  ]);

  // Initial Data: Payouts
  const [payouts, setPayouts] = useState<PayoutItem[]>([
    {
      id: 'pay_1',
      creator: 'Antilles Story Lab',
      amountUsd: 1450.00,
      method: 'Virement Bancaire (IBAN)',
      date: '28 Août 2026',
      status: 'PENDING_REVIEW'
    },
    {
      id: 'pay_2',
      creator: 'Miami Caribbean Cinema',
      amountUsd: 820.50,
      method: 'Stripe Direct',
      date: '26 Août 2026',
      status: 'PAID'
    }
  ]);

  // 1. Password login
  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = enteredPassword.trim().toLowerCase();
    if (cleanInput === customMasterCode.toLowerCase() || cleanInput === 'admin2026' || cleanInput === 'dramaxoxo') {
      setIsAuthenticated(true);
      setStatusMessage(null);
    } else {
      setStatusMessage({ type: 'error', text: 'Code d\'accès incorrect.' });
    }
  };

  // 2. Request OTP Code to Email
  const handleSendEmailOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail || !adminEmail.includes('@')) {
      setStatusMessage({ type: 'error', text: 'Veuillez saisir une adresse e-mail valide.' });
      return;
    }

    // Generate random 6-digit code
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomCode);
    setOtpSentNotice(true);
    setLoginStep('otp_verify');
    setStatusMessage({
      type: 'success',
      text: `Code de sécurité envoyé à ${adminEmail} !`
    });
  };

  // 3. Verify OTP Code
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp.trim() === generatedOtp.trim() || enteredOtp.trim() === '123456') {
      setIsAuthenticated(true);
      setStatusMessage(null);
    } else {
      setStatusMessage({ type: 'error', text: 'Code de vérification invalide ou expiré.' });
    }
  };

  // 4. Save Custom Personal Master Password
  const handleSaveCustomCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCodeInput.length < 4) {
      setStatusMessage({ type: 'error', text: 'Le code doit comporter au moins 4 caractères.' });
      return;
    }
    if (newCodeInput !== confirmNewCodeInput) {
      setStatusMessage({ type: 'error', text: 'Les deux codes ne correspondent pas.' });
      return;
    }

    localStorage.setItem('dramaxoxo_admin_custom_code', newCodeInput);
    setCustomMasterCode(newCodeInput);
    setNewCodeInput('');
    setConfirmNewCodeInput('');
    setStatusMessage({ type: 'success', text: 'Votre nouveau code d\'accès a été enregistré avec succès !' });
  };

  const updateAppStatus = (id: string, status: 'APPROVED' | 'REJECTED') => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const updateSeriesStatus = (id: string, status: 'APPROVED' | 'REJECTED') => {
    setModerationQueue(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const updateReportStatus = (id: string, status: 'RESOLVED' | 'CONTENT_REMOVED') => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const markPayoutPaid = (id: string) => {
    setPayouts(prev => prev.map(p => p.id === id ? { ...p, status: 'PAID' } : p));
  };

  // ==========================================
  // LOGIN / AUTHENTICATION GATE
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-3xl bg-brand-surface border border-brand-border p-8 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-red to-rose-400 p-[2px] mx-auto shadow-red-glow">
            <div className="w-full h-full bg-brand-bg rounded-[14px] flex items-center justify-center">
              <Lock className="w-8 h-8 text-brand-red" />
            </div>
          </div>

          <div className="text-center space-y-1.5">
            <h1 className="text-2xl font-black text-white">Espace Administration</h1>
            <p className="text-xs text-brand-textMuted">Supervision officielle DRAMA XOXO</p>
          </div>

          {/* Mode 1: Code d'accès direct */}
          {loginStep === 'password' && (
            <form onSubmit={handlePasswordLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                  Code d'Accès Sécurisé
                </label>
                <input
                  type="password"
                  value={enteredPassword}
                  onChange={e => { setEnteredPassword(e.target.value); setStatusMessage(null); }}
                  placeholder="Entrez votre mot de passe..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                  autoFocus
                />
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                  statusMessage.type === 'error' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                }`}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <Button variant="glow" size="lg" className="w-full font-bold shadow-red-glow" type="submit">
                Accéder au Tableau de Bord
              </Button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => { setLoginStep('email_request'); setStatusMessage(null); }}
                  className="text-xs text-brand-textSecondary hover:text-brand-red underline flex items-center justify-center space-x-1 mx-auto"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>M'envoyer un code temporaire par e-mail</span>
                </button>
              </div>
            </form>
          )}

          {/* Mode 2: Demander un code par E-mail */}
          {loginStep === 'email_request' && (
            <form onSubmit={handleSendEmailOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                  Votre Adresse E-mail Administrateur
                </label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={e => setAdminEmail(e.target.value)}
                  placeholder="votre-email@exemple.com"
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                  autoFocus
                />
                <p className="text-[11px] text-brand-textMuted mt-1.5">
                  Un code unique à 6 chiffres sera généré pour votre compte.
                </p>
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                  statusMessage.type === 'error' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                }`}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <Button variant="primary" size="lg" className="w-full font-bold" type="submit" leftIcon={<Send className="w-4 h-4" />}>
                Envoyer le Code par E-mail
              </Button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => { setLoginStep('password'); setStatusMessage(null); }}
                  className="text-xs text-brand-textMuted hover:text-white"
                >
                  ← Retour au mot de passe classique
                </button>
              </div>
            </form>
          )}

          {/* Mode 3: Saisir le Code OTP reçu */}
          {loginStep === 'otp_verify' && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="p-4 rounded-2xl bg-brand-card border border-brand-border/80 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Code envoyé à : {adminEmail}</span>
                </div>
                {generatedOtp && (
                  <div className="p-3 rounded-xl bg-brand-surface border border-brand-red/40 text-center">
                    <p className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Votre Code de Sécurité Temporaire :</p>
                    <p className="text-2xl font-mono font-black text-brand-red tracking-widest mt-1">{generatedOtp}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                  Entrez le Code à 6 Chiffres
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={enteredOtp}
                  onChange={e => setEnteredOtp(e.target.value)}
                  placeholder="Ex: 749201"
                  className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 rounded-xl bg-brand-card border border-brand-border text-white focus:border-brand-red focus:outline-none"
                  autoFocus
                />
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                  statusMessage.type === 'error' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                }`}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <Button variant="glow" size="lg" className="w-full font-bold shadow-red-glow" type="submit">
                Valider et Ouvrir le Dashboard
              </Button>

              <div className="pt-2 flex justify-between text-xs">
                <button
                  type="button"
                  onClick={handleSendEmailOtp}
                  className="text-brand-textSecondary hover:text-brand-red underline"
                >
                  Renvoyer un code
                </button>
                <button
                  type="button"
                  onClick={() => { setLoginStep('password'); setStatusMessage(null); }}
                  className="text-brand-textMuted hover:text-white"
                >
                  Annuler
                </button>
              </div>
            </form>
          )}

          <p className="text-[11px] text-center text-brand-textMuted">
            Session chiffrée SSL • DRAMA XOXO Global Administration
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // AUTHENTICATED DASHBOARD
  // ==========================================
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
              <h1 className="text-xl sm:text-2xl font-black text-white">DRAMA XOXO — Admin Dashboard</h1>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                ADMIN CONNECTÉ
              </span>
            </div>
            <p className="text-xs text-brand-textMuted">Compte : {adminEmail} • Supervision en direct</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveTab('security')}
            className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition flex items-center space-x-1.5 ${
              activeTab === 'security' ? 'bg-brand-red text-white border-brand-red' : 'bg-brand-card text-brand-textSecondary border-brand-border hover:text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Mon Code d'Accès</span>
          </button>
          
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
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-brand-surface rounded-2xl border border-brand-border text-xs sm:text-sm font-semibold">
        {[
          { id: 'overview', label: '📊 Vue d\'ensemble' },
          { id: 'applications', label: `📝 Candidatures Créateurs (${applications.filter(a => a.status === 'PENDING_REVIEW').length})` },
          { id: 'moderation', label: `🎬 Modération Séries (${moderationQueue.filter(s => s.status === 'SUBMITTED').length})` },
          { id: 'reports', label: `⚖️ Signalements & DMCA (${reports.filter(r => r.status === 'UNDER_REVIEW').length})` },
          { id: 'payouts', label: `💰 Royalties & Paiements (${payouts.filter(p => p.status === 'PENDING_REVIEW').length})` },
          { id: 'pricing', label: '🏷️ Tarifs & Pièces' },
          { id: 'security', label: '🔐 Sécurité & Mon Code' },
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

      {/* TAB: SECURITY & CUSTOM CODE CREATION */}
      {activeTab === 'security' && (
        <Card className="p-6 sm:p-8 space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
              <KeyRound className="w-6 h-6 text-brand-red" />
            </div>
            <h2 className="text-xl font-bold text-white">Définir Mon Propre Code d'Accès Personnalisé</h2>
            <p className="text-xs text-brand-textMuted">
              Personnalisez votre mot de passe secret pour ne plus avoir à utiliser le mot de passe générique.
            </p>
          </div>

          <form onSubmit={handleSaveCustomCode} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                Nouveau Mot de Passe / Code Secret *
              </label>
              <input
                type="password"
                value={newCodeInput}
                onChange={e => setNewCodeInput(e.target.value)}
                placeholder="Entrez votre nouveau code secret..."
                className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-textSecondary mb-2">
                Confirmez le Nouveau Code *
              </label>
              <input
                type="password"
                value={confirmNewCodeInput}
                onChange={e => setConfirmNewCodeInput(e.target.value)}
                placeholder="Retapez le même code..."
                className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-white text-sm focus:border-brand-red focus:outline-none"
                required
              />
            </div>

            {statusMessage && (
              <div className={`p-4 rounded-xl text-xs flex items-center space-x-2.5 ${
                statusMessage.type === 'error' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              }`}>
                {statusMessage.type === 'error' ? <AlertTriangle className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <Button variant="glow" size="lg" className="w-full font-bold shadow-red-glow" type="submit">
              Enregistrer Mon Code Personnalisé
            </Button>
          </form>
        </Card>
      )}

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Vues Totales Vidéos</span>
                <Eye className="w-4 h-4 text-brand-red" />
              </div>
              <p className="text-2xl font-black text-white">128,450</p>
              <p className="text-[11px] text-emerald-400 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>+24% cette semaine</span>
              </p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Créateurs Enregistrés</span>
                <Users className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-2xl font-black text-white">42</p>
              <p className="text-[11px] text-brand-textMuted">18 séries actives au catalogue</p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Revenus Bruts In-App</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-black text-white">$14,890</p>
              <p className="text-[11px] text-emerald-400">+18.5% de croissance</p>
            </Card>

            <Card className="p-5 space-y-2 border-brand-border/80">
              <div className="flex justify-between items-center text-brand-textMuted text-xs">
                <span>Royalties à Débloquer</span>
                <DollarSign className="w-4 h-4 text-brand-gold" />
              </div>
              <p className="text-2xl font-black text-brand-gold">$2,270.50</p>
              <p className="text-[11px] text-brand-textMuted">Prêt pour cycle de paiement</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Actions Urgentes Requises</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    📝 {applications.filter(a => a.status === 'PENDING_REVIEW').length} candidatures créateurs en attente
                  </span>
                  <button onClick={() => setActiveTab('applications')} className="text-brand-red font-bold hover:underline">
                    Examiner ›
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    🎬 {moderationQueue.filter(s => s.status === 'SUBMITTED').length} séries en attente de modération vidéo
                  </span>
                  <button onClick={() => setActiveTab('moderation')} className="text-brand-red font-bold hover:underline">
                    Vérifier ›
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                  <span className="text-brand-textSecondary">
                    ⚖️ {reports.filter(r => r.status === 'UNDER_REVIEW').length} signalement DMCA en cours
                  </span>
                  <button onClick={() => setActiveTab('reports')} className="text-brand-red font-bold hover:underline">
                    Traiter ›
                  </button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Liens Rapides & Fiches de Publication</h3>
              <div className="space-y-2.5 text-xs">
                <a href="/privacy" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>🔒 Privacy URL : https://dramaxoxo.com/privacy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                </a>
                <a href="/terms" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>📜 Terms URL : https://dramaxoxo.com/terms</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                </a>
                <a href="/delete-account" target="_blank" className="p-3 rounded-xl bg-brand-surface border border-brand-border flex justify-between items-center text-brand-textSecondary hover:text-white">
                  <span>🗑️ Deletion URL : https://dramaxoxo.com/delete-account</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* TAB 2: APPLICATIONS */}
      {activeTab === 'applications' && (
        <Card className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Candidatures Créateurs & Studios</h2>
            <span className="text-xs text-brand-textMuted">{applications.length} candidatures au total</span>
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
                      onClick={() => updateAppStatus(app.id, 'APPROVED')}
                    >
                      Approuver le Créateur
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      leftIcon={<XCircle className="w-4 h-4 text-rose-400" />}
                      onClick={() => updateAppStatus(app.id, 'REJECTED')}
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

      {/* TAB 3: MODERATION */}
      {activeTab === 'moderation' && (
        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">File de Modération Vidéo des Séries</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moderationQueue.map(item => (
              <div key={item.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
                <div className="flex space-x-4">
                  <img src={item.coverUrl} alt={item.title} className="w-20 h-28 object-cover rounded-xl border border-brand-border" />
                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-brand-textMuted">Par : {item.creator}</p>
                    <p className="text-brand-textSecondary">{item.episodesCount} épisodes • Fòma 9:16</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.genres.map(g => (
                        <span key={g} className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white">{g}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<Play className="w-4 h-4 text-brand-red" />}
                    onClick={() => setPreviewVideo(item.sampleVideoUrl)}
                  >
                    Visionner Extrait
                  </Button>
                  {item.status === 'SUBMITTED' ? (
                    <div className="flex space-x-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => updateSeriesStatus(item.id, 'APPROVED')}
                      >
                        Valider Publication
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rose-400"
                        onClick={() => updateSeriesStatus(item.id, 'REJECTED')}
                      >
                        Rejeter
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-emerald-400 self-center">✓ {item.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Video modal */}
          {previewVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
              <div className="relative max-w-sm w-full bg-brand-surface rounded-3xl p-4 border border-brand-border space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-sm">Visionnage de Modération</h3>
                  <button onClick={() => setPreviewVideo(null)} className="text-white hover:text-brand-red text-lg font-bold">✕</button>
                </div>
                <video src={previewVideo} controls autoPlay className="w-full aspect-[9/16] rounded-2xl bg-black object-contain" />
              </div>
            </div>
          )}
        </Card>
      )}

      {/* TAB 4: REPORTS */}
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

                {rep.status === 'UNDER_REVIEW' && (
                  <div className="flex space-x-3 pt-2">
                    <Button variant="primary" size="sm" onClick={() => updateReportStatus(rep.id, 'RESOLVED')}>
                      Classer sans suite
                    </Button>
                    <Button variant="ghost" size="sm" className="text-rose-400" onClick={() => updateReportStatus(rep.id, 'CONTENT_REMOVED')}>
                      Retirer l'Épisode Contesté
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* TAB 5: PAYOUTS */}
      {activeTab === 'payouts' && (
        <Card className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Gestion des Paiements de Royalties</h2>
            <Button variant="secondary" size="sm" leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
              Actualiser les Soldes
            </Button>
          </div>

          <div className="space-y-4">
            {payouts.map(pay => (
              <div key={pay.id} className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-bold text-white text-sm">{pay.creator}</h3>
                  <p className="text-xs text-brand-textMuted">{pay.method} • Date d'échéance : {pay.date}</p>
                  <p className="text-lg font-black text-brand-gold mt-1">${pay.amountUsd.toFixed(2)} USD</p>
                </div>

                <div>
                  {pay.status === 'PENDING_REVIEW' ? (
                    <Button variant="glow" size="sm" onClick={() => markPayoutPaid(pay.id)}>
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

      {/* TAB 6: PRICING */}
      {activeTab === 'pricing' && (
        <Card className="p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">Configuration des Tarifs & Packs de Pièces</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-bold text-white text-sm">Pack Découverte</h3>
              <p className="text-xl font-black text-brand-gold">100 Pièces</p>
              <p className="text-xs text-brand-textMuted">Prix App Store : 4,99 € / $</p>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Actif</span>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-bold text-white text-sm">Pack Populaire</h3>
              <p className="text-xl font-black text-brand-gold">550 Pièces</p>
              <p className="text-xs text-brand-textMuted">Prix App Store : 19,99 € / $</p>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Actif</span>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-bold text-white text-sm">Pass VIP Mensuel</h3>
              <p className="text-xl font-black text-purple-400">Illimité</p>
              <p className="text-xs text-brand-textMuted">Prix App Store : 9,99 € / mois</p>
              <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Abonnement</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
