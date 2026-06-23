# ITL CMS Integration with Sanity

## Why Sanity

- **Clean visual Studio** — non-technical editors can update text, images, lists without touching code
- **Free tier** covers this site easily (3 users, 10 GB media, 500k API requests/month)
- **TypeScript-first schemas** — you define content structure in code, no config files
- **`next-sanity`** official package — designed for Next.js with built-in ISR support
- **Image CDN** built-in (`sanity.io/cdn`) — handles optimisation automatically

## How it fits together

```
Sanity Studio (editor.sanity.io)
    ↓ editor publishes content
Sanity Dataset (cloud)
    ↓ GROQ queries via next-sanity (on build + ISR revalidation)
Next.js pages & components render with live data
```

## What goes into Sanity (content types / schemas)

Only the content a client would realistically want to change:

- **`pageHero`** — title, subtitle, CTA button text (per page: home, air, road, port, contact, about)
- **`testimonial`** — quote, author name, company, sector (currently duplicated in two files)
- **`serviceCard`** — title, description, icon, link (the 3 cards on homepage)
- **`galleryImage`** — image asset + alt text
- **`contactInfo`** — phone, email, WhatsApp link, LinkedIn URL, address, business hours
- **`sector`** (HowCanWeHelp grid) — name + icon

Things **not** in CMS (stay in code): navigation structure, layout, Tailwind styles, form logic.

## Key files to touch

- `src/components/sections/Hero.tsx` — fetch hero data
- `src/components/sections/Testimonials.tsx` — fetch testimonials
- `src/components/sections/ServicesCards.tsx` — fetch service cards
- `src/components/sections/Gallery.tsx` — fetch gallery images
- `src/components/sections/HowCanWeHelp.tsx` — fetch sectors
- `src/app/contact/page.tsx` — fetch contact info + testimonials
- `src/app/about/page.tsx` — fetch hero + stats
- `src/app/air/page.tsx`, `road/page.tsx`, `port/page.tsx` — fetch hero text per page

## Data fetching strategy

Use **ISR (Incremental Static Regeneration)** — pages are statically built but revalidate every X minutes:
- Fast page loads (no server-side wait)
- Content updates go live within minutes of the editor hitting "Publish"
- No need for a full redeploy after content changes

```ts
// Example pattern for each component/page
const data = await sanityClient.fetch(groq`*[_type == "testimonial"]`)
```

## Implementation steps (in order)

1. Create Sanity project at sanity.io — get `projectId` and `dataset` name
2. Install `next-sanity` and `@sanity/image-url` into the project
3. Create a `sanity/` folder in the repo with schema definitions (one file per content type)
4. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to `.env.local`
5. Migrate hardcoded data into the Sanity dataset (one-time import via Studio)
6. Refactor each component/page to fetch from Sanity instead of inline `const` arrays
7. Embed Sanity Studio at `/studio` route inside the Next.js app

## Rough effort

- Schema + setup: ~2–3 hours
- Migrating all content types: ~3–4 hours
- Refactoring components: ~2–3 hours
- **Total: about a day's work** for full coverage
