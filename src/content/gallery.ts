export type GalleryCategory = "all" | "design-renders" | "project-photos" | "uncategorized";

export type GalleryImage = {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
};

export const galleryCategories: { id: GalleryCategory; label: string; description: string }[] = [
  { id: "all", label: "All", description: "Complete Phase 1 portfolio of images and designs" },
  { id: "project-photos", label: "Completed Projects", description: "Finished outdoor living, pool, patio, and landscape installations" },
  { id: "design-renders", label: "Design Renders", description: "3D concepts, aerial plans, and design previews" },
  { id: "uncategorized", label: "More Project Views", description: "Additional project views, plans, materials, and detail photos" },
];

export const galleryCounts = {
  "all": 282,
  "project-photos": 44,
  "design-renders": 51,
  "uncategorized": 187
} as const;

export const galleryImages: GalleryImage[] = [
  {
    "id": "gallery-011",
    "category": "project-photos",
    "title": "My Patio",
    "alt": "MY PATIO.jpg",
    "src": "/gallery/project-photos/011-project-photos-my-patio-jpg.jpg",
    "width": 1280
  },
  {
    "id": "gallery-270",
    "category": "project-photos",
    "title": "Full View Back And Patio",
    "alt": "Full View Back And Patio by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/270-project-photos-full-view-back-and-patio.jpg",
    "width": 590,
    "height": 448
  },
  {
    "id": "gallery-277",
    "category": "project-photos",
    "title": "After Back Of House",
    "alt": "After Back Of House by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/277-project-photos-after-back-of-house.jpg",
    "width": 1280,
    "height": 972
  },
  {
    "id": "gallery-278",
    "category": "project-photos",
    "title": "After Gate Entrance",
    "alt": "After Gate Entrance by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/278-project-photos-after-gate-entrance.jpg",
    "width": 1280,
    "height": 1125
  },
  {
    "id": "gallery-279",
    "category": "project-photos",
    "title": "After Right Back",
    "alt": "After Right Back by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/279-project-photos-after-right-back.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-318",
    "category": "project-photos",
    "title": "Sandy Front Walkway Before After",
    "alt": "Sandy Front Walkway Before After by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/318-project-photos-sandy-front-walkway-before-after.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-319",
    "category": "project-photos",
    "title": "Sandy Front Yard Redesign",
    "alt": "Sandy Front Yard Redesign by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/319-project-photos-sandy-front-yard-redesign.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-321",
    "category": "project-photos",
    "title": "Sandy Pool Equip Before After Revised",
    "alt": "Sandy Pool Equip Before After Revised by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/321-project-photos-sandy-pool-equip-before-after-revised.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-322",
    "category": "project-photos",
    "title": "Sandy Revised Backyard Plan Oct 2 2025",
    "alt": "Sandy Revised Backyard Plan Oct 2 2025 by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/322-project-photos-sandy-revised-backyard-plan-oct-2-2025.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-323",
    "category": "project-photos",
    "title": "Sandy Side Yard 2 Before After",
    "alt": "Sandy Side Yard 2 Before After by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/323-project-photos-sandy-side-yard-2-before-after.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-324",
    "category": "project-photos",
    "title": "Sandy Turf From Patio 5 Before After",
    "alt": "Sandy Turf From Patio 5 Before After by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/324-project-photos-sandy-turf-from-patio-5-before-after.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-325",
    "category": "project-photos",
    "title": "Sandy Turf From Side Yard",
    "alt": "Sandy Turf From Side Yard by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/325-project-photos-sandy-turf-from-side-yard.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-467",
    "category": "project-photos",
    "title": "Sam Backyard Overview",
    "alt": "Sam Backyard Overview by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/467-project-photos-sam-backyard-overview.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-492",
    "category": "project-photos",
    "title": "Rachelle Back Patio Left Side Of Yard Designed Night View",
    "alt": "Rachelle Back Patio Left Side Of Yard Designed Night View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/492-project-photos-rachelle-back-patio-left-side-of-yard-designed-night-view.jpg",
    "width": 937,
    "height": 574
  },
  {
    "id": "gallery-493",
    "category": "project-photos",
    "title": "Rachelle Back Patio Left Side Of Yard Designed",
    "alt": "Rachelle Back Patio Left Side Of Yard Designed by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/493-project-photos-rachelle-back-patio-left-side-of-yard-designed.jpg",
    "width": 929,
    "height": 566
  },
  {
    "id": "gallery-494",
    "category": "project-photos",
    "title": "Rachelle Back Yard Right Side Design Night View",
    "alt": "Rachelle Back Yard Right Side Design Night View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/494-project-photos-rachelle-back-yard-right-side-design-night-view.jpg",
    "width": 1280,
    "height": 790
  },
  {
    "id": "gallery-495",
    "category": "project-photos",
    "title": "Rachelle Back Yard Right Side Design",
    "alt": "Rachelle Back Yard Right Side Design by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/495-project-photos-rachelle-back-yard-right-side-design.jpg",
    "width": 1280,
    "height": 812
  },
  {
    "id": "gallery-497",
    "category": "project-photos",
    "title": "Rachelle Side Yard Garbage Can Design Option 2",
    "alt": "Rachelle Side Yard Garbage Can Design Option 2 by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/497-project-photos-rachelle-side-yard-garbage-can-design-option-2.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-498",
    "category": "project-photos",
    "title": "Kari Backyard View Left",
    "alt": "Kari Backyard View Left by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/498-project-photos-kari-backyard-view-left.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-499",
    "category": "project-photos",
    "title": "Kari Backyard View",
    "alt": "Kari Backyard View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/499-project-photos-kari-backyard-view.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-503",
    "category": "project-photos",
    "title": "Left Back Yard",
    "alt": "Left Back Yard by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/503-project-photos-left-back-yard.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-504",
    "category": "project-photos",
    "title": "Patio Night View",
    "alt": "Patio Night View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/504-project-photos-patio-night-view.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-505",
    "category": "project-photos",
    "title": "Patio View",
    "alt": "Patio View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/505-project-photos-patio-view.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-506",
    "category": "project-photos",
    "title": "Right Back Yard",
    "alt": "Right Back Yard by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/506-project-photos-right-back-yard.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-533",
    "category": "project-photos",
    "title": "Kari Side Front Yard Redesign Plant List",
    "alt": "Kari Side Front Yard Redesign Plant List by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/533-project-photos-kari-side-front-yard-redesign-plant-list.jpg",
    "width": 1280,
    "height": 1707
  },
  {
    "id": "gallery-534",
    "category": "project-photos",
    "title": "Kari Side Front Yard Redesign",
    "alt": "Kari Side Front Yard Redesign by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/534-project-photos-kari-side-front-yard-redesign.jpg",
    "width": 1280,
    "height": 1707
  },
  {
    "id": "gallery-535",
    "category": "project-photos",
    "title": "Kari Front Yard Plant List",
    "alt": "Kari Front Yard Plant List by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/535-project-photos-kari-front-yard-plant-list.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-536",
    "category": "project-photos",
    "title": "Kari Front Yard",
    "alt": "Kari Front Yard by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/536-project-photos-kari-front-yard.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-575",
    "category": "project-photos",
    "title": "1 Secret Garden From Pool Area Final",
    "alt": "1 Secret Garden From Pool Area Final by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/575-project-photos-1-secret-garden-from-pool-area-final.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-577",
    "category": "project-photos",
    "title": "1 Sod Raised Garden Final",
    "alt": "1 Sod Raised Garden Final by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/577-project-photos-1-sod-raised-garden-final.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-578",
    "category": "project-photos",
    "title": "1 Wall Garden",
    "alt": "1 Wall Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/578-project-photos-1-wall-garden.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-582",
    "category": "project-photos",
    "title": "Ashley Pergola Pool Garden",
    "alt": "Ashley Pergola Pool Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/582-project-photos-ashley-pergola-pool-garden.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-584",
    "category": "project-photos",
    "title": "Ashley Pool & Secret Garden",
    "alt": "Ashley Pool & Secret Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/584-project-photos-ashley-pool-secret-garden.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-586",
    "category": "project-photos",
    "title": "Ashley D2 Backyard View From Right",
    "alt": "Ashley D2 Backyard View From Right by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/586-project-photos-ashley-d2-backyard-view-from-right.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-587",
    "category": "project-photos",
    "title": "Ashley D2 Greenhouse Garden",
    "alt": "Ashley D2 Greenhouse Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/587-project-photos-ashley-d2-greenhouse-garden.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-593",
    "category": "project-photos",
    "title": "Ashley D3 Pool Patio Night",
    "alt": "Ashley D3 Pool Patio Night by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/593-project-photos-ashley-d3-pool-patio-night.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-594",
    "category": "project-photos",
    "title": "Ashley D3 Pool Patio",
    "alt": "Ashley D3 Pool Patio by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/594-project-photos-ashley-d3-pool-patio.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-596",
    "category": "project-photos",
    "title": "Ashley D3 Secret Garden",
    "alt": "Ashley D3 Secret Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/596-project-photos-ashley-d3-secret-garden.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-603",
    "category": "project-photos",
    "title": "Ashley Pool Patio View",
    "alt": "Ashley Pool Patio View by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/603-project-photos-ashley-pool-patio-view.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-619",
    "category": "project-photos",
    "title": "Secret Garden Area",
    "alt": "Secret Garden Area by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/619-project-photos-secret-garden-area.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-620",
    "category": "project-photos",
    "title": "1 Counter With Garden",
    "alt": "1 Counter With Garden by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/620-project-photos-1-counter-with-garden.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-626",
    "category": "project-photos",
    "title": "1 Pergola Over Patio Extension With Garden And Kitchen",
    "alt": "1 Pergola Over Patio Extension With Garden And Kitchen by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/626-project-photos-1-pergola-over-patio-extension-with-garden-and-kitchen.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-638",
    "category": "project-photos",
    "title": "Ashley Final Firepit Patio View Updated Jan 26 2026",
    "alt": "Ashley Final Firepit Patio View Updated Jan 26 2026 by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/638-project-photos-ashley-final-firepit-patio-view-updated-jan-26-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-681",
    "category": "project-photos",
    "title": "Zemanek Full Front View Before",
    "alt": "Zemanek Full Front View Before by Little Piece of Paradise - completed projects for Arizona outdoor living.",
    "src": "/gallery/project-photos/681-project-photos-zemanek-full-front-view-before.jpg",
    "width": 2016,
    "height": 629
  },
  {
    "id": "gallery-006",
    "category": "design-renders",
    "title": "Shad Final Sm Water Feature From Turf Night View",
    "alt": "Shad Final Sm Water Feature From Turf Night View by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/006-design-renders-shad-final-sm-water-feature-from-turf-night-view.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-028",
    "category": "design-renders",
    "title": "Aerial Step Down 1",
    "alt": "Aerial Step Down 1 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/028-design-renders-aerial-step-down-1.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-029",
    "category": "design-renders",
    "title": "Aerial Step Down 2",
    "alt": "Aerial Step Down 2 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/029-design-renders-aerial-step-down-2.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-064",
    "category": "design-renders",
    "title": "Aerial 1",
    "alt": "Aerial 1 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/064-design-renders-aerial-1.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-065",
    "category": "design-renders",
    "title": "Aerial 2",
    "alt": "Aerial 2 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/065-design-renders-aerial-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-066",
    "category": "design-renders",
    "title": "Aerial Back Left",
    "alt": "Aerial Back Left by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/066-design-renders-aerial-back-left.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-067",
    "category": "design-renders",
    "title": "Aerial Back Right",
    "alt": "Aerial Back Right by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/067-design-renders-aerial-back-right.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-068",
    "category": "design-renders",
    "title": "Aerial Back",
    "alt": "Aerial Back by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/068-design-renders-aerial-back.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-431",
    "category": "design-renders",
    "title": "Arlene Aerial",
    "alt": "Arlene Aerial by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/431-design-renders-arlene-aerial.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-444",
    "category": "design-renders",
    "title": "Lacee Back Left Wall Designed",
    "alt": "Lacee Back Left Wall Designed by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/444-design-renders-lacee-back-left-wall-designed.jpg",
    "width": 1080,
    "height": 720
  },
  {
    "id": "gallery-446",
    "category": "design-renders",
    "title": "Lacee Back Right Wall Designed",
    "alt": "Lacee Back Right Wall Designed by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/446-design-renders-lacee-back-right-wall-designed.jpg",
    "width": 1003,
    "height": 720
  },
  {
    "id": "gallery-448",
    "category": "design-renders",
    "title": "Lacee Design",
    "alt": "Lacee Design by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/448-design-renders-lacee-design.jpg",
    "width": 1051,
    "height": 720
  },
  {
    "id": "gallery-496",
    "category": "design-renders",
    "title": "Rachelle Outdoor Kitchen With Border Area Designed",
    "alt": "Rachelle Outdoor Kitchen With Border Area Designed by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/496-design-renders-rachelle-outdoor-kitchen-with-border-area-designed.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-585",
    "category": "design-renders",
    "title": "Ashley D2 Aerial",
    "alt": "Ashley D2 Aerial by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/585-design-renders-ashley-d2-aerial.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-604",
    "category": "design-renders",
    "title": "Design 3 Aerial",
    "alt": "Design 3 Aerial by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/604-design-renders-design-3-aerial.jpg",
    "width": 824,
    "height": 621
  },
  {
    "id": "gallery-605",
    "category": "design-renders",
    "title": "Design 3 Right Side Aerial",
    "alt": "Design 3 Right Side Aerial by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/605-design-renders-design-3-right-side-aerial.jpg",
    "width": 855,
    "height": 551
  },
  {
    "id": "gallery-606",
    "category": "design-renders",
    "title": "Design 4 Pool With Pergola",
    "alt": "Design 4 Pool With Pergola by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/606-design-renders-design-4-pool-with-pergola.jpg",
    "width": 1099,
    "height": 604
  },
  {
    "id": "gallery-630",
    "category": "design-renders",
    "title": "1 Pool View From Turf",
    "alt": "1 Pool View From Turf by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/630-design-renders-1-pool-view-from-turf.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-633",
    "category": "design-renders",
    "title": "Ashley Final Aerial Updated Jan 26 2026",
    "alt": "Ashley Final Aerial Updated Jan 26 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/633-design-renders-ashley-final-aerial-updated-jan-26-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-634",
    "category": "design-renders",
    "title": "Ashley Final Aerial Back Side View Updated Jan 26 2026",
    "alt": "Ashley Final Aerial Back Side View Updated Jan 26 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/634-design-renders-ashley-final-aerial-back-side-view-updated-jan-26-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-635",
    "category": "design-renders",
    "title": "Ashley Final Aerial Back View Updated Jan 26 2026",
    "alt": "Ashley Final Aerial Back View Updated Jan 26 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/635-design-renders-ashley-final-aerial-back-view-updated-jan-26-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-636",
    "category": "design-renders",
    "title": "Ashley Final Aerial Left Side View Updated Jan 26 2026",
    "alt": "Ashley Final Aerial Left Side View Updated Jan 26 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/636-design-renders-ashley-final-aerial-left-side-view-updated-jan-26-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-637",
    "category": "design-renders",
    "title": "Ashley Final Design Revised Jan 25 2026",
    "alt": "Ashley Final Design Revised Jan 25 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/637-design-renders-ashley-final-design-revised-jan-25-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-640",
    "category": "design-renders",
    "title": "Ashley Final Pool Design Revised Jan 25 2026",
    "alt": "Ashley Final Pool Design Revised Jan 25 2026 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/640-design-renders-ashley-final-pool-design-revised-jan-25-2026.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-652",
    "category": "design-renders",
    "title": "Lyn Design 1",
    "alt": "Lyn Design 1 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/652-design-renders-lyn-design-1.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-653",
    "category": "design-renders",
    "title": "Lyn Design 2",
    "alt": "Lyn Design 2 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/653-design-renders-lyn-design-2.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-654",
    "category": "design-renders",
    "title": "Lyn Design 3",
    "alt": "Lyn Design 3 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/654-design-renders-lyn-design-3.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-655",
    "category": "design-renders",
    "title": "Lyn Design 4",
    "alt": "Lyn Design 4 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/655-design-renders-lyn-design-4.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-656",
    "category": "design-renders",
    "title": "Lyn Design 5 Night View",
    "alt": "Lyn Design 5 Night View by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/656-design-renders-lyn-design-5-night-view.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-657",
    "category": "design-renders",
    "title": "Lyn Design 5",
    "alt": "Lyn Design 5 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/657-design-renders-lyn-design-5.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-658",
    "category": "design-renders",
    "title": "Lyn Design 6 Night View",
    "alt": "Lyn Design 6 Night View by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/658-design-renders-lyn-design-6-night-view.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-659",
    "category": "design-renders",
    "title": "Lyn Design 6",
    "alt": "Lyn Design 6 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/659-design-renders-lyn-design-6.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-660",
    "category": "design-renders",
    "title": "Lyn Design Final",
    "alt": "Lyn Design Final by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/660-design-renders-lyn-design-final.jpg",
    "width": 1280,
    "height": 493
  },
  {
    "id": "gallery-673",
    "category": "design-renders",
    "title": "Zemanek Aerial Re Design 1",
    "alt": "Zemanek Aerial Re Design 1 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/673-design-renders-zemanek-aerial-re-design-1.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-674",
    "category": "design-renders",
    "title": "Zemanek Aerial Re Design Dry Bed",
    "alt": "Zemanek Aerial Re Design Dry Bed by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/674-design-renders-zemanek-aerial-re-design-dry-bed.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-675",
    "category": "design-renders",
    "title": "Zemanek Aerial Re Design Plant Guide",
    "alt": "Zemanek Aerial Re Design Plant Guide by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/675-design-renders-zemanek-aerial-re-design-plant-guide.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-676",
    "category": "design-renders",
    "title": "Zemanek Front Designed 1 Night",
    "alt": "Zemanek Front Designed 1 Night by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/676-design-renders-zemanek-front-designed-1-night.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-677",
    "category": "design-renders",
    "title": "Zemanek Front Designed Dark Border Night",
    "alt": "Zemanek Front Designed Dark Border Night by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/677-design-renders-zemanek-front-designed-dark-border-night.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-678",
    "category": "design-renders",
    "title": "Zemanek Front Designed Dark Border",
    "alt": "Zemanek Front Designed Dark Border by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/678-design-renders-zemanek-front-designed-dark-border.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-679",
    "category": "design-renders",
    "title": "Zemanek Front Designed Light Border Night",
    "alt": "Zemanek Front Designed Light Border Night by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/679-design-renders-zemanek-front-designed-light-border-night.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-680",
    "category": "design-renders",
    "title": "Zemanek Front Designed Light Border",
    "alt": "Zemanek Front Designed Light Border by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/680-design-renders-zemanek-front-designed-light-border.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-682",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design 1 Dark Border.",
    "alt": "Zemanek Full Front View Design 1 Dark Border. by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/682-design-renders-zemanek-full-front-view-design-1-dark-border.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-683",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design 1",
    "alt": "Zemanek Full Front View Design 1 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/683-design-renders-zemanek-full-front-view-design-1.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-684",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design Night",
    "alt": "Zemanek Full Front View Design Night by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/684-design-renders-zemanek-full-front-view-design-night.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-685",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design 2 Red Crushed Rock Dark Border",
    "alt": "Zemanek Full Front View Design 2 Red Crushed Rock Dark Border by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/685-design-renders-zemanek-full-front-view-design-2-red-crushed-rock-dark-border.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-686",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design 2 Red Crushed Rock Light Border",
    "alt": "Zemanek Full Front View Design 2 Red Crushed Rock Light Border by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/686-design-renders-zemanek-full-front-view-design-2-red-crushed-rock-light-border.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-687",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design 2",
    "alt": "Zemanek Full Front View Design 2 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/687-design-renders-zemanek-full-front-view-design-2.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-688",
    "category": "design-renders",
    "title": "Zemanek Full Front View Design",
    "alt": "Zemanek Full Front View Design by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/688-design-renders-zemanek-full-front-view-design.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-690",
    "category": "design-renders",
    "title": "Zemanek Redesign Front View",
    "alt": "Zemanek Redesign Front View by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/690-design-renders-zemanek-redesign-front-view.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-691",
    "category": "design-renders",
    "title": "Zemanek Aerial Re Design",
    "alt": "Zemanek Aerial Re Design by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/691-design-renders-zemanek-aerial-re-design.jpg",
    "width": 1280,
    "height": 371
  },
  {
    "id": "gallery-692",
    "category": "design-renders",
    "title": "Zemanek Design 2",
    "alt": "Zemanek Design 2 by Little Piece of Paradise - design renders for Arizona outdoor living.",
    "src": "/gallery/design-renders/692-design-renders-zemanek-design-2.jpg",
    "width": 1280,
    "height": 960
  },
  {
    "id": "gallery-002",
    "category": "uncategorized",
    "title": "37",
    "alt": "37 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/002-uncategorized-37.jpg",
    "width": 945,
    "height": 570
  },
  {
    "id": "gallery-003",
    "category": "uncategorized",
    "title": "50",
    "alt": "50 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/003-uncategorized-50.jpg",
    "width": 1280,
    "height": 472
  },
  {
    "id": "gallery-004",
    "category": "uncategorized",
    "title": "Steve D5 3",
    "alt": "Steve D5 3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/004-uncategorized-steve-d5-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-005",
    "category": "uncategorized",
    "title": "Fav 1d",
    "alt": "Fav 1d by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/005-uncategorized-fav-1d.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-007",
    "category": "uncategorized",
    "title": "40",
    "alt": "40 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/007-uncategorized-40.jpg",
    "width": 1155,
    "height": 641
  },
  {
    "id": "gallery-008",
    "category": "uncategorized",
    "title": "9755",
    "alt": "9755 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/008-uncategorized-img-9755-jpeg.jpg",
    "width": 500
  },
  {
    "id": "gallery-009",
    "category": "uncategorized",
    "title": "9028",
    "alt": "9028 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/009-uncategorized-img-9028-jpg.jpg",
    "width": 640
  },
  {
    "id": "gallery-010",
    "category": "uncategorized",
    "title": "21",
    "alt": "21.JPG",
    "src": "/gallery/uncategorized/010-uncategorized-21-jpg.jpg",
    "width": 640
  },
  {
    "id": "gallery-012",
    "category": "uncategorized",
    "title": "12",
    "alt": "12 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/012-uncategorized-12.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-013",
    "category": "uncategorized",
    "title": "Fp8",
    "alt": "Fp8 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/013-uncategorized-fp8.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-014",
    "category": "uncategorized",
    "title": "62",
    "alt": "62 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/014-uncategorized-62.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-015",
    "category": "uncategorized",
    "title": "50",
    "alt": "50 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/015-uncategorized-50.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-016",
    "category": "uncategorized",
    "title": "1",
    "alt": "1 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/016-uncategorized-1.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-017",
    "category": "uncategorized",
    "title": "13",
    "alt": "13 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/017-uncategorized-13.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-018",
    "category": "uncategorized",
    "title": "37",
    "alt": "37 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/018-uncategorized-37.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-019",
    "category": "uncategorized",
    "title": "38",
    "alt": "38 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/019-uncategorized-38.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-020",
    "category": "uncategorized",
    "title": "41",
    "alt": "41 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/020-uncategorized-41.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-021",
    "category": "uncategorized",
    "title": "43",
    "alt": "43 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/021-uncategorized-43.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-022",
    "category": "uncategorized",
    "title": "45",
    "alt": "45 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/022-uncategorized-45.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-023",
    "category": "uncategorized",
    "title": "60",
    "alt": "60 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/023-uncategorized-60.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-024",
    "category": "uncategorized",
    "title": "10",
    "alt": "10 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/024-uncategorized-10.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-025",
    "category": "uncategorized",
    "title": "11",
    "alt": "11 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/025-uncategorized-11.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-026",
    "category": "uncategorized",
    "title": "12",
    "alt": "12 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/026-uncategorized-12.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-027",
    "category": "uncategorized",
    "title": "42",
    "alt": "42 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/027-uncategorized-42.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-030",
    "category": "uncategorized",
    "title": "D5 2",
    "alt": "D5 2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/030-uncategorized-d5-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-031",
    "category": "uncategorized",
    "title": "D5 3",
    "alt": "D5 3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/031-uncategorized-d5-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-033",
    "category": "uncategorized",
    "title": "Fav 3",
    "alt": "Fav 3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/033-uncategorized-fav-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-034",
    "category": "uncategorized",
    "title": "Fav 4",
    "alt": "Fav 4 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/034-uncategorized-fav-4.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-035",
    "category": "uncategorized",
    "title": "Fav 5 2",
    "alt": "Fav 5 2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/035-uncategorized-fav-5-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-036",
    "category": "uncategorized",
    "title": "Fav 8",
    "alt": "Fav 8 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/036-uncategorized-fav-8.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-037",
    "category": "uncategorized",
    "title": "Fp 2",
    "alt": "Fp 2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/037-uncategorized-fp-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-038",
    "category": "uncategorized",
    "title": "Fp3",
    "alt": "Fp3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/038-uncategorized-fp3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-039",
    "category": "uncategorized",
    "title": "Fp5",
    "alt": "Fp5 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/039-uncategorized-fp5.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-040",
    "category": "uncategorized",
    "title": "Fp7",
    "alt": "Fp7 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/040-uncategorized-fp7.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-041",
    "category": "uncategorized",
    "title": "Fp10",
    "alt": "Fp10 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/041-uncategorized-fp10.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-042",
    "category": "uncategorized",
    "title": "Fp11",
    "alt": "Fp11 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/042-uncategorized-fp11.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-043",
    "category": "uncategorized",
    "title": "2",
    "alt": "2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/043-uncategorized-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-044",
    "category": "uncategorized",
    "title": "5",
    "alt": "5 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/044-uncategorized-5.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-045",
    "category": "uncategorized",
    "title": "9",
    "alt": "9 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/045-uncategorized-9.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-046",
    "category": "uncategorized",
    "title": "12",
    "alt": "12 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/046-uncategorized-12.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-047",
    "category": "uncategorized",
    "title": "13",
    "alt": "13 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/047-uncategorized-13.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-048",
    "category": "uncategorized",
    "title": "14",
    "alt": "14 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/048-uncategorized-14.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-049",
    "category": "uncategorized",
    "title": "20",
    "alt": "20 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/049-uncategorized-20.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-051",
    "category": "uncategorized",
    "title": "51",
    "alt": "51 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/051-uncategorized-51.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-052",
    "category": "uncategorized",
    "title": "52",
    "alt": "52 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/052-uncategorized-52.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-053",
    "category": "uncategorized",
    "title": "3",
    "alt": "3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/053-uncategorized-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-054",
    "category": "uncategorized",
    "title": "10",
    "alt": "10 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/054-uncategorized-10.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-055",
    "category": "uncategorized",
    "title": "15",
    "alt": "15 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/055-uncategorized-15.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-056",
    "category": "uncategorized",
    "title": "24",
    "alt": "24 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/056-uncategorized-24.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-057",
    "category": "uncategorized",
    "title": "25",
    "alt": "25 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/057-uncategorized-25.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-058",
    "category": "uncategorized",
    "title": "26",
    "alt": "26 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/058-uncategorized-26.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-059",
    "category": "uncategorized",
    "title": "27",
    "alt": "27 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/059-uncategorized-27.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-060",
    "category": "uncategorized",
    "title": "32",
    "alt": "32 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/060-uncategorized-32.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-061",
    "category": "uncategorized",
    "title": "33",
    "alt": "33 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/061-uncategorized-33.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-062",
    "category": "uncategorized",
    "title": "34",
    "alt": "34 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/062-uncategorized-34.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-063",
    "category": "uncategorized",
    "title": "41",
    "alt": "41 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/063-uncategorized-41.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-069",
    "category": "uncategorized",
    "title": "Flagstone 4",
    "alt": "Flagstone 4 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/069-uncategorized-flagstone-4.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-070",
    "category": "uncategorized",
    "title": "2715",
    "alt": "2715 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/070-uncategorized-img-2715.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-071",
    "category": "uncategorized",
    "title": "2716",
    "alt": "2716 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/071-uncategorized-img-2716.jpg",
    "width": 480,
    "height": 640
  },
  {
    "id": "gallery-072",
    "category": "uncategorized",
    "title": "2719",
    "alt": "2719 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/072-uncategorized-img-2719.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-073",
    "category": "uncategorized",
    "title": "2721",
    "alt": "2721 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/073-uncategorized-img-2721.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-074",
    "category": "uncategorized",
    "title": "2726",
    "alt": "2726 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/074-uncategorized-img-2726.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-075",
    "category": "uncategorized",
    "title": "2734",
    "alt": "2734 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/075-uncategorized-img-2734.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-076",
    "category": "uncategorized",
    "title": "2741",
    "alt": "2741 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/076-uncategorized-img-2741.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-077",
    "category": "uncategorized",
    "title": "2744",
    "alt": "2744 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/077-uncategorized-img-2744.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-078",
    "category": "uncategorized",
    "title": "2745",
    "alt": "2745 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/078-uncategorized-img-2745.jpg",
    "width": 640,
    "height": 480
  },
  {
    "id": "gallery-079",
    "category": "uncategorized",
    "title": "70",
    "alt": "70 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/079-uncategorized-70.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-080",
    "category": "uncategorized",
    "title": "71",
    "alt": "71 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/080-uncategorized-71.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-081",
    "category": "uncategorized",
    "title": "72",
    "alt": "72 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/081-uncategorized-72.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-082",
    "category": "uncategorized",
    "title": "73",
    "alt": "73 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/082-uncategorized-73.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-083",
    "category": "uncategorized",
    "title": "74",
    "alt": "74 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/083-uncategorized-74.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-084",
    "category": "uncategorized",
    "title": "75",
    "alt": "75 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/084-uncategorized-75.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-085",
    "category": "uncategorized",
    "title": "76",
    "alt": "76 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/085-uncategorized-76.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-086",
    "category": "uncategorized",
    "title": "77",
    "alt": "77 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/086-uncategorized-77.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-087",
    "category": "uncategorized",
    "title": "81",
    "alt": "81 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/087-uncategorized-81.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-088",
    "category": "uncategorized",
    "title": "82",
    "alt": "82 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/088-uncategorized-82.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-089",
    "category": "uncategorized",
    "title": "83",
    "alt": "83 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/089-uncategorized-83.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-090",
    "category": "uncategorized",
    "title": "84",
    "alt": "84 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/090-uncategorized-84.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-091",
    "category": "uncategorized",
    "title": "85",
    "alt": "85 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/091-uncategorized-85.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-092",
    "category": "uncategorized",
    "title": "86",
    "alt": "86 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/092-uncategorized-86.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-093",
    "category": "uncategorized",
    "title": "88",
    "alt": "88 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/093-uncategorized-88.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-094",
    "category": "uncategorized",
    "title": "90",
    "alt": "90 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/094-uncategorized-90.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-095",
    "category": "uncategorized",
    "title": "50",
    "alt": "50 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/095-uncategorized-50.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-096",
    "category": "uncategorized",
    "title": "4",
    "alt": "4 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/096-uncategorized-4.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-097",
    "category": "uncategorized",
    "title": "25",
    "alt": "25 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/097-uncategorized-25.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-098",
    "category": "uncategorized",
    "title": "59",
    "alt": "59 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/098-uncategorized-59.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-099",
    "category": "uncategorized",
    "title": "57",
    "alt": "57 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/099-uncategorized-57.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-100",
    "category": "uncategorized",
    "title": "50",
    "alt": "50 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/100-uncategorized-50.jpg",
    "width": 1280,
    "height": 445
  },
  {
    "id": "gallery-101",
    "category": "uncategorized",
    "title": "56",
    "alt": "56 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/101-uncategorized-56.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-102",
    "category": "uncategorized",
    "title": "53",
    "alt": "53 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/102-uncategorized-53.jpg",
    "width": 1280,
    "height": 656
  },
  {
    "id": "gallery-103",
    "category": "uncategorized",
    "title": "77",
    "alt": "77 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/103-uncategorized-77.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-104",
    "category": "uncategorized",
    "title": "35",
    "alt": "35 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/104-uncategorized-35.jpg",
    "width": 958,
    "height": 491
  },
  {
    "id": "gallery-105",
    "category": "uncategorized",
    "title": "3",
    "alt": "3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/105-uncategorized-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-106",
    "category": "uncategorized",
    "title": "5",
    "alt": "5 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/106-uncategorized-5.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-107",
    "category": "uncategorized",
    "title": "20",
    "alt": "20 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/107-uncategorized-20.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-108",
    "category": "uncategorized",
    "title": "1",
    "alt": "1 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/108-uncategorized-1.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-109",
    "category": "uncategorized",
    "title": "2",
    "alt": "2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/109-uncategorized-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-113",
    "category": "uncategorized",
    "title": "6",
    "alt": "6 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/113-uncategorized-6.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-114",
    "category": "uncategorized",
    "title": "7",
    "alt": "7 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/114-uncategorized-7.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-115",
    "category": "uncategorized",
    "title": "8",
    "alt": "8 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/115-uncategorized-8.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-116",
    "category": "uncategorized",
    "title": "9",
    "alt": "9 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/116-uncategorized-9.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-117",
    "category": "uncategorized",
    "title": "10",
    "alt": "10 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/117-uncategorized-10.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-118",
    "category": "uncategorized",
    "title": "11",
    "alt": "11 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/118-uncategorized-11.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-119",
    "category": "uncategorized",
    "title": "12",
    "alt": "12 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/119-uncategorized-12.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-120",
    "category": "uncategorized",
    "title": "13",
    "alt": "13 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/120-uncategorized-13.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-121",
    "category": "uncategorized",
    "title": "14",
    "alt": "14 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/121-uncategorized-14.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-122",
    "category": "uncategorized",
    "title": "15",
    "alt": "15 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/122-uncategorized-15.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-123",
    "category": "uncategorized",
    "title": "16",
    "alt": "16 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/123-uncategorized-16.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-124",
    "category": "uncategorized",
    "title": "17",
    "alt": "17 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/124-uncategorized-17.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-125",
    "category": "uncategorized",
    "title": "18",
    "alt": "18 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/125-uncategorized-18.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-127",
    "category": "uncategorized",
    "title": "21",
    "alt": "21 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/127-uncategorized-21.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-128",
    "category": "uncategorized",
    "title": "22",
    "alt": "22 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/128-uncategorized-22.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-129",
    "category": "uncategorized",
    "title": "23",
    "alt": "23 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/129-uncategorized-23.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-130",
    "category": "uncategorized",
    "title": "24",
    "alt": "24 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/130-uncategorized-24.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-132",
    "category": "uncategorized",
    "title": "26",
    "alt": "26 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/132-uncategorized-26.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-133",
    "category": "uncategorized",
    "title": "27",
    "alt": "27 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/133-uncategorized-27.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-134",
    "category": "uncategorized",
    "title": "28",
    "alt": "28 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/134-uncategorized-28.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-135",
    "category": "uncategorized",
    "title": "29",
    "alt": "29 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/135-uncategorized-29.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-136",
    "category": "uncategorized",
    "title": "30",
    "alt": "30 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/136-uncategorized-30.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-137",
    "category": "uncategorized",
    "title": "31",
    "alt": "31 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/137-uncategorized-31.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-138",
    "category": "uncategorized",
    "title": "32",
    "alt": "32 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/138-uncategorized-32.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-139",
    "category": "uncategorized",
    "title": "33",
    "alt": "33 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/139-uncategorized-33.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-140",
    "category": "uncategorized",
    "title": "34",
    "alt": "34 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/140-uncategorized-34.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-141",
    "category": "uncategorized",
    "title": "35",
    "alt": "35 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/141-uncategorized-35.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-142",
    "category": "uncategorized",
    "title": "36",
    "alt": "36 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/142-uncategorized-36.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-143",
    "category": "uncategorized",
    "title": "37",
    "alt": "37 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/143-uncategorized-37.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-144",
    "category": "uncategorized",
    "title": "38",
    "alt": "38 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/144-uncategorized-38.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-145",
    "category": "uncategorized",
    "title": "39",
    "alt": "39 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/145-uncategorized-39.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-146",
    "category": "uncategorized",
    "title": "40",
    "alt": "40 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/146-uncategorized-40.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-147",
    "category": "uncategorized",
    "title": "41",
    "alt": "41 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/147-uncategorized-41.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-149",
    "category": "uncategorized",
    "title": "51",
    "alt": "51 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/149-uncategorized-51.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-150",
    "category": "uncategorized",
    "title": "52",
    "alt": "52 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/150-uncategorized-52.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-151",
    "category": "uncategorized",
    "title": "53",
    "alt": "53 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/151-uncategorized-53.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-152",
    "category": "uncategorized",
    "title": "54",
    "alt": "54 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/152-uncategorized-54.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-155",
    "category": "uncategorized",
    "title": "58",
    "alt": "58 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/155-uncategorized-58.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-157",
    "category": "uncategorized",
    "title": "60",
    "alt": "60 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/157-uncategorized-60.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-158",
    "category": "uncategorized",
    "title": "61",
    "alt": "61 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/158-uncategorized-61.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-159",
    "category": "uncategorized",
    "title": "62",
    "alt": "62 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/159-uncategorized-62.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-160",
    "category": "uncategorized",
    "title": "63",
    "alt": "63 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/160-uncategorized-63.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-161",
    "category": "uncategorized",
    "title": "64",
    "alt": "64 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/161-uncategorized-64.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-162",
    "category": "uncategorized",
    "title": "65",
    "alt": "65 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/162-uncategorized-65.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-163",
    "category": "uncategorized",
    "title": "66",
    "alt": "66 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/163-uncategorized-66.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-164",
    "category": "uncategorized",
    "title": "69",
    "alt": "69 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/164-uncategorized-69.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-165",
    "category": "uncategorized",
    "title": "70",
    "alt": "70 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/165-uncategorized-70.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-166",
    "category": "uncategorized",
    "title": "71",
    "alt": "71 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/166-uncategorized-71.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-167",
    "category": "uncategorized",
    "title": "73",
    "alt": "73 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/167-uncategorized-73.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-168",
    "category": "uncategorized",
    "title": "74",
    "alt": "74 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/168-uncategorized-74.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-169",
    "category": "uncategorized",
    "title": "75",
    "alt": "75 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/169-uncategorized-75.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-170",
    "category": "uncategorized",
    "title": "76",
    "alt": "76 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/170-uncategorized-76.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-171",
    "category": "uncategorized",
    "title": "77",
    "alt": "77 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/171-uncategorized-77.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-172",
    "category": "uncategorized",
    "title": "78",
    "alt": "78 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/172-uncategorized-78.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-173",
    "category": "uncategorized",
    "title": "79",
    "alt": "79 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/173-uncategorized-79.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-174",
    "category": "uncategorized",
    "title": "80",
    "alt": "80 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/174-uncategorized-80.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-175",
    "category": "uncategorized",
    "title": "81",
    "alt": "81 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/175-uncategorized-81.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-176",
    "category": "uncategorized",
    "title": "82",
    "alt": "82 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/176-uncategorized-82.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-177",
    "category": "uncategorized",
    "title": "83",
    "alt": "83 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/177-uncategorized-83.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-178",
    "category": "uncategorized",
    "title": "84",
    "alt": "84 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/178-uncategorized-84.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-179",
    "category": "uncategorized",
    "title": "85",
    "alt": "85 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/179-uncategorized-85.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-180",
    "category": "uncategorized",
    "title": "88",
    "alt": "88 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/180-uncategorized-88.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-181",
    "category": "uncategorized",
    "title": "89",
    "alt": "89 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/181-uncategorized-89.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-182",
    "category": "uncategorized",
    "title": "90",
    "alt": "90 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/182-uncategorized-90.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-183",
    "category": "uncategorized",
    "title": "91",
    "alt": "91 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/183-uncategorized-91.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-184",
    "category": "uncategorized",
    "title": "92",
    "alt": "92 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/184-uncategorized-92.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-185",
    "category": "uncategorized",
    "title": "93",
    "alt": "93 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/185-uncategorized-93.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-186",
    "category": "uncategorized",
    "title": "94",
    "alt": "94 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/186-uncategorized-94.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-187",
    "category": "uncategorized",
    "title": "95",
    "alt": "95 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/187-uncategorized-95.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-188",
    "category": "uncategorized",
    "title": "96",
    "alt": "96 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/188-uncategorized-96.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-189",
    "category": "uncategorized",
    "title": "97",
    "alt": "97 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/189-uncategorized-97.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-190",
    "category": "uncategorized",
    "title": "1",
    "alt": "1 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/190-uncategorized-1.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-191",
    "category": "uncategorized",
    "title": "2",
    "alt": "2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/191-uncategorized-2.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-192",
    "category": "uncategorized",
    "title": "3",
    "alt": "3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/192-uncategorized-3.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-193",
    "category": "uncategorized",
    "title": "4",
    "alt": "4 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/193-uncategorized-4.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-194",
    "category": "uncategorized",
    "title": "5",
    "alt": "5 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/194-uncategorized-5.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-195",
    "category": "uncategorized",
    "title": "6",
    "alt": "6 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/195-uncategorized-6.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-196",
    "category": "uncategorized",
    "title": "7",
    "alt": "7 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/196-uncategorized-7.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-197",
    "category": "uncategorized",
    "title": "8",
    "alt": "8 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/197-uncategorized-8.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-198",
    "category": "uncategorized",
    "title": "9",
    "alt": "9 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/198-uncategorized-9.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-199",
    "category": "uncategorized",
    "title": "10",
    "alt": "10 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/199-uncategorized-10.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-200",
    "category": "uncategorized",
    "title": "11",
    "alt": "11 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/200-uncategorized-11.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-201",
    "category": "uncategorized",
    "title": "12",
    "alt": "12 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/201-uncategorized-12.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-202",
    "category": "uncategorized",
    "title": "13",
    "alt": "13 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/202-uncategorized-13.jpg",
    "width": 1280,
    "height": 720
  },
  {
    "id": "gallery-203",
    "category": "uncategorized",
    "title": "14",
    "alt": "14 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/203-uncategorized-14.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-204",
    "category": "uncategorized",
    "title": "15",
    "alt": "15 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/204-uncategorized-15.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-205",
    "category": "uncategorized",
    "title": "16",
    "alt": "16 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/205-uncategorized-16.jpg",
    "width": 1280,
    "height": 1280
  },
  {
    "id": "gallery-206",
    "category": "uncategorized",
    "title": "1",
    "alt": "1 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/206-uncategorized-1.jpg",
    "width": 695,
    "height": 462
  },
  {
    "id": "gallery-207",
    "category": "uncategorized",
    "title": "2",
    "alt": "2 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/207-uncategorized-2.jpg",
    "width": 755,
    "height": 512
  },
  {
    "id": "gallery-208",
    "category": "uncategorized",
    "title": "3",
    "alt": "3 by Little Piece of Paradise - more project views for Arizona outdoor living.",
    "src": "/gallery/uncategorized/208-uncategorized-3.jpg",
    "width": 246,
    "height": 185
  }
];
