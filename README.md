# MD Rakib Hasan – Portfolio (React + Vite)

A clean, recruiter-facing one-page portfolio inspired by modern glassmorphism UI patterns (dark theme, pill navigation, smooth section transitions).

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What to customise

### 1) Your links + content
Edit:

- `src/data/profile.js`  
  - Replace `YOUR-GITHUB` + `YOUR-LINKEDIN` with your real URLs  
  - Add repo/demo links per project
  - Update experience dates if needed

### 2) Your domain + SEO
Edit:

- `index.html`
  - Replace `https://YOUR-DOMAIN.example/` in `canonical`, OpenGraph and JSON-LD URLs
- `public/sitemap.xml` and `public/robots.txt`
  - Replace the placeholder domain

### 3) Optional: add your CV
Put a PDF at:

- `public/MD_Rakib_Hasan_CV.pdf`

Then update the `cv` path in `src/data/profile.js` if you want a “Download CV” button.

## Deploy (simple options)

### Vercel
- Import the repo
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages (static)
- Run `npm run build`
- Deploy the `dist` folder using your preferred GH Pages workflow

## Notes
- No personal photos are included by default.
- Social preview image: `public/og-image.png` (placeholder). Replace it with your own if you want.
