import { site, type CityEntry, type ServiceEntry } from "./siteData";
import type { Review } from "../content/reviews";

/** Base LocalBusiness (Pool Contractor / Landscaping) — render once, sitewide. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description:
      "Custom pool design, pool construction, and luxury landscape design for Arizona homeowners.",
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    image: `${site.url}${site.defaultOgImage}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      "Florence AZ",
      "Queen Creek AZ",
      "San Tan Valley AZ",
      "Gilbert AZ",
      "Chandler AZ",
      "Mesa AZ",
      "Scottsdale AZ",
      "Fountain Hills AZ",
      "Apache Junction AZ",
      "Gold Canyon AZ",
      "Casa Grande AZ",
      "Paradise Valley AZ",
      "Arcadia AZ",
      "North Phoenix AZ",
      "Cave Creek AZ",
      "Ahwatukee AZ",
      "Superstition Area AZ",
      "Maricopa AZ",
      "Coolidge AZ",
    ],
    sameAs: site.sameAs,
  };
}

/** Service schema for an individual /services/:slug page. */
export function serviceSchema(service: ServiceEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "State", name: "Arizona" },
    url: `${site.url}/services/${service.slug}`,
  };
}

/** Service + areaServed schema for a /:city-pool-builder page. */
export function cityServiceSchema(city: CityEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Pool & Landscape Design",
    name: `Custom Pool Builder in ${city.cityName}, ${city.region}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "City",
      name: `${city.cityName}, ${city.region}`,
    },
    url: `${site.url}/${city.slug}`,
  };
}

/** BreadcrumbList schema for any page, given ordered {name, path} crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

/** Person schema for the founder/owner — used on the About page for E-E-A-T. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner.name,
    jobTitle: site.owner.role,
    worksFor: { "@id": `${site.url}/#business` },
    url: `${site.url}/about`,
  };
}

/**
 * Review schema for testimonials shown on-site. Deliberately omits
 * aggregateRating — that requires a real, verifiable rating/count from an
 * actual review platform (Google, Facebook, Houzz), which we don't have
 * wired up yet. Fabricating one would violate Google's structured data
 * guidelines. Add AggregateRating once Denise's Google Business Profile
 * review data is available.
 */
export function reviewSchema(items: Review[]) {
  return items.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${site.url}/#business` },
    author: { "@type": "Person", name: review.name },
    reviewBody: review.fullText,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  }));
}

/** FAQPage schema — pass in [{question, answer}] once page copy includes FAQs. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
