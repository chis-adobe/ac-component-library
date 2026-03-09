/**
 * Optional React wrapper for @ac-comp-lib/component-library promo-banner.
 * Imports the CSS and renders the HTML structure with the shared class names.
 * Your project must have React installed.
 */

import "@ac-comp-lib/component-library/promo-banner"
import * as React from "react"

export interface PromoBannerDate {
  label: string
  value: string
}

export interface PromoBannerCardProps {
  imageUrl: string
  badge?: React.ReactNode
  headline: React.ReactNode
  description?: React.ReactNode
  dates?: PromoBannerDate[]
  cta?: React.ReactNode
  imageComponent?: React.ComponentType<{
    src: string
    alt: string
    className?: string
    "aria-hidden"?: boolean
  }>
  className?: string
  cardClassName?: string
}

const defaultImage = (props: {
  src: string
  alt: string
  className?: string
  "aria-hidden"?: boolean
}) => <img {...props} />

export function PromoBannerCard({
  imageUrl,
  badge,
  headline,
  description,
  dates = [],
  cta,
  imageComponent: Image = defaultImage,
  className,
  cardClassName,
}: PromoBannerCardProps) {
  return (
    <section className={["ac-promo-banner", className].filter(Boolean).join(" ")}>
      <div className="ac-promo-banner__container">
        <div className={["ac-promo-banner__card", cardClassName].filter(Boolean).join(" ")}>
          <div className="ac-promo-banner__card-bg">
            <Image
              src={imageUrl}
              alt=""
              className="ac-promo-banner__card-img"
              aria-hidden={true}
            />
            <div className="ac-promo-banner__card-gradient" aria-hidden />
          </div>
          <div className="ac-promo-banner__content">
            <div className="ac-promo-banner__row">
              <div className="ac-promo-banner__body">
                {badge && <span className="ac-promo-banner__badge">{badge}</span>}
                <h3 className="ac-promo-banner__headline">{headline}</h3>
                {description && (
                  <p className="ac-promo-banner__description">{description}</p>
                )}
                {dates.length > 0 && (
                  <div className="ac-promo-banner__dates">
                    {dates.map((date, i) => (
                      <React.Fragment key={date.label}>
                        {i > 0 && <div className="ac-promo-banner__date-sep" aria-hidden />}
                        <div className="ac-promo-banner__date">
                          <span className="ac-promo-banner__date-label">{date.label}</span>
                          <span className="ac-promo-banner__date-value">{date.value}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              {cta && <div className="ac-promo-banner__cta">{cta}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export interface PromoBannerCardSkeletonProps {
  className?: string
  loader?: React.ReactNode
}

const defaultLoader = (
  <svg
    className="ac-promo-banner-skeleton__loader"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
    <path
      fill="currentColor"
      opacity="0.75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export function PromoBannerCardSkeleton({
  className,
  loader = defaultLoader,
}: PromoBannerCardSkeletonProps) {
  return (
    <section className={["ac-promo-banner-skeleton", className].filter(Boolean).join(" ")}>
      <div className="ac-promo-banner__container">
        <div className="ac-promo-banner-skeleton__card">{loader}</div>
      </div>
    </section>
  )
}
