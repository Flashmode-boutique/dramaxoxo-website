import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Film } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useTranslation } from '../../i18n/LanguageContext';
import { LanguageSelector } from '../ui/LanguageSelector';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const legalLinks = [
    { label: t.footer.links.privacy, path: '/privacy' },
    { label: t.footer.links.terms, path: '/terms' },
    { label: t.footer.links.creatorAgreement, path: '/creator-agreement' },
    { label: t.footer.links.contentGuidelines, path: '/content-guidelines' },
    { label: t.footer.links.copyright, path: '/copyright' },
    { label: t.footer.links.support, path: '/support' },
    { label: t.footer.links.deleteAccount, path: '/delete-account' },
  ];

  return (
    <footer className="bg-brand-surface border-t border-brand-border/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-red to-rose-400 p-[1.5px] shadow-red-glow">
                <div className="w-full h-full bg-brand-bg rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-base text-brand-red tracking-tighter">XO</span>
                </div>
              </div>
              <span className="font-black text-xl tracking-wider text-white">
                DRAMA <span className="text-brand-red">XOXO</span>
              </span>
            </Link>
            
            <p className="text-base font-medium text-brand-textPrimary italic">
              {t.footer.tagline}
            </p>
            
            <p className="text-sm text-brand-textSecondary max-w-md leading-relaxed">
              {t.footer.description}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <LanguageSelector variant="footer" />
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-textPrimary font-bold mb-4 flex items-center space-x-2">
              <Film className="w-4 h-4 text-brand-red" />
              <span>{t.footer.platformTitle}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-brand-textSecondary hover:text-white transition-colors">
                  {t.footer.links.home}
                </Link>
              </li>
              <li>
                <a href="/#discover" className="text-brand-textSecondary hover:text-white transition-colors">
                  {t.footer.links.discover}
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-brand-textSecondary hover:text-white transition-colors">
                  {t.footer.links.howItWorks}
                </a>
              </li>
              <li>
                <a href="/#creators" className="text-brand-textSecondary hover:text-white transition-colors">
                  {t.footer.links.creators}
                </a>
              </li>
              <li>
                <Link to="/support" className="text-brand-textSecondary hover:text-white transition-colors">
                  {t.footer.links.support}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-textPrimary font-bold mb-4 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>{t.footer.legalTitle}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-brand-textSecondary hover:text-brand-red transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-textMuted gap-4">
          <p>© {currentYear} {siteConfig.brandName}. {t.footer.allRightsReserved}</p>
          
          <p className="flex items-center space-x-1">
            <span>{t.footer.craftedWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red inline ml-1" />
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] bg-brand-bg px-2.5 py-1 rounded border border-brand-border text-brand-textMuted">
              {t.footer.version}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
