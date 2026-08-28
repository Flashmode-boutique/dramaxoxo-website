import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-textPrimary relative overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-hero-glow opacity-60" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Navbar />

      <main className="flex-1 z-10 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};
