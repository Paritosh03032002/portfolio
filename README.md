# Paritosh Mayande — Portfolio

Personal portfolio site for **Paritosh Mayande**, Backend & AI Engineer.

🔗 **Live:** https://paritosh03032002.github.io/portfolio/

## Stack

- ⚛️ **React 18** (JavaScript, no TypeScript)
- ⚡ **Vite** (dev + build)
- 🎨 **Tailwind CSS** (custom dark theme, no UI library)
- 🚀 **GitHub Pages** deploy via GitHub Actions

## Run locally

```bash
npm install
npm run dev      # http://localhost:5174/portfolio/
npm run build    # produces dist/
npm run preview
```

## Deploy

This repo auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup in the GitHub UI:
**Settings → Pages → Build and deployment → Source: GitHub Actions**

After that, just `git push` and the new version is live in ~1 minute.

## Content

All resume content lives in a single source of truth:
[`src/data/content.js`](src/data/content.js) — edit there to update the site.

## Layout

```
src/
├── App.jsx               # composes the sections
├── main.jsx
├── index.css             # Tailwind layers + design tokens
├── data/content.js       # ⭐ all profile + project + experience data
└── components/
    ├── Nav.jsx           # sticky nav with mobile menu
    ├── Hero.jsx          # headline + stats
    ├── About.jsx         # bio + education + certs
    ├── Experience.jsx    # timeline
    ├── Projects.jsx      # project cards (Lumen featured)
    ├── Skills.jsx        # grouped skill chips
    ├── Contact.jsx       # email / phone / GitHub / LinkedIn
    └── Footer.jsx
```

## License

MIT
