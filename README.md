# DRAMA XOXO — Official Website Project

Official production-ready website for **DRAMA XOXO** (`dramaxoxo.com` / `www.dramaxoxo.com`).

This project is completely isolated from the mobile application codebase.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
The website will start at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Generates production-optimized static assets in the `dist/` directory.

---

## 📁 Architecture & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | `HomePage.tsx` | Cinematic Hero, Discover, 3-Step Guide, Creator Program, Mobile App "Coming Soon" |
| `/privacy` | `PrivacyPage.tsx` | Privacy Policy conforming to Apple & Google Play standards |
| `/terms` | `TermsPage.tsx` | Terms of Use (Virtual coins, VIP subscriptions, conduct) |
| `/creator-agreement` | `CreatorAgreementPage.tsx` | Creator partnership, rights warranties & Net Revenue royalty terms |
| `/content-guidelines` | `ContentGuidelinesPage.tsx` | Community & creator standards (Safety, Prohibited content, AI media) |
| `/copyright` | `CopyrightPage.tsx` | DMCA Copyright Policy & Infringement notice process |
| `/support` | `SupportPage.tsx` | Help center, FAQs & integrated contact form UI |
| `/delete-account` | `DeleteAccountPage.tsx` | App Store compliant account deletion guide & request form UI |

---

## ⚙️ Centralized Configuration (`src/config/siteConfig.ts`)

All external links, store URLs, and contact emails can be easily updated in `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  canonicalUrl: "https://dramaxoxo.com",
  appStoreUrl: null,           // Replace with Apple App Store URL when published
  googlePlayUrl: null,         // Replace with Google Play Store URL when published
  studioUrl: null,             // Future: "https://studio.dramaxoxo.com"
  supportEmail: null,          // e.g., "support@dramaxoxo.com"
  copyrightEmail: null,        // e.g., "copyright@dramaxoxo.com"
  legalEmail: null,            // e.g., "legal@dramaxoxo.com"
  creatorSupportEmail: null,  // e.g., "creators@dramaxoxo.com"
};
```

---

## ☁️ Cloudflare Pages Deployment

This project is fully configured for zero-configuration Cloudflare Pages deployment:

1. **Framework Preset**: `Vite`
2. **Build Command**: `npm run build`
3. **Build Output Directory**: `dist`
4. **Root Directory**: `/` (or subdirectory if monorepo)
5. **Node.js Version**: `18.x` or `20.x`

### Routing & Headers
- `public/_redirects`: Contains `/* /index.html 200` to prevent 404 errors on direct hard refreshes of `/privacy`, `/terms`, etc.
- `public/_headers`: Enforces strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
- `public/sitemap.xml` & `public/robots.txt`: Search engine indexing and SEO optimization.
