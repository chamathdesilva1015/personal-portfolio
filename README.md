# Developer Portfolio

A professional, high-contrast dark-mode developer portfolio built with **React** and **Tailwind CSS v4**. Designed for speed, modularity, and easy customization.

---

## 🖥 Live Preview

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✨ Features

- **Dark-mode design** — deep blacks/grays with electric indigo (`#6366f1`) accent
- **Responsive** — mobile-first layout with animated hamburger nav
- **5 sections** — Hero · About · Skills · Projects · Contact
- **Scroll-triggered animations** — staggered fade-up entrances via IntersectionObserver
- **Back-to-Top button** — floating, appears after 500px of scroll
- **Smooth scrolling** — CSS `scroll-behavior: smooth` on all anchor links
- **Modular architecture** — each section is a self-contained component with its own configurable data constants

---

## 📁 Project Structure

```
portfolio/
├── index.html                  # Entry HTML (SEO meta, Google Fonts)
├── vite.config.js              # Vite + React + Tailwind CSS plugin
├── public/
│   └── resume.pdf              # ← Drop your resume here
└── src/
    ├── main.jsx                # React root
    ├── index.css               # Design system (tokens, animations)
    ├── App.jsx                 # Section composition + dividers
    └── components/
        ├── Navbar.jsx          # Sticky nav, scroll blur, mobile menu
        ├── Hero.jsx            # Bold heading, CTAs, status badge
        ├── About.jsx           # Headshot + narrative bio
        ├── Skills.jsx          # 4-card grid with skill pills
        ├── Projects.jsx        # Project cards (screenshot, badges, links)
        ├── Contact.jsx         # Social icons footer
        └── BackToTop.jsx       # Floating scroll-to-top button
```

---

## 🛠 Customization Guide

All personal content is stored in **configurable constants** at the top of each component file. No digging through JSX required.

| What to change | File | Constant / Location |
|---|---|---|
| Name & headline | `Hero.jsx` | `<h1>` text and `<p>` subtitle |
| Bio & highlights | `About.jsx` | `BIO` object |
| Skill lists | `Skills.jsx` | `SKILL_CATEGORIES` array |
| Project entries | `Projects.jsx` | `PROJECTS` array |
| Social links | `Contact.jsx` | `SOCIAL_LINKS` array |
| Nav links | `Navbar.jsx` | `NAV_LINKS` array |
| Accent color | `index.css` | `--color-accent` inside `@theme` |
| Headshot image | `About.jsx` | Replace the placeholder `<div>` with an `<img>` tag |
| Resume file | `public/resume.pdf` | Drop your PDF in the `public/` folder |

---

## 🚀 Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your repo.
3. Vercel auto-detects Vite. Confirm the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. You'll get a live URL in ~30 seconds.

### Custom Domain (Optional)

In Vercel Dashboard → **Settings → Domains** → Add your custom domain and follow the DNS instructions.

---

## 🚀 Deploy to Netlify

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Connect your GitHub repo. Confirm the settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Deploy site**.

### Alternative: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify (follow the prompts)
netlify deploy --prod --dir=dist
```

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vite.dev) | Build tool & dev server |
| [React](https://react.dev) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Inter](https://fonts.google.com/specimen/Inter) | Typography |

---

## License

MIT — feel free to fork and make it your own.
