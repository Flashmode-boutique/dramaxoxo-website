import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../config/siteConfig';
import { AlertTriangle, Ban, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ContentGuidelinesPage: React.FC = () => {
  return (
    <LegalLayout
      title="Directives de Contenu"
      subtitle="Normes de qualité, règles communautaires et restrictions éditoriales pour les créateurs de la plateforme Drama Xoxo."
    >
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-start space-x-3 mb-6">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p>
          Le respect de ces directives est obligatoire pour la publication et le maintien de toute mini-série sur Drama Xoxo. Tout manquement peut entraîner le rejet d'épisodes, la démonétisation ou la clôture du compte créateur.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <Ban className="w-5 h-5 text-brand-red" />
          <span>1. Contenus Strictement Interdits</span>
        </h2>
        <p>
          Il est formellement interdit de publier, promouvoir ou diffuser les types de contenus suivants :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Pornographie explicite & Contenus sexuels non consentis :</strong> Représentations explicites d'actes sexuels, nudité non artistique intégrale, voyeurisme ou exploitation sexuelle sous toutes ses formes.
          </li>
          <li>
            <strong>Protection des mineurs :</strong> Tout contenu à caractère sexuel impliquant des mineurs, exploitation ou mise en danger de mineurs est passible de poursuites pénales et d'un signalement immédiat aux autorités.
          </li>
          <li>
            <strong>Violence extrême & Gore :</strong> Actes de torture, mutilations réelles, violence graphique gratuite ou incitation au suicide et à l'automutilation.
          </li>
          <li>
            <strong>Terrorisme & Activités illégales :</strong> Promotion d'organisations criminelles ou terroristes, fabrication d'armes, vente de substances illicites ou incitation à des infractions légales.
          </li>
          <li>
            <strong>Haine, Harcèlement & Menaces :</strong> Propos discriminatoires fondés sur l'origine, la religion, le genre, l'orientation sexuelle ou le handicap, cyber-harcèlement et menaces directes ou indirectes contre autrui.
          </li>
          <li>
            <strong>Escroqueries, Spam & Tromperie :</strong> Systèmes pyramidaux, tromperie sur la nature du contenu ou incitation à divulguer des données financières et sensibles.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-brand-gold" />
          <span>2. Droits d'Auteur, Musique et Droits à l'Image</span>
        </h2>
        <p>
          La confiance de notre communauté repose sur le respect scrupuleux des droits des artistes et ayants droit :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong>Musique non autorisée :</strong> Toute bande sonore, chanson ou extrait musical doit faire l'objet d'une licence commerciale formelle ou appartenir au domaine public.</li>
          <li><strong>Extraits volés ou contrefaits :</strong> Aucune vidéo ne doit intégrer de séquences issues de films, séries tierces ou émissions de télévision sans autorisation.</li>
          <li><strong>Droit à l'image des acteurs :</strong> Tout comédien identifiable doit avoir consenti à sa participation et à la diffusion commerciale de son image.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2 flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>3. Règles Relatives à l'Intelligence Artificielle et Médias Synthétiques</span>
        </h2>
        <p>
          L'utilisation de technologies génératives ou d'assistance IA est autorisée sous réserve des conditions impératives suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong>Droits commerciaux certifiés :</strong> Les créateurs doivent posséder les droits d'exploitation commerciale complets pour les modèles et outils IA utilisés.</li>
          <li><strong>Interdiction absolue du clonage non consenti :</strong> Il est strictement interdit de reproduire la voix (voice cloning) ou le visage (deepfake) de personnalités vivantes ou décédées sans contrat de licence formel.</li>
          <li><strong>Transparence éditoriale :</strong> Tout contenu généré intégralement par IA peut faire l'objet d'un étiquetage informatif selon les exigences des magasins d'applications.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          4. Pouvoir de Contrôle et Mesures de Modération
        </h2>
        <p>
          Drama Xoxo maintient un contrôle rigoureux sur l'ensemble du catalogue. Nous nous réservons le droit exclusif de :
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-4">
          <li>Procéder à une vérification manuelle ou automatisée de tout épisode avant publication.</li>
          <li>Refuser ou différer la diffusion d'un épisode non conforme.</li>
          <li>Démonétiser temporairement ou définitivement une série sous le coup d'une réclamation légitime.</li>
          <li>Retirer immédiatement tout contenu contesté ou litigieux.</li>
          <li>Suspendre ou résilier l'accès d'un créateur en cas d'infraction répétée.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          5. Signalement de Contenu Inapproprié
        </h2>
        <p>
          Si vous constatez un contenu enfreignant nos directives, nous vous invitons à le signaler via notre formulaire dédié sur la page <a href="/support" className="text-brand-red underline hover:text-white">Support & Signalement</a>.
        </p>
      </section>
    </LegalLayout>
  );
};
