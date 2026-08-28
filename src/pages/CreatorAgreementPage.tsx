import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../config/siteConfig';

export const CreatorAgreementPage: React.FC = () => {
  return (
    <LegalLayout
      title="Accord Créateur & Conditions de Partenariat"
      subtitle="Cadre contractuel, droits de diffusion, garanties légales et monétisation pour les créateurs et studios partenaires."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          1. Objet de l'Accord
        </h2>
        <p>
          Le présent Accord Créateur (« Accord ») définit les droits, obligations et conditions financières applicables à tout individu, entité légale ou studio de production (« Créateur ») soumettant, publiant ou distribuant des séries, épisodes et contenus audiovisuels sur la plateforme <strong>{siteConfig.brandName}</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          2. Éligibilité et Processus d'Approbation
        </h2>
        <p>
          L'accès au statut de Créateur partenaire nécessite la soumission d'une candidature vérifiée. Drama Xoxo se réserve le droit exclusif d'évaluer, d'approuver ou de refuser toute candidature sur la base de critères de qualité artistique, d'intégrité légale et de pertinence éditoriale.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          3. Propriété Intellectuelle et Licence Accordée
        </h2>
        <p>
          <strong>3.1 Conservation de la Propriété :</strong> Le Créateur conserve l'ensemble des droits de propriété intellectuelle sur ses créations originales, sous réserve de la licence accordée ci-après.
        </p>
        <p>
          <strong>3.2 Licence de Diffusion Mondiale :</strong> En soumettant du contenu sur Drama Xoxo, le Créateur accorde à Drama Xoxo une licence non exclusive (ou exclusive si spécifié dans un accord de production dédié), mondiale et transférable pour héberger, transcoder, distribuer, diffuser, promouvoir et monétiser le contenu sur l'ensemble de nos canaux officiels.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          4. Garanties de Droits (Musique, Comédiens, Voix et Visuels)
        </h2>
        <p>
          Le Créateur déclare et garantit de manière inconditionnelle qu'il :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Détient l'ensemble des licences musicales nécessaires (droits d'auteur et droits voisins) pour toute bande sonore intégrée.</li>
          <li>Possède les autorisations de droit à l'image et contrats de cession de droits pour tous les acteurs, comédiens et figurants apparaissant dans l'œuvre.</li>
          <li>Ne viole aucun droit d'auteur, marque déposée, secret commercial ou droit moral appartenant à un tiers.</li>
          <li>Est responsable de tout litige ou réclamation découlant de l'utilisation d'éléments non autorisés dans ses épisodes.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          5. Contenus Générés ou Assistés par Intelligence Artificielle (IA)
        </h2>
        <p>
          Si tout ou partie du contenu utilise des technologies de synthèse ou d'IA (génération d'images, clonage vocal, scripts assistés) :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Le Créateur doit détenir les droits d'exploitation commerciale complets sur les outils utilisés.</li>
          <li>Aucun clonage vocal ou reproduction de la voix ou des traits d'une personne réelle ne peut être effectué sans son consentement écrit formel.</li>
          <li>Les contenus doivent se conformer strictement aux <a href="/content-guidelines" className="text-brand-red underline hover:text-white">Directives de Contenu</a>.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          6. Modération et Contrôle Éditorial
        </h2>
        <p>
          Chaque épisode soumis fait l'objet d'une revue préalable. Drama Xoxo se réserve le droit de rejeter, demander la modification, démonétiser ou retirer tout contenu qui enfreindrait nos règles communautaires ou les consignes des magasins d'applications.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          7. Structure des Royalties et Monétisation
        </h2>
        <p>
          <strong>7.1 Taux de Royalties Applicable :</strong> Le taux de royalties applicable est fixé par Drama Xoxo et communiqué au sein du Creator Studio ou dans les modalités spécifiques du programme créateur au moment de l'accord. Aucun taux fixe universel n'est garanti par défaut.
        </p>
        <p>
          <strong>7.2 Revenus Nets Éligibles :</strong> Les royalties sont calculées sur la base des <em>Revenus Nets Éligibles</em> générés directement par les épisodes monétisés du Créateur, déduction faite :
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-6">
          <li>Des commissions et frais de distribution des magasins d'applications (Apple App Store, Google Play Store).</li>
          <li>Des taxes applicables (TVA, taxes de vente, retenues à la source).</li>
          <li>Des remboursements, contestations de paiement (chargebacks) et déductions pour transactions frauduleuses.</li>
        </ul>
        <p>
          <strong>7.3 Vues Qualifiées et Engagement Réel :</strong> Seuls les visionnages réels et qualifiés participent au calcul de la monétisation. Tout recours à des robots, fermes à clics ou engagement artificiel entraîne la suspension immédiate du compte et la confiscation des sommes indûment générées.
        </p>
        <p>
          <strong>7.4 Absence de Revenu Garanti :</strong> Drama Xoxo ne garantit aucun niveau de revenu, volume de visionnage ou succès commercial pour les contenus publiés.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          8. Versements, Seuils et Fiscalité
        </h2>
        <p>
          Les versements de royalties s'effectuent selon le calendrier et le seuil minimum de paiement définis dans le Creator Studio. Le Créateur est personnellement et exclusivement responsable de la déclaration fiscale de ses revenus et du paiement des impôts applicables dans son pays de résidence fiscale.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          9. Résiliation et Retrait de Contenu
        </h2>
        <p>
          Chaque partie peut résilier le présent Accord conformément aux modalités de préavis prévues. En cas de manquement grave aux directives de sécurité, réclamation pour contrefaçon ou activité frauduleuse, Drama Xoxo peut suspendre ou résilier l'accès créateur sans préavis.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          10. Modifications de l'Accord
        </h2>
        <p>
          Drama Xoxo se réserve le droit de modifier les présentes conditions. Les créateurs actifs seront notifiés via le Creator Studio ou par e-mail avant l'entrée en vigueur de toute modification substantielle.
        </p>
      </section>
    </LegalLayout>
  );
};
