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
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85",
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
    slug: "pergolas-gazebos",
    name: "Custom Pergolas & Gazebos",
    shortName: "Pergolas & Gazebos",
    metaDescription:
      "Custom pergolas and gazebos for Arizona backyards, designed for shade, entertaining, and long term outdoor living.",
    intro: "Shade structures designed around the way your yard actually gets used.",
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
    name: "Raised Patios & Fire Features",
    shortName: "Fire Features",
    metaDescription:
      "Raised patios, custom fire pits, fireplaces, and fire bowls integrated into Arizona backyard landscapes.",
    intro: "Fire features and patios designed as gathering places, not add ons.",
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
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "water-features",
    name: "Pondless Water Features",
    shortName: "Water Features",
    metaDescription:
      "Pondless water features, waterfalls, and pool water elements designed for Arizona backyards.",
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
  tagline: string;
  neighbor?: string;
};

export const cities: CityEntry[] = [
  { slug: "florence-az-pool-builder", cityName: "Florence", region: "AZ", tagline: "Larger lots, fewer HOA restrictions" },
  { slug: "queen-creek-pool-builder", cityName: "Queen Creek", region: "AZ", tagline: "Family communities & horse properties" },
  { slug: "san-tan-valley-pool-builder", cityName: "San Tan Valley", region: "AZ", tagline: "Mountain views, fast-growing area" },
  { slug: "gilbert-pool-builder", cityName: "Gilbert", region: "AZ", tagline: "Established neighborhoods, HOA design standards" },
  { slug: "chandler-pool-builder", cityName: "Chandler", region: "AZ", tagline: "Lake and golf-course lots" },
  { slug: "mesa-pool-builder", cityName: "Mesa", region: "AZ", tagline: "Mid-century neighborhoods to new construction" },
  { slug: "scottsdale-pool-builder", cityName: "Scottsdale", region: "AZ", tagline: "Luxury design for DC Ranch & Silverleaf" },
  { slug: "fountain-hills-pool-builder", cityName: "Fountain Hills", region: "AZ", tagline: "Hillside lots, McDowell Mountain views" },
  { slug: "apache-junction-pool-builder", cityName: "Apache Junction", region: "AZ", tagline: "Desert lots below the Superstitions" },
  { slug: "gold-canyon-pool-builder", cityName: "Gold Canyon", region: "AZ", tagline: "Golf-course living near the Superstitions" },
  { slug: "casa-grande-pool-builder", cityName: "Casa Grande", region: "AZ", tagline: "Larger lots between Phoenix and Tucson" },
  { slug: "paradise-valley-pool-builder", cityName: "Paradise Valley", region: "AZ", tagline: "Estate-level design, the strictest standards" },
  { slug: "arcadia-pool-builder", cityName: "Arcadia", region: "AZ", tagline: "Mature trees, flood-irrigated citrus lots" },
  { slug: "north-phoenix-pool-builder", cityName: "North Phoenix", region: "AZ", tagline: "Desert Ridge to North Mountain foothills" },
  { slug: "cave-creek-pool-builder", cityName: "Cave Creek", region: "AZ", tagline: "Rustic high-desert character, larger lots" },
  { slug: "ahwatukee-pool-builder", cityName: "Ahwatukee", region: "AZ", tagline: "South Mountain foothills & golf communities" },
  { slug: "superstition-area-pool-builder", cityName: "Superstition Area", region: "AZ", tagline: "Dramatic Superstition Mountain backdrops" },
  { slug: "maricopa-pool-builder", cityName: "Maricopa", region: "AZ", tagline: "Fast-growing Pinal County community" },
  { slug: "coolidge-pool-builder", cityName: "Coolidge", region: "AZ", tagline: "Quiet, established Pinal County community" },
];

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

/** 3 real, geographically-nearby cities per city page — used for the
 * "Nearby Service Areas" cross-link block. Hand-curated against actual
 * Phoenix-metro/Pinal-County geography, not arbitrary. */
export const nearbyCities: Record<string, string[]> = {
  "florence-az-pool-builder": ["coolidge-pool-builder", "san-tan-valley-pool-builder", "casa-grande-pool-builder"],
  "queen-creek-pool-builder": ["san-tan-valley-pool-builder", "gilbert-pool-builder", "chandler-pool-builder"],
  "san-tan-valley-pool-builder": ["queen-creek-pool-builder", "florence-az-pool-builder", "apache-junction-pool-builder"],
  "gilbert-pool-builder": ["chandler-pool-builder", "mesa-pool-builder", "queen-creek-pool-builder"],
  "chandler-pool-builder": ["gilbert-pool-builder", "mesa-pool-builder", "ahwatukee-pool-builder"],
  "mesa-pool-builder": ["gilbert-pool-builder", "chandler-pool-builder", "apache-junction-pool-builder"],
  "scottsdale-pool-builder": ["paradise-valley-pool-builder", "fountain-hills-pool-builder", "arcadia-pool-builder"],
  "fountain-hills-pool-builder": ["scottsdale-pool-builder", "mesa-pool-builder", "north-phoenix-pool-builder"],
  "apache-junction-pool-builder": ["gold-canyon-pool-builder", "superstition-area-pool-builder", "mesa-pool-builder"],
  "gold-canyon-pool-builder": ["apache-junction-pool-builder", "superstition-area-pool-builder", "queen-creek-pool-builder"],
  "casa-grande-pool-builder": ["coolidge-pool-builder", "maricopa-pool-builder", "florence-az-pool-builder"],
  "paradise-valley-pool-builder": ["scottsdale-pool-builder", "arcadia-pool-builder", "north-phoenix-pool-builder"],
  "arcadia-pool-builder": ["paradise-valley-pool-builder", "scottsdale-pool-builder", "north-phoenix-pool-builder"],
  "north-phoenix-pool-builder": ["cave-creek-pool-builder", "scottsdale-pool-builder", "arcadia-pool-builder"],
  "cave-creek-pool-builder": ["north-phoenix-pool-builder", "scottsdale-pool-builder", "fountain-hills-pool-builder"],
  "ahwatukee-pool-builder": ["chandler-pool-builder", "gilbert-pool-builder", "mesa-pool-builder"],
  "superstition-area-pool-builder": ["apache-junction-pool-builder", "gold-canyon-pool-builder", "mesa-pool-builder"],
  "maricopa-pool-builder": ["casa-grande-pool-builder", "coolidge-pool-builder", "chandler-pool-builder"],
  "coolidge-pool-builder": ["florence-az-pool-builder", "casa-grande-pool-builder", "maricopa-pool-builder"],
};

/** 3 featured services per city page (round-robin through the 11 services,
 * offset by city index) — replaces the old services.slice(0, 4) which
 * showed the same 4 services on every city page. */
export const cityFeaturedServices: Record<string, string[]> = {
  "florence-az-pool-builder": ["custom-pool-design", "custom-pool-construction", "landscape-design"],
  "queen-creek-pool-builder": ["custom-pool-construction", "landscape-design", "outdoor-living-spaces"],
  "san-tan-valley-pool-builder": ["landscape-design", "outdoor-living-spaces", "pergolas-gazebos"],
  "gilbert-pool-builder": ["outdoor-living-spaces", "pergolas-gazebos", "outdoor-kitchens"],
  "chandler-pool-builder": ["pergolas-gazebos", "outdoor-kitchens", "fire-features"],
  "mesa-pool-builder": ["outdoor-kitchens", "fire-features", "artificial-turf"],
  "scottsdale-pool-builder": ["fire-features", "artificial-turf", "pavers-hardscapes"],
  "fountain-hills-pool-builder": ["artificial-turf", "pavers-hardscapes", "water-features"],
  "apache-junction-pool-builder": ["pavers-hardscapes", "water-features", "landscape-lighting"],
  "gold-canyon-pool-builder": ["water-features", "landscape-lighting", "custom-pool-design"],
  "casa-grande-pool-builder": ["landscape-lighting", "custom-pool-design", "custom-pool-construction"],
  "paradise-valley-pool-builder": ["custom-pool-design", "custom-pool-construction", "landscape-design"],
  "arcadia-pool-builder": ["custom-pool-construction", "landscape-design", "outdoor-living-spaces"],
  "north-phoenix-pool-builder": ["landscape-design", "outdoor-living-spaces", "pergolas-gazebos"],
  "cave-creek-pool-builder": ["outdoor-living-spaces", "pergolas-gazebos", "outdoor-kitchens"],
  "ahwatukee-pool-builder": ["pergolas-gazebos", "outdoor-kitchens", "fire-features"],
  "superstition-area-pool-builder": ["outdoor-kitchens", "fire-features", "artificial-turf"],
  "maricopa-pool-builder": ["fire-features", "artificial-turf", "pavers-hardscapes"],
  "coolidge-pool-builder": ["artificial-turf", "pavers-hardscapes", "water-features"],
};

/** 4 featured cities per service page (round-robin through the 19 cities,
 * continuous pointer — every city gets linked from 2-3 different service
 * pages). Replaces the current zero cross-links on service pages. */
export const serviceFeaturedCities: Record<string, string[]> = {
  "custom-pool-design": ["florence-az-pool-builder", "queen-creek-pool-builder", "san-tan-valley-pool-builder", "gilbert-pool-builder"],
  "custom-pool-construction": ["chandler-pool-builder", "mesa-pool-builder", "scottsdale-pool-builder", "fountain-hills-pool-builder"],
  "landscape-design": ["apache-junction-pool-builder", "gold-canyon-pool-builder", "casa-grande-pool-builder", "paradise-valley-pool-builder"],
  "outdoor-living-spaces": ["arcadia-pool-builder", "north-phoenix-pool-builder", "cave-creek-pool-builder", "ahwatukee-pool-builder"],
  "pergolas-gazebos": ["superstition-area-pool-builder", "maricopa-pool-builder", "coolidge-pool-builder", "florence-az-pool-builder"],
  "outdoor-kitchens": ["queen-creek-pool-builder", "san-tan-valley-pool-builder", "gilbert-pool-builder", "chandler-pool-builder"],
  "fire-features": ["mesa-pool-builder", "scottsdale-pool-builder", "fountain-hills-pool-builder", "apache-junction-pool-builder"],
  "artificial-turf": ["gold-canyon-pool-builder", "casa-grande-pool-builder", "paradise-valley-pool-builder", "arcadia-pool-builder"],
  "pavers-hardscapes": ["north-phoenix-pool-builder", "cave-creek-pool-builder", "ahwatukee-pool-builder", "superstition-area-pool-builder"],
  "water-features": ["maricopa-pool-builder", "coolidge-pool-builder", "florence-az-pool-builder", "queen-creek-pool-builder"],
  "landscape-lighting": ["san-tan-valley-pool-builder", "gilbert-pool-builder", "chandler-pool-builder", "mesa-pool-builder"],
};

/** 3 complementary services per service page — real category adjacency
 * (pool-related, landscape-related, outdoor-living-related), not rotation. */
export const relatedServices: Record<string, string[]> = {
  "custom-pool-design": ["custom-pool-construction", "water-features", "landscape-lighting"],
  "custom-pool-construction": ["custom-pool-design", "pavers-hardscapes", "water-features"],
  "landscape-design": ["landscape-lighting", "pavers-hardscapes", "artificial-turf"],
  "outdoor-living-spaces": ["outdoor-kitchens", "pergolas-gazebos", "fire-features"],
  "pergolas-gazebos": ["outdoor-living-spaces", "fire-features", "landscape-lighting"],
  "outdoor-kitchens": ["outdoor-living-spaces", "fire-features", "pavers-hardscapes"],
  "fire-features": ["outdoor-kitchens", "pergolas-gazebos", "outdoor-living-spaces"],
  "artificial-turf": ["pavers-hardscapes", "landscape-design", "landscape-lighting"],
  "pavers-hardscapes": ["artificial-turf", "landscape-design", "custom-pool-construction"],
  "water-features": ["custom-pool-design", "landscape-design", "landscape-lighting"],
  "landscape-lighting": ["landscape-design", "pavers-hardscapes", "custom-pool-design"],
};
