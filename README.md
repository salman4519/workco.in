# Workco website

Landing page for [workco.in](https://workco.in), built with Next.js (App Router).

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

It deploys as-is to Vercel, Netlify or any Node host. Every page is static.

## Where things live

- `lib/site.ts`: phone number, prices, plans, meeting rooms and cabins. Edit prices here and they update on the page and in the search-engine data.
- `app/page.tsx`: the page sections.
- `app/layout.tsx`: SEO metadata and structured data (schema.org LocalBusiness with offers and opening hours).
- `app/globals.css`: all styles. Brand red is `--red` (Scarlet #E3242B).
- `components/`: header, plan carousel (coverflow on phones), scroll animations, word-by-word headings.
- `public/images/`: space photos and logo.

## SEO included

Title and description, canonical URL, Open Graph and Twitter cards with a 1200x630 image, `robots.txt`, `sitemap.xml`, web manifest, favicon and Apple touch icon, schema.org structured data, `lang="en-IN"`, one H1, descriptive alt text, optimised responsive images and a self-hosted font.

**To do when known:** add the branch address and Google Maps link to the `LocalBusiness` block in `app/layout.tsx`. Local search ranking depends on it.
