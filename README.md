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
2. In your domain’s DNS settings, add the records GitHub shows (usually an A record for `185.199.108.153` and similar, or a CNAME to `YOUR_USERNAME.github.io`).
3. After DNS propagates, GitHub will offer HTTPS for the custom domain.

---

## Wix → GitHub migration (site + email)

Plan for moving the site to GitHub Pages while keeping **contact@mattycanny.com** (Google Workspace).

### Step A – Put the site on GitHub

1. Create a new repo (e.g. `mattycanny-website`).
2. Push this project to the repo and enable **Pages** (Settings → Pages → Deploy from branch **main**, folder **/ (root)**).
3. Confirm the site works at the `*.github.io` URL.

### Step A.b – Check DNS at your domain provider

**Before changing anything**, log in to where **mattycanny.com** is registered (Wix Domains, or the registrar Wix uses) and check:

- **Can you edit DNS?** Look for “DNS settings”, “Manage DNS”, “Nameservers” or “DNS records”. You need to be able to add/edit **A** and **CNAME** records (for the website) and see **MX** records (for email).
- **Current records:** Note what’s there now – especially **MX** (must stay pointing at Google for contact@mattycanny.com) and any **A**/CNAME that point the site to Wix.
- **Conclusion:** If you can edit A/CNAME and leave MX unchanged → Steps B and C are possible. If you can’t edit DNS (e.g. Wix locks it when the domain is “connected” to Wix site), you may need to transfer the domain to another registrar first.

### Step B – Point the domain at GitHub (keep email)

- Change **only** the records that control the **website** (A and/or CNAME for `@` and `www`) to GitHub’s values from Settings → Pages → Custom domain.
- **Do not change MX records** – leave them pointing at Google so contact@mattycanny.com keeps working.

### Step C – Wix and Google Workspace billing

- Contact Wix support: ask what happens to Google Workspace (contact@mattycanny.com) if you cancel the Wix site plan, and whether you can keep Workspace or move billing to Google.
- Cancel or downgrade only the **website** part with Wix once the site is live on GitHub; keep paying for Google Workspace (via Wix or Google) so the email stays active.

---

## Edits you may want

- **Twitch URL**: In `index.html`, set the Twitch link to your channel (e.g. `https://www.twitch.tv/mattycanny`).
- **Discord**: Replace the `#` in the Discord button with your server invite link.
- **Blog**: Point the "View blog" link to your Wix blog URL or a new blog page once you have one.
