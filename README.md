# Mattycanny Website

Static site for Twitch streamer MattyCanny. Built from the original Wix export for hosting on GitHub Pages.

## Directory structure

```
.
├── index.html          # Homepage
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js        # Nav and footer year
├── images/            # Add your images here
│   └── .gitkeep
├── originalSite.html   # Wix source (reference only)
└── README.md
```

## Adding images

Place files in the `images/` folder and reference them in `index.html`:

| File | Purpose |
|------|--------|
| `favicon.webp` or `favicon.png` | Browser tab icon (update `<link rel="icon">` in `index.html` if you use .png) |
| `logo.webp` | Header logo (optional; if missing, the text "Mattycanny" shows) |
| `hero.webp` | Hero/banner (optional; uncomment the hero image in `index.html` if you add one) |

You can reuse assets from your Wix site: open the live Wix page, right‑click images → "Save image as", then add them to `images/`.

## Running locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `mattycanny-website` or `username.github.io` for a user site).
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial static site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Save.
6. The site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or `https://YOUR_USERNAME.github.io/` if the repo is `username.github.io`).

### Custom domain (e.g. mattycanny.com)

1. In **Settings → Pages**, set **Custom domain** to your domain and save.
2. In your domain's DNS settings, add the records GitHub shows (usually an A record for `185.199.108.153` and similar, or a CNAME to `YOUR_USERNAME.github.io`).
3. After DNS propagates, GitHub will offer HTTPS for the custom domain.

## Edits you may want

- **Twitch URL**: In `index.html`, set the Twitch link to your channel (e.g. `https://www.twitch.tv/mattycanny`).
- **Discord**: Replace the `#` in the Discord button with your server invite link.
- **Blog**: Point the "View blog" link to your Wix blog URL or a new blog page once you have one.
