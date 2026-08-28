import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-surface border border-brand-border flex items-center justify-center mx-auto text-brand-red shadow-red-glow">
          <Film className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black text-white">404</h1>
          <h2 className="text-xl font-bold text-white">Épisode ou Page Introuvable</h2>
          <p className="text-sm text-brand-textSecondary">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          to="/"
          leftIcon={<Home className="w-4 h-4" />}
          className="font-bold"
        >
          Retour à l'Accueil
        </Button>
      </div>
    </div>
  );
};
