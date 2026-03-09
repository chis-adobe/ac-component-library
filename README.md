# @ac-comp-lib/component-library

Framework-agnostic component library: **HTML structure + CSS**. Use with React, Vue, vanilla JS, or any stack.

## Installation

```bash
pnpm add @ac-comp-lib/component-library
# or
npm install @ac-comp-lib/component-library
```

**Local development:** `"@ac-comp-lib/component-library": "file:../ac-component-library"`

## Publishing to npm

1. Push your code to GitHub: https://github.com/chis-adobe/ac-component-library
2. From the package directory:
   ```bash
   cd ac-component-library
   npm login
   npm publish
   ```

## Components

### Promo Banner

#### Vanilla JS / Any framework

1. Import the CSS:
   ```js
   import "@ac-comp-lib/component-library/promo-banner"
   ```
   Or in HTML: `<link rel="stylesheet" href="node_modules/@ac-comp-lib/component-library/dist/promo-banner.css">`

2. Use the HTML structure from `templates/promo-banner.html` — replace placeholders with your content.

#### React

```tsx
import { PromoBannerCard, PromoBannerCardSkeleton } from "@ac-comp-lib/component-library/promo-banner/react"
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
