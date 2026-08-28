import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext';
import { Language } from '../../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'nav' | 'footer' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'nav' }) => {
  const { language, setLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center space-x-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none ${
          variant === 'footer'
            ? 'px-3 py-1.5 bg-brand-card hover:bg-brand-cardHover border border-brand-border text-xs text-brand-textPrimary'
            : 'px-3 py-1.5 bg-brand-surface/80 hover:bg-brand-card border border-brand-border text-xs text-brand-textSecondary hover:text-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
        <span className="text-xs">{currentLang.flag}</span>
        <span className="font-semibold text-xs tracking-wide">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 text-brand-textMuted ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 w-48 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl p-1.5 z-50 animate-fadeIn backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-brand-textMuted tracking-wider border-b border-brand-border/60 mb-1">
            Langue / Language / Lang
          </div>
          {availableLanguages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleSelect(item.code)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                language === item.code
                  ? 'bg-brand-red/15 text-brand-red font-bold'
                  : 'text-brand-textSecondary hover:text-white hover:bg-brand-card'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-base leading-none">{item.flag}</span>
                <span>{item.label}</span>
              </div>
              {language === item.code && <Check className="w-3.5 h-3.5 text-brand-red" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
