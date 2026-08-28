import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <LegalLayout
      title="Conditions d'Utilisation"
      subtitle="Conditions générales régissant l'utilisation des plateformes, applications et services Drama Xoxo."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          1. Acceptation des Conditions
        </h2>
        <p>
          En accédant au site web, aux applications mobiles ou à tout autre service fourni par <strong>{siteConfig.brandName}</strong> (« nous », « notre » ou « le Service »), vous acceptez d'être lié par les présentes Conditions d'Utilisation. Si vous n'acceptez pas l'ensemble de ces dispositions, vous devez cesser toute utilisation de nos services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          2. Éligibilité et Inscription
        </h2>
        <p>
          Pour utiliser le Service, vous devez avoir la majorité légale dans votre juridiction ou posséder le consentement valide d'un parent ou tuteur légal. Vous vous engagez à fournir des informations véridiques et à maintenir la sécurité et la confidentialité de vos identifiants de compte. Vous êtes seul responsable de toute activité effectuée sous votre compte.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          3. Nature des Services et Contenu Numérique
        </h2>
        <p>
          Drama Xoxo propose un service de divertissement numérique permettant l'accès à des mini-séries vidéo verticales originales ou sous licence. L'accès à certains épisodes peut être gratuit, tandis que d'autres peuvent nécessiter le déblocage via des éléments virtuels de l'application (Coins) ou un abonnement VIP actif.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          4. Pièces Virtuelles (Coins) et Abonnements VIP
        </h2>
        <p>
          <strong>4.1 Pièces Virtuelles (Coins) :</strong> Les Coins constituent des biens virtuels numériques à usage exclusif au sein de l'application Drama Xoxo. Ils n'ont aucune valeur monétaire réelle, ne constituent pas une monnaie légale et ne peuvent en aucun cas être échangés contre de l'argent réel, revendus ou transférés en dehors du Service.
        </p>
        <p>
          <strong>4.2 Abonnements VIP :</strong> L'accès VIP offre des privilèges temporaires (tels que la visualisation sans publicité ou le déblocage illimité de certaines séries) pendant la durée de validité de l'abonnement. Les modalités de renouvellement et de tarification sont affichées de manière claire avant la confirmation d'achat.
        </p>
        <p>
          <strong>4.3 Achats et Facturation :</strong> Les transactions d'achat in-app sont traitées via les systèmes de paiement officiels des plateformes de distribution d'applications applicables (ex. App Store d'Apple ou Google Play Store) selon leurs conditions respectives.
        </p>
        <p>
          <strong>4.4 Politique de Remboursement :</strong> Sauf disposition légale impérative ou politique spécifique de la plateforme de distribution d'applications ayant traité la commande, les achats de biens numériques consommés ou débloqués sont considérés comme fermes et non remboursables.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          5. Conduite de l'Utilisateur et Règles de la Communauté
        </h2>
        <p>
          En utilisant Drama Xoxo, vous vous engagez à ne pas :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Copier, enregistrer, extraire (scraping), redistribuer ou diffuser publiquement les flux vidéo sans autorisation écrite expresse.</li>
          <li>Tenter de contourner les mécanismes de protection technique, les verrous numériques ou les restrictions territoriales.</li>
          <li>Utiliser des robots, scripts automatisés ou émulateurs pour manipuler les vues, le système de pièces ou les interactions.</li>
          <li>Publier ou transmettre des commentaires injurieux, diffamatoires, haineux, obscènes ou portant atteinte aux droits de tiers.</li>
          <li>Usurper l'identité d'une autre personne ou d'un créateur du Service.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          6. Propriété Intellectuelle
        </h2>
        <p>
          L'ensemble des contenus, marques, logos, graphismes, interfaces, bandes sonores et vidéos disponibles sur le Service sont la propriété exclusive de Drama Xoxo ou de ses concédants de licence légitimes, et sont protégés par les lois relatives au droit d'auteur et à la propriété intellectuelle.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          7. Disponibilité des Contenus et Suspension
        </h2>
        <p>
          Le catalogue des séries peut évoluer périodiquement. Drama Xoxo se réserve le droit de modifier, retirer ou suspendre tout contenu sans préavis pour des motifs éditoriaux, techniques ou juridiques. En cas de violation des présentes Conditions, nous pouvons suspendre ou résilier l'accès d'un compte à tout moment.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          8. Exclusion de Garanties et Limitation de Responsabilité
        </h2>
        <p>
          Le Service est fourni « en l'état » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite. Dans toute la mesure permise par la loi applicable, Drama Xoxo ne saurait être tenu responsable des dommages indirects, pertes de données ou interruptions de service résultant de l'utilisation ou de l'impossibilité d'utiliser le Service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          9. Modifications des Conditions
        </h2>
        <p>
          Nous pouvons réviser ces Conditions d'Utilisation à notre discrétion. En continuant d'utiliser le Service après publication des conditions révisées, vous manifestez votre accord avec ces modifications.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          10. Contact et Réclamations
        </h2>
        <p>
          Pour toute question relative aux présentes conditions, vous pouvez vous adresser à notre équipe via le formulaire de la <a href="/support" className="text-brand-red underline hover:text-white">page de support</a>.
        </p>
      </section>
    </LegalLayout>
  );
};
