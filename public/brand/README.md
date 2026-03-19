# Bytecode Consulting Brand Notes

## Core colours

- Background: `#020617`
- Surface: `#0F172A`
- Tech blue: `#2563EB`
- Cyan: `#06B6D4`
- Purple: `#7C3AED`
- Slate text: `#94A3B8`
- White: `#FFFFFF`

These colours are used to create a dark premium SaaS-style aesthetic with restrained gradients and soft glow accents.

## Typography recommendations

- Primary sans-serif: `Geist`, `Satoshi`, or `Plus Jakarta Sans`
- System fallback: `ui-sans-serif`, `system-ui`, `sans-serif`
- Use medium or semibold weights for headings
- Use generous tracking on small uppercase labels for a technical brand feel

The project currently uses a clean sans-serif stack in code so it runs immediately after install. If you want a custom font later, add it in `app/layout.tsx` and update `tailwind.config.ts`.

## Logo rationale

The Bytecode Consulting logo is inspired by the intersection of software engineering and artificial intelligence.

The outer brackets represent structured code, technical clarity, and engineering discipline. At the centre, the connected nodes symbolise intelligent systems, automation, and data-informed decision-making.

Together, these elements reflect the consultancy's core approach: combining robust engineering foundations with modern AI thinking to deliver solutions that are practical, scalable, and commercially useful.

## Replacing the logo

- Placeholder brand assets live in this folder:
  - `logo-placeholder.svg`
  - `favicon.svg`
  - `linkedin-banner.svg`
  - `linkedin-banner.html`
  - `website-header.html`
- The reusable React logo mark component lives at `components/site/logo-mark.tsx`
- To replace the logo everywhere in the site, either:
  - update `components/site/logo-mark.tsx`, or
  - replace it with your own SVG component that matches the same usage

If you want the browser tab icon updated too, replace `app/icon.svg`.

## Favicon guidance

- Keep the favicon simple and high-contrast
- Prefer a single symbol rather than full wordmark text
- Export square SVG first, then create PNG fallbacks if needed for older platforms
- Test at small sizes like `16x16` and `32x32` to ensure the symbol stays legible

## Contact detail placeholders

The website currently uses placeholders for:

- `admin@bytecodeconsulting.com`
- `linkedin.com/in/your-profile`
- `calendly.com/your-handle`

Update those values in `app/page.tsx`.

## GitHub Pages hosting

This project is configured for static export so it can be hosted for free on GitHub Pages.

- `next.config.mjs` uses `output: "export"`
- Run `npm run build`
- Publish the generated `out/` directory using GitHub Pages or a GitHub Actions deploy workflow

If you connect a custom domain such as `bytecodeconsulting.com`, add your domain in the GitHub Pages settings and create the matching DNS records.
