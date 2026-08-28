import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Smartphone, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';
import { LanguageSelector } from '../ui/LanguageSelector';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.discover, path: '/#discover', isAnchor: true },
    { label: t.nav.creators, path: '/#creators', isAnchor: true },
    { label: t.nav.support, path: '/support' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 border-b border-brand-border/60 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group focus-visible:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-red to-rose-400 p-[1.5px] shadow-red-glow transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-brand-bg rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-brand-red tracking-tighter">XO</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white group-hover:text-white/90">
                DRAMA <span className="text-brand-red">XOXO</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-brand-textSecondary uppercase font-medium -mt-1">
                Mini-Séries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleAnchorClick(e, link.path)}
                className={`text-sm font-medium transition-colors hover:text-brand-red relative py-1 ${
                  location.pathname === link.path && !link.isAnchor
                    ? 'text-brand-red font-semibold'
                    : 'text-brand-textSecondary'
                }`}
              >
                {link.label}
                {location.pathname === link.path && !link.isAnchor && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full shadow-red-glow" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side: Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="nav" />

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-card/80 border border-brand-border text-xs font-semibold text-brand-gold">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>{t.nav.comingSoonBadge}</span>
            </div>
            
            <a
              href="#app-preview"
              onClick={(e) => handleAnchorClick(e, '/#app-preview')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-brand-red/30 hover:scale-105"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.nav.comingSoonBtn}</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSelector variant="compact" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-brand-surface text-brand-textSecondary hover:text-white border border-brand-border focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-brand-bg/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 border-t border-brand-border animate-fadeIn">
          <div className="space-y-4 pt-2">
            <p className="text-xs uppercase tracking-widest text-brand-textMuted font-bold px-3">
              {t.nav.navigationLabel}
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => {
                  handleAnchorClick(e, link.path);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-brand-card/60 hover:bg-brand-card text-base font-semibold text-white transition-colors border border-brand-border/40"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-textMuted" />
              </Link>
            ))}

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-brand-textMuted font-bold px-3 mb-2">
                {t.nav.creatorInfoLabel}
              </p>
              <Link
                to="/creator-agreement"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-brand-surface text-sm font-medium text-brand-textSecondary hover:text-white transition-colors border border-brand-border/40"
              >
                <span>{t.nav.creatorAgreement}</span>
                <ChevronRight className="w-4 h-4 text-brand-textMuted" />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-brand-border/60 space-y-3">
            <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-center">
              <p className="text-xs text-brand-gold font-semibold mb-1 flex items-center justify-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Drama Xoxo Mobile App</span>
              </p>
              <p className="text-xs text-brand-textMuted">
                {t.hero.modalDesc}
              </p>
            </div>
            
            <p className="text-[11px] text-center text-brand-textMuted">
              © {new Date().getFullYear()} {siteConfig.brandName}. {t.footer.allRightsReserved}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
