# ITL CMS — setup and editing guide

The site runs on **Sanity**, with the editing Studio embedded at `/studio`.
Content is bilingual (English + Romanian) and every page, list and image is
editable without touching code.

The site works with **no Sanity project at all** — it falls back to bundled
content in `src/content/`. Connecting Sanity switches the data source over
automatically. Nothing breaks while you set it up.

---

## 1. Create the Sanity project

```bash
npx sanity login
```

```bash
npx sanity init --create-project "Inter Trans Logistics" --dataset production
```

When asked whether to add configuration files, answer **no** — this repo already
has `sanity.config.ts` and `sanity.cli.ts`. Copy the **project ID** it prints.

## 2. Add credentials

Create `.env.local` in the project root (see `.env.example`):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Seed the existing content

Create a write token at [sanity.io/manage](https://sanity.io/manage) →
your project → **API** → **Tokens** → *Add API token*, with **Editor**
permissions. Add it to `.env.local`:

```bash
SANITY_WRITE_TOKEN=sk_your_token
```

Check what will happen without uploading anything:

```bash
npm run seed -- --dry-run
```

Then run it for real — this uploads all 52 images and writes all 12 documents
in both languages:

```bash
npm run seed
```

Delete `SANITY_WRITE_TOKEN` from `.env.local` afterwards; the site never needs
it to read content.

## 4. Open the Studio

```bash
npm run dev
```

Go to <http://localhost:3000/studio>.

---

## Editing

The Studio sidebar mirrors the site:

| Item | Controls |
| --- | --- |
| **Site Settings** | Company name, tagline, logo, footer text, phone, email, WhatsApp and LinkedIn. Used by the header, footer, homepage and contact page — change it once, it updates everywhere. |
| **Home Page** | Hero, the three service cards, sector grid, help section, testimonial headings, gallery. |
| **About Page** | All eight numbered sections, statistics, coverage table and closing call to action. |
| **Road / Air / Port Operations Pages** | Hero, benefits, feature lists, coverage, and the headings above each quote form. |
| **Contact Page** | Hero, info cards, map placeholder and section headings. |
| **Testimonials** | The shared client quotes, shown on the homepage and contact page. Drag to reorder. |

### Switching language

Every text field has an **English** and a **Română** box. Use the language
filter in the Studio toolbar to hide one language while you work.

If a Romanian field is left empty, the site falls back to the English text for
that field rather than showing a gap.

### Images

Every image is uploaded through the Studio and served from Sanity's CDN,
resized automatically. Use the **hotspot** tool (the crop icon) to set the focal
point — background images honour it when cropped.

Add **alt text** to anything meaningful; leave it blank for decoration.

### Icons

Two kinds:

- **Uploaded icons** (service pages, sector grid) — upload an SVG or PNG.
- **Chosen icons** (About page) — pick from a dropdown. To add a new option,
  edit `src/components/icons/registry.ts`.

### Line breaks in headings

Some headings are designed to wrap at a specific point (for example *"European
focus, / practical reach"*). Press **Enter** in the field to control where the
break falls.

---

## Publishing goes live automatically

Pages revalidate at most 60 seconds after a change. For instant updates, add a
webhook: [sanity.io/manage](https://sanity.io/manage) → **API** → **Webhooks**:

- **URL** — `https://your-domain.com/api/revalidate`
- **Dataset** — `production`
- **Trigger on** — Create, Update, Delete
- **Projection** — `{_type}`
- **HTTP method** — `POST`
- **Secret** — any random string

Put the same string in your environment as `SANITY_REVALIDATE_SECRET`.

Publishing then refreshes only the pages that use the changed document.

---

## What is *not* in the CMS

By design, these stay in code because they are structural rather than editorial:

- Navigation and footer link structure — `src/i18n/dictionary.ts`
- Form field labels and placeholders — `src/i18n/dictionary.ts`
- Page layouts, colours and spacing
- Form submission behaviour

`dictionary.ts` holds both languages side by side, so changing a nav label or
form label is a one-line edit in one file.

---

## Deploying

Add these to your hosting environment (e.g. Vercel → Settings → Environment
Variables):

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_REVALIDATE_SECRET
```

Then add your production URL to the allowed CORS origins at
[sanity.io/manage](https://sanity.io/manage) → **API** → **CORS origins**.

---

## How it fits together

```
src/
  app/[locale]/          Pages, one route tree serving /en and /ro
  app/studio/            The embedded Sanity Studio
  app/api/revalidate/    Publish webhook
  content/               Typed content getters + bundled fallback/seed data
  i18n/                  Locale config, chrome dictionary, link helpers
  sanity/                Client, image URLs, locale resolver, schemas
  proxy.ts               Locale detection and redirects
scripts/seed.ts          One-time content + image import
```

Each page calls `getXContent(locale)`, which fetches from Sanity, collapses the
`{ en, ro }` fields down to plain strings for the active locale, and falls back
to the bundled seed content if Sanity is unreachable or unconfigured.
