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
  // 🇫🇷 FRENCH (Principal)
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

  // 🇬🇧 ENGLISH
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

  // 🇭🇹 HAITIAN CREOLE (Kreyòl Ayisyen)
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
      genres: "Dram • Womans • Sekrè • Pasyon • Sispans",
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
