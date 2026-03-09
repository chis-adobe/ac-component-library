# @ac/component-library

Framework-agnostic component library: **HTML structure + CSS**. Use with React, Vue, vanilla JS, or any stack.

## Installation

```bash
pnpm add @ac/component-library
# or
npm install @ac/component-library
```

**Local development** (before publishing): use `"@ac/component-library": "file:../ac-component-library"` in your `package.json`.

## Publishing to npm

1. Create a separate git repo for this package and push it to GitHub.
2. Update `repository.url` in `package.json` with your repo URL.
3. If using the `@ac` scope, create the org at [npmjs.com](https://www.npmjs.com) (or use your username: `@yourusername/component-library`).
4. From the package directory:
   ```bash
   npm login
   npm publish
   ```

## Components

### Promo Banner

#### Vanilla JS / Any framework

1. Import the CSS:
   ```js
   import "@ac/component-library/promo-banner"
   ```
   Or in HTML: `<link rel="stylesheet" href="node_modules/@ac/component-library/dist/promo-banner.css">`

2. Use the HTML structure from `templates/promo-banner.html` — replace placeholders with your content.

#### React

```tsx
import { PromoBannerCard, PromoBannerCardSkeleton } from "@ac/component-library/promo-banner/react"
// CSS is imported automatically by the React wrapper

<PromoBannerCard
  imageUrl="https://..."
  badge="Recommended for you"
  headline="Your headline"
  description="Your description"
  dates={[
    { label: "Book by", value: "Mar 15, 2025" },
    { label: "Travel by", value: "Jun 30, 2025" },
  ]}
  cta={<a href="/book" className="ac-promo-banner__cta-btn">Book now</a>}
/>
```

#### Promo Banner class reference

| Class | Purpose |
|-------|---------|
| `ac-promo-banner` | Outer section |
| `ac-promo-banner__container` | Max-width container |
| `ac-promo-banner__card` | Card with image + content |
| `ac-promo-banner__card-img` | Background image |
| `ac-promo-banner__badge` | Badge pill |
| `ac-promo-banner__headline` | Main headline |
| `ac-promo-banner__description` | Description text |
| `ac-promo-banner__dates` | Date row container |
| `ac-promo-banner__date` | Single date block |
| `ac-promo-banner__cta-btn` | Optional CTA button style |
| `ac-promo-banner-skeleton` | Loading state section |
| `ac-promo-banner-skeleton__card` | Loading state card |
