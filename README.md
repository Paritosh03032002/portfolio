# Paritosh Mayande — Portfolio

Personal portfolio site for **Paritosh Mayande**, Backend & AI Engineer.

🔗 Live: _coming soon_

## Stack

- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** (dev + build)
- 🎨 **Tailwind CSS** (custom dark theme, no UI library)
- 📄 Static site — deploys to Vercel, Netlify, Cloudflare Pages, or GitHub Pages

## Run locally

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # produces dist/
npm run preview
```

## Content

All resume content lives in a single source of truth: [`src/data/content.ts`](src/data/content.ts).
Update that file to change the site — no component edits needed.

## Layout

```
src/
├── App.tsx               # composes the sections
├── main.tsx
├── index.css             # Tailwind layers + design tokens
├── data/content.ts       # ⭐ all profile + project + experience data
└── components/
    ├── Nav.tsx           # sticky nav with mobile menu
    ├── Hero.tsx          # headline + stats
    ├── About.tsx         # bio + education + certs
    ├── Experience.tsx    # timeline
    ├── Projects.tsx      # project cards (Lumen featured)
    ├── Skills.tsx        # grouped skill chips
    ├── Contact.tsx       # email / phone / GitHub / LinkedIn
    └── Footer.tsx
```

## Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. `npm run build`
2. Push `dist/` to a `gh-pages` branch, or use `actions-gh-pages`.

### Cloudflare Pages / Netlify
Drop the repo in, build command `npm run build`, output dir `dist`.

## License

MIT
