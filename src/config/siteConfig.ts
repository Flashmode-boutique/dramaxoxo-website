/**
 * DRAMA XOXO — Centralized Site Configuration
 * 
 * All external links, contact emails, and social handles are centrally managed here.
 * Set values to valid URLs/emails when official production endpoints are ready.
 * When set to null, UI components cleanly display "Coming Soon" or informative launch notices.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  canonicalUrl: string;
  companyName: string;
  appStoreUrl: string | null;
  googlePlayUrl: string | null;
  studioUrl: string | null;
  adminUrl: string | null;
  supportEmail: string | null;
  copyrightEmail: string | null;
  legalEmail: string | null;
  creatorSupportEmail: string | null;
  socials: {
    tiktok: string | null;
    instagram: string | null;
    x: string | null;
    facebook: string | null;
    youtube: string | null;
  };
  featuredSeries: Array<{
    id: string;
    title: string;
    tag: string;
    genre: string;
    episodes: number;
    synopsis: string;
    coverUrl: string;
    highlight: string;
  }>;
}

export const siteConfig: SiteConfig = {
  brandName: "DRAMA XOXO",
  tagline: "Des histoires courtes. Des émotions intenses.",
  description: "Découvrez Drama Xoxo, la plateforme de mini-séries verticales mêlant romance, secrets, suspense et émotions intenses. Conçue pour votre smartphone.",
  canonicalUrl: "https://dramaxoxo.com",
  companyName: "DRAMA XOXO Inc.",
  
  // App store links (Set to real store URLs once app is live)
  appStoreUrl: null,
  googlePlayUrl: null,
  
  // Platform subdomains (Will point to studio.dramaxoxo.com when creator portal opens)
  studioUrl: null,
  adminUrl: null,
  
  // Official Contact Channels (Configurable with official domain emails)
  supportEmail: null,
  copyrightEmail: null,
  legalEmail: null,
  creatorSupportEmail: null,
  
  socials: {
    tiktok: null,
    instagram: null,
    x: null,
    facebook: null,
    youtube: null,
  },

  // Highlight series showcase (Inspired by the Drama Xoxo ecosystem)
  featuredSeries: [
    {
      id: "series_1",
      title: "Le Secret du Milliardaire",
      tag: "TENDANCE N°1",
      genre: "Romance & Vengeance",
      episodes: 30,
      synopsis: "Trahie par sa propre famille, elle revient sous une nouvelle identité au bal du plus puissant héritier de la ville.",
      coverUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      highlight: "Épisode 1 à 30 en format 9:16 vertical"
    },
    {
      id: "series_2",
      title: "Vengeance à Port-au-Prince",
      tag: "NOUVEAUTÉ",
      genre: "Thriller & Action",
      episodes: 24,
      synopsis: "Dans les cercles d'influence, une alliance interdite menace d'exposer les secrets les plus sombres de la haute société.",
      coverUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      highlight: "Suspense haletant & Cliffhangers"
    },
    {
      id: "series_3",
      title: "Double Jeu d'Amour",
      tag: "POPULAIRE",
      genre: "Romance & Rivalité CEO",
      episodes: 20,
      synopsis: "Un contrat de faux mariage qui devait durer six mois. Mais entre pouvoir et passion, les règles ont changé.",
      coverUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      highlight: "Épisodes immersifs de 90 secondes"
    },
    {
      id: "series_4",
      title: "L'Héritière Masquée",
      tag: "EXCLUSIF",
      genre: "Drame & Passion",
      episodes: 28,
      synopsis: "Rejetée par son clan, elle découvre son véritable héritage et prépare une revanche éclatante.",
      coverUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      highlight: "Une production Drama Xoxo Originals"
    }
  ]
};
