import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { siteConfig } from '../../config/siteConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      subtitle="Transparence sur la collecte, l'utilisation et la protection des données au sein de la plateforme Drama Xoxo."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          1. Introduction
        </h2>
        <p>
          La présente Politique de Confidentialité décrit la manière dont <strong>{siteConfig.brandName}</strong> (« nous », « notre » ou « nos ») collecte, utilise, traite et protège les informations des utilisateurs lors de l'accès à notre site web, à nos applications mobiles et à nos services associés (collectivement désignés le « Service »).
        </p>
        <p>
          Nous nous engageons à respecter la vie privée de nos utilisateurs et à traiter les données personnelles de manière responsable et mesurée, conformément aux principes de protection de la vie privée applicables.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          2. Informations que nous pouvons collecter
        </h2>
        <p>
          Selon vos interactions avec notre Service, nous pouvons être amenés à collecter les catégories d'informations suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Informations de compte :</strong> lorsque vous créez un compte ou vous connectez, nous pouvons recueillir votre adresse e-mail, nom d'utilisateur, identifiant unique et préférences de langue.
          </li>
          <li>
            <strong>Informations d'utilisation :</strong> données relatives à votre navigation sur le Service, titres de séries consultés, historique de visionnage, progression dans les épisodes, épisodes favoris et interactions sur l'application.
          </li>
          <li>
            <strong>Informations techniques et relatives aux appareils :</strong> type d'appareil, modèle, version du système d'exploitation, identifiants d'appareil standard, adresse IP et données de diagnostic de l'application nécessaires à la stabilité.
          </li>
          <li>
            <strong>Informations relatives aux transactions :</strong> enregistrement des achats de pièces virtuelles (Coins) ou abonnements VIP effectués via les magasins d'applications officiels. Nous ne stockons pas directement vos données bancaires complètes, celles-ci étant traitées par les plateformes de distribution officielles.
          </li>
          <li>
            <strong>Informations relatives aux créateurs :</strong> pour les partenaires créateurs, coordonnées professionnelles, données nécessaires à l'évaluation des candidatures et informations requises pour le calcul et le versement des royalties.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          3. Finalités de l'utilisation des informations
        </h2>
        <p>
          Les données collectées sont utilisées pour les finalités suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Assurer le fonctionnement continu, la diffusion fluide et la maintenance du Service.</li>
          <li>Gérer l'accès aux épisodes débloqués, aux soldes de pièces et aux privilèges VIP.</li>
          <li>Améliorer l'ergonomie, la performance technique et le catalogue de contenus.</li>
          <li>Prévenir les fraudes, les abus, les accès non autorisés et assurer la sécurité de la communauté.</li>
          <li>Communiquer avec les utilisateurs concernant les mises à jour importantes, le support client et les notifications de service.</li>
          <li>Respecter nos obligations légales, réglementaires et contractuelles.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          4. Partage d'informations avec des tiers
        </h2>
        <p>
          Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager des données dans les limites strictes suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong>Fournisseurs de services :</strong> partenaires techniques hébergeant notre infrastructure de diffusion vidéo, services de base de données, réseaux de distribution de contenu (CDN) et outils de diagnostic d'erreur.
          </li>
          <li>
            <strong>Obligations légales :</strong> si la loi, une décision de justice ou une autorité compétente l'exige pour faire respecter nos droits, enquêter sur une violation ou protéger la sécurité de nos utilisateurs.
          </li>
          <li>
            <strong>Opérations d'entreprise :</strong> dans le cadre éventuel d'une fusion, acquisition, réorganisation ou vente d'actifs, sous réserve d'engagements de confidentialité équivalents.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          5. Conservation des données
        </h2>
        <p>
          Nous conservons vos données personnelles aussi longtemps que nécessaire pour accomplir les finalités décrites dans cette politique, maintenir votre compte actif ou répondre à des exigences comptables, fiscales et de prévention des litiges.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          6. Vos droits et suppression de compte
        </h2>
        <p>
          Selon votre lieu de résidence, vous pouvez disposer de droits concernant vos données personnelles, notamment le droit d'accès, de rectification, de limitation et de suppression de vos données.
        </p>
        <p>
          Vous pouvez à tout moment demander la suppression définitive de votre compte et des données associées en vous rendant sur notre page dédiée : <a href="/delete-account" className="text-brand-red underline hover:text-white">Suppression de Compte</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          7. Protection des mineurs
        </h2>
        <p>
          Le Service n'est pas destiné aux enfants de moins de 13 ans (ou l'âge minimum équivalent dans votre juridiction). Nous ne collectons pas sciemment de données auprès d'enfants de cette tranche d'âge. Si vous pensez qu'un mineur nous a fourni des données sans consentement parental approprié, veuillez nous contacter pour que nous prenions les mesures nécessaires.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          8. Utilisateurs internationaux et transferts
        </h2>
        <p>
          Drama Xoxo opère à l'échelle internationale. Les informations peuvent être traitées et stockées sur des serveurs situés dans différents pays où nos prestataires d'infrastructure opèrent, dans le respect de standards techniques de sécurité appropriés.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          9. Modifications de la politique
        </h2>
        <p>
          Nous nous réservons le droit d'actualiser cette Politique de Confidentialité à tout moment afin de refléter l'évolution de nos services et de la législation. La date de dernière mise à jour sera systématiquement actualisée en tête de ce document.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-brand-border/60 pb-2">
          10. Contact
        </h2>
        <p>
          Pour toute question ou demande relative à vos données personnelles, vous pouvez contacter notre équipe via notre <a href="/support" className="text-brand-red underline hover:text-white">page de support</a>
          {siteConfig.legalEmail ? (
            <> ou à l'adresse officielle : <strong className="text-white">{siteConfig.legalEmail}</strong>.</>
          ) : (
            <> (les coordonnées directes par e-mail seront finalisées avant le déploiement public).</>
          )}
        </p>
      </section>
    </LegalLayout>
  );
};
