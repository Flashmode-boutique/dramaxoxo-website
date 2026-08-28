export type Language = 'fr' | 'en' | 'ht';

export interface TranslationDictionary {
  nav: {
    home: string;
    discover: string;
    creators: string;
    support: string;
    comingSoonBadge: string;
    comingSoonBtn: string;
    navigationLabel: string;
    creatorInfoLabel: string;
    creatorAgreement: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    genres: string;
    ctaPrimary: string;
    ctaSecondary: string;
    formatVertical: string;
    shortEpisodes: string;
    mobileFirst: string;
    modalTitle: string;
    modalDesc: string;
    modalPoint1: string;
    modalPoint2: string;
    modalPoint3: string;
    modalClose: string;
    vipPreview: string;
    freeEpisode: string;
    cliffhangerBadge: string;
    cliffhangerDesc: string;
    qualityBadge: string;
    qualityDesc: string;
  };
  discover: {
    badge: string;
    title: string;
    description: string;
    seriesTitle: string;
    seriesSubtitle: string;
    comingSoonTag: string;
    episodes: string;
    concepts: {
      vertical: { title: string; desc: string };
      short: { title: string; desc: string };
      cliffhangers: { title: string; desc: string };
      romance: { title: string; desc: string };
      suspense: { title: string; desc: string };
      exclusive: { title: string; desc: string };
    };
    categories: {
      all: string;
      romance: string;
      thriller: string;
      secrets: string;
    };
    series: {
      s1: { title: string; genre: string; synopsis: string; highlight: string; tag: string };
      s2: { title: string; genre: string; synopsis: string; highlight: string; tag: string };
      s3: { title: string; genre: string; synopsis: string; highlight: string; tag: string };
      s4: { title: string; genre: string; synopsis: string; highlight: string; tag: string };
    };
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    s1: { title: string; desc: string };
    s2: { title: string; desc: string };
    s3: { title: string; desc: string };
  };
  creators: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaAgreement: string;
    royaltyDisclaimer: string;
    cardTitle: string;
    cardSub: string;
    cardF1: string;
    cardF2: string;
    cardF3: string;
    cardF4: string;
    qualityTitle: string;
    qualityDesc: string;
    flowTitle: string;
    steps: Array<{ title: string; desc: string }>;
    modalTitle: string;
    modalSubtitle: string;
    modalDesc: string;
    modalBeforeTitle: string;
    modalP1: string;
    modalP2: string;
    modalP3: string;
    modalBtnRules: string;
    modalBtnClose: string;
  };
  appDownload: {
    badge: string;
    title: string;
    description: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    appStoreSubtitle: string;
    googlePlaySubtitle: string;
    comingSoon: string;
    disclaimer: string;
    cardTitle: string;
    cardDesc: string;
    cardBadge: string;
  };
  support: {
    badge: string;
    title: string;
    description: string;
    topics: {
      account: { title: string; desc: string };
      coins: { title: string; desc: string };
      playback: { title: string; desc: string };
      legal: { title: string; desc: string };
    };
    faqTitle: string;
    contactTitle: string;
    contactDesc: string;
    hoursTitle: string;
    hoursTime: string;
    hoursNote: string;
    emailNotice: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      categoryLabel: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successTitle: string;
      successDesc: string;
      resetBtn: string;
    };
  };
  deleteAccount: {
    warningTitle: string;
    warningDesc: string;
    appMethodTitle: string;
    appMethodDesc: string;
    appStepTitle: string;
    appSteps: string[];
    consequencesTitle: string;
    deletedTitle: string;
    deletedList: string[];
    retainedTitle: string;
    retainedList: string[];
    subscriptionNoteTitle: string;
    subscriptionNoteDesc: string;
    webFormTitle: string;
    webFormDesc: string;
    emailLabel: string;
    confirmCheckbox: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1_title: string;
    s1_p1: string;
    s1_p2: string;
    s2_title: string;
    s2_intro: string;
    s2_points: Array<{ strong: string; text: string }>;
    s3_title: string;
    s3_intro: string;
    s3_points: string[];
    s4_title: string;
    s4_intro: string;
    s4_points: Array<{ strong: string; text: string }>;
    s5_title: string;
    s5_p: string;
    s6_title: string;
    s6_p1: string;
    s6_p2_before: string;
    s6_p2_link: string;
    s7_title: string;
    s7_p: string;
    s8_title: string;
    s8_p: string;
    s9_title: string;
    s9_p: string;
    s10_title: string;
    s10_p_before: string;
    s10_p_supportLink: string;
    s10_p_unconfigured: string;
  };
  terms: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1_title: string;
    s1_p: string;
    s2_title: string;
    s2_p: string;
    s3_title: string;
    s3_p: string;
    s4_title: string;
    s4_p1_strong: string;
    s4_p1_text: string;
    s4_p2_strong: string;
    s4_p2_text: string;
    s4_p3_strong: string;
    s4_p3_text: string;
    s4_p4_strong: string;
    s4_p4_text: string;
    s5_title: string;
    s5_intro: string;
    s5_points: string[];
    s6_title: string;
    s6_p: string;
    s7_title: string;
    s7_p: string;
    s8_title: string;
    s8_p: string;
    s9_title: string;
    s9_p: string;
    s10_title: string;
    s10_p_before: string;
    s10_p_supportLink: string;
  };
  creatorAgreement: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1_title: string;
    s1_p: string;
    s2_title: string;
    s2_p: string;
    s3_title: string;
    s3_p1_strong: string;
    s3_p1_text: string;
    s3_p2_strong: string;
    s3_p2_text: string;
    s4_title: string;
    s4_intro: string;
    s4_points: string[];
    s5_title: string;
    s5_intro: string;
    s5_points: Array<{ strong: string; text: string }>;
    s6_title: string;
    s6_p: string;
    s7_title: string;
    s7_p1_strong: string;
    s7_p1_text: string;
    s7_p2_strong: string;
    s7_p2_intro: string;
    s7_p2_points: string[];
    s7_p3_strong: string;
    s7_p3_text: string;
    s7_p4_strong: string;
    s7_p4_text: string;
    s8_title: string;
    s8_p: string;
    s9_title: string;
    s9_p: string;
    s10_title: string;
    s10_p: string;
  };
  contentGuidelines: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    alert: string;
    s1_title: string;
    s1_intro: string;
    s1_points: Array<{ strong: string; text: string }>;
    s2_title: string;
    s2_intro: string;
    s2_points: Array<{ strong: string; text: string }>;
    s3_title: string;
    s3_intro: string;
    s3_points: Array<{ strong: string; text: string }>;
    s4_title: string;
    s4_intro: string;
    s4_points: string[];
    s5_title: string;
    s5_p_before: string;
    s5_p_supportLink: string;
  };
  copyright: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1_title: string;
    s1_p: string;
    s2_title: string;
    s2_intro: string;
    s2_elements: Array<{ num: string; strong: string; text: string }>;
    s3_title: string;
    s3_p_unconfigured_before: string;
    s3_p_unconfigured_link: string;
    s3_p_unconfigured_after: string;
    s4_title: string;
    s4_p: string;
    s5_title: string;
    s5_p: string;
  };
  footer: {
    tagline: string;
    description: string;
    platformTitle: string;
    legalTitle: string;
    links: {
      home: string;
      discover: string;
      howItWorks: string;
      creators: string;
      support: string;
      privacy: string;
      terms: string;
      creatorAgreement: string;
      contentGuidelines: string;
      copyright: string;
      deleteAccount: string;
    };
    allRightsReserved: string;
    craftedWithLove: string;
    version: string;
  };
  common: {
    backToHome: string;
    officialDocument: string;
    lastUpdated: string;
    legalFooterTitle: string;
    legalFooterDesc: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  // ==========================================
  // 🇫🇷 FRENCH (Défaut)
  // ==========================================
  fr: {
    nav: {
      home: "Accueil",
      discover: "Découvrir",
      creators: "Créateurs",
      support: "Support",
      comingSoonBadge: "Bientôt sur iOS & Android",
      comingSoonBtn: "Coming Soon",
      navigationLabel: "Navigation",
      creatorInfoLabel: "Informations Créateurs",
      creatorAgreement: "Accord Créateur",
    },
    hero: {
      badge: "Plateforme Officielle de Streaming Vertical",
      title1: "Des histoires courtes.",
      title2: "Des émotions intenses.",
      description: "Découvrez des mini-séries verticales captivantes conçues pour être regardées partout, à tout moment.",
      genres: "Drama • Romance • Secrets • Passion • Suspense",
      ctaPrimary: "Bientôt disponible",
      ctaSecondary: "Devenir Créateur",
      formatVertical: "Format Vertical 9:16",
      shortEpisodes: "Épisodes de 1 à 2 min",
      mobileFirst: "100% Conçu pour Mobile",
      modalTitle: "Lancement Très Prochainement",
      modalDesc: "Les applications officielles Drama Xoxo pour iOS et Android sont actuellement en phase finale de préparation pour leur soumission sur l'App Store et Google Play.",
      modalPoint1: "Mini-séries exclusives en haute définition",
      modalPoint2: "Lecteur vertical ultra-fluide avec navigation gestuelle",
      modalPoint3: "Système de récompenses et pièces quotidiennes",
      modalClose: "J'ai compris",
      vipPreview: "VIP PREVIEW",
      freeEpisode: "Gratuit • 1 min 45s",
      cliffhangerBadge: "Cliffhangers",
      cliffhangerDesc: "Chaque épisode se termine sur un suspense irrésistible.",
      qualityBadge: "Qualité HD",
      qualityDesc: "Optimisé pour les réseaux mobiles rapides.",
    },
    discover: {
      badge: "L'Expérience Drama Xoxo",
      title: "Une nouvelle façon de vivre les histoires",
      description: "Drama Xoxo transforme les histoires en expériences courtes, verticales et addictives pensées pour votre téléphone. Découvrez une série, plongez dans l’histoire et passez d’un épisode au suivant en quelques secondes.",
      seriesTitle: "Aperçu des Mini-Séries",
      seriesSubtitle: "Des univers riches conçus pour captiver dès les premières secondes.",
      comingSoonTag: "À Venir",
      episodes: "Épisodes",
      concepts: {
        vertical: { title: "Histoires Verticales", desc: "Format immersif 9:16 conçu sur mesure pour être visionné d'une seule main sur mobile." },
        short: { title: "Épisodes Courts", desc: "Des récits condensés de 1 à 2 minutes où chaque seconde fait avancer l'intrigue sans temps mort." },
        cliffhangers: { title: "Cliffhangers Addictifs", desc: "Des fins d'épisodes intenses qui vous donnent envie de découvrir la suite immédiatement." },
        romance: { title: "Romance & Passion", desc: "Des histoires d'amour complexes, des trahisons, des rivalités de pouvoir et des destins croisés." },
        suspense: { title: "Suspense & Secrets", desc: "Des mystères captivants où chaque révélation bouleverse les certitudes des personnages." },
        exclusive: { title: "Productions Exclusives", desc: "Des contenus originaux portés par des créateurs et des talents passionnés par la narration mobile." },
      },
      categories: {
        all: "Tous",
        romance: "Romance & Passion",
        thriller: "Thriller & Suspense",
        secrets: "Secrets & Vengeance",
      },
      series: {
        s1: { title: "Le Secret du Milliardaire", genre: "Romance & Vengeance", synopsis: "Trahie par sa propre famille, elle revient sous une nouvelle identité au bal du plus puissant héritier de la ville.", highlight: "Épisode 1 à 30 en format 9:16 vertical", tag: "TENDANCE N°1" },
        s2: { title: "Vengeance à Port-au-Prince", genre: "Thriller & Action", synopsis: "Dans les cercles d'influence, une alliance interdite menace d'exposer les secrets les plus sombres de la haute société.", highlight: "Suspense haletant & Cliffhangers", tag: "NOUVEAUTÉ" },
        s3: { title: "Double Jeu d'Amour", genre: "Romance & Rivalité CEO", synopsis: "Un contrat de faux mariage qui devait durer six mois. Mais entre pouvoir et passion, les règles ont changé.", highlight: "Épisodes immersifs de 90 secondes", tag: "POPULAIRE" },
        s4: { title: "L'Héritière Masquée", genre: "Drame & Passion", synopsis: "Rejetée par son clan, elle découvre son véritable héritage et prépare une revanche éclatante.", highlight: "Une production Drama Xoxo Originals", tag: "EXCLUSIF" },
      }
    },
    howItWorks: {
      badge: "Simple & Addictif",
      title: "Comment ça marche ?",
      subtitle: "Une expérience pensée pour s'adapter à votre rythme de vie.",
      stepLabel: "Étape",
      s1: { title: "Découvrez", desc: "Explorez des mini-séries selon vos envies à travers des genres variés : romance, thriller, secrets de famille et drames passionnels." },
      s2: { title: "Regardez", desc: "Profitez d’épisodes courts de 1 à 2 minutes conçus exclusivement pour un visionnage vertical fluide et immersif sur mobile." },
      s3: { title: "Continuez l’histoire", desc: "Débloquez facilement la suite avec des récompenses quotidiennes ou le pass VIP et ne manquez aucun dénouement." },
    },
    creators: {
      badge: "Programme Créateurs & Studios",
      title: "Vos histoires méritent leur public.",
      description: "Drama Xoxo permet aux créateurs sélectionnés de publier leurs propres mini-séries, développer leur audience et gagner des royalties sur leurs contenus.",
      ctaPrimary: "Devenir Créateur",
      ctaAgreement: "Lire l'Accord Créateur",
      royaltyDisclaimer: "* Le taux de royalties applicable est fixé par Drama Xoxo et communiqué selon les modalités de l'Accord Créateur en vigueur.",
      cardTitle: "Rejoignez l'écosystème",
      cardSub: "Pensé pour les réalisateurs, scénaristes et acteurs",
      cardF1: "Format optimisé : Récits dynamiques verticaux en haute résolution.",
      cardF2: "Monétisation transparente : Revenus basés sur les vues qualifiées et achats d'épisodes.",
      cardF3: "Propriété intellectuelle : Vous conservez la propriété de vos créations originales.",
      cardF4: "Outils dédiés : Tableaux de bord de performance et gestion de séries.",
      qualityTitle: "Engagement de Qualité :",
      qualityDesc: "Chaque projet est soumis à une révision éditoriale et technique rigoureuse pour garantir une expérience de visionnage d'exception.",
      flowTitle: "Le parcours de publication en 6 étapes",
      steps: [
        { title: "Candidature", desc: "Postulez avec votre concept de mini-série ou portfolio." },
        { title: "Sélection & Accord", desc: "Validation de votre profil créateur et signature de l'accord." },
        { title: "Production", desc: "Tournez et montez vos épisodes en format vertical 9:16." },
        { title: "Soumission & Revue", desc: "Modération et contrôle qualité des épisodes avant mise en ligne." },
        { title: "Publication & Audience", desc: "Diffusion sur la plateforme auprès des passionnés de séries." },
        { title: "Royalties", desc: "Percevez des royalties basées sur les revenus nets éligibles de vos épisodes." },
      ],
      modalTitle: "Espace Candidature Créateur",
      modalSubtitle: "Ouverture des inscriptions prochainement",
      modalDesc: "Le portail de soumission en ligne et le Creator Studio seront activés dès le déploiement public officiel. Vous pourrez y enregistrer votre société de production ou votre profil créateur indépendant.",
      modalBeforeTitle: "Avant de postuler, préparez :",
      modalP1: "Le pitch et synopsis de votre projet de mini-série.",
      modalP2: "La garantie des droits sur la musique, les comédiens et les visuels.",
      modalP3: "Le respect des Directives de Contenu.",
      modalBtnRules: "Consulter les règles",
      modalBtnClose: "Fermer",
    },
    appDownload: {
      badge: "Sortie Prochaine",
      title: "Drama Xoxo arrive bientôt sur mobile.",
      description: "Préparez-vous à vivre une nouvelle intensité narrative dans le creux de votre main. Nos applications iOS et Android offriront une fluidité inégalée, un mode hors-ligne et des épisodes quotidiens.",
      b1: "Lecture instantanée sans interruption",
      b2: "Notifications de nouveaux épisodes",
      b3: "Pièces gratuites chaque jour",
      b4: "Gestion des séries favorites",
      appStoreSubtitle: "Télécharger dans l'",
      googlePlaySubtitle: "Disponible sur",
      comingSoon: "Coming Soon",
      disclaimer: "* Les liens de téléchargement directs seront activés dès la mise en ligne sur les plateformes respectives.",
      cardTitle: "Restez Informé",
      cardDesc: "Suivez les annonces officielles pour être parmi les premiers à découvrir les séries originales Drama Xoxo au lancement.",
      cardBadge: "Disponible mondialement • Multi-langue",
    },
    support: {
      badge: "Centre d'Aide & Assistance",
      title: "Comment pouvons-nous vous aider ?",
      description: "Consultez nos réponses aux questions fréquentes ou contactez notre équipe d'assistance dédiée.",
      topics: {
        account: { title: "Compte & Connexion", desc: "Récupération de mot de passe, changement d'e-mail." },
        coins: { title: "Pièces & VIP", desc: "Restauration des achats, soldes de pièces virtuelles." },
        playback: { title: "Lecture & Qualité", desc: "Fluidité vidéo, sous-titres et chargement." },
        legal: { title: "Sécurité & Légal", desc: "Signalement de contenu et demandes DMCA." },
      },
      faqTitle: "Foire Aux Questions (FAQ)",
      contactTitle: "Contactez l'Assistance",
      contactDesc: "Notre équipe traite les demandes de support relatives aux comptes utilisateurs, aux achats et aux signalements éditoriaux.",
      hoursTitle: "Disponibilité",
      hoursTime: "Du Lundi au Vendredi • 9h00 - 18h00 UTC",
      hoursNote: "Temps de réponse habituel sous 24 à 48 heures ouvrées.",
      emailNotice: "Les adresses directes du support seront publiées avant le lancement officiel.",
      form: {
        nameLabel: "Votre Nom complet *",
        namePlaceholder: "Jean Dupont",
        emailLabel: "Adresse E-mail *",
        emailPlaceholder: "jean.dupont@email.com",
        categoryLabel: "Catégorie de la demande *",
        subjectLabel: "Sujet *",
        subjectPlaceholder: "Ex: Problème d'accès à l'épisode 5",
        messageLabel: "Description détaillée *",
        messagePlaceholder: "Expliquez précisément votre situation...",
        submitBtn: "Envoyer la Demande",
        successTitle: "Message Préparé avec Succès",
        successDesc: "Merci. Le module de contact a bien validé vos informations. (Intégration d'envoi en attente de la configuration finale de l'API de messagerie).",
        resetBtn: "Envoyer un autre message",
      }
    },
    deleteAccount: {
      warningTitle: "Action Irréversible",
      warningDesc: "La suppression de votre compte Drama Xoxo entraîne la perte définitive de votre accès aux épisodes débloqués, de votre solde de pièces (Coins) non utilisées et de votre historique de visionnage.",
      appMethodTitle: "1. Comment supprimer votre compte depuis l'Application Mobile",
      appMethodDesc: "Si vous avez accès à l'application Drama Xoxo sur votre smartphone, la méthode la plus rapide et automatisée consiste à procéder directement via vos réglages :",
      appStepTitle: "Étapes dans l'application :",
      appSteps: [
        "Ouvrez l'application Drama Xoxo.",
        "Rendez-vous dans l'onglet Profil en bas à droite.",
        "Accédez à la section Paramètres (icône d'engrenage).",
        "Sélectionnez Sécurité & Confidentialité puis appuyez sur Supprimer mon compte.",
        "Confirmez votre mot de passe pour valider l'effacement."
      ],
      consequencesTitle: "2. Conséquences de la Suppression de Compte",
      deletedTitle: "Ce qui sera définitivement effacé :",
      deletedList: [
        "Vos identifiants de connexion et données de profil.",
        "Votre historique de visionnage et séries en favoris.",
        "Votre solde de pièces virtuelles (Coins).",
        "Vos déblocages d'épisodes individuels."
      ],
      retainedTitle: "Ce qui peut être conservé temporairement :",
      retainedList: [
        "Preuves de transactions d'achats in-app pour obligations fiscales et comptables légales.",
        "Journaux de sécurité minimaux pour prévenir les abus et contestations bancaires.",
        "Dossiers de royalties créateurs déjà liquidés conformément à la loi."
      ],
      subscriptionNoteTitle: "3. Remarque Importante sur les Abonnements VIP",
      subscriptionNoteDesc: "Attention : La suppression de votre compte Drama Xoxo ne résilie pas automatiquement un abonnement VIP souscrit via Apple App Store ou Google Play Store. Vous devez gérer et annuler vos abonnements actifs directement dans les paramètres de votre compte Apple ou Google.",
      webFormTitle: "4. Formulaire Web de Demande de Suppression",
      webFormDesc: "Si vous ne pouvez plus accéder à l'application mobile, vous pouvez soumettre une demande formelle d'effacement ci-dessous.",
      emailLabel: "Adresse e-mail associée à votre compte Drama Xoxo *",
      confirmCheckbox: "Je comprends que cette action est définitive et entraînera la suppression intégrale de mes données, pièces (Coins) et déblocages.",
      submitBtn: "Soumettre la demande d'effacement",
      successTitle: "Demande d'Effacement Enregistrée",
      successDesc: "Votre demande d'effacement a été prise en compte par le système. (Module de traitement prêt pour le raccordement au backend de production).",
      resetBtn: "Réinitialiser",
    },
    privacy: {
      title: "Politique de Confidentialité",
      subtitle: "Transparence sur la collecte, l'utilisation et la protection des données au sein de la plateforme Drama Xoxo.",
      lastUpdated: "Août 2026",
      s1_title: "1. Introduction",
      s1_p1: "La présente Politique de Confidentialité décrit la manière dont Drama Xoxo (« nous », « notre » ou « nos ») collecte, utilise, traite et protège les informations des utilisateurs lors de l'accès à notre site web, à nos applications mobiles et à nos services associés (collectivement désignés le « Service »).",
      s1_p2: "Nous nous engageons à respecter la vie privée de nos utilisateurs et à traiter les données personnelles de manière responsable et mesurée, conformément aux principes de protection de la vie privée applicables.",
      s2_title: "2. Informations que nous pouvons collecter",
      s2_intro: "Selon vos interactions avec notre Service, nous pouvons être amenés à collecter les catégories d'informations suivantes :",
      s2_points: [
        { strong: "Informations de compte :", text: "lorsque vous créez un compte ou vous connectez, nous pouvons recueillir votre adresse e-mail, nom d'utilisateur, identifiant unique et préférences de langue." },
        { strong: "Informations d'utilisation :", text: "données relatives à votre navigation sur le Service, titres de séries consultés, historique de visionnage, progression dans les épisodes, épisodes favoris et interactions sur l'application." },
        { strong: "Informations techniques et relatives aux appareils :", text: "type d'appareil, modèle, version du système d'exploitation, identifiants d'appareil standard, adresse IP et données de diagnostic de l'application nécessaires à la stabilité." },
        { strong: "Informations relatives aux transactions :", text: "enregistrement des achats de pièces virtuelles (Coins) ou abonnements VIP effectués via les magasins d'applications officiels. Nous ne stockons pas directement vos données bancaires complètes, celles-ci étant traitées par les plateformes de distribution officielles." },
        { strong: "Informations relatives aux créateurs :", text: "pour les partenaires créateurs, coordonnées professionnelles, données nécessaires à l'évaluation des candidatures et informations requises pour le calcul et le versement des royalties." },
      ],
      s3_title: "3. Finalités de l'utilisation des informations",
      s3_intro: "Les données collectées sont utilisées pour les finalités suivantes :",
      s3_points: [
        "Assurer le fonctionnement continu, la diffusion fluide et la maintenance du Service.",
        "Gérer l'accès aux épisodes débloqués, aux soldes de pièces et aux privilèges VIP.",
        "Améliorer l'ergonomie, la performance technique et le catalogue de contenus.",
        "Prévenir les fraudes, les abus, les accès non autorisés et assurer la sécurité de la communauté.",
        "Communiquer avec les utilisateurs concernant les mises à jour importantes, le support client et les notifications de service.",
        "Respecter nos obligations légales, réglementaires et contractuelles.",
      ],
      s4_title: "4. Partage d'informations avec des tiers",
      s4_intro: "Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager des données dans les limites strictes suivantes :",
      s4_points: [
        { strong: "Fournisseurs de services :", text: "partenaires techniques hébergeant notre infrastructure de diffusion vidéo, services de base de données, réseaux de distribution de contenu (CDN) et outils de diagnostic d'erreur." },
        { strong: "Obligations légales :", text: "si la loi, une décision de justice ou une autorité compétente l'exige pour faire respecter nos droits, enquêter sur une violation ou protéger la sécurité de nos utilisateurs." },
        { strong: "Opérations d'entreprise :", text: "dans le cadre éventuel d'une fusion, acquisition, réorganisation ou vente d'actifs, sous réserve d'engagements de confidentialité équivalents." },
      ],
      s5_title: "5. Conservation des données",
      s5_p: "Nous conservons vos données personnelles aussi longtemps que nécessaire pour accomplir les finalités décrites dans cette politique, maintenir votre compte actif ou répondre à des exigences comptables, fiscales et de prévention des litiges.",
      s6_title: "6. Vos droits et suppression de compte",
      s6_p1: "Selon votre lieu de résidence, vous pouvez disposer de droits concernant vos données personnelles, notamment le droit d'accès, de rectification, de limitation et de suppression de vos données.",
      s6_p2_before: "Vous pouvez à tout moment demander la suppression définitive de votre compte et des données associées en vous rendant sur notre page dédiée : ",
      s6_p2_link: "Suppression de Compte",
      s7_title: "7. Protection des mineurs",
      s7_p: "Le Service n'est pas destiné aux enfants de moins de 13 ans (ou l'âge minimum équivalent dans votre juridiction). Nous ne collectons pas sciemment de données auprès d'enfants de cette tranche d'âge.",
      s8_title: "8. Utilisateurs internationaux et transferts",
      s8_p: "Drama Xoxo opère à l'échelle internationale. Les informations peuvent être traitées et stockées sur des serveurs situés dans différents pays où nos prestataires d'infrastructure opèrent, dans le respect de standards techniques de sécurité appropriés.",
      s9_title: "9. Modifications de la politique",
      s9_p: "Nous nous réservons le droit d'actualiser cette Politique de Confidentialité à tout moment afin de refléter l'évolution de nos services et de la législation. La date de dernière mise à jour sera systématiquement actualisée en tête de ce document.",
      s10_title: "10. Contact",
      s10_p_before: "Pour toute question ou demande relative à vos données personnelles, vous pouvez contacter notre équipe via notre ",
      s10_p_supportLink: "page de support",
      s10_p_unconfigured: " (les coordonnées directes par e-mail seront finalisées avant le déploiement public).",
    },
    terms: {
      title: "Conditions d'Utilisation",
      subtitle: "Conditions générales régissant l'utilisation des plateformes, applications et services Drama Xoxo.",
      lastUpdated: "Août 2026",
      s1_title: "1. Acceptation des Conditions",
      s1_p: "En accédant au site web, aux applications mobiles ou à tout autre service fourni par Drama Xoxo (« nous », « notre » ou « le Service »), vous acceptez d'être lié par les présentes Conditions d'Utilisation. Si vous n'acceptez pas l'ensemble de ces dispositions, vous devez cesser toute utilisation de nos services.",
      s2_title: "2. Éligibilité et Inscription",
      s2_p: "Pour utiliser le Service, vous devez avoir la majorité légale dans votre juridiction ou posséder le consentement valide d'un parent ou tuteur légal. Vous vous engagez à fournir des informations véridiques et à maintenir la sécurité et la confidentialité de vos identifiants de compte.",
      s3_title: "3. Nature des Services et Contenu Numérique",
      s3_p: "Drama Xoxo propose un service de divertissement numérique permettant l'accès à des mini-séries vidéo verticales originales ou sous licence. L'accès à certains épisodes peut être gratuit, tandis que d'autres peuvent nécessiter le déblocage via des éléments virtuels de l'application (Coins) ou un abonnement VIP actif.",
      s4_title: "4. Pièces Virtuelles (Coins) et Abonnements VIP",
      s4_p1_strong: "4.1 Pièces Virtuelles (Coins) :",
      s4_p1_text: "Les Coins constituent des biens virtuels numériques à usage exclusif au sein de l'application Drama Xoxo. Ils n'ont aucune valeur monétaire réelle, ne constituent pas une monnaie légale et ne peuvent en aucun cas être échangés contre de l'argent réel.",
      s4_p2_strong: "4.2 Abonnements VIP :",
      s4_p2_text: "L'accès VIP offre des privilèges temporaires (tels que la visualisation sans publicité ou le déblocage illimité de certaines séries) pendant la durée de validité de l'abonnement.",
      s4_p3_strong: "4.3 Achats et Facturation :",
      s4_p3_text: "Les transactions d'achat in-app sont traitées via les systèmes de paiement officiels des plateformes de distribution d'applications applicables (ex. App Store d'Apple ou Google Play Store) selon leurs conditions respectives.",
      s4_p4_strong: "4.4 Politique de Remboursement :",
      s4_p4_text: "Sauf disposition légale impérative ou politique spécifique de la plateforme de distribution d'applications ayant traité la commande, les achats de biens numériques consommés ou débloqués sont considérés comme fermes et non remboursables.",
      s5_title: "5. Conduite de l'Utilisateur et Règles de la Communauté",
      s5_intro: "En utilisant Drama Xoxo, vous vous engagez à ne pas :",
      s5_points: [
        "Copier, enregistrer, extraire (scraping), redistribuer ou diffuser publiquement les flux vidéo sans autorisation écrite expresse.",
        "Tenter de contourner les mécanismes de protection technique, les verrous numériques ou les restrictions territoriales.",
        "Utiliser des robots, scripts automatisés ou émulateurs pour manipuler les vues, le système de pièces ou les interactions.",
        "Publier ou transmettre des commentaires injurieux, diffamatoires, haineux, obscènes ou portant atteinte aux droits de tiers.",
        "Usurper l'identité d'une autre personne ou d'un créateur du Service.",
      ],
      s6_title: "6. Propriété Intellectuelle",
      s6_p: "L'ensemble des contenus, marques, logos, graphismes, interfaces, bandes sonores et vidéos disponibles sur le Service sont la propriété exclusive de Drama Xoxo ou de ses concédants de licence légitimes.",
      s7_title: "7. Disponibilité des Contenus et Suspension",
      s7_p: "Le catalogue des séries peut évoluer périodiquement. Drama Xoxo se réserve le droit de modifier, retirer ou suspendre tout contenu sans préavis pour des motifs éditoriaux, techniques ou juridiques.",
      s8_title: "8. Exclusion de Garanties et Limitation de Responsabilité",
      s8_p: "Le Service est fourni « en l'état » et « selon disponibilité », sans garantie d'aucune sorte. Drama Xoxo ne saurait être tenu responsable des dommages indirects ou interruptions de service.",
      s9_title: "9. Modifications des Conditions",
      s9_p: "Nous pouvons réviser ces Conditions d'Utilisation à notre discrétion. En continuant d'utiliser le Service après publication des conditions révisées, vous manifestez votre accord avec ces modifications.",
      s10_title: "10. Contact et Réclamations",
      s10_p_before: "Pour toute question relative aux présentes conditions, vous pouvez vous adresser à notre équipe via le formulaire de la ",
      s10_p_supportLink: "page de support",
    },
    creatorAgreement: {
      title: "Accord Créateur & Conditions de Partenariat",
      subtitle: "Cadre contractuel, droits de diffusion, garanties légales et monétisation pour les créateurs et studios partenaires.",
      lastUpdated: "Août 2026",
      s1_title: "1. Objet de l'Accord",
      s1_p: "Le présent Accord Créateur définit les droits, obligations et conditions financières applicables à tout individu, entité légale ou studio de production soumettant ou distribuant des séries sur Drama Xoxo.",
      s2_title: "2. Éligibilité et Processus d'Approbation",
      s2_p: "L'accès au statut de Créateur partenaire nécessite la soumission d'une candidature vérifiée. Drama Xoxo se réserve le droit exclusif d'évaluer, d'approuver ou de refuser toute candidature.",
      s3_title: "3. Propriété Intellectuelle et Licence Accordée",
      s3_p1_strong: "3.1 Conservation de la Propriété :",
      s3_p1_text: "Le Créateur conserve l'ensemble des droits de propriété intellectuelle sur ses créations originales.",
      s3_p2_strong: "3.2 Licence de Diffusion Mondiale :",
      s3_p2_text: "En soumettant du contenu sur Drama Xoxo, le Créateur accorde une licence pour héberger, transcoder, distribuer, diffuser, promouvoir et monétiser le contenu sur nos canaux officiels.",
      s4_title: "4. Garanties de Droits (Musique, Comédiens, Voix et Visuels)",
      s4_intro: "Le Créateur déclare et garantit de manière inconditionnelle qu'il :",
      s4_points: [
        "Détient l'ensemble des licences musicales nécessaires (droits d'auteur et droits voisins).",
        "Possède les autorisations de droit à l'image pour tous les acteurs et comédiens.",
        "Ne viole aucun droit d'auteur, marque déposée ou droit appartenant à un tiers.",
        "Est responsable de tout litige découlant de l'utilisation d'éléments non autorisés.",
      ],
      s5_title: "5. Contenus Générés ou Assistés par Intelligence Artificielle (IA)",
      s5_intro: "Si tout ou partie du contenu utilise des technologies de synthèse ou d'IA :",
      s5_points: [
        { strong: "Droits commerciaux :", text: "Le Créateur doit détenir les droits d'exploitation commerciale complets sur les outils utilisés." },
        { strong: "Interdiction du clonage non consenti :", text: "Aucun clonage vocal ou reproduction de visage ne peut être effectué sans consentement écrit formel." },
        { strong: "Conformité :", text: "Les contenus doivent se conformer strictement aux Directives de Contenu." },
      ],
      s6_title: "6. Modération et Contrôle Éditorial",
      s6_p: "Chaque épisode soumis fait l'objet d'une revue préalable. Drama Xoxo se réserve le droit de rejeter, demander la modification, démonétiser ou retirer tout contenu non conforme.",
      s7_title: "7. Structure des Royalties et Monétisation",
      s7_p1_strong: "7.1 Taux de Royalties Applicable :",
      s7_p1_text: "Le taux de royalties applicable est fixé par Drama Xoxo et communiqué au sein du Creator Studio ou dans les modalités du programme créateur. Aucun taux fixe universel n'est garanti par défaut.",
      s7_p2_strong: "7.2 Revenus Nets Éligibles :",
      s7_p2_intro: "Les royalties sont calculées sur la base des Revenus Nets Éligibles après déduction :",
      s7_p2_points: [
        "Des commissions des magasins d'applications (Apple App Store, Google Play Store).",
        "Des taxes applicables (TVA, taxes de vente, retenues).",
        "Des remboursements, contestations de paiement et transactions frauduleuses.",
      ],
      s7_p3_strong: "7.3 Vues Qualifiées :",
      s7_p3_text: "Seuls les visionnages réels et qualifiés participent au calcul de la monétisation. Tout engagement artificiel est prohibé.",
      s7_p4_strong: "7.4 Absence de Revenu Garanti :",
      s7_p4_text: "Drama Xoxo ne garantit aucun niveau de revenu ou volume de visionnage fixe.",
      s8_title: "8. Versements, Seuils et Fiscalité",
      s8_p: "Les versements de royalties s'effectuent selon le calendrier et le seuil minimum de paiement définis dans le Creator Studio. Le Créateur est exclusivement responsable de la déclaration fiscale de ses revenus.",
      s9_title: "9. Résiliation et Retrait de Contenu",
      s9_p: "Chaque partie peut résilier le présent Accord conformément aux modalités de préavis prévues. En cas d'infraction grave, Drama Xoxo peut suspendre l'accès sans préavis.",
      s10_title: "10. Modifications de l'Accord",
      s10_p: "Drama Xoxo se réserve le droit de modifier les présentes conditions avec notification préalable aux créateurs actifs.",
    },
    contentGuidelines: {
      title: "Directives de Contenu",
      subtitle: "Normes de qualité, règles communautaires et restrictions éditoriales pour les créateurs de la plateforme Drama Xoxo.",
      lastUpdated: "Août 2026",
      alert: "Le respect de ces directives est obligatoire pour la publication et le maintien de toute mini-série sur Drama Xoxo. Tout manquement peut entraîner le rejet d'épisodes ou la clôture du compte créateur.",
      s1_title: "1. Contenus Strictement Interdits",
      s1_intro: "Il est formellement interdit de publier, promouvoir ou diffuser les types de contenus suivants :",
      s1_points: [
        { strong: "Pornographie explicite & Non-consenti :", text: "Représentations explicites d'actes sexuels, nudité intégrale non artistique ou exploitation sexuelle." },
        { strong: "Protection absolue des mineurs :", text: "Tout contenu à caractère sexuel impliquant des mineurs est strictement prohibé et dénoncé aux autorités." },
        { strong: "Violence extrême & Gore :", text: "Torture, mutilations réelles, violence graphique gratuite ou incitation au suicide." },
        { strong: "Terrorisme & Illégalités :", text: "Promotion d'organisations criminelles, vente d'armes ou de substances illicites." },
        { strong: "Haine & Harcèlement :", text: "Discriminations, cyber-harcèlement et menaces directes contre des personnes." },
        { strong: "Escroqueries & Tromperies :", text: "Arnaques financières, spam et tromperie sur la nature du contenu." },
      ],
      s2_title: "2. Droits d'Auteur, Musique et Droits à l'Image",
      s2_intro: "La confiance de notre communauté repose sur le respect des droits légaux :",
      s2_points: [
        { strong: "Musique autorisée :", text: "Toute musique doit posséder une licence commerciale valide." },
        { strong: "Extraits originaux :", text: "Aucune vidéo ne doit intégrer de séquences protégées tierces sans droit." },
        { strong: "Droit à l'image :", text: "Tous les comédiens identifiables doivent avoir donné leur accord écrit." },
      ],
      s3_title: "3. Règles Relatives à l'IA et Médias Synthétiques",
      s3_intro: "L'utilisation de technologies génératives IA est encadrée par des règles strictes :",
      s3_points: [
        { strong: "Droits certifiés :", text: "Les créateurs doivent posséder les droits d'exploitation commerciale complets." },
        { strong: "Interdiction du clonage sans accord :", text: "Interdiction de cloner la voix ou le visage de personnes sans contrat formel." },
        { strong: "Transparence :", text: "Tout contenu IA peut être étiqueté selon les règles des magasins d'applications." },
      ],
      s4_title: "4. Pouvoir de Contrôle et Modération",
      s4_intro: "Drama Xoxo maintient un contrôle éditorial et se réserve le droit de :",
      s4_points: [
        "Procéder à une vérification préalable avant mise en ligne.",
        "Refuser ou suspendre tout épisode non conforme.",
        "Démonétiser temporairement ou définitivement une série contestée.",
        "Retirer immédiatement tout contenu sous réclamation légitime.",
      ],
      s5_title: "5. Signalement",
      s5_p_before: "Pour signaler un contenu non conforme, utilisez notre formulaire sur la ",
      s5_p_supportLink: "page Support & Signalement",
    },
    copyright: {
      title: "Politique de Droit d'Auteur & Procédure DMCA",
      subtitle: "Procédure formelle de notification pour la protection des œuvres originales et des droits de propriété intellectuelle.",
      lastUpdated: "Août 2026",
      s1_title: "1. Respect de la Propriété Intellectuelle",
      s1_p: "Drama Xoxo respecte les droits des créateurs et répond avec diligence aux notifications de violation présumée de droits d'auteur conformément aux lois DMCA.",
      s2_title: "2. Éléments Requis pour une Notification",
      s2_intro: "Pour être recevable, toute réclamation doit contenir les éléments suivants :",
      s2_elements: [
        { num: "1", strong: "Identité du réclamant :", text: "Nom complet, coordonnées postales, téléphone et e-mail valide." },
        { num: "2", strong: "Description de l'œuvre :", text: "Identification précise de l'œuvre originale dont vous détenez les droits." },
        { num: "3", strong: "Localisation du contenu contesté :", text: "Titre de la série, numéro d'épisode ou horodatage exact." },
        { num: "4", strong: "Déclaration de bonne foi :", text: "Attestation que l'usage n'est pas autorisé par l'ayant droit." },
        { num: "5", strong: "Déclaration sous peine de parjure :", text: "Attestation sur l'honneur de l'exactitude des informations fournies." },
        { num: "6", strong: "Signature :", text: "Signature physique ou électronique du titulaire ou de son représentant." },
      ],
      s3_title: "3. Contact pour les Réclamations",
      s3_p_unconfigured_before: "Les coordonnées directes de l'agent habilité seront publiées avant le lancement. En attendant, utilisez la ",
      s3_p_unconfigured_link: "page de support",
      s3_p_unconfigured_after: ".",
      s4_title: "4. Contre-Notification",
      s4_p: "Si un créateur estime que son contenu a été retiré par erreur, il peut déposer une contre-notification écrite motivée.",
      s5_title: "5. Récidive d'Atteinte aux Droits",
      s5_p: "Drama Xoxo applique une politique de clôture définitive pour tout compte récidiviste d'atteinte aux droits d'auteur.",
    },
    footer: {
      tagline: "Mini-séries. Grandes émotions.",
      description: "La destination incontournable des micro-fictions et mini-séries verticales immersives. Suspense, romance, secrets et cliffhangers conçus exclusivement pour le mobile.",
      platformTitle: "Plateforme",
      legalTitle: "Légal & Conformité",
      links: {
        home: "Accueil",
        discover: "Découvrir les séries",
        howItWorks: "Comment ça marche",
        creators: "Espace Créateurs",
        support: "Centre d'Aide & FAQ",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        creatorAgreement: "Accord Créateur",
        contentGuidelines: "Directives de Contenu",
        copyright: "Politique de Droit d'Auteur",
        deleteAccount: "Suppression de Compte",
      },
      allRightsReserved: "Tous droits réservés.",
      craftedWithLove: "Créé pour les passionnés d'histoires captivantes",
      version: "Production Release 1.0",
    },
    common: {
      backToHome: "Retour à l'accueil",
      officialDocument: "Document Officiel & Conformité",
      lastUpdated: "Dernière mise à jour :",
      legalFooterTitle: "Remarque Légale & Révision Périodique",
      legalFooterDesc: "Ce document est soumis à des ajustements techniques et juridiques continus en accord avec le déploiement opérationnel des services Drama Xoxo et des exigences des magasins d'applications.",
    }
  },

  // ==========================================
  // 🇬🇧 ENGLISH
  // ==========================================
  en: {
    nav: {
      home: "Home",
      discover: "Discover",
      creators: "Creators",
      support: "Support",
      comingSoonBadge: "Coming Soon on iOS & Android",
      comingSoonBtn: "Coming Soon",
      navigationLabel: "Navigation",
      creatorInfoLabel: "Creator Info",
      creatorAgreement: "Creator Agreement",
    },
    hero: {
      badge: "Official Vertical Streaming Platform",
      title1: "Short stories.",
      title2: "Intense emotions.",
      description: "Discover captivating vertical mini-series designed to be enjoyed anywhere, anytime.",
      genres: "Drama • Romance • Secrets • Passion • Suspense",
      ctaPrimary: "Coming Soon",
      ctaSecondary: "Become a Creator",
      formatVertical: "9:16 Vertical Format",
      shortEpisodes: "1-2 Min Episodes",
      mobileFirst: "100% Mobile-First",
      modalTitle: "Launching Very Soon",
      modalDesc: "The official Drama Xoxo apps for iOS and Android are in their final preparation stage for App Store and Google Play submission.",
      modalPoint1: "Exclusive high-definition mini-series",
      modalPoint2: "Ultra-smooth vertical player with gesture navigation",
      modalPoint3: "Daily rewards and coin bonus system",
      modalClose: "Got it",
      vipPreview: "VIP PREVIEW",
      freeEpisode: "Free • 1 min 45s",
      cliffhangerBadge: "Cliffhangers",
      cliffhangerDesc: "Every episode ends on an irresistible edge-of-your-seat hook.",
      qualityBadge: "HD Quality",
      qualityDesc: "Optimized for fast mobile networks.",
    },
    discover: {
      badge: "The Drama Xoxo Experience",
      title: "A new way to experience storytelling",
      description: "Drama Xoxo transforms stories into short, vertical, and addictive experiences tailored for your phone. Pick a series, immerse yourself, and skip to the next episode in seconds.",
      seriesTitle: "Mini-Series Spotlight",
      seriesSubtitle: "Rich cinematic worlds crafted to captivate from the very first frame.",
      comingSoonTag: "Upcoming",
      episodes: "Episodes",
      concepts: {
        vertical: { title: "Vertical Stories", desc: "Immersive 9:16 aspect ratio built specifically for one-handed smartphone viewing." },
        short: { title: "Short Episodes", desc: "Concise 1 to 2-minute chapters where every second drives the plot forward." },
        cliffhangers: { title: "Addictive Cliffhangers", desc: "Intense episode endings that keep you wanting more immediately." },
        romance: { title: "Romance & Passion", desc: "Complex love stories, betrayal, corporate rivalries, and intertwined fates." },
        suspense: { title: "Suspense & Secrets", desc: "Thrilling mysteries where every revelation shakes the characters' world." },
        exclusive: { title: "Exclusive Originals", desc: "Original productions created by passionate filmmakers and storytellers." },
      },
      categories: {
        all: "All",
        romance: "Romance & Passion",
        thriller: "Thriller & Suspense",
        secrets: "Secrets & Revenge",
      },
      series: {
        s1: { title: "The Billionaire's Secret", genre: "Romance & Revenge", synopsis: "Betrayed by her own family, she returns under a secret identity to the grand ball of the city's most powerful heir.", highlight: "Episodes 1 to 30 in 9:16 format", tag: "TRENDING #1" },
        s2: { title: "Revenge in Port-au-Prince", genre: "Thriller & Action", synopsis: "In high-stakes circles of influence, a forbidden alliance threatens to expose elite secrets.", highlight: "Breathtaking suspense & cliffhangers", tag: "NEW RELEASE" },
        s3: { title: "Double Love Game", genre: "Romance & CEO Rivalry", synopsis: "A six-month fake marriage contract. But between power and genuine passion, the rules quickly crumble.", highlight: "Immersive 90-second episodes", tag: "POPULAR" },
        s4: { title: "The Masked Heiress", genre: "Drama & Passion", synopsis: "Cast away by her family, she discovers her true heritage and plans a stunning comeback.", highlight: "A Drama Xoxo Original Series", tag: "EXCLUSIVE" },
      }
    },
    howItWorks: {
      badge: "Simple & Addictive",
      title: "How It Works",
      subtitle: "An entertainment experience tailored to your lifestyle.",
      stepLabel: "Step",
      s1: { title: "Discover", desc: "Browse through mini-series across various genres: romance, thrillers, family secrets, and intense dramas." },
      s2: { title: "Watch", desc: "Enjoy rapid 1-2 minute episodes designed exclusively for smooth, immersive vertical viewing on your smartphone." },
      s3: { title: "Unlock the Story", desc: "Easily unlock upcoming episodes with daily rewards or a VIP pass and never miss a plot twist." },
    },
    creators: {
      badge: "Creator & Studio Program",
      title: "Your stories deserve an audience.",
      description: "Drama Xoxo empowers selected creators to publish their own vertical mini-series, grow their audience, and earn royalties on their content.",
      ctaPrimary: "Become a Creator",
      ctaAgreement: "Read Creator Agreement",
      royaltyDisclaimer: "* The applicable creator royalty rate is determined by Drama Xoxo and communicated under the terms of the Creator Agreement.",
      cardTitle: "Join the Ecosystem",
      cardSub: "Designed for directors, screenwriters, and actors",
      cardF1: "Optimized format: Dynamic vertical storytelling in high resolution.",
      cardF2: "Transparent monetization: Earnings based on qualified watch time and episode unlocks.",
      cardF3: "Intellectual property: You retain ownership of your original creative work.",
      cardF4: "Dedicated tools: Performance dashboards and series management suite.",
      qualityTitle: "Quality Commitment:",
      qualityDesc: "Every project undergoes editorial and technical review to ensure a premium viewing experience.",
      flowTitle: "The 6-Step Publishing Journey",
      steps: [
        { title: "Application", desc: "Submit your mini-series pitch or portfolio." },
        { title: "Selection & Agreement", desc: "Creator onboarding and agreement execution." },
        { title: "Production", desc: "Shoot and edit episodes in 9:16 vertical format." },
        { title: "Submission & Review", desc: "Quality moderation prior to official launch." },
        { title: "Publish & Reach", desc: "Distribution to enthusiastic drama fans." },
        { title: "Earn Royalties", desc: "Earn royalties based on eligible net revenue." },
      ],
      modalTitle: "Creator Application Portal",
      modalSubtitle: "Registrations opening soon",
      modalDesc: "The online submission portal and Creator Studio will activate upon official launch. You will be able to register your production studio or independent creator profile.",
      modalBeforeTitle: "Before applying, prepare:",
      modalP1: "Your mini-series pitch and synopsis.",
      modalP2: "Clearance warranties for music, actors, and visuals.",
      modalP3: "Compliance with our Content Guidelines.",
      modalBtnRules: "Review Guidelines",
      modalBtnClose: "Close",
    },
    appDownload: {
      badge: "Coming Soon",
      title: "Drama Xoxo is coming to mobile.",
      description: "Get ready to experience powerful storytelling in the palm of your hand. Our iOS and Android apps will deliver lightning-fast streaming, offline mode, and daily episodes.",
      b1: "Instant buffer-free streaming",
      b2: "New episode release alerts",
      b3: "Free daily reward coins",
      b4: "Favorites & watchlist management",
      appStoreSubtitle: "Download on the",
      googlePlaySubtitle: "Get it on",
      comingSoon: "Coming Soon",
      disclaimer: "* Direct app store links will be activated upon official store approval.",
      cardTitle: "Stay Tuned",
      cardDesc: "Follow our official announcements to be the first to stream original Drama Xoxo series at launch.",
      cardBadge: "Worldwide Availability • Multi-language",
    },
    support: {
      badge: "Help & Support Center",
      title: "How can we help you?",
      description: "Browse frequently asked questions or get in touch with our dedicated support team.",
      topics: {
        account: { title: "Account & Login", desc: "Password recovery, account access, email updates." },
        coins: { title: "Coins & VIP", desc: "Purchase restore, virtual coin balances, VIP passes." },
        playback: { title: "Playback & Quality", desc: "Video streaming, subtitles, loading issues." },
        legal: { title: "Security & Legal", desc: "Content reporting and DMCA copyright inquiries." },
      },
      faqTitle: "Frequently Asked Questions",
      contactTitle: "Contact Support",
      contactDesc: "Our team handles inquiries regarding user accounts, transactions, and content moderation.",
      hoursTitle: "Support Hours",
      hoursTime: "Monday - Friday • 9:00 AM - 6:00 PM UTC",
      hoursNote: "Standard response time within 24 to 48 business hours.",
      emailNotice: "Official support email addresses will be published prior to public launch.",
      form: {
        nameLabel: "Full Name *",
        namePlaceholder: "Jane Doe",
        emailLabel: "Email Address *",
        emailPlaceholder: "jane.doe@example.com",
        categoryLabel: "Inquiry Category *",
        subjectLabel: "Subject *",
        subjectPlaceholder: "e.g., Access issue on episode 5",
        messageLabel: "Detailed Description *",
        messagePlaceholder: "Please describe your situation...",
        submitBtn: "Submit Inquiry",
        successTitle: "Message Prepared Successfully",
        successDesc: "Thank you. Your inquiry has been validated. (Submission module ready for production API connection).",
        resetBtn: "Send another message",
      }
    },
    deleteAccount: {
      warningTitle: "Permanent Action",
      warningDesc: "Deleting your Drama Xoxo account permanently removes your access to unlocked episodes, unused virtual coins, and watch history.",
      appMethodTitle: "1. How to delete your account via the Mobile App",
      appMethodDesc: "If you have access to the Drama Xoxo app on your device, the fastest automated method is through your app settings:",
      appStepTitle: "In-App Steps:",
      appSteps: [
        "Open the Drama Xoxo application.",
        "Go to the Profile tab in the bottom right corner.",
        "Access the Settings menu (gear icon).",
        "Select Security & Privacy, then tap Delete My Account.",
        "Confirm your password to finalize deletion."
      ],
      consequencesTitle: "2. Consequences of Account Deletion",
      deletedTitle: "What will be permanently deleted:",
      deletedList: [
        "Account credentials and profile data.",
        "Watch history and favorited series.",
        "Virtual coin balances.",
        "Individual episode unlocks."
      ],
      retainedTitle: "What may be temporarily retained:",
      retainedList: [
        "In-app purchase transaction records for statutory tax and accounting obligations.",
        "Minimal security logs to prevent chargebacks and platform abuse.",
        "Settled creator royalty records as required by law."
      ],
      subscriptionNoteTitle: "3. Important Note Regarding VIP Subscriptions",
      subscriptionNoteDesc: "Notice: Deleting your account does not automatically cancel an active VIP subscription billed via Apple App Store or Google Play Store. You must manage and cancel active subscriptions directly in your Apple or Google account settings.",
      webFormTitle: "4. Web Account Deletion Request Form",
      webFormDesc: "If you cannot access the mobile application, you may submit a formal deletion request below.",
      emailLabel: "Email address associated with your Drama Xoxo account *",
      confirmCheckbox: "I understand that this action is irreversible and will permanently delete my data, coins, and unlocks.",
      submitBtn: "Submit Deletion Request",
      successTitle: "Deletion Request Logged",
      successDesc: "Your request has been registered. (Processing module ready for production backend integration).",
      resetBtn: "Reset",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Transparency regarding data collection, usage, and security within the Drama Xoxo platform.",
      lastUpdated: "August 2026",
      s1_title: "1. Introduction",
      s1_p1: "This Privacy Policy describes how Drama Xoxo (\"we\", \"our\", or \"us\") collects, uses, processes, and protects user information when accessing our website, mobile applications, and related services (collectively the \"Service\").",
      s1_p2: "We are committed to respecting user privacy and handling personal data responsibly in accordance with applicable data protection principles.",
      s2_title: "2. Information We May Collect",
      s2_intro: "Depending on your interactions with our Service, we may collect the following categories of information:",
      s2_points: [
        { strong: "Account Information:", text: "When creating an account or logging in, we may collect your email address, username, unique identifier, and language preferences." },
        { strong: "Usage Information:", text: "Data regarding your browsing on the Service, series viewed, watch history, episode progress, favorited content, and in-app interactions." },
        { strong: "Device & Technical Information:", text: "Device model, operating system version, standard device identifiers, IP address, and stability diagnostics." },
        { strong: "Transaction-related Information:", text: "Records of virtual coin purchases or VIP subscriptions processed via official app stores. We do not store complete payment card details directly." },
        { strong: "Creator Information:", text: "For creator partners, business contact details, application review data, and information required for calculating and remitting royalties." },
      ],
      s3_title: "3. Purposes of Information Use",
      s3_intro: "Collected data is used for the following purposes:",
      s3_points: [
        "Operating, maintaining, and delivering seamless video playback on the Service.",
        "Managing access to unlocked episodes, coin balances, and VIP benefits.",
        "Improving usability, technical performance, and content catalog quality.",
        "Preventing fraud, abuse, unauthorized access, and securing the community.",
        "Communicating important platform updates, customer support, and service notices.",
        "Complying with statutory, regulatory, and contractual obligations.",
      ],
      s4_title: "4. Information Sharing with Third Parties",
      s4_intro: "We do not sell personal data to third parties. We may share data under the following strict circumstances:",
      s4_points: [
        { strong: "Service Providers:", text: "Technical partners hosting video infrastructure, database services, content delivery networks (CDNs), and crash diagnostics." },
        { strong: "Legal Requirements:", text: "Where required by law, court order, or competent regulatory authority to protect rights, safety, or investigate violations." },
        { strong: "Business Transfers:", text: "In connection with any prospective merger, acquisition, reorganization, or sale of assets under equivalent confidentiality safeguards." },
      ],
      s5_title: "5. Data Retention",
      s5_p: "We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, maintain active accounts, or satisfy legal accounting and dispute prevention requirements.",
      s6_title: "6. User Rights & Account Deletion",
      s6_p1: "Depending on your jurisdiction, you may have rights regarding your personal data, including access, rectification, restriction, and erasure.",
      s6_p2_before: "You can request permanent deletion of your account and associated data at any time via our dedicated page: ",
      s6_p2_link: "Account Deletion",
      s7_title: "7. Children's Privacy",
      s7_p: "The Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children in this age group.",
      s8_title: "8. International Users & Transfers",
      s8_p: "Drama Xoxo operates globally. Information may be processed and stored on servers located internationally where our cloud infrastructure providers operate, with appropriate technical safeguards.",
      s9_title: "9. Policy Updates",
      s9_p: "We reserve the right to update this Privacy Policy to reflect operational or regulatory changes. The latest revision date will always appear at the top of this document.",
      s10_title: "10. Contact",
      s10_p_before: "For any questions or data requests, you can contact our team through our ",
      s10_p_supportLink: "support page",
      s10_p_unconfigured: " (direct email contact addresses will be finalized prior to public launch).",
    },
    terms: {
      title: "Terms of Use",
      subtitle: "General terms and conditions governing the use of Drama Xoxo platforms, apps, and services.",
      lastUpdated: "August 2026",
      s1_title: "1. Acceptance of Terms",
      s1_p: "By accessing the website, mobile applications, or any services provided by Drama Xoxo (\"we\", \"our\", or \"the Service\"), you agree to be bound by these Terms of Use.",
      s2_title: "2. Eligibility & Account Responsibilities",
      s2_p: "To use the Service, you must be of legal majority in your jurisdiction or possess valid parental or guardian consent. You agree to provide accurate information and safeguard your account credentials.",
      s3_title: "3. Digital Content & Services",
      s3_p: "Drama Xoxo offers digital entertainment streaming of original and licensed vertical mini-series. Access to certain episodes is free, while others require in-app unlock items (Coins) or an active VIP subscription.",
      s4_title: "4. Virtual Coins & VIP Memberships",
      s4_p1_strong: "4.1 Virtual Coins:",
      s4_p1_text: "Coins are digital virtual goods for exclusive use within Drama Xoxo. They have no real-world monetary value and cannot be exchanged for cash.",
      s4_p2_strong: "4.2 VIP Subscriptions:",
      s4_p2_text: "VIP access provides temporary privileges (such as ad-free viewing and unlimited series access) during the active subscription period.",
      s4_p3_strong: "4.3 Purchases & Billing:",
      s4_p3_text: "In-app purchases are processed via official app distribution stores (e.g., Apple App Store, Google Play Store) according to their respective billing policies.",
      s4_p4_strong: "4.4 Refund Policy:",
      s4_p4_text: "Unless mandated by applicable statutory consumer law or specific app store policies, digital content unlocks and consumed virtual items are final and non-refundable.",
      s5_title: "5. User Conduct & Community Rules",
      s5_intro: "When using Drama Xoxo, you agree not to:",
      s5_points: [
        "Copy, record, scrape, redistribute, or publicly rebroadcast video streams without express written permission.",
        "Attempt to circumvent technical security measures, digital rights management, or geo-restrictions.",
        "Use bots, automated scripts, or emulators to manipulate watch counts or coin systems.",
        "Post abusive, defamatory, hateful, obscene, or infringing comments.",
        "Impersonate another individual or creator on the Service.",
      ],
      s6_title: "6. Intellectual Property",
      s6_p: "All content, trademarks, logos, artwork, interfaces, sound recordings, and videos on the Service are the exclusive property of Drama Xoxo or its licensors.",
      s7_title: "7. Content Availability & Suspension",
      s7_p: "Series availability may change periodically. Drama Xoxo reserves the right to modify, remove, or suspend content without notice for editorial, technical, or legal reasons.",
      s8_title: "8. Disclaimer & Limitation of Liability",
      s8_p: "The Service is provided \"as is\" and \"as available\" without warranties of any kind. Drama Xoxo shall not be liable for indirect damages or service interruptions.",
      s9_title: "9. Changes to Terms",
      s9_p: "We may modify these Terms of Use at our discretion. Continued use of the Service following revisions constitutes acceptance of the updated terms.",
      s10_title: "10. Contact & Inquiries",
      s10_p_before: "For inquiries regarding these terms, please reach out via our ",
      s10_p_supportLink: "support page",
    },
    creatorAgreement: {
      title: "Creator Agreement & Partnership Terms",
      subtitle: "Contractual framework, distribution rights, legal warranties, and monetization for partner creators and production studios.",
      lastUpdated: "August 2026",
      s1_title: "1. Purpose of Agreement",
      s1_p: "This Creator Agreement defines the rights, duties, and financial terms applicable to individuals, studios, and entities submitting or distributing series on Drama Xoxo.",
      s2_title: "2. Eligibility & Onboarding",
      s2_p: "Creator partner status requires verified onboarding. Drama Xoxo retains exclusive discretion to evaluate, approve, or decline applications based on quality and editorial standards.",
      s3_title: "3. Intellectual Property & License Granted",
      s3_p1_strong: "3.1 Creator Ownership:",
      s3_p1_text: "The Creator retains intellectual property ownership over their original creative works.",
      s3_p2_strong: "3.2 Worldwide Distribution License:",
      s3_p2_text: "By submitting content, the Creator grants Drama Xoxo a license to host, transcode, distribute, stream, promote, and monetize content across official channels.",
      s4_title: "4. Rights Warranties (Music, Cast, Voices, Visuals)",
      s4_intro: "The Creator unconditionally represents and warrants that:",
      s4_points: [
        "They hold all necessary commercial music licenses (master and synchronization rights).",
        "They possess signed image release agreements for all featured actors and cast members.",
        "The content does not infringe on third-party copyrights, trademarks, or publicity rights.",
        "They assume responsibility for any claims arising from unauthorized embedded assets.",
      ],
      s5_title: "5. AI-Generated & Synthetic Media Content",
      s5_intro: "If any content incorporates generative AI or synthetic production tools:",
      s5_points: [
        { strong: "Commercial rights:", text: "The Creator must hold full commercial usage rights for the AI models and tools utilized." },
        { strong: "No non-consensual cloning:", text: "Voice cloning or likeness replication of real individuals without formal consent is strictly forbidden." },
        { strong: "Compliance:", text: "All AI-assisted content must adhere to our Content Guidelines." },
      ],
      s6_title: "6. Moderation & Editorial Review",
      s6_p: "Submitted episodes undergo quality and compliance review. Drama Xoxo reserves the right to reject, modify, demonetize, or remove non-compliant content.",
      s7_title: "7. Royalty Structure & Monetization",
      s7_p1_strong: "7.1 Applicable Royalty Rate:",
      s7_p1_text: "The applicable creator royalty rate is determined by Drama Xoxo and communicated in the Creator Studio or specific program terms. No fixed universal rate is guaranteed by default.",
      s7_p2_strong: "7.2 Eligible Net Revenue:",
      s7_p2_intro: "Royalties are calculated on Eligible Net Revenue after deducting:",
      s7_p2_points: [
        "App store platform distribution commissions (Apple App Store, Google Play Store).",
        "Applicable statutory taxes (VAT, sales tax, withholding).",
        "Refunds, chargebacks, and fraudulent transactions.",
      ],
      s7_p3_strong: "7.3 Qualified Views:",
      s7_p3_text: "Only authentic, qualified viewer engagement qualifies for monetization. Artificial engagement is strictly prohibited.",
      s7_p4_strong: "7.4 No Guaranteed Earnings:",
      s7_p4_text: "Drama Xoxo does not guarantee specific revenue levels, viewership volumes, or commercial success.",
      s8_title: "8. Payouts, Thresholds & Taxes",
      s8_p: "Royalty distributions occur according to payout schedules and minimum thresholds in the Creator Studio. The Creator is solely responsible for applicable tax obligations in their jurisdiction.",
      s9_title: "9. Termination & Content Removal",
      s9_p: "Either party may terminate this Agreement pursuant to notice terms. Severe safety or copyright breaches may result in immediate suspension.",
      s10_title: "10. Agreement Updates",
      s10_p: "Drama Xoxo may update these terms with reasonable prior notice to active creators.",
    },
    contentGuidelines: {
      title: "Content Guidelines",
      subtitle: "Quality standards, community rules, and editorial restrictions for creators on the Drama Xoxo platform.",
      lastUpdated: "August 2026",
      alert: "Compliance with these guidelines is mandatory for publishing and maintaining series on Drama Xoxo. Violations may result in episode rejection, demonetization, or account closure.",
      s1_title: "1. Strictly Prohibited Content",
      s1_intro: "The following content types are strictly prohibited on Drama Xoxo:",
      s1_points: [
        { strong: "Explicit Pornography & Non-Consensual Sexual Content:", text: "Explicit sexual acts, non-artistic full nudity, or sexual exploitation." },
        { strong: "Protection of Minors:", text: "Any sexualized or harmful content involving minors is reported to law enforcement immediately." },
        { strong: "Extreme Graphic Violence & Gore:", text: "Torture, graphic real violence, or self-harm encouragement." },
        { strong: "Terrorism & Illegal Activity:", text: "Promoting criminal/terrorist organizations, weapon sales, or illegal substances." },
        { strong: "Hate Speech & Harassment:", text: "Targeted discrimination, threats, or severe harassment against individuals." },
        { strong: "Scams & Deception:", text: "Financial fraud, deceptive content, or phishing." },
      ],
      s2_title: "2. Copyright, Music, and Likeness Rights",
      s2_intro: "Platform integrity relies on strict intellectual property compliance:",
      s2_points: [
        { strong: "Authorized Music:", text: "All soundtrack recordings must possess valid commercial licenses." },
        { strong: "Original Footage:", text: "No unauthorized TV/film excerpts or stolen clips are permitted." },
        { strong: "Actor Likeness:", text: "All identifiable performers must provide written consent for commercial streaming." },
      ],
      s3_title: "3. AI Media & Synthetic Production Rules",
      s3_intro: "Generative AI usage must satisfy clear transparency standards:",
      s3_points: [
        { strong: "Certified Commercial Rights:", text: "Creators must own full commercial licensing for all generative tools." },
        { strong: "No Non-Consensual Cloning:", text: "Cloning voices or deepfaking individuals without authorization is banned." },
        { strong: "Transparency:", text: "AI-generated media may be labeled according to app store guidelines." },
      ],
      s4_title: "4. Moderation & Enforcement",
      s4_intro: "Drama Xoxo maintains editorial oversight and reserves the right to:",
      s4_points: [
        "Review and approve episodes prior to distribution.",
        "Reject or require revisions for non-compliant material.",
        "Demonetize series undergoing dispute review.",
        "Immediately remove infringing or unlawful content.",
      ],
      s5_title: "5. Content Reporting",
      s5_p_before: "To report inappropriate content, please use our form on the ",
      s5_p_supportLink: "Support & Reporting page",
    },
    copyright: {
      title: "Copyright Policy & DMCA Notice",
      subtitle: "Formal reporting procedure for the protection of original works and intellectual property rights.",
      lastUpdated: "August 2026",
      s1_title: "1. Intellectual Property Protection",
      s1_p: "Drama Xoxo respects copyright owners and responds promptly to valid DMCA takedown notices.",
      s2_title: "2. Requisite Information for Notices",
      s2_intro: "To be legally sufficient, copyright infringement notices must include:",
      s2_elements: [
        { num: "1", strong: "Claimant Identity:", text: "Full legal name, mailing address, telephone number, and email address." },
        { num: "2", strong: "Work Description:", text: "Clear identification of the copyrighted work claimed to be infringed." },
        { num: "3", strong: "Infringing Content Location:", text: "Exact series title, episode number, URL, or timestamp." },
        { num: "4", strong: "Good-Faith Statement:", text: "A declaration that use is not authorized by the owner, agent, or law." },
        { num: "5", strong: "Perjury Declaration:", text: "A statement under penalty of perjury that the information is accurate." },
        { num: "6", strong: "Signature:", text: "Physical or electronic signature of the copyright owner or authorized representative." },
      ],
      s3_title: "3. Copyright Agent Contact",
      s3_p_unconfigured_before: "Designated copyright agent contact details will be published prior to public launch. Meanwhile, submit inquiries via our ",
      s3_p_unconfigured_link: "support page",
      s3_p_unconfigured_after: ".",
      s4_title: "4. Counter-Notification",
      s4_p: "Creators whose content was removed by mistake may file a formal counter-notice explaining the grounds for restoration.",
      s5_title: "5. Repeat Infringer Policy",
      s5_p: "Drama Xoxo enforces strict account termination for repeated copyright infringers.",
    },
    footer: {
      tagline: "Short series. Big emotions.",
      description: "The premier destination for immersive vertical micro-dramas. Suspense, romance, secrets, and cliffhangers built exclusively for mobile.",
      platformTitle: "Platform",
      legalTitle: "Legal & Compliance",
      links: {
        home: "Home",
        discover: "Discover Series",
        howItWorks: "How It Works",
        creators: "Creator Studio",
        support: "Help Center & FAQ",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        creatorAgreement: "Creator Agreement",
        contentGuidelines: "Content Guidelines",
        copyright: "Copyright Policy",
        deleteAccount: "Delete Account",
      },
      allRightsReserved: "All rights reserved.",
      craftedWithLove: "Crafted for passionate story lovers",
      version: "Production Release 1.0",
    },
    common: {
      backToHome: "Back to Home",
      officialDocument: "Official Document & Compliance",
      lastUpdated: "Last Updated:",
      legalFooterTitle: "Legal Notice & Ongoing Review",
      legalFooterDesc: "This document is subject to continuous legal and technical updates in alignment with Drama Xoxo service rollouts and app store compliance.",
    }
  },

  // ==========================================
  // 🇭🇹 HAITIAN CREOLE (Kreyòl Ayisyen)
  // ==========================================
  ht: {
    nav: {
      home: "Akèy",
      discover: "Dekouvri",
      creators: "Kreyatè",
      support: "Sipò",
      comingSoonBadge: "Byento sou iOS ak Android",
      comingSoonBtn: "Coming Soon",
      navigationLabel: "Navigasyon",
      creatorInfoLabel: "Info Kreyatè",
      creatorAgreement: "Akò Kreyatè",
    },
    hero: {
      badge: "Platfòm Ofisyèl Streaming Vètikal",
      title1: "Istwa kout.",
      title2: "Gwo emosyon.",
      description: "Dekouvri mini-seri vètikal kaptivan ki fèt pou gade nenpòt kote, nenpòt lè sou telefòn ou.",
      genres: "DRAM • WOMANS • SEKRÈ • PASYON • SISPANS",
      ctaPrimary: "Byento disponib",
      ctaSecondary: "Vin Kreyatè",
      formatVertical: "Fòma Vètikal 9:16",
      shortEpisodes: "Epizòd 1 a 2 minit",
      mobileFirst: "100% Pou Mobil",
      modalTitle: "Lansman Trè Byento",
      modalDesc: "Aplikasyon ofisyèl Drama Xoxo pou iOS ak Android yo nan dènye faz preparasyon pou piblikasyon sou App Store ak Google Play.",
      modalPoint1: "Mini-seri eksklizif an kalite siperyè HD",
      modalPoint2: "Lektè vètikal ultra-rapid ak jès fasil",
      modalPoint3: "Sistèm rekonpans ak pyès gratis chak jou",
      modalClose: "Mwen konprann",
      vipPreview: "VIP PREVIEW",
      freeEpisode: "Gratis • 1 min 45s",
      cliffhangerBadge: "Sispans",
      cliffhangerDesc: "Chak epizòd fini sou yon sispans ki ba w anvi wè rès la touswit.",
      qualityBadge: "Kalite HD",
      qualityDesc: "Optimisé pou rezo mobil rapid.",
    },
    discover: {
      badge: "Eksperyans Drama Xoxo",
      title: "Yon nouvo fason pou viv istwa yo",
      description: "Drama Xoxo transfòme istwa yo an epizòd kout, vètikal ak kaptivan ki fèt espesyalman pou telefòn ou. Chwazi yon seri, plonje nan istwa a epi pase nan pwochen epizòd la an kèk segonn.",
      seriesTitle: "Kout Je sou Mini-Seri yo",
      seriesSubtitle: "Istwa rich ki fèt pou kenbe atansyon w depi premye segonn lan.",
      comingSoonTag: "Ap Vini",
      episodes: "Epizòd",
      concepts: {
        vertical: { title: "Istwa Vètikal", desc: "Fòma immersion 9:16 ki fèt pou gade ak yon sèl men sou smartphone ou." },
        short: { title: "Epizòd Kout", desc: "Epizòd 1 a 2 minit kote chak segonn fè istwa a avanse san pèdi tan." },
        cliffhangers: { title: "Sispans Kaptivan", desc: "Finisman epizòd ki ba w anvi konnen sa k ap pase apre a san rete." },
        romance: { title: "Womans ak Pasyon", desc: "Bèl istwa damou, trayizon, rivalite ak gwo emosyon." },
        suspense: { title: "Sispans ak Sekrè", desc: "Mistè kote chak verite chanje lavi pèsonaj yo." },
        exclusive: { title: "Pwodiksyon Eksklizif", desc: "Kontni orijinal ki fèt pa kreyatè pasyone." },
      },
      categories: {
        all: "Tout",
        romance: "Womans ak Pasyon",
        thriller: "Aksyon ak Sispans",
        secrets: "Sekrè ak Revanch",
      },
      series: {
        s1: { title: "Sekrè Milyonè a", genre: "Womans & Revanch", synopsis: "Fanmi l trayi l, li retounen anba yon lòt idantite nan gwo fèt pi gwo eritye vil la.", highlight: "Epizòd 1 rive 30 an fòma 9:16", tag: "TANDANS #1" },
        s2: { title: "Revanch nan Pòtoprens", genre: "Aksyon & Sispans", synopsis: "Nan mitan gwo pouvwa, yon alyans entèdi menase revele pi gwo sekrè elit la.", highlight: "Gwo sispans ak aksyon", tag: "NOUVEVOTE" },
        s3: { title: "Jwèt Doub Damou", genre: "Womans & Rivalite", synopsis: "Yon fo kontra maryaj 6 mwa. Men ant pouvwa ak vrè santiman, tout règ yo chanje.", highlight: "Epizòd entans 90 segonn", tag: "POPILÈ" },
        s4: { title: "Erityè Degize a", genre: "Dram & Pasyon", synopsis: "Fanmi l voye l jete, li dekouvri vrè eritaj li epi li prepare yon gwo revanch.", highlight: "Yon pwodiksyon Drama Xoxo Originals", tag: "EKSKLIZIF" },
      }
    },
    howItWorks: {
      badge: "Fasil & Kaptivan",
      title: "Kijan sa fonksyone ?",
      subtitle: "Yon eksperyans ki adapte ak ritm lavi w.",
      stepLabel: "Etap",
      s1: { title: "Dekouvri", desc: "Eksplore mini-seri selon gou w : womans, sispans, sekrè fanmi ak gwo dram." },
      s2: { title: "Gade", desc: "Jwi epizòd kout 1 a 2 minit ki fèt espesyalman pou telefòn mobil ou." },
      s3: { title: "Kontinye Istwa a", desc: "Debloke rès epizòd yo fasilman ak pyès gratis chak jou oswa yon pas VIP." },
    },
    creators: {
      badge: "Pwogram Kreyatè ak Estidyo",
      title: "Istwa w yo merite piblik yo.",
      description: "Drama Xoxo pèmèt kreyatè chwazi yo pibliye pwòp mini-seri pa yo, devlope odyans yo epi touche revni (royalties) sou kontni yo.",
      ctaPrimary: "Vin Kreyatè",
      ctaAgreement: "Li Akò Kreyatè a",
      royaltyDisclaimer: "* Pousantaj revni kreyatè a detèmine pa Drama Xoxo epi kominike selon kondisyon Akò Kreyatè a.",
      cardTitle: "Antre nan Ekosistèm nan",
      cardSub: "Fèt pou reyalizatè, senaris ak aktè",
      cardF1: "Fòma optimisé : Istwa vètikal an kalite siperyè.",
      cardF2: "Monetizasyon klè : Revni kalkile sou vi kalifye ak acha epizòd.",
      cardF3: "Dwa Pwopriyete : Ou kenbe tout dwa sou kreyasyon orijinal ou yo.",
      cardF4: "Zouti dedye : Tablo kontwòl pou swiv pèfòmans seri w yo.",
      qualityTitle: "Angajman Kalite :",
      qualityDesc: "Chak pwojè pase anba yon kontwòl kalite teknik ak atistik strik anvan piblikasyon.",
      flowTitle: "Pakou piblikasyon an 6 etap",
      steps: [
        { title: "Kandidati", desc: "Soumèt konsèp mini-seri w oswa portfolio w." },
        { title: "Seleksyon & Akò", desc: "Validasyon pwofil ou ak siyati kontra a." },
        { title: "Pwodiksyon", desc: "Fime epi monte epizòd yo an fòma vètikal 9:16." },
        { title: "Revizyon", desc: "Kontwòl kalite ak konfòmite anvan mete sou platfòm lan." },
        { title: "Piblikasyon", desc: "Difize bay pasyone seri atravè lemond." },
        { title: "Touche Revni", desc: "Resevwa revni ou selon revni nèt kalifye yo." },
      ],
      modalTitle: "Espas Enskripsyon Kreyatè",
      modalSubtitle: "Enskripsyon ap louvri byento",
      modalDesc: "Pòtay soumèt pwojè a ak Creator Studio a ap disponib ofisyèlman nan lansman an.",
      modalBeforeTitle: "Anvan ou aplike, prepare :",
      modalP1: "Rezime ak sinopsis pwojè mini-seri w la.",
      modalP2: "Garanti dwa sou mizik, aktè ak imaj yo.",
      modalP3: "Respè pou Règleman sou Kontni yo.",
      modalBtnRules: "Li règleman yo",
      modalBtnClose: "Fèmen",
    },
    appDownload: {
      badge: "Lansman Byento",
      title: "Drama Xoxo ap vini sou mobil trè byento.",
      description: "Prepare w pou w viv gwo emosyon nan pla men w. Aplikasyon iOS ak Android nou yo ap ofri vitès, lekti san blokaj ak nouvo epizòd chak jou.",
      b1: "Lekti rapid san blokaj",
      b2: "Alèt lè nouvo epizòd soti",
      b3: "Pyès gratis chak jou",
      b4: "Mete seri w pi renmen yo sou kote",
      appStoreSubtitle: "Telechaje sou",
      googlePlaySubtitle: "Disponib sou",
      comingSoon: "Coming Soon",
      disclaimer: "* Lyen telechajman dirèk yo ap aktive le pli vit ke aplikasyon yo disponib sou magazen ofisyèl yo.",
      cardTitle: "Rete Enfòme",
      cardDesc: "Swiv anons ofisyèl yo pou w pami premye moun ki dekouvri seri Drama Xoxo yo.",
      cardBadge: "Disponib toupatou • Plizyè lang",
    },
    support: {
      badge: "Sant Èd ak Asistans",
      title: "Kijan nou ka ede w ?",
      description: "Gade repons pou kesyon moun poze souvan oswa kontakte ekip sipò nou an.",
      topics: {
        account: { title: "Kont ak Koneksyon", desc: "Rekipere modpas, chanje imèl." },
        coins: { title: "Pyès ak VIP", desc: "Retabli acha, balans pyès vityèl." },
        playback: { title: "Lekti ak Kalite", desc: "Problèm videyo, soutit ak vitès." },
        legal: { title: "Sekirite ak Lwa", desc: "Siyale kontni ak dwa otè DMCA." },
      },
      faqTitle: "Kesyon Moun Poze Souvan (FAQ)",
      contactTitle: "Kontakte Sipò a",
      contactDesc: "Ekip nou an la pou reponn tout kesyon sou kont, acha ak kontni.",
      hoursTitle: "Disponibilite",
      hoursTime: "Lendi rive Vandredi • 9:00 AM - 6:00 PM UTC",
      hoursNote: "Tan repons regilye ant 24 a 48 èdtan ouvrab.",
      emailNotice: "Adrès imèl ofisyèl yo ap pibliye anvan lansman an.",
      form: {
        nameLabel: "Non konplè w *",
        namePlaceholder: "Jan Batis",
        emailLabel: "Adrès Imèl *",
        emailPlaceholder: "jan.batis@egzanp.com",
        categoryLabel: "Kategori demann lan *",
        subjectLabel: "Sijè *",
        subjectPlaceholder: "Egz: Problèm pou gade epizòd 5",
        messageLabel: "Eksplikasyon detaye *",
        messagePlaceholder: "Eksplike sitiyasyon w la klèman...",
        submitBtn: "Voye Demann lan",
        successTitle: "Mesaj la Prepare avèk Siksè",
        successDesc: "Mèsi. Fòmilè a anrejistre enfòmasyon w yo. (Modil sa a pare pou koneksyon ak API ofisyèl la).",
        resetBtn: "Voye yon lòt mesaj",
      }
    },
    deleteAccount: {
      warningTitle: "Aksyon Definitif",
      warningDesc: "Siprime kont Drama Xoxo w la ap efase nèt tout epizòd ou te debloke, pyès (Coins) ou te genyen, ak tout istwa seri ou te gade.",
      appMethodTitle: "1. Kijan pou w siprime kont ou depi nan Aplikasyon Mobil la",
      appMethodDesc: "Si w gen aksè a aplikasyon an sou telefòn ou, men fason ki pi rapid la :",
      appStepTitle: "Etap nan aplikasyon an :",
      appSteps: [
        "Ouvri aplikasyon Drama Xoxo a.",
        "Ale nan onglet Pwofil anba adwat.",
        "Klike sou Paramèt (ikòn engrenaj).",
        "Chwazi Sekirite & Konfidansyalite epi klike sou Siprime kont mwen.",
        "Mete modpas ou pou konfime sipresyon an."
      ],
      consequencesTitle: "2. Konsekans Sipresyon Kont lan",
      deletedTitle: "Sa k ap efase nèt :",
      deletedList: [
        "Enfòmasyon koneksyon ak pwofil ou.",
        "Istwa seri ou te gade ak sa w te mete nan favori.",
        "Balans pyès vityèl (Coins) ou te genyen.",
        "Tout epizòd ou te debloke."
      ],
      retainedTitle: "Sa ki ka konsève pou rezon legal :",
      retainedList: [
        "Prèv tranzaksyon acha pou konfòmite fiskal ak kontablite.",
        "Enfòmasyon sekirite minimòm pou evite fwod.",
        "Dosye revni kreyatè ki te deja peye."
      ],
      subscriptionNoteTitle: "3. Nòt Enpòtan sou Abònman VIP",
      subscriptionNoteDesc: "Atansyon : Siprime kont ou pa anile otomatikman yon abònman VIP ou te pran sou Apple App Store oswa Google Play Store. Ou dwe anile li dirèkteman nan paramèt Apple oswa Google ou.",
      webFormTitle: "4. Fòmilè Demann Sipresyon sou Sit la",
      webFormDesc: "Si w pa gen aksè a aplikasyon mobil lan ankò, ou ka voye yon demann ofisyèl anba a.",
      emailLabel: "Adrès imèl ki lye ak kont Drama Xoxo w la *",
      confirmCheckbox: "Mwen konprann aksyon sa a se pou tout tan e li pral efase tout done mwen, pyès mwen ak epizòd mwen yo.",
      submitBtn: "Soumèt demann sipresyon an",
      successTitle: "Demann lan Anrejistre",
      successDesc: "Demann sipresyon w la anrejistre nan sistèm nan. (Pare pou konekte ak backend la).",
      resetBtn: "Rekòmanse",
    },
    privacy: {
      title: "Politik Konfidansyalite",
      subtitle: "Transparans sou fason nou kolekte, itilize ak pwoteje done ou sou platfòm Drama Xoxo.",
      lastUpdated: "Out 2026",
      s1_title: "1. Entwodiksyon",
      s1_p1: "Politik Konfidansyalite sa a eksplike kijan Drama Xoxo (« nou » oswa « platfòm lan ») kolekte, itilize, trete ak pwoteje enfòmasyon itilizatè yo lè yo itilize sit web nou, aplikasyon mobil nou ak sèvis asosye yo (yo rele « Sèvis la »).",
      s1_p2: "Nou pran angajman pou respekte vi prive tout itilizatè nou yo epi trete done pèsonèl yo avèk responsablite selon prensip pwoteksyon lwa yo egzije.",
      s2_title: "2. Enfòmasyon nou ka kolekte",
      s2_intro: "Selon fason ou itilize Sèvis la, nou ka kolekte kategori enfòmasyon sa yo :",
      s2_points: [
        { strong: "Enfòmasyon sou kont lan :", text: "lè w kreye yon kont, nou ka kolekte imèl ou, non itilizatè, idantifyan inik ak lang ou chwazi." },
        { strong: "Enfòmasyon sou itilizasyon :", text: "istwa seri ou gade, pwogresyon nan epizòd yo, seri ou mete nan favori ak entèraksyon sou aplikasyon an." },
        { strong: "Enfòmasyon teknik sou aparèy la :", text: "modèl telefòn ou, vèsyon sistèm nan, adrès IP ak rapò dyagnostik pou asire estabilite lekti a." },
        { strong: "Enfòmasyon sou tranzaksyon :", text: "prèv acha pyès vityèl (Coins) oswa abònman VIP ki fèt atravè magazen ofisyèl Apple ak Google Play." },
        { strong: "Enfòmasyon sou kreyatè yo :", text: "pou patnè kreyatè yo, kowòdone pwofesyonèl ak enfòmasyon ki nesesè pou kalkile epi voye revni (royalties) yo." },
      ],
      s3_title: "3. Poukisa nou itilize enfòmasyon sa yo",
      s3_intro: "Done nou kolekte yo sèvi pou :",
      s3_points: [
        "Asire bon fonksyònman ak lekti videyo san blokaj sou Sèvis la.",
        "Jere aksè nan epizòd ou debloke yo, balans pyès ou ak avantaj VIP ou yo.",
        "Amelyore kalite teknik ak katalòg seri nou yo.",
        "Evite fwod, abi ak aksè san otorizasyon pou pwoteje kominote a.",
        "Kominike avèk ou sou mizajou enpòtan ak sipò kliyan.",
        "Respekte obligasyon legal ak fiskal nou yo.",
      ],
      s4_title: "4. Pataje enfòmasyon ak lòt pati",
      s4_intro: "Nou pa vann done pèsonèl ou bay okenn moun. Nou ka pataje done sèlman nan ka sa yo :",
      s4_points: [
        { strong: "Patnè teknik :", text: "founisè sèvè videyo, baz done ak rezo distribisyon kontni (CDN) ki nesesè pou difizyon an." },
        { strong: "Obligasyon legal :", text: "si lalwa oswa yon tribinal mande sa pou pwoteje sekirite ak dwa kominote a." },
        { strong: "Operasyon antrepriz :", text: "nan ka yon fizyon oswa restriktirasyon, avèk menm nivo pwoteksyon vi prive a." },
      ],
      s5_title: "5. Konsèvasyon done yo",
      s5_p: "Nou konsève done pèsonèl ou pandan tan ki nesesè pou bay sèvis la, kenbe kont ou aktif, oswa pou reponn ak obligasyon kontab ak legal.",
      s6_title: "6. Dwa ou ak sipresyon kont",
      s6_p1: "Ou gen dwa mande aksè, koreksyon oswa efase done pèsonèl ou a nenpòt ki moman.",
      s6_p2_before: "Ou ka mande siprime kont ou ak tout done ki lye avè l sou paj dedye nou an : ",
      s6_p2_link: "Sipresyon de Kont",
      s7_title: "7. Pwoteksyon minè yo",
      s7_p: "Sèvis la pa fèt pou timoun ki gen mwens pase 13 lane. Nou pa kolekte done timoun nan laj sa a espre.",
      s8_title: "8. Itilizatè entènasyonal yo",
      s8_p: "Drama Xoxo fonksyone nan nivo entènasyonal. Done yo ka estoke sou sèvè ki nan diferan peyi kote patnè nou yo ye, avèk tout sekirite teknik ki nesesè.",
      s9_title: "9. Chanjman nan politik la",
      s9_p: "Nou ka mete politik sa a ajou lè sa nesesè. Dènye dat mizajou a ap toujou parèt anlè dokiman an.",
      s10_title: "10. Kontak",
      s10_p_before: "Pou nenpòt kesyon sou done pèsonèl ou, ou ka kontakte ekip nou an sou ",
      s10_p_supportLink: "paj sipò nou an",
      s10_p_unconfigured: " (adrès imèl ofisyèl yo ap disponib anvan lansman an).",
    },
    terms: {
      title: "Kondisyon Itilizasyon",
      subtitle: "Règ jeneral ki gouvène itilizasyon platfòm, aplikasyon ak sèvis Drama Xoxo.",
      lastUpdated: "Out 2026",
      s1_title: "1. Akseptasyon Kondisyon yo",
      s1_p: "Lè w itilize sit web, aplikasyon mobil oswa nenpòt sèvis Drama Xoxo (« nou » oswa « Sèvis la »), ou aksepte respekte Kondisyon Itilizasyon sa yo.",
      s2_title: "2. Elijibilite ak Kont",
      s2_p: "Pou itilize Sèvis la, ou dwe gen laj majite nan peyi w oswa gen pèmisyon paran w. Ou angaje w pou bay enfòmasyon ki kòrèk epi kenbe modpas ou an sekirite.",
      s3_title: "3. Kontni Dijital ak Sèvis",
      s3_p: "Drama Xoxo ofri yon sèvis difizyon mini-seri vètikal orijinal oswa anba lisans. Gen epizòd ki gratis, epi gen lòt ki mande pyès (Coins) oswa yon abònman VIP pou debloke yo.",
      s4_title: "4. Pyès Vityèl (Coins) ak Abònman VIP",
      s4_p1_strong: "4.1 Pyès Vityèl (Coins) :",
      s4_p1_text: "Coins yo se byen vityèl ki sèvi sèlman nan aplikasyon Drama Xoxo a. Yo pa gen okenn valè lajan reyèl epi yo pa ka chanje pou lajan kach.",
      s4_p2_strong: "4.2 Abònman VIP :",
      s4_p2_text: "Pas VIP a ba w avantaj pou gade seri san piblisite ak aksè illimite pandan tan abònman an valab.",
      s4_p3_strong: "4.3 Acha ak Peman :",
      s4_p3_text: "Tout acha fèt atravè sistèm peman ofisyèl Apple App Store ak Google Play Store selon règleman pa yo.",
      s4_p4_strong: "4.4 Règleman sou Ranbousman :",
      s4_p4_text: "Acha kontni dijital ki deja debloke oswa konsome konsidere kòm final epi yo pa ranbousab, sof si lalwa oswa magazen aplikasyon an mande sa.",
      s5_title: "5. Règleman sou Konduit Itilizatè",
      s5_intro: "Lè w ap itilize Drama Xoxo, ou pran angajman pou w PA :",
      s5_points: [
        "Kopye, anrejistre, telechaje ilegalman oswa re-difize videyo yo san pèmisyon ekri.",
        "Eseye kase sekirite teknik oswa restriksyon jeyografik platfòm lan.",
        "Itilize wobo oswa zouti otomatik pou manipile vi oswa pyès yo.",
        "Pibliye kòmantè ki gen jouman, rayisman oswa ki atake lòt moun.",
        "Pran pòz ou se yon lòt moun oswa yon kreyatè.",
      ],
      s6_title: "6. Dwa Pwopriyete Entèlektyèl",
      s6_p: "Tout kontni, mak, logo, grafik, mizik ak videyo ki sou Sèvis la se pwopriyete eksklizif Drama Xoxo oswa patnè li yo.",
      s7_title: "7. Disponibilite Kontni ak Sispansyon",
      s7_p: "Katalòg seri yo ka chanje. Drama Xoxo gen dwa modifye oswa retire nenpòt seri san avètisman pou rezon legal oswa teknik.",
      s8_title: "8. Limit Responsablite",
      s8_p: "Sèvis la bay « jan li ye a ». Drama Xoxo pa responsab pou okenn domaj endirèk oswa entèripsyon rezo.",
      s9_title: "9. Chanjman nan Kondisyon yo",
      s9_p: "Nou ka revize Kondisyon sa yo lè sa nesesè. Si w kontinye itilize Sèvis la apre chanjman yo, sa vle di ou aksepte yo.",
      s10_title: "10. Kontak",
      s10_p_before: "Pou nenpòt kesyon sou kondisyon sa yo, ou ka kontakte nou sou ",
      s10_p_supportLink: "paj sipò a",
    },
    creatorAgreement: {
      title: "Akò Kreyatè & Kondisyon Patenarya",
      subtitle: "Kad legal, dwa difizyon, garanti ak monetizasyon pou kreyatè ak estidyo patnè yo.",
      lastUpdated: "Out 2026",
      s1_title: "1. Objektif Akò a",
      s1_p: "Akò Kreyatè sa a defini dwa, responsablite ak kondisyon finansye pou tout kreyatè oswa estidyo ki soumèt seri sou Drama Xoxo.",
      s2_title: "2. Elijibilite ak Validasyon",
      s2_p: "Pou vin kreyatè patnè, ou dwe soumèt yon kandidati ki valide. Drama Xoxo gen dwa eksklizif pou aksepte oswa refize yon pwojè.",
      s3_title: "3. Dwa Pwopriyete ak Lisans",
      s3_p1_strong: "3.1 Pwopriyete Kreyatè a :",
      s3_p1_text: "Kreyatè a kenbe tout dwa pwopriyete entèlektyèl sou kreyasyon orijinal li yo.",
      s3_p2_strong: "3.2 Lisans Difizyon Entènasyonal :",
      s3_p2_text: "Lè w soumèt yon seri, ou bay Drama Xoxo lisans pou estoke, difize, fè pwomosyon ak monetize kontni an sou platfòm li yo.",
      s4_title: "4. Garanti sou Dwa (Mizik, Aktè, Vwa ak Imaj)",
      s4_intro: "Kreyatè a garanti san kondisyon ke li :",
      s4_points: [
        "Gen tout lisans mizik ki nesesè pou tout chante ki nan seri a.",
        "Gen otorizasyon ekri ak kontra dwa imaj pou tout aktè ki parèt nan videyo a.",
        "Pa vyole dwa otè okenn lòt moun.",
        "Pran responsablite pou nenpòt pwoblèm legal ki sòti nan eleman li te itilize san dwa.",
      ],
      s5_title: "5. Kontni ki fèt ak Entèlijans Atifisyèl (IA)",
      s5_intro: "Si yon pati nan kontni an itilize zouti IA :",
      s5_points: [
        { strong: "Dwa komèsyal :", text: "Kreyatè a dwe gen dwa pou itilize zouti IA yo pou fè komès." },
        { strong: "Entèdiksyon klonaj vwa san akò :", text: "Li entèdi nèt pou klone vwa oswa figi moun san akò ekri yo." },
        { strong: "Konfòmite :", text: "Tout kontni dwe respekte Règleman sou Kontni yo." },
      ],
      s6_title: "6. Moderasyon ak Kontwòl Kalite",
      s6_p: "Chak epizòd pase nan yon kontwòl kalite anvan piblikasyon. Drama Xoxo ka mande chanjman oswa retire nenpòt epizòd ki pa konfòm.",
      s7_title: "7. Estrikti Revni (Royalties) ak Monetizasyon",
      s7_p1_strong: "7.1 Pousantaj Revni :",
      s7_p1_text: "Pousantaj revni kreyatè a detèmine pa Drama Xoxo epi kominike nan Creator Studio a oswa nan kontra espesifik la. Pa gen okenn pousantaj fiks garanti pa defo.",
      s7_p2_strong: "7.2 Revni Nèt Kalifye :",
      s7_p2_intro: "Revni yo kalkile sou baz Revni Nèt Kalifye apre dediksyon :",
      s7_p2_points: [
        "Frè distribisyon magazen aplikasyon yo (Apple App Store, Google Play Store).",
        "Taks legal ki aplikab yo.",
        "Ranbousman ak tranzaksyon fwod.",
      ],
      s7_p3_strong: "7.3 Vi Kalifye :",
      s7_p3_text: "Sèlman moun reyèl ki gade seri a ki konte nan kalkil revni an. Li entèdi nèt pou itilize fo vi.",
      s7_p4_strong: "7.4 Pa gen revni garanti :",
      s7_p4_text: "Drama Xoxo pa garanti yon kantite lajan oswa yon kantite vi fiks davans.",
      s8_title: "8. Peman ak Taks",
      s8_p: "Peman yo fèt selon kalandriye ak montan minimòm ki defini nan Creator Studio a. Kreyatè a responsab pou peye taks sou revni li nan peyi kote l ap viv la.",
      s9_title: "9. Anilasyon ak Retrè Kontni",
      s9_p: "Chak pati ka mete fen nan akò a selon kondisyon yo. Nan ka gwo vyolasyon dwa otè, kont kreyatè a ka fèmen san avètisman.",
      s10_title: "10. Chanjman nan Akò a",
      s10_p: "Drama Xoxo ka mete akò a ajou epi l ap avèti kreyatè yo davans.",
    },
    contentGuidelines: {
      title: "Règleman sou Kontni",
      subtitle: "Nòm kalite, règleman kominotè ak restriksyon pou kreyatè sou platfòm Drama Xoxo.",
      lastUpdated: "Out 2026",
      alert: "Tout kreyatè oblije respekte règleman sa yo pou pibliye seri sou Drama Xoxo. Si w pa respekte yo, epizòd ou yo ka rejte oswa kont ou ka fèmen.",
      s1_title: "1. Kontni ki Entèdi Nèt",
      s1_intro: "Li entèdi nèt pou pibliye oswa ankouraje kontni sa yo :",
      s1_points: [
        { strong: "Pònografi & Zak Seksyèl San Konsantman :", text: "Imaj zak seksyèl klè oswa eksplwatasyon seksyèl anba nenpòt fòm." },
        { strong: "Pwoteksyon Timoun :", text: "Tout kontni seksyèl ki enplike timoun entèdi nèt e y ap denonse l bay lapolis imedyatman." },
        { strong: "Gwo Vyolans & Mutilasyon :", text: "Zak tòti, vyolans ekstrèm oswa ankouraje moun fè tèt yo mal." },
        { strong: "Teroris & Zafè Ilegal :", text: "Pwomosyon gang, vann zam oswa dwòg ilegal." },
        { strong: "Rayisman & Diskrimasyon :", text: "Atak sou moun pou koulè po yo, relijyon oswa sèks yo." },
        { strong: "Fwod & Magouy :", text: "Eskrokri, vòlè kòb oswa bay fo enfòmasyon pou twonpe moun." },
      ],
      s2_title: "2. Dwa Otè, Mizik ak Dwa Imaj",
      s2_intro: "Platfòm nou an baze sou respè pou dwa lòt atis yo :",
      s2_points: [
        { strong: "Mizik ki gen lisans :", text: "Tout mizik dwe gen otorizasyon komèsyal fòmèl." },
        { strong: "Videyo orijinal :", text: "Pa pran moso fim oswa videyo lòt moun san pèmisyon." },
        { strong: "Dwa aktè yo :", text: "Tout aktè ki parèt dwe siyen yon papye ki bay dwa pou pase imaj yo." },
      ],
      s3_title: "3. Règ sou Entèlijans Atifisyèl (IA)",
      s3_intro: "Itilizasyon IA dwe fèt anba transparans :",
      s3_points: [
        { strong: "Dwa itilizasyon :", text: "Kreyatè a dwe gen lisans pou zouti IA li itilize yo." },
        { strong: "Pa klone vwa san pèmisyon :", text: "Li entèdi pou klone vwa oswa figi moun san akò ekri yo." },
        { strong: "Transparans :", text: "Kontni IA ka make pou enfòme itilizatè yo selon règ magazen aplikasyon yo." },
      ],
      s4_title: "4. Moderasyon ak Kontwòl",
      s4_intro: "Drama Xoxo kenbe kontwòl sou sa k ap pase sou platfòm lan epi li ka :",
      s4_points: [
        "Verifye epizòd yo anvan yo pibliye.",
        "Refize oswa sispann nenpòt seri ki pa respekte règ yo.",
        "Bloke lajan yon seri si gen plent legal sou li.",
        "Retire imedyatman nenpòt kontni ki vyole dwa otè.",
      ],
      s5_title: "5. Siyale yon Kontni",
      s5_p_before: "Si w wè yon kontni ki pa respekte règleman yo, tanpri siyale l sou ",
      s5_p_supportLink: "paj Sipò ak Siyalman nou an",
    },
    copyright: {
      title: "Politik Dwa Otè & Pwosedi DMCA",
      subtitle: "Pwosedi ofisyèl pou pwoteje zèv orijinal ak dwa pwopriyete entèlektyèl.",
      lastUpdated: "Out 2026",
      s1_title: "1. Respè pou Dwa Otè",
      s1_p: "Drama Xoxo respekte dwa kreyatè yo epi li reponn vit ak tout plent legal sou dwa otè selon lwa DMCA yo.",
      s2_title: "2. Enfòmasyon ki Nesesè pou Fè yon Plent",
      s2_intro: "Pou plent ou an valab, li dwe genyen enfòmasyon sa yo :",
      s2_elements: [
        { num: "1", strong: "Idantite w :", text: "Non konplè w, adrès, nimewo telefòn ak imèl ou." },
        { num: "2", strong: "Deskripsyon zèv ou a :", text: "Detay sou fim, mizik oswa travay ou ki pwoteje pa dwa otè a." },
        { num: "3", strong: "Kote kontni an ye sou sit la :", text: "Tit seri a, nimewo epizòd la oswa minit egzak la." },
        { num: "4", strong: "Deklarasyon bòn fwa :", text: "Yon deklarasyon ki di ou pa t bay otorizasyon pou itilize travay ou a." },
        { num: "5", strong: "Deklarasyon sou lonè :", text: "Yon deklarasyon sou lonè ki sètifye enfòmasyon ou bay yo se verite." },
        { num: "6", strong: "Siyati :", text: "Siyati elektwonik oswa sou papye moun ki gen dwa yo." },
      ],
      s3_title: "3. Kontak pou Plent Dwa Otè",
      s3_p_unconfigured_before: "Kowòdone ofisyèl yo ap pibliye anvan lansman an. Pandan tan sa a, ou ka itilize ",
      s3_p_unconfigured_link: "paj sipò nou an",
      s3_p_unconfigured_after: ".",
      s4_title: "4. Kont-Notifikasyon",
      s4_p: "Si yon kreyatè panse yo te retire videyo l la pa erè, li ka voye yon eksplikasyon ekri pou defann dwa l.",
      s5_title: "5. Sanksyon pou Moun ki Repete Erè",
      s5_p: "Drama Xoxo ap fèmen nèt kont nenpòt kreyatè ki repete vyolasyon dwa otè plizyè fwa.",
    },
    footer: {
      tagline: "Mini-seri. Gwo emosyon.",
      description: "Platfòm referans pou mini-seri vètikal kaptivan. Sispans, womans, sekrè ak dram ki fèt pou mobil.",
      platformTitle: "Platfòm",
      legalTitle: "Lwa & Konfòmite",
      links: {
        home: "Akèy",
        discover: "Dekouvri seri yo",
        howItWorks: "Kijan sa fonksyone",
        creators: "Espas Kreyatè",
        support: "Sant Èd & FAQ",
        privacy: "Politik Konfidansyalite",
        terms: "Kondisyon Itilizasyon",
        creatorAgreement: "Akò Kreyatè",
        contentGuidelines: "Règleman sou Kontni",
        copyright: "Politik Dwa Otè",
        deleteAccount: "Siprime Kont",
      },
      allRightsReserved: "Tout dwa rezève.",
      craftedWithLove: "Fèt ak pasyon pou amatè bèl istwa",
      version: "Production Release 1.0",
    },
    common: {
      backToHome: "Retounen sou Akèy la",
      officialDocument: "Dokiman Ofisyèl & Konfòmite",
      lastUpdated: "Dènye mizajou :",
      legalFooterTitle: "Nòt Legal & Revizyon",
      legalFooterDesc: "Dokiman sa a ap mete ajou regilyèman pou l toujou konfòm ak sèvis Drama Xoxo yo ak egzijans magazen aplikasyon yo.",
    }
  }
};
