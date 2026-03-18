# Bytecode Consulting Website

Premium static marketing website and brand asset package for Bytecode Consulting.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Static export for GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for GitHub Pages

```bash
npm run build
```

The exported static site will be generated in `out/`.

## Key edit points

- Main homepage content: `app/page.tsx`
- Proposal template: `app/proposal/page.tsx`
- Training brochure: `app/training-brochure/page.tsx`
- Shared content arrays: `lib/site-content.ts`
- Logo component: `components/site/logo-mark.tsx`
- Global colours and visual styling: `app/globals.css`
- Tailwind theme tokens: `tailwind.config.ts`
- Brand assets: `public/brand/`
- Custom domain for GitHub Pages: `public/CNAME`

## GitHub Pages notes

- Static export is enabled in `next.config.mjs`
- A GitHub Actions workflow is included at `.github/workflows/deploy.yml`
- The custom domain is set to `bytecodeconsulting.com`

If you use a different domain later, update `public/CNAME` and the `metadataBase` value in `app/layout.tsx`.
