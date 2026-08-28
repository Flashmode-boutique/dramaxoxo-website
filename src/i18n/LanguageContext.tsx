import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationDictionary } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  availableLanguages: Array<{ code: Language; label: string; flag: string }>;
}

const availableLanguages: Array<{ code: Language; label: string; flag: string }> = [
  { code: 'fr', label: 'Français (Défaut)', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ht', label: 'Kreyòl Ayisyen', flag: '🇭🇹' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL param first
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      if (urlLang && (urlLang === 'fr' || urlLang === 'en' || urlLang === 'ht')) {
        return urlLang;
      }
      // Check stored preference
      const saved = localStorage.getItem('dramaxoxo_lang') as Language;
      if (saved && (saved === 'fr' || saved === 'en' || saved === 'ht')) {
        return saved;
      }
    }
    // Default is French (le site doit être en français par défaut)
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dramaxoxo_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || translations.fr,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
