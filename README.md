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
- News listing page: `app/news/page.tsx`
- News article page template: `app/news/[slug]/page.tsx`
- News content index: `lib/news/index.ts`
- News post files: `lib/news/posts/`
- Proposal template: `app/proposal/page.tsx`
- Training brochure: `app/training-brochure/page.tsx`
- Shared content arrays: `lib/site-content.ts`
- Logo component: `components/site/logo-mark.tsx`
- Global colours and visual styling: `app/globals.css`
- Tailwind theme tokens: `tailwind.config.ts`
- Brand assets: `public/brand/`
- News images: `public/news/`
- Custom domain for GitHub Pages: `public/CNAME`

## Adding a news article

Use the file-based workflow below to add a new news post quickly:

1. Copy `lib/news/posts/_template.ts`
2. Rename it to match the new article slug
3. Update the content fields in the copied file
4. Import the new post into `lib/news/index.ts`
5. Add the article image under `public/news/`

This keeps the news section simple, fast, and easy to maintain without introducing a CMS.

## GitHub Pages notes

- Static export is enabled in `next.config.mjs`
- A GitHub Actions workflow is included at `.github/workflows/deploy.yml`
- The custom domain is set to `bytecodeconsulting.com`

If you use a different domain later, update `public/CNAME` and the `metadataBase` value in `app/layout.tsx`.
