# Omnom Boogie — Website v3

A four-page, responsive static website designed for GitHub Pages. No framework, build step, user accounts, analytics, cookies, or contact form.

## Pages
- `index.html` — Home
- `about.html` — About
- `projects.html` — Projects
- `contact.html` — Contact

## Supporting files
- `styles.css` — Shared styles, animations, responsive layouts
- `site.js` — Accessible mobile navigation and live copyright year
- `assets/favicon.svg` — Temporary graphic favicon; replace after approved logo arrives

## GitHub Pages deployment
1. Create or open your `omnom-boogie-site` repository.
2. Upload the **contents** of this folder to the repository root, replacing the previous site files. Keep relative filenames and the `assets/` folder intact.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)` and save.
4. Open the Pages URL GitHub provides after deployment (may take a few minutes).
5. Check Home, About, Projects, Contact on desktop and mobile.

The site uses relative internal links so it works on GitHub Pages project URLs (e.g. `username.github.io/omnom-boogie-site/`).

## Before public launch
- Replace the proposed business name language after LLC formation and legal review, if applicable.
- Add the approved company logo and a real contact method to `contact.html`.
- Replace decorative Lane Log visuals with approved product screenshots if desired.
- Review the wording for alignment with your actual business.
- Fonts currently load from Google Fonts (Space Grotesk and DM Sans); system font fallbacks are provided.
- No privacy policy or terms page is included in this informational version; revisit if analytics, forms or other data handling are added.

## Files changed from v2
Updated: `index.html`, `about.html`, `projects.html`, `contact.html`, `styles.css`, `site.js`, `README.md`
New: `assets/favicon.svg`

Nothing needs npm, bundling, or a backend.
