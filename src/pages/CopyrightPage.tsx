import React, { useState } from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../../config/siteConfig';
import { ShieldCheck, Mail, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const CopyrightPage: React.FC = () => {
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  return (
    <LegalLayout
      title="Politique de Droit d'Auteur & Procédure DMCA"
      subtitle="Procédure formelle de notification pour la protection des œuvres originales et des droits de propriété intellectuelle."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          1. Respect de la Propriété Intellectuelle
        </h2>
        <p>
          <strong>{siteConfig.brandName}</strong> respecte les droits des créateurs, compositeurs, producteurs et ayants droit. Conformément aux lois en vigueur régissant la propriété littéraire et artistique (notamment le Digital Millennium Copyright Act - DMCA), nous répondons avec diligence aux notifications de violation présumée de droits d'auteur.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          2. Éléments Requis pour une Notification d'Infraction
        </h2>
        <p>
          Pour être juridiquement recevable, toute réclamation pour atteinte au droit d'auteur doit contenir l'ensemble des informations suivantes :
        </p>
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 text-xs sm:text-sm">
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">1</span>
            <span><strong>Identité du réclamant :</strong> Nom complet, organisation (le cas échéant), adresse postale, numéro de téléphone et adresse e-mail valide.</span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">2</span>
            <span><strong>Description de l'œuvre protégée :</strong> Identification précise de l'œuvre originale (film, série, bande sonore, photographie) dont vous détenez les droits.</span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">3</span>
            <span><strong>Localisation exacte du contenu présumé contrefaisant :</strong> Titre de la série, numéro d'épisode, horodatage ou URL exacte permettant d'identifier le contenu contesté.</span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">4</span>
            <span><strong>Déclaration de bonne foi :</strong> Une déclaration affirmant que vous estimez de bonne foi que l'utilisation contestée n'est pas autorisée par le titulaire du droit, son agent ou la loi.</span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">5</span>
            <span><strong>Déclaration sous peine de parjure :</strong> Une déclaration attestant sous serment que les informations fournies sont exactes et que vous êtes le titulaire du droit d'auteur ou habilité à agir en son nom.</span>
          </div>
          <div className="flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-card flex items-center justify-center font-bold text-brand-red text-xs border border-brand-border flex-shrink-0">6</span>
            <span><strong>Signature :</strong> Signature physique ou électronique du titulaire ou de son mandataire autorisé.</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          3. Contact pour les Réclamations
        </h2>
        {siteConfig.copyrightEmail ? (
          <div className="p-4 rounded-xl bg-brand-card border border-brand-border flex items-center space-x-3">
            <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
            <p className="text-sm">
              Envoyez votre notification complète à notre agent des droits d'auteur :{' '}
              <strong className="text-white">{siteConfig.copyrightEmail}</strong>
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-brand-card/60 border border-brand-border/60 flex items-start space-x-3 text-xs sm:text-sm text-brand-textMuted">
            <AlertCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
            <p>
              Les coordonnées directes de l'agent habilité pour les réclamations de droit d'auteur seront officiellement publiées avant le lancement commercial. En attendant, les requêtes peuvent être soumises via la <a href="/support" className="text-brand-red underline">page de support</a>.
            </p>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          4. Contre-Notification
        </h2>
        <p>
          Si un créateur estime que son contenu a été retiré par erreur ou à la suite d'une fausse identification, il a la possibilité de déposer une contre-notification écrite détaillant les motifs légitimes de rétablissement de son œuvre.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          5. Récidive d'Atteinte aux Droits
        </h2>
        <p>
          Drama Xoxo applique une politique stricte envers les comptes récidivistes. Tout compte faisant l'objet de notifications d'infraction répétées et fondées sera définitivement clôturé.
        </p>
      </section>
    </LegalLayout>
  );
};
