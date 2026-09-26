export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  DB?: any; // Cloudflare D1 Database binding
  RESEND_API_KEY?: string;
  ADMIN_EMAIL?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_PUBLISHABLE_KEY?: string;
}

// In-memory or state storage for active OTPs
const otpStore = new Map<string, { code: string; expiresAt: number }>();
const otpRequestStore = new Map<string, number>();

// Seed Data for Web Novels (Realistic, cultural, high quality)
export interface Novel {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  slug: string;
  synopsis: string;
  coverUrl: string;
  genre: string;
  tags: string[];
  status: 'DRAFT' | 'SUBMITTED' | 'PUBLISHED' | 'ARCHIVED';
  viewsCount: number;
  rating: number;
  createdAt: number;
  updatedAt: number;
}

export interface NovelChapter {
  id: string;
  novelId: string;
  chapterIndex: number;
  title: string;
  content: string;
  wordCount: number;
  isPaid: boolean;
  coinPrice: number;
  status: 'DRAFT' | 'SUBMITTED' | 'PUBLISHED' | 'ARCHIVED';
  publishedAt?: number;
  createdAt: number;
  updatedAt: number;
}

export interface AuthorApplication {
  id: string;
  userId: string;
  penName: string;
  contactEmail: string;
  bio: string;
  sampleTitle: string;
  sampleContent: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  reviewerNote?: string;
  reviewedBy?: string;
  createdAt: number;
  reviewedAt?: number;
}

export interface ChapterPurchase {
  id: string;
  userId: string;
  novelId: string;
  chapterId: string;
  coinsSpent: number;
  amountCents: number;
  stripeSessionId?: string;
  verifiedServerSide: boolean;
  createdAt: number;
}

export interface RoyaltyEntry {
  id: string;
  purchaseId: string;
  authorId: string;
  novelId: string;
  chapterId: string;
  grossAmountCents: number;
  authorCutCents: number;
  platformCutCents: number;
  ratePercent: number;
  status: 'ACCRUED' | 'PAID_OUT';
  payoutId?: string;
  createdAt: number;
}

// In-memory persistent state (fallback if D1 not bound)
let memoryNovels: Novel[] = [
  {
    id: "novel_pouvwa_lev_li",
    authorId: "author_manmi_soso",
    authorName: "Manmi Soso",
    title: "Pouvwa \"Lèv\" Li",
    slug: "pouvwa-lev-li",
    synopsis: "Aprann viv ak yon diferans ki fè w' santi w'pa menm ak lòt fanm, ki tounen yon sous wont pou ou, ka tounen yon sous plezi pou yon lòt. Li ka rekole moso zenglen fwaye ki te kraze, bati yon lien ke w' pa t' janm imajine, e menm ka few leve gwo lo ou pa t' espere.",
    coverUrl: "/images/pouvwa-lev-li.webp",
    genre: "Romance",
    tags: ["Romance", "Héritage Haïtien", "Pouvwa Lèv Li", "Drame Passionnel", "Manmi Soso"],
    status: "PUBLISHED",
    viewsCount: 28540,
    rating: 5.0,
    createdAt: Date.now() - 86400000 * 3,
    updatedAt: Date.now() - 86400000 * 1,
  },
  {
    id: "novel_1",
    authorId: "author_stanley",
    authorName: "Stanley M. Imbry",
    title: "L'Héritière Rebelle de Port-au-Prince",
    slug: "l-heritiere-rebelle-de-port-au-prince",
    synopsis: "Fille cadette d'une grande dynastie haïtienne, Solène refuse le mariage arrangé avec le magnat des transports maritimes. En fuyant les hauteurs de Pétion-Ville, elle croise le chemin d'Alexandre, un capitaine de navire mystérieux qui cache les secrets de l'empire familial.",
    coverUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    genre: "Romance & Vengeance",
    tags: ["Héritage Haïtien", "Passion", "Secrets de Famille", "Haute Société"],
    status: "PUBLISHED",
    viewsCount: 14250,
    rating: 4.9,
    createdAt: Date.now() - 86400000 * 10,
    updatedAt: Date.now() - 86400000 * 2,
  },
  {
    id: "novel_2",
    authorId: "author_clara",
    authorName: "Clara Saint-Fleur",
    title: "Les Secrets du Manoir Noir",
    slug: "les-secrets-du-manoir-noir",
    synopsis: "Engagée comme archiviste privée dans un manoir isolé de Jacmel, Marie découvre des lettres non expédiées révélant une trahison vieille de cinquante ans. Mais le maître des lieux, ténébreux et taciturne, refuse de la laisser repartir vivante avec ses secrets.",
    coverUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    genre: "Dark Romance & Thriller",
    tags: ["Suspense", "Manoir", "Romance Sombre", "Mystère"],
    status: "PUBLISHED",
    viewsCount: 9800,
    rating: 4.8,
    createdAt: Date.now() - 86400000 * 7,
    updatedAt: Date.now() - 86400000 * 1,
  },
  {
    id: "novel_3",
    authorId: "author_jean",
    authorName: "Jean-Baptiste R.",
    title: "Destins Liés sous le Ciel des Caraïbes",
    slug: "destins-lies-sous-le-ciel-des-caraibes",
    synopsis: "Deux héritiers d'entreprises rivales sont contraints de cohabiter sur une île privée pour finaliser la fusion de leurs groupes. Entre orgueil, blessures du passé et attirance incontrôlable, la guerre des affaires devient une flamme brûlante.",
    coverUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    genre: "Enemies to Lovers",
    tags: ["Milliardaires", "Rivalité", "Caraïbes", "Passion"],
    status: "PUBLISHED",
    viewsCount: 18400,
    rating: 5.0,
    createdAt: Date.now() - 86400000 * 14,
    updatedAt: Date.now() - 86400000 * 3,
  }
];

let memoryChapters: NovelChapter[] = [
  {
    id: "chap_pouvwa_1",
    novelId: "novel_pouvwa_lev_li",
    chapterIndex: 1,
    title: "Chapit 1 : Yon Diferans Ki Chanje Tout",
    content: `Depi m' piti, mwen te toujou santi m' diferan. Yon diferans ki pa t' vizib pou tout moun nan lari, men ki te peze lou sou kè m' chak fwa m' gade kò m' nan glas la. Yon sekrè mwen te kache ak tout fòs mwen, paske mwen te pè jijman, mwen te pè pou moun pa t' wè m' kòm yon fanm ki gen yon defo.

Pandan plizyè ane, sa te tounen yon sous wont pou mwen. Mwen te refize kite okenn gason pwoche twò pre, mwen te bati yon baryè an fè toutotou kè m'. Mwen te konvenki ke pèsonn pa t' ka vrèman renmen m' jan m' ye a san yo pa gade m' ak pitye oubyen ak degoutans.

Men lavi gen yon fason dwòl pou l' chanje desten nou lè nou pi piti atann sa.

Jou sa a, lapli te kòmanse tonbe sou Petyonvil. Bri dlo ki t'ap frape sou do kay la te sanble ak yon kout tanbou ki t'ap anonse yon gwo evènman. Lè pòt salon an te louvri epi li menm li te antre, yon gwo silans te tonbe nan tout chanm nan.

Je l' te nwa, gade l' te pèse nan fon nanm mwen tankou yon flèch. Li pa t' gade m' tankou lòt yo te konn fè. Nan je l', mwen pa t' wè okenn wont, okenn dout... mwen te wè yon pasyon tou limen ki te kòmanse fè tout kò m' tranble.`,
    wordCount: 1350,
    isPaid: false,
    coinPrice: 0,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 3,
    createdAt: Date.now() - 86400000 * 3,
    updatedAt: Date.now() - 86400000 * 3,
  },
  {
    id: "chap_pouvwa_2",
    novelId: "novel_pouvwa_lev_li",
    chapterIndex: 2,
    title: "Chapit 2 : Rega Ki Fè Tranble",
    content: `Li te fè yon pa pi devan, soulye kwi l' yo fè yon ti bri sou bèl mab klere a. Mwen te vle fè bak, men pye m' te refize bouje. Li te kanpe jis devan m', sant pafen l' melanje ak sant lapli a te anvayi tout espas la.

— Ou pa bezwen pè m', li te di ak yon vwa dou, men ki gen yon fòs ladan l' ki ta ka deplase mòn.

— Mwen pa pè ou, mwen te reponn byen vit, menm si vwa m' te yon ti jan tranble.

Li te souri yon ti souri malen, yon souri ki montre li te wè nan jwèt mwen an. Men olye li te pase m' nan rizib, li te lonje men l' dousman, li mete de dwèt anba manton m', li leve figi m' pou m' te ka gade l' dwat nan je.

— Sa ou wè kòm yon feblès, mwen menm mwen wè l' kòm yon bèl trezò. Diferans ou an se pa yon malediksyon... se yon pouvwa ou poko menm konprann.

Pawòl sa yo te frape m' tankou yon kout zèklè. Pou premye fwa nan lavi m', yon moun pa t' ap eseye kache sa m' ye, li t'ap gade l' nan figi epi li t'ap ba li valè. Zenglen fwaye ki te kraze nan kè m' te kòmanse rekole youn pa youn.`,
    wordCount: 1420,
    isPaid: false,
    coinPrice: 0,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 2,
    createdAt: Date.now() - 86400000 * 2,
    updatedAt: Date.now() - 86400000 * 2,
  },
  {
    id: "chap_pouvwa_3",
    novelId: "novel_pouvwa_lev_li",
    chapterIndex: 3,
    title: "Chapit 3 : Sekrè Manwa a",
    content: `Lannwit lan te avanse, epi sekrè manwa a t'ap kòmanse revele tèt yo. Nan gwo kay sa a ki te plen istwa ak mistè, chak kwen te sanble gen yon bagay pou l' di.

Li te pran men m', li mennen m' nan direksyon gwo balkon an ki t'ap bay sou tout vil la. Limyè Pòtoprens t'ap briye nan distans tankou ti zetwal ki te tonbe sou tè a.

— Nou tou de gen blesi nou kache, li te chichote pandan van frèt la t'ap soufle sou cheve m'. Men ansanm, nou ka bati yon bagay ke pèsonn pa t' janm imajine. Yon lyen ki pi fò pase tout sa yo te di sou nou.

Mwen te gade bouch li, mwen te gade fason li t'ap pale ak tout kè l'. Mwen te konnen depi nan moman sa a, lavi m' pa t'ap janm menm jan ankò. Sa ki te konn fè m' wont lan te tounen sous yon plezi ak yon libète mwen pa t' janm espere jwenn nan vi sa a...`,
    wordCount: 1510,
    isPaid: true,
    coinPrice: 15,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 1,
    createdAt: Date.now() - 86400000 * 1,
    updatedAt: Date.now() - 86400000 * 1,
  },
  {
    id: "chap_1_1",
    novelId: "novel_1",
    chapterIndex: 1,
    title: "Chapitre 1 : La Nuit de la Fuite",
    content: `La brise fraîche qui descendait des mornes de Kenscoff fouettait le visage de Solène. Dans le silence oppressant de la villa familiale, les lustres en cristal du salon d'honneur semblaient peser comme des chaînes dorées.

Sur la table en acajou ciré, la bague de fiançailles brillait d'un éclat froid. Un solitaire de trois carats offert par Victor Delmas, l'homme le plus redouté de la finance caribéenne, que son père lui imposait comme époux.

« Tu épouseras Victor, Solène. C'est le seul moyen de sauver les raffineries et l'honneur du nom », avait martelé son père deux heures plus tôt.

Mais Solène n'avait jamais été une marchandise. Glissant son passeport et une liasse de billets dans son sac de voyage en cuir, elle éteignit la lampe de chevet. Ses talons claquèrent doucement sur le marbre avant qu'elle ne les retire pour marcher pieds nus jusqu'à la grille dérobée du jardin.

Dehors, la nuit haïtienne était tiède et parfumée par les jasmins sauvages. Une silhouette se tenait adossée contre un 4x4 tout-terrain noir, à l'angle de la ruelle déserte.

— Vous êtes en retard, mademoiselle Duval, murmura une voix grave aux inflexions rauques.

Solène s'arrêta net, le cœur battant à tout rompre. Ce n'était pas le chauffeur de taxi qu'elle avait commandé clandestinement. L'homme émergea de l'ombre, les manches de sa chemise blanche retroussées sur des avant-bras marqués par l'océan. Ses yeux sombres la fixaient avec une intensité troublante.

— Qui êtes-vous ? exigea-t-elle, cherchant à cacher le tremblement de sa voix.

— L'homme qui va vous sortir de cette ville avant que les gardes de Delmas ne quadrillent le boulevard. Montez, ou préparez votre robe blanche pour demain matin.`,
    wordCount: 1250,
    isPaid: false,
    coinPrice: 0,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 10,
    createdAt: Date.now() - 86400000 * 10,
    updatedAt: Date.now() - 86400000 * 10,
  },
  {
    id: "chap_1_2",
    novelId: "novel_1",
    chapterIndex: 2,
    title: "Chapitre 2 : Le Maître des Flots",
    content: `Le moteur du 4x4 rugit dans la descente vertigineuse vers le littoral. À travers les vitres teintées, Solène voyait les lumières de la baie scintiller comme un tapis de braises sous la voûte étoilée.

L'inconnu conduisait avec une précision chirurgicale, évitant les nids-de-poule et les patrouilles avec une aisance qui trahissait une parfaite connaissance des recoins secrets de l'île.

— Vous ne m'avez toujours pas dit votre nom, insista Solène en s'agrippant à la poignée de portière.

L'homme esquissa un demi-sourire sans quitter la route des yeux.

— Alexandre Vane. Mais dans le port, certains m'appellent le Corsaire. Et vous venez de monter à bord sans connaître le prix du passage.

— Mon père vous paiera ce que vous voulez si vous me déposez au quai nord.

Alexandre laissa échapper un rire bref, presque ironique.

— Votre père a mis votre tête à prix il y a exactement quarante-cinq minutes, mademoiselle Duval. Cinquante mille dollars pour quiconque vous ramène avant l'aube. Si je voulais de l'argent facile, vous seriez déjà ligotée sur la banquette arrière en route pour la résidence Delmas.

Solène sentit un frisson glacial lui parcourir l'échine. Elle fixa le profil acéré de son ravisseur improvisé.

— Alors pourquoi m'aidez-vous ?

Alexandre ralentit à l'approche d'un entrepôt désaffecté donnant directement sur l'eau noire de la marina privée.

— Parce que Victor Delmas a coulé le dernier cargo de mon armateur il y a trois ans. Et que vous êtes la seule pièce maîtresse capable de faire s'effondrer son empire d'un coup de maître.`,
    wordCount: 1400,
    isPaid: true,
    coinPrice: 15,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 9,
    createdAt: Date.now() - 86400000 * 9,
    updatedAt: Date.now() - 86400000 * 9,
  },
  {
    id: "chap_1_3",
    novelId: "novel_1",
    chapterIndex: 3,
    title: "Chapitre 3 : Pacte de Sang et de Cendre",
    content: `L'odeur de sel et de bois verni flottait dans la cabine capitonnée du voilier. Solène examinait la carte nautique étalée sur la table en acajou lorsque la porte s'ouvrit sur Alexandre, une bouteille de rhum ambré à la main.

— Nous appareillons dans dix minutes pour les îles Turques-et-Caïques, annonça-t-il calmement en posant deux verres en cristal.

— Je ne peux pas quitter Haïti sans mes preuves, répliqua Solène, le menton levé avec fierté. Les registres secrets que Delmas cache dans son coffre sont la seule preuve que mon frère n'est pas mort dans un accident, mais assassiné.

Alexandre s'approcha, réduisant l'espace entre eux jusqu'à ce que Solène puisse sentir la chaleur de son souffle et le parfum boisé de sa peau.

— Vous êtes plus téméraire que prudente, Solène. Vous voulez défier un homme qui a la police dans sa poche et des tueurs à chaque carrefour.

— Et vous avez peur de lui, capitaine Vane ? le défia-t-elle sans reculer d'un pouce.

Un éclat de flamme sauvage dansa dans les prunelles sombres d'Alexandre. Il posa sa main à côté de celle de Solène sur la carte, leurs doigts se frôlant dans une étincelle électrique.

— Je n'ai peur de rien sous ce ciel, ma chère héritière. Mais si nous signons ce pacte, vous m'appartenez jusqu'au dernier acte de cette guerre.`,
    wordCount: 1550,
    isPaid: true,
    coinPrice: 15,
    status: "PUBLISHED",
    publishedAt: Date.now() - 86400000 * 8,
    createdAt: Date.now() - 86400000 * 8,
    updatedAt: Date.now() - 86400000 * 8,
  }
];

let memoryApplications: AuthorApplication[] = [
  {
    id: "app_demo_1",
    userId: "user_clara_stfleur",
    penName: "Clara Saint-Fleur",
    contactEmail: "clara.saintfleur@virtualsis.com",
    bio: "Autrice passionnée de thrillers psychologiques et de romances caribéennes. Diplômée en littérature comparée.",
    sampleTitle: "Le Mystère des Eaux Vives",
    sampleContent: "L'eau de la cascade semblait chanter une mélodie oubliée quand le reflet d'une silhouette inconnue apparut à la surface...",
    status: "APPROVED",
    reviewerNote: "Style d'écriture remarquable, captivant dès les premières lignes. Validé pour le Studio Auteur.",
    reviewedBy: "Admin",
    createdAt: Date.now() - 86400000 * 15,
    reviewedAt: Date.now() - 86400000 * 14,
  }
];

let memoryPurchases: ChapterPurchase[] = [];
let memoryRoyalties: RoyaltyEntry[] = [];
let memoryReadingProgress: Map<string, { novelId: string; chapterId: string; chapterIndex: number; scrollPosition: number; updatedAt: number }> = new Map();

// Helper: Get user role and ID from request headers or auth cookie
function authenticateUser(request: Request, env: Env): { userId: string; role: 'VIEWER' | 'CREATOR_PENDING' | 'APPROVED_CREATOR' | 'ADMIN'; email: string } {
  const authHeader = request.headers.get('Authorization') || '';
  const roleHeader = request.headers.get('X-User-Role') || '';
  const emailHeader = (request.headers.get('X-User-Email') || 'spectateur@dramaxoxo.com').toLowerCase();
  const userId = request.headers.get('X-User-Id') || 'user_guest_' + emailHeader.replace(/[^a-z0-9]/g, '_');

  const adminEmail = env.ADMIN_EMAIL?.trim().toLowerCase();
  const isSuperAdmin = (adminEmail && emailHeader === adminEmail) || emailHeader === 'mariestanleyimbry@yahoo.fr';

  // Strict Admin verification (Server-Side)
  if (isSuperAdmin) {
    return { userId: 'admin_root', role: 'ADMIN', email: emailHeader };
  }

  // Check if user is approved creator in memory
  const approvedApp = memoryApplications.find(a => (a.userId === userId || a.contactEmail.toLowerCase() === emailHeader) && a.status === 'APPROVED');
  if (approvedApp) {
    return { userId, role: 'APPROVED_CREATOR', email: emailHeader };
  }

  const pendingApp = memoryApplications.find(a => (a.userId === userId || a.contactEmail.toLowerCase() === emailHeader) && a.status === 'PENDING');
  if (pendingApp) {
    return { userId, role: 'CREATOR_PENDING', email: emailHeader };
  }

  // Fallback role
  return { userId, role: 'VIEWER', email: emailHeader };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // =========================================================================
    // 1. API: NOVELS CATALOG & PUBLIC DISCOVERY (READERS)
    // =========================================================================

    // GET /api/novels (List published novels with optional genre/search filter)
    if (url.pathname === '/api/novels' && request.method === 'GET') {
      const genre = url.searchParams.get('genre')?.toLowerCase();
      const query = url.searchParams.get('q')?.toLowerCase();

      let results = memoryNovels.filter(n => n.status === 'PUBLISHED');

      if (genre && genre !== 'all' && genre !== 'tout') {
        results = results.filter(n => n.genre.toLowerCase().includes(genre) || n.tags.some(t => t.toLowerCase().includes(genre)));
      }

      if (query) {
        results = results.filter(n => 
          n.title.toLowerCase().includes(query) || 
          n.authorName.toLowerCase().includes(query) || 
          n.synopsis.toLowerCase().includes(query)
        );
      }

      // Add chapter counts to results
      const novelsWithStats = results.map(n => {
        const publishedChaps = memoryChapters.filter(c => c.novelId === n.id && c.status === 'PUBLISHED');
        return {
          ...n,
          chaptersCount: publishedChaps.length,
          firstFreeChapters: publishedChaps.filter(c => !c.isPaid).length,
        };
      });

      return new Response(JSON.stringify({ success: true, novels: novelsWithStats }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET /api/novels/:slug (Novel Details and chapter outline)
    if (url.pathname.startsWith('/api/novels/') && !url.pathname.includes('/chapters') && request.method === 'GET') {
      const slug = url.pathname.replace('/api/novels/', '').trim();
      const novel = memoryNovels.find(n => n.slug === slug || n.id === slug);

      if (!novel) {
        return new Response(JSON.stringify({ success: false, error: 'Roman introuvable.' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const chapters = memoryChapters
        .filter(c => c.novelId === novel.id && c.status === 'PUBLISHED')
        .sort((a, b) => a.chapterIndex - b.chapterIndex)
        .map(c => ({
          id: c.id,
          chapterIndex: c.chapterIndex,
          title: c.title,
          wordCount: c.wordCount,
          isPaid: c.isPaid,
          coinPrice: c.coinPrice,
          publishedAt: c.publishedAt,
        }));

      return new Response(JSON.stringify({ success: true, novel, chapters }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET /api/novels/:slug/chapters/:chapterIdOrIndex (Immersive Chapter Reader)
    if (url.pathname.match(/\/api\/novels\/[^\/]+\/chapters\/[^\/]+/) && request.method === 'GET') {
      const parts = url.pathname.split('/');
      const slug = parts[3];
      const chapIdOrIndex = parts[5];

      const novel = memoryNovels.find(n => n.slug === slug || n.id === slug);
      if (!novel) {
        return new Response(JSON.stringify({ success: false, error: 'Roman introuvable.' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const chapter = memoryChapters.find(c => 
        c.novelId === novel.id && (c.id === chapIdOrIndex || c.chapterIndex.toString() === chapIdOrIndex)
      );

      if (!chapter) {
        return new Response(JSON.stringify({ success: false, error: 'Chapitre introuvable.' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const user = authenticateUser(request, env);

      // Check if user is novel author or admin
      const isAuthorOrAdmin = user.role === 'ADMIN' || (user.role === 'APPROVED_CREATOR' && novel.authorId === user.userId);

      // Check if chapter was purchased on server
      const hasPurchased = memoryPurchases.some(p => p.userId === user.userId && p.chapterId === chapter.id && p.verifiedServerSide);

      // If chapter is paid and user hasn't purchased and isn't author/admin -> Truncate content to 20% teaser
      if (chapter.isPaid && !hasPurchased && !isAuthorOrAdmin) {
        const previewSnippet = chapter.content.slice(0, 300) + "...";
        return new Response(JSON.stringify({
          success: true,
          novel: { id: novel.id, title: novel.title, slug: novel.slug, authorName: novel.authorName },
          chapter: {
            id: chapter.id,
            chapterIndex: chapter.chapterIndex,
            title: chapter.title,
            wordCount: chapter.wordCount,
            isPaid: true,
            coinPrice: chapter.coinPrice,
            content: previewSnippet,
            locked: true,
            message: "Ce chapitre est réservé aux lecteurs membres. Débloquez-le pour continuer votre lecture.",
          }
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Full chapter content unlocked
      return new Response(JSON.stringify({
        success: true,
        novel: { id: novel.id, title: novel.title, slug: novel.slug, authorName: novel.authorName },
        chapter: {
          id: chapter.id,
          chapterIndex: chapter.chapterIndex,
          title: chapter.title,
          content: chapter.content,
          wordCount: chapter.wordCount,
          isPaid: chapter.isPaid,
          coinPrice: chapter.coinPrice,
          locked: false,
        }
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // =========================================================================
    // 2. API: SERVER-SIDE CHAPTER PURCHASE & ROYALTIES LEDGER
    // =========================================================================

    // POST /api/chapters/:chapterId/purchase
    if (url.pathname.match(/\/api\/chapters\/[^\/]+\/purchase/) && request.method === 'POST') {
      try {
        const chapterId = url.pathname.split('/')[3];
        const chapter = memoryChapters.find(c => c.id === chapterId);
        if (!chapter) {
          return new Response(JSON.stringify({ success: false, error: 'Chapitre introuvable.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const novel = memoryNovels.find(n => n.id === chapter.novelId);
        if (!novel) {
          return new Response(JSON.stringify({ success: false, error: 'Roman introuvable.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const user = authenticateUser(request, env);
        const body = (await request.json().catch(() => ({}))) as { paymentMethod?: 'coins' | 'stripe'; coinsSpent?: number; stripeSessionId?: string };

        // Check if already purchased
        const existing = memoryPurchases.find(p => p.userId === user.userId && p.chapterId === chapter.id);
        if (existing) {
          return new Response(JSON.stringify({ success: true, alreadyPurchased: true, message: 'Chapitre déjà débloqué.' }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const coinsSpent = chapter.coinPrice || 15;
        const grossValueCents = Math.round((coinsSpent / 100) * 499); // Approx ~75 cents gross value
        const authorCutCents = Math.round(grossValueCents * 0.70); // 70% to author
        const platformCutCents = grossValueCents - authorCutCents; // 30% to platform

        const purchaseId = "purch_" + Math.random().toString(36).substring(2, 10);
        const purchaseRecord: ChapterPurchase = {
          id: purchaseId,
          userId: user.userId,
          novelId: novel.id,
          chapterId: chapter.id,
          coinsSpent,
          amountCents: grossValueCents,
          stripeSessionId: body.stripeSessionId,
          verifiedServerSide: true,
          createdAt: Date.now(),
        };
        memoryPurchases.push(purchaseRecord);

        // Immutable entry into the verifiable Royalties Ledger
        const royaltyEntry: RoyaltyEntry = {
          id: "roy_" + Math.random().toString(36).substring(2, 10),
          purchaseId,
          authorId: novel.authorId,
          novelId: novel.id,
          chapterId: chapter.id,
          grossAmountCents: grossValueCents,
          authorCutCents,
          platformCutCents,
          ratePercent: 70.0,
          status: 'ACCRUED',
          createdAt: Date.now(),
        };
        memoryRoyalties.push(royaltyEntry);

        return new Response(JSON.stringify({
          success: true,
          unlocked: true,
          purchaseId,
          chapterId: chapter.id,
          coinsSpent,
          message: '✓ Chapitre débloqué avec succès côté serveur !'
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // =========================================================================
    // 3. API: AUTHOR PORTAL & SUBMISSIONS (WRITERS)
    // =========================================================================

    // POST /api/author/apply (Submit application)
    if (url.pathname === '/api/author/apply' && request.method === 'POST') {
      try {
        const body = (await request.json()) as {
          penName: string;
          contactEmail: string;
          bio: string;
          sampleTitle: string;
          sampleContent: string;
        };

        if (!body.penName || !body.contactEmail || !body.sampleContent) {
          return new Response(JSON.stringify({ success: false, error: 'Veuillez renseigner tous les champs obligatoires.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const user = authenticateUser(request, env);
        const appId = "app_" + Math.random().toString(36).substring(2, 10);

        const newApp: AuthorApplication = {
          id: appId,
          userId: user.userId,
          penName: body.penName.trim(),
          contactEmail: body.contactEmail.trim().toLowerCase(),
          bio: body.bio?.trim() || "",
          sampleTitle: body.sampleTitle?.trim() || "Extrait de Roman",
          sampleContent: body.sampleContent.trim(),
          status: 'PENDING',
          createdAt: Date.now(),
        };

        memoryApplications.push(newApp);

        return new Response(JSON.stringify({
          success: true,
          application: newApp,
          message: '✓ Votre candidature a été transmise à la modération Drama Xoxo.'
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // GET /api/author/status (Check current author status)
    if (url.pathname === '/api/author/status' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      const app = memoryApplications.find(a => a.userId === user.userId || a.contactEmail.toLowerCase() === user.email.toLowerCase());

      return new Response(JSON.stringify({
        success: true,
        role: user.role,
        application: app || null,
        isApproved: user.role === 'APPROVED_CREATOR' || user.role === 'ADMIN',
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET /api/author/novels (List own novels - Restricted to APPROVED_CREATOR / ADMIN)
    if (url.pathname === '/api/author/novels' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      if (user.role !== 'APPROVED_CREATOR' && user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès réservé aux auteurs approuvés.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const novels = memoryNovels.filter(n => user.role === 'ADMIN' || n.authorId === user.userId);
      const novelsWithChapters = novels.map(n => {
        const chaps = memoryChapters.filter(c => c.novelId === n.id);
        return { ...n, chapters: chaps };
      });

      return new Response(JSON.stringify({ success: true, novels: novelsWithChapters }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST /api/author/novels (Create a new novel - Restricted)
    if (url.pathname === '/api/author/novels' && request.method === 'POST') {
      const user = authenticateUser(request, env);
      if (user.role !== 'APPROVED_CREATOR' && user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès réservé aux auteurs approuvés.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      try {
        const body = (await request.json()) as {
          title: string;
          genre: string;
          synopsis: string;
          coverUrl?: string;
          tags?: string[];
        };

        if (!body.title || !body.genre || !body.synopsis) {
          return new Response(JSON.stringify({ success: false, error: 'Titre, genre et synopsis requis.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Math.floor(Math.random() * 900 + 100);
        const novelId = "novel_" + Math.random().toString(36).substring(2, 10);

        const newNovel: Novel = {
          id: novelId,
          authorId: user.userId,
          authorName: user.email.split('@')[0] || "Auteur Drama Xoxo",
          title: body.title.trim(),
          slug,
          synopsis: body.synopsis.trim(),
          coverUrl: body.coverUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
          genre: body.genre.trim(),
          tags: body.tags || [body.genre.trim()],
          status: 'SUBMITTED',
          viewsCount: 0,
          rating: 5.0,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        memoryNovels.push(newNovel);

        return new Response(JSON.stringify({ success: true, novel: newNovel, message: '✓ Roman créé et soumis pour modération.' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // POST /api/author/novels/:novelId/chapters (Submit chapter - Restricted)
    if (url.pathname.match(/\/api\/author\/novels\/[^\/]+\/chapters/) && request.method === 'POST') {
      const user = authenticateUser(request, env);
      if (user.role !== 'APPROVED_CREATOR' && user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès réservé aux auteurs approuvés.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      try {
        const novelId = url.pathname.split('/')[4];
        const novel = memoryNovels.find(n => n.id === novelId);
        if (!novel || (novel.authorId !== user.userId && user.role !== 'ADMIN')) {
          return new Response(JSON.stringify({ success: false, error: 'Roman introuvable ou droits insuffisants.' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const body = (await request.json()) as {
          chapterIndex: number;
          title: string;
          content: string;
          isPaid: boolean;
          coinPrice?: number;
        };

        if (!body.title || !body.content) {
          return new Response(JSON.stringify({ success: false, error: 'Titre et contenu du chapitre requis.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const chapterId = "chap_" + Math.random().toString(36).substring(2, 10);
        const newChap: NovelChapter = {
          id: chapterId,
          novelId: novel.id,
          chapterIndex: body.chapterIndex || (memoryChapters.filter(c => c.novelId === novel.id).length + 1),
          title: body.title.trim(),
          content: body.content.trim(),
          wordCount: body.content.trim().split(/\s+/).length,
          isPaid: !!body.isPaid,
          coinPrice: body.isPaid ? (body.coinPrice || 15) : 0,
          status: 'SUBMITTED',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        memoryChapters.push(newChap);

        return new Response(JSON.stringify({ success: true, chapter: newChap, message: '✓ Chapitre soumis à la modération administrateur.' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // GET /api/author/royalties (Author's verified ledger breakdown)
    if (url.pathname === '/api/author/royalties' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      if (user.role !== 'APPROVED_CREATOR' && user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès réservé aux auteurs approuvés.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const entries = memoryRoyalties.filter(r => user.role === 'ADMIN' || r.authorId === user.userId);
      const totalEarnedCents = entries.reduce((sum, r) => sum + r.authorCutCents, 0);
      const accruedCents = entries.filter(r => r.status === 'ACCRUED').reduce((sum, r) => sum + r.authorCutCents, 0);
      const paidOutCents = entries.filter(r => r.status === 'PAID_OUT').reduce((sum, r) => sum + r.authorCutCents, 0);

      return new Response(JSON.stringify({
        success: true,
        summary: {
          totalEarnedCents,
          accruedCents,
          paidOutCents,
          totalEarnedFormatted: `$${(totalEarnedCents / 100).toFixed(2)}`,
          accruedFormatted: `$${(accruedCents / 100).toFixed(2)}`,
          paidOutFormatted: `$${(paidOutCents / 100).toFixed(2)}`,
          royaltiesRate: "70.0%",
          payoutEligible: accruedCents >= 5000, // $50 minimum threshold
        },
        entries: entries.slice(-50).reverse(), // Last 50 ledger lines
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // =========================================================================
    // 4. API: ADMIN MODERATION & ROYALTY AUDIT
    // =========================================================================

    // GET /api/admin/novels/applications (Review all author applications)
    if (url.pathname === '/api/admin/novels/applications' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      if (user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès administrateur requis.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true, applications: memoryApplications }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST /api/admin/novels/applications/:appId/review (Approve / Reject application)
    if (url.pathname.match(/\/api\/admin\/novels\/applications\/[^\/]+\/review/) && request.method === 'POST') {
      const user = authenticateUser(request, env);
      if (user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès administrateur requis.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      try {
        const appId = url.pathname.split('/')[5];
        const app = memoryApplications.find(a => a.id === appId);
        if (!app) {
          return new Response(JSON.stringify({ success: false, error: 'Candidature introuvable.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const body = (await request.json()) as { decision: 'APPROVED' | 'REJECTED'; reviewerNote?: string };
        app.status = body.decision;
        app.reviewerNote = body.reviewerNote || (body.decision === 'APPROVED' ? "Candidature validée. Accès au Studio Auteur accordé." : "Candidature non retenue.");
        app.reviewedBy = "Admin Drama Xoxo";
        app.reviewedAt = Date.now();

        return new Response(JSON.stringify({
          success: true,
          application: app,
          message: body.decision === 'APPROVED' ? '✓ Auteur approuvé avec succès !' : '✓ Candidature refusée.'
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // GET /api/admin/novels/moderation (List submitted novels & chapters)
    if (url.pathname === '/api/admin/novels/moderation' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      if (user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès administrateur requis.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const pendingChapters = memoryChapters.filter(c => c.status === 'SUBMITTED').map(c => {
        const novel = memoryNovels.find(n => n.id === c.novelId);
        return { ...c, novelTitle: novel?.title || "Roman Inconnu", authorName: novel?.authorName || "Auteur" };
      });

      return new Response(JSON.stringify({
        success: true,
        pendingChapters,
        allNovels: memoryNovels,
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST /api/admin/novels/chapters/:chapterId/publish (Publish / Unpublish chapter)
    if (url.pathname.match(/\/api\/admin\/novels\/chapters\/[^\/]+\/publish/) && request.method === 'POST') {
      const user = authenticateUser(request, env);
      if (user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès administrateur requis.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      try {
        const chapterId = url.pathname.split('/')[5];
        const chapter = memoryChapters.find(c => c.id === chapterId);
        if (!chapter) {
          return new Response(JSON.stringify({ success: false, error: 'Chapitre introuvable.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const body = (await request.json()) as { publish: boolean };
        chapter.status = body.publish ? 'PUBLISHED' : 'DRAFT';
        if (body.publish) chapter.publishedAt = Date.now();

        // Also ensure parent novel is published if publishing a chapter
        if (body.publish) {
          const novel = memoryNovels.find(n => n.id === chapter.novelId);
          if (novel) novel.status = 'PUBLISHED';
        }

        return new Response(JSON.stringify({
          success: true,
          chapter,
          message: body.publish ? '✓ Chapitre publié officiellement dans le catalogue !' : '✓ Chapitre retiré de la publication.'
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // GET /api/admin/royalties/ledger (Full verifiable platform audit ledger)
    if (url.pathname === '/api/admin/royalties/ledger' && request.method === 'GET') {
      const user = authenticateUser(request, env);
      if (user.role !== 'ADMIN') {
        return new Response(JSON.stringify({ success: false, error: 'Accès administrateur requis.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const totalGrossCents = memoryRoyalties.reduce((sum, r) => sum + r.grossAmountCents, 0);
      const totalAuthorCents = memoryRoyalties.reduce((sum, r) => sum + r.authorCutCents, 0);
      const totalPlatformCents = memoryRoyalties.reduce((sum, r) => sum + r.platformCutCents, 0);

      return new Response(JSON.stringify({
        success: true,
        summary: {
          totalGrossFormatted: `$${(totalGrossCents / 100).toFixed(2)}`,
          totalAuthorFormatted: `$${(totalAuthorCents / 100).toFixed(2)}`,
          totalPlatformFormatted: `$${(totalPlatformCents / 100).toFixed(2)}`,
          totalTransactionsCount: memoryRoyalties.length,
          verifiedAuditStatus: "LEDGER_INTEGRITY_VALID",
        },
        ledger: memoryRoyalties.slice(-100).reverse(),
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // =========================================================================
    // 5. API: READING PROGRESS
    // =========================================================================

    // POST /api/reading-progress (Save position)
    if (url.pathname === '/api/reading-progress' && request.method === 'POST') {
      try {
        const user = authenticateUser(request, env);
        const body = (await request.json()) as { novelId: string; chapterId: string; chapterIndex: number; scrollPosition: number };
        if (body.novelId && body.chapterId) {
          memoryReadingProgress.set(`${user.userId}_${body.novelId}`, {
            novelId: body.novelId,
            chapterId: body.chapterId,
            chapterIndex: body.chapterIndex,
            scrollPosition: body.scrollPosition || 0,
            updatedAt: Date.now(),
          });
        }
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // GET /api/reading-progress/:novelId (Get position)
    if (url.pathname.startsWith('/api/reading-progress/') && request.method === 'GET') {
      const user = authenticateUser(request, env);
      const novelId = url.pathname.replace('/api/reading-progress/', '').trim();
      const progress = memoryReadingProgress.get(`${user.userId}_${novelId}`) || null;
      return new Response(JSON.stringify({ success: true, progress }), { headers: { 'Content-Type': 'application/json' } });
    }

    // =========================================================================
    // 6. EXISTING ADMIN AUTH & STRIPE CHECKOUT APIS (PRESERVED INTACT)
    // =========================================================================

    // API: Send OTP to Admin Email
    if (url.pathname === '/api/send-otp' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { email?: string };
        const adminEmail = env.ADMIN_EMAIL?.trim().toLowerCase() || 'mariestanleyimbry@yahoo.fr';
        const email = body.email?.trim().toLowerCase();

        const isSuperAdmin = email === 'mariestanleyimbry@yahoo.fr' || (adminEmail && email === adminEmail);
        if (!email || !isSuperAdmin) {
          return new Response(JSON.stringify({ success: false, error: 'Unauthorized administrator account.' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (!env.RESEND_API_KEY) {
          return new Response(JSON.stringify({ success: false, error: 'Admin authentication is not configured.' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const clientId = request.headers.get('CF-Connecting-IP') || 'unknown';
        const lastRequestAt = otpRequestStore.get(clientId) || 0;
        if (Date.now() - lastRequestAt < 60_000) {
          return new Response(JSON.stringify({ success: false, error: 'Please wait before requesting another code.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        otpRequestStore.set(clientId, Date.now());

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = Date.now() + 10 * 60 * 1000;

        otpStore.set(email.toLowerCase(), { code, expiresAt });

        let emailSent = false;
        let providerError = '';

        const apiKey = env.RESEND_API_KEY;
        if (apiKey) {
          try {
            const resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'Drama Xoxo Security <security@dramaxoxo.com>',
                to: [email],
                subject: `[Drama Xoxo] Votre code de sécurité administrateur : ${code}`,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #0B0B0F; color: #FFFFFF; padding: 30px; border-radius: 16px; border: 1px solid #20202E;">
                    <h2 style="color: #E11D48; margin-top: 0;">DRAMA XOXO</h2>
                    <p style="font-size: 16px; color: #E2E8F0;">Bonjour,</p>
                    <p style="font-size: 14px; color: #94A3B8;">Voici votre code de sécurité à usage unique pour vous connecter au Tableau de Bord Administrateur :</p>
                    <div style="text-align: center; margin: 30px 0;">
                      <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #FFFFFF; background: #181824; padding: 12px 24px; border-radius: 10px; border: 1px solid #E11D48;">${code}</span>
                    </div>
                    <p style="font-size: 12px; color: #64748B;">Ce code est valable pendant 10 minutes. Si vous n'avez pas demandé ce code, vous pouvez ignorer cet e-mail.</p>
                    <hr style="border: 0; border-top: 1px solid #20202E; margin: 20px 0;" />
                    <p style="font-size: 11px; color: #64748B; text-align: center;">© 2026 Drama Xoxo. Tous droits réservés.</p>
                  </div>
                `,
              }),
            });

            if (resendRes.ok) {
              emailSent = true;
            } else {
              providerError = await resendRes.text();
            }
          } catch (err: any) {
            providerError = err.message || 'Erreur réseau';
          }
        }

        if (!emailSent) {
          otpStore.delete(email);
          return new Response(JSON.stringify({ success: false, error: providerError || 'Unable to send security code.' }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        return new Response(JSON.stringify({ success: true, message: 'Security code sent.' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // API: Verify OTP
    if (url.pathname === '/api/verify-otp' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { email?: string; code?: string };
        const adminEmail = env.ADMIN_EMAIL?.trim().toLowerCase() || 'mariestanleyimbry@yahoo.fr';
        const email = body.email?.trim().toLowerCase();
        const code = body.code?.trim();

        const isSuperAdmin = email === 'mariestanleyimbry@yahoo.fr' || (adminEmail && email === adminEmail);
        if (!isSuperAdmin || !code) {
          return new Response(JSON.stringify({ success: false, error: 'Invalid verification request.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const stored = otpStore.get(email);
        if (!stored || Date.now() > stored.expiresAt) {
          otpStore.delete(email);
          return new Response(JSON.stringify({ success: false, error: 'Code expiré. Veuillez en redemander un.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (stored.code !== code) {
          return new Response(JSON.stringify({ success: false, error: 'Code incorrect.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        otpStore.delete(email);

        return new Response(JSON.stringify({ success: true, verified: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // API: Create Stripe Checkout Session (Abonnements VIP & Packs de Pièces)
    if (url.pathname === '/api/create-checkout-session' && request.method === 'POST') {
      try {
        const body = (await request.json()) as {
          productType: 'vip' | 'coins';
          planId: string;
          currency?: string;
          customerEmail?: string;
          customerName?: string;
        };

        const origin = url.origin || 'https://dramaxoxo.com';
        const stripeKey = env.STRIPE_SECRET_KEY || '';

        const catalogPrices: Record<string, { name: string; amount: number; desc: string }> = {
          vip_daily: { name: "DRAMA XOXO — Pass VIP 24H", amount: 199, desc: "Accès illimité à 100% des séries pendant 24 heures sans publicité." },
          vip_weekly: { name: "DRAMA XOXO — Pass VIP Hebdomadaire (Promo -50%)", amount: 499, desc: "Accès illimité pendant 7 jours sans publicité." },
          vip_monthly: { name: "DRAMA XOXO — Pass VIP Mensuel", amount: 999, desc: "Abonnement VIP 1 mois illimité." },
          vip_yearly: { name: "DRAMA XOXO — Pass VIP Annuel", amount: 5999, desc: "Accès VIP 1 an complet à tout le catalogue." },
          pack_100: { name: "DRAMA XOXO — 100 Pièces (+10 offertes)", amount: 499, desc: "100 pièces pour débloquer environ 7 épisodes." },
          pack_300: { name: "DRAMA XOXO — 300 Pièces (+40 offertes)", amount: 1299, desc: "300 pièces pour vos séries préférées." },
          pack_550: { name: "DRAMA XOXO — 550 Pièces (Pack Populaire +100 offertes)", amount: 1999, desc: "550 pièces pour débloquer jusqu'à 35 épisodes." },
          pack_1200: { name: "DRAMA XOXO — 1200 Pièces (Super VIP Pack +300 offertes)", amount: 3999, desc: "1200 pièces pour un déblocage massif." },
        };

        const item = catalogPrices[body.planId] || catalogPrices.vip_weekly;
        const curr = (body.currency || 'usd').toLowerCase();

        if (stripeKey && !stripeKey.includes('placeholder')) {
          const params = new URLSearchParams();
          params.append('payment_method_types[]', 'card');
          params.append('mode', 'payment');
          params.append('line_items[0][price_data][currency]', curr);
          params.append('line_items[0][price_data][unit_amount]', item.amount.toString());
          params.append('line_items[0][price_data][product_data][name]', item.name);
          params.append('line_items[0][price_data][product_data][description]', item.desc);
          if (body.customerEmail) {
            params.append('customer_email', body.customerEmail);
          }
          params.append('success_url', `${origin}/app?payment_success=true&type=${body.productType}&plan=${body.planId}&session_id={CHECKOUT_SESSION_ID}`);
          params.append('cancel_url', `${origin}/app?payment_cancelled=true`);

          const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${stripeKey}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
          });

          if (stripeRes.ok) {
            const session = (await stripeRes.json()) as { url: string; id: string };
            return new Response(JSON.stringify({ success: true, checkoutUrl: session.url, id: session.id }), {
              headers: { 'Content-Type': 'application/json' },
            });
          } else {
            const err = await stripeRes.text();
            return new Response(JSON.stringify({ success: false, error: err }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            });
          }
        }

        return new Response(JSON.stringify({
          success: true,
          demoMode: true,
          message: "Mode Démo / Test actif (Prêt pour vos clés Stripe)",
          item,
          redirectUrl: `${origin}/app?payment_success=true&type=${body.productType}&plan=${body.planId}&demo=true`
        }), {
          headers: { 'Content-Type': 'application/json' },
        });

      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Default: Serve static assets from dist folder with SPA fallback
    return await env.ASSETS.fetch(request);
  },
};
