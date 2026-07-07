/**
 * Central business + content data.
 * Every SEO template (title, meta description, schema, routes) is generated
 * from this file so NAP (name/address/phone) and copy stay consistent across
 * every page — this is what the audit flagged as missing sitewide.
 */

export const site = {
  domain: "littlepieceofparadisellc.com",
  url: "https://www.littlepieceofparadisellc.com",
  name: "Little Piece of Paradise LLC",
  shortName: "Little Piece of Paradise",
  tagline: "Custom Pools & Luxury Landscape Design in Arizona",
  phoneDisplay: "(623) 282-2282",
  phoneHref: "tel:+16232822282",
  email: "denise@littlepieceofparadisellc.com",
  owner: {
    name: "Denise Caldwell",
    role: "Owner & Lead Designer",
  },
  address: {
    street: "11153 Marigold Ln",
    city: "Florence",
    region: "AZ",
    postalCode: "85132",
    country: "US",
  },
  // TODO: fill in once verified with the client — used in LocalBusiness schema
  geo: { latitude: 33.0281, longitude: -111.3843 },
  sameAs: [] as string[], // add Instagram / Facebook / Houzz / Nextdoor URLs when available
  defaultOgImage: "/og-default.jpg", // TODO: replace with the branded 1200x630 OG image from the SEO audit
};

export type ServiceEntry = {
  slug: string;
  name: string;
  shortName: string;
  metaDescription: string;
  intro: string;
  heroImage: string;
};

export const services: ServiceEntry[] = [
  {
    slug: "custom-pool-design",
    name: "Custom Pool Design",
    shortName: "Pool Design",
    metaDescription:
      "Custom pool design in Arizona — geometric and freeform layouts, integrated spas, and travertine decking built for Arizona living.",
    intro: "Every pool starts as a design conversation, not a catalog page.",
    heroImage: "https://images.unsplash.com/photo-1593282153762-a4c4eac7d9bc?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "custom-pool-construction",
    name: "Custom Pool Construction",
    shortName: "Pool Construction",
    metaDescription:
      "Licensed custom pool construction for Arizona homeowners, from excavation through final walkthrough.",
    intro: "One team manages your project from concept through construction.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "landscape-design",
    name: "Landscape Design",
    shortName: "Landscape Design",
    metaDescription:
      "Desert-smart landscape design for Arizona properties — native and adapted planting, lighting, and hardscape plans.",
    intro: "Landscape plans built around Arizona's climate, not against it.",
    heroImage: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "outdoor-living-spaces",
    name: "Outdoor Living Spaces",
    shortName: "Outdoor Living",
    metaDescription:
      "Custom outdoor living spaces — covered patios, seating areas, and pergolas designed for year-round Arizona evenings.",
    intro: "Spaces designed for the way your family actually gathers outside.",
    heroImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "outdoor-kitchens",
    name: "Outdoor Kitchens",
    shortName: "Outdoor Kitchens",
    metaDescription:
      "Custom outdoor kitchen design and construction for Arizona backyards — built-in grills, bars, and entertaining spaces.",
    intro: "A kitchen built for entertaining, not just grilling.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "fire-features",
    name: "Fire Features",
    shortName: "Fire Features",
    metaDescription:
      "Custom fire pits and fire bowls integrated into Arizona backyard landscapes for cool desert evenings.",
    intro: "Fire features designed as part of the landscape, not an add-on.",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "artificial-turf",
    name: "Artificial Turf",
    shortName: "Artificial Turf",
    metaDescription:
      "Premium artificial turf installation for Arizona homes — a perfect lawn year-round with none of the water use.",
    intro: "A perfect lawn, without fighting the Arizona sun for it.",
    heroImage: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "pavers-hardscapes",
    name: "Pavers & Hardscapes",
    shortName: "Pavers & Hardscapes",
    metaDescription:
      "Premium travertine and paver hardscape installation for Arizona patios, walkways, and pool decks.",
    intro: "The hardscape is the foundation the rest of the design stands on.",
    heroImage: "https://images.unsplash.com/photo-1593282153762-a4c4eac7d9bc?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "water-features",
    name: "Water Features",
    shortName: "Water Features",
    metaDescription:
      "Custom water feature installation — waterfalls, pondless features, and pool water elements for Arizona backyards.",
    intro: "The sound of moving water changes how a backyard feels.",
    heroImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    shortName: "Landscape Lighting",
    metaDescription:
      "Custom landscape lighting design so your Arizona backyard looks as good at night as it does during the day.",
    intro: "Good lighting is the difference between a yard and a destination.",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85",
  },
];

export type CityEntry = {
  slug: string;
  cityName: string;
  region: string;
  neighbor?: string;
};

export const cities: CityEntry[] = [
  { slug: "florence-az-pool-builder", cityName: "Florence", region: "AZ" },
  { slug: "queen-creek-pool-builder", cityName: "Queen Creek", region: "AZ" },
  { slug: "san-tan-valley-pool-builder", cityName: "San Tan Valley", region: "AZ" },
  { slug: "gilbert-pool-builder", cityName: "Gilbert", region: "AZ" },
  { slug: "chandler-pool-builder", cityName: "Chandler", region: "AZ" },
  { slug: "mesa-pool-builder", cityName: "Mesa", region: "AZ" },
  { slug: "scottsdale-pool-builder", cityName: "Scottsdale", region: "AZ" },
  { slug: "fountain-hills-pool-builder", cityName: "Fountain Hills", region: "AZ" },
  { slug: "apache-junction-pool-builder", cityName: "Apache Junction", region: "AZ" },
  { slug: "gold-canyon-pool-builder", cityName: "Gold Canyon", region: "AZ" },
  { slug: "casa-grande-pool-builder", cityName: "Casa Grande", region: "AZ" },
  { slug: "paradise-valley-pool-builder", cityName: "Paradise Valley", region: "AZ" },
  { slug: "arcadia-pool-builder", cityName: "Arcadia", region: "AZ" },
  { slug: "north-phoenix-pool-builder", cityName: "North Phoenix", region: "AZ" },
  { slug: "cave-creek-pool-builder", cityName: "Cave Creek", region: "AZ" },
  { slug: "ahwatukee-pool-builder", cityName: "Ahwatukee", region: "AZ" },
  { slug: "superstition-area-pool-builder", cityName: "Superstition Area", region: "AZ" },
  { slug: "maricopa-pool-builder", cityName: "Maricopa", region: "AZ" },
  { slug: "coolidge-pool-builder", cityName: "Coolidge", region: "AZ" },
];

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];
