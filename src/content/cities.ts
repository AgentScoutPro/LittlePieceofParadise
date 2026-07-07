export type CityContent = {
  intro: string[];
  localNotes: string;
  whyHomeowners: string;
  faqs: { question: string; answer: string }[];
};

export const cityContent: Record<string, CityContent> = {
  "florence-az-pool-builder": {
    intro: [
      "Florence sits in Pinal County with larger lots and a mix of historic and new custom homes, which gives us room to design pools and landscapes that feel proportional to the property rather than squeezed into a standard suburban yard.",
      "Many Florence properties back up to open desert, so we design pool and landscape layouts that work with those long sightlines instead of fighting them.",
    ],
    localNotes:
      "Larger lot sizes around Florence mean more flexibility for freeform pool shapes, expansive travertine decking, and desert-adapted landscaping that echoes the surrounding terrain rather than a manicured suburban look.",
    whyHomeowners:
      "Homeowners in Florence are often working with more land and fewer HOA restrictions than in tighter East Valley suburbs, and we design around that extra flexibility rather than defaulting to a compact layout.",
    faqs: [
      { question: "Do you build pools on larger rural lots around Florence?", answer: "Yes, larger lots are common in Florence and give us more design flexibility for pool placement, decking, and landscaping." },
      { question: "Are there HOA restrictions to consider in Florence?", answer: "Restrictions vary by neighborhood — some newer developments have HOA guidelines while many established and rural properties do not. We'll factor this into design and permitting." },
      { question: "How does soil in the Florence area affect pool construction?", answer: "Soil conditions vary by site. We assess this during the excavation phase and design the structural steel and shell accordingly." },
      { question: "What's the permitting process like in Pinal County?", answer: "We manage plan submittal and permitting through Pinal County as part of the construction process." },
      { question: "Can you design landscaping that blends with the natural desert around Florence?", answer: "Yes, this is one of our most common requests in the area — native and desert-adapted plantings that transition naturally into the surrounding landscape." },
    ],
  },
  "queen-creek-pool-builder": {
    intro: [
      "Queen Creek has grown quickly into one of the East Valley's most sought-after family communities, with newer master-planned neighborhoods and a strong number of horse properties and larger custom lots.",
      "We design pools and outdoor living spaces in Queen Creek around family use first — safety, sightlines from the kitchen, and space for both kids and adult entertaining.",
    ],
    localNotes:
      "Queen Creek's mix of new-build subdivisions and equestrian-zoned properties means we're often designing for very different lot sizes within the same city, from standard suburban backyards to multi-acre horse properties.",
    whyHomeowners:
      "Families in Queen Creek are typically planning for the long term — we design pools and landscapes that will still make sense for the household in five or ten years, not just for move-in day.",
    faqs: [
      { question: "Do you work with horse properties in Queen Creek?", answer: "Yes, we regularly design pools and landscaping for larger equestrian-zoned properties, accounting for setbacks and existing arena or barn layouts." },
      { question: "How long does it take to get a pool built in a newer Queen Creek subdivision?", answer: "Timelines depend on HOA approval processes in newer communities, which we factor into the overall project schedule." },
      { question: "Are there specific HOA design guidelines in Queen Creek communities?", answer: "Many newer Queen Creek developments have HOA design review — we'll help prepare submittals that meet those requirements." },
      { question: "What pool features work best for families with young kids?", answer: "Sun ledges, shallow lounging areas, and clear sightlines from the house are common priorities we design around for family-focused builds." },
      { question: "Can you landscape a large lot without excessive water use?", answer: "Yes — desert-adapted plant palettes and turf-limited designs let us cover larger properties without driving up irrigation costs." },
    ],
  },
  "san-tan-valley-pool-builder": {
    intro: [
      "San Tan Valley's rapid growth has brought a wide range of home styles and lot sizes, from tract-built subdivisions to larger custom properties near the San Tan Mountains.",
      "We design pools and landscaping that take advantage of the mountain views many San Tan Valley properties have, positioning pools and seating areas to make the most of that backdrop.",
    ],
    localNotes:
      "Properties closer to the San Tan Mountains often have more dramatic elevation changes and rock outcroppings — we design around those features rather than grading them flat.",
    whyHomeowners:
      "As one of the fastest-growing areas in the East Valley, San Tan Valley has a lot of newer construction — we design outdoor spaces that stand out from the builder-grade backyard most homes start with.",
    faqs: [
      { question: "Do you design pools that work with sloped or uneven lots near the San Tan Mountains?", answer: "Yes, elevation changes are common in this area and we design retaining, decking, and pool placement specifically around each site's grade." },
      { question: "What's the typical timeline for a pool build in San Tan Valley?", answer: "Most projects take 8 to 14 weeks for construction, depending on design complexity and permitting timelines with Pinal County." },
      { question: "Can you help with landscaping for a newly built home with a builder-grade backyard?", answer: "Yes, this is one of our most common project types in San Tan Valley — starting from a blank slate and designing a full landscape and hardscape plan." },
      { question: "Is desert landscaping required or recommended in San Tan Valley?", answer: "It's not universally required, but desert-adapted landscaping is strongly recommended given the local climate and water costs — we'll walk you through the options." },
      { question: "Do you handle permitting through Pinal County for San Tan Valley projects?", answer: "Yes, we manage plan submittal and permitting as part of the construction process." },
    ],
  },
  "gilbert-pool-builder": {
    intro: [
      "Gilbert's established family neighborhoods — communities like Val Vista Lakes, Layton Lakes, and Power Ranch — tend to have well-defined HOA design standards, so we design pools and landscaping that fit neighborhood aesthetics while still feeling custom.",
      "With Gilbert's reputation for top-rated schools and family-focused communities, most of our projects here are designed around everyday family use as much as entertaining.",
    ],
    localNotes:
      "Many Gilbert neighborhoods have mature landscaping and established HOA guidelines — we design within those parameters while still delivering a pool and landscape that doesn't look identical to the house next door.",
    whyHomeowners:
      "Gilbert homeowners are often renovating an established backyard rather than starting from bare dirt, so we're experienced working around existing landscaping, patios, and structures instead of requiring a full teardown.",
    faqs: [
      { question: "Do you handle HOA approval for pool projects in Gilbert?", answer: "Yes, we prepare design submittals to meet HOA requirements common in Gilbert communities like Val Vista Lakes and Power Ranch." },
      { question: "Can you renovate an existing pool instead of building new?", answer: "Yes, pool remodels — refinishing, decking updates, adding a spa or water feature — are common requests in established Gilbert neighborhoods." },
      { question: "What's the average cost of a custom pool in Gilbert?", answer: "Cost depends on size and features. We'll provide a detailed quote after understanding your yard and design goals." },
      { question: "How do you work around mature trees or existing landscaping?", answer: "We assess what's worth preserving during the site walk and design the pool and hardscape layout to work around established trees where possible." },
      { question: "Do Gilbert's HOAs allow artificial turf?", answer: "Most do, though guidelines vary by community. We'll check specific HOA rules as part of your project planning." },
    ],
  },
  "chandler-pool-builder": {
    intro: [
      "Chandler's mix of established neighborhoods and newer master-planned communities like Ocotillo — known for its lakes and golf-course lots — gives us a wide range of settings to design around, from lakefront-adjacent yards to standard suburban lots.",
      "With Chandler's strong tech-sector presence, many of our clients here are busy professionals who want an outdoor space that requires minimal upkeep but still feels like a genuine retreat.",
    ],
    localNotes:
      "Properties near Ocotillo's lakes or golf courses often have specific views or setbacks worth designing around — we account for those sightlines rather than blocking them with structures.",
    whyHomeowners:
      "Chandler homeowners often want a lower-maintenance outdoor space given busy schedules — we design plant palettes and pool equipment with maintenance simplicity as a real priority, not an afterthought.",
    faqs: [
      { question: "Do you design pools for golf-course or lake-adjacent lots in Chandler?", answer: "Yes, we design pool and landscape placement to preserve views and work within any HOA setback requirements common in communities like Ocotillo." },
      { question: "What low-maintenance landscaping options work well in Chandler?", answer: "Desert-adapted plants combined with drip irrigation and, where appropriate, artificial turf keep maintenance low without sacrificing a finished look." },
      { question: "How long does a typical pool project take in Chandler?", answer: "Most projects run 8 to 14 weeks for construction, depending on design complexity and permitting." },
      { question: "Can you add automation to reduce pool maintenance?", answer: "Yes, we can integrate automated pool equipment and monitoring systems to reduce hands-on upkeep." },
      { question: "Do you work with Chandler's specific permitting requirements?", answer: "Yes, we manage plan submittal and permitting through the City of Chandler as part of the construction process." },
    ],
  },
  "mesa-pool-builder": {
    intro: [
      "Mesa spans everything from established mid-century neighborhoods to newer developments like Eastmark, so our approach here ranges from full backyard renovations to ground-up design on new construction.",
      "We design pools and landscaping in Mesa with an eye toward the property's existing character — matching materials and style to homes that range from decades-old ranch properties to newly built communities.",
    ],
    localNotes:
      "Older Mesa neighborhoods often have mature trees and established hardscape worth preserving, while newer areas like Eastmark start from a blank slate — we adjust our design approach based on which situation you're in.",
    whyHomeowners:
      "Mesa's range of housing stock means no two projects look the same — we don't default to a single style, we design around what actually fits your home and neighborhood.",
    faqs: [
      { question: "Do you renovate older pools in established Mesa neighborhoods?", answer: "Yes, pool renovation — resurfacing, decking replacement, equipment upgrades — is common work for us in Mesa's more established areas." },
      { question: "What's the process for a new-construction backyard in a community like Eastmark?", answer: "We start with a full design covering pool, hardscape, and landscaping from a blank slate, coordinated with any HOA design guidelines in newer Mesa communities." },
      { question: "How much does a pool remodel cost in Mesa?", answer: "Cost depends on the scope — resurfacing alone costs less than a full deck and equipment overhaul. We'll scope this during a consultation." },
      { question: "Can you work around mature trees on an older Mesa property?", answer: "Yes, we assess existing trees and landscaping during the site walk and design around what's worth preserving." },
      { question: "Do you handle permitting with the City of Mesa?", answer: "Yes, permitting and inspection scheduling with the City of Mesa is handled as part of our construction process." },
    ],
  },
  "scottsdale-pool-builder": {
    intro: [
      "Scottsdale sets the bar for luxury outdoor living in Arizona, and neighborhoods like DC Ranch, McCormick Ranch, and Silverleaf expect a level of design detail that goes beyond a standard pool build — resort-style finishes, integrated spas, and landscape architecture that reads as intentional from every angle.",
      "We design Scottsdale projects with that resort-level standard in mind: premium materials, precise hardscape detailing, and lighting designed for how the space photographs and feels after dark.",
    ],
    localNotes:
      "Many Scottsdale communities have strict architectural review committees — we design and document projects to move smoothly through that process without sacrificing the design vision.",
    whyHomeowners:
      "Scottsdale clients are typically comparing our work against high-end resort properties, not other backyards — we design and build to that standard rather than a standard residential benchmark.",
    faqs: [
      { question: "Do you handle architectural review committee approval in Scottsdale communities?", answer: "Yes, we prepare detailed design submittals for ARC approval, common in Scottsdale communities like DC Ranch and Silverleaf." },
      { question: "What's the cost range for a luxury custom pool in Scottsdale?", answer: "Scottsdale luxury builds vary significantly based on size, materials, and features. We provide a detailed, itemized quote after design is finalized." },
      { question: "Can you match resort-style finishes for a Scottsdale backyard?", answer: "Yes, premium pebble and glass tile finishes, integrated spas, and resort-grade decking materials are all part of our standard offering for Scottsdale projects." },
      { question: "How long does a high-end custom pool project take in Scottsdale?", answer: "Complex luxury builds typically take 10 to 16 weeks for construction, depending on design detail and ARC approval timelines." },
      { question: "Do you design landscape lighting for evening entertaining in Scottsdale?", answer: "Yes, layered landscape lighting is a standard part of our Scottsdale design process, given how much evening entertaining factors into these projects." },
    ],
  },
  "fountain-hills-pool-builder": {
    intro: [
      "Fountain Hills' hillside lots and McDowell Mountain views mean pool and landscape placement often has to work around real elevation change, not a flat suburban pad — we design retaining, decking, and pool orientation specifically to preserve those views.",
      "We treat the views in Fountain Hills as a design asset from the start, positioning pools, seating, and lighting to make the most of the mountain and desert backdrop.",
    ],
    localNotes:
      "Sloped lots are common throughout Fountain Hills, which affects everything from excavation approach to retaining wall requirements — we scope this carefully during the site walk to avoid surprises during construction.",
    whyHomeowners:
      "Fountain Hills properties often require more technical design work due to elevation and view considerations — we have the structural and design experience to handle sloped-lot builds correctly the first time.",
    faqs: [
      { question: "Can you build a pool on a sloped lot in Fountain Hills?", answer: "Yes, sloped-lot construction is common in Fountain Hills — we assess grade and drainage carefully and design retaining and decking to work with the terrain rather than against it." },
      { question: "How do you preserve mountain views when designing a pool?", answer: "We position the pool, decking, and any structures based on sightlines from key vantage points on the property, so the view stays the focal point." },
      { question: "Does a sloped lot add significant cost to pool construction?", answer: "Sloped lots can require additional retaining and grading work, which we'll scope and quote clearly during the design phase." },
      { question: "What landscaping works well on Fountain Hills' rocky terrain?", answer: "Native desert plantings that already thrive in rocky, well-drained soil are typically the best fit, blending naturally with the surrounding terrain." },
      { question: "Do you handle permitting through the Town of Fountain Hills?", answer: "Yes, we manage plan submittal and permitting through the Town of Fountain Hills as part of construction." },
    ],
  },
  "apache-junction-pool-builder": {
    intro: [
      "Apache Junction sits at the base of the Superstition Mountains, and many properties here have larger desert lots with dramatic natural backdrops — we design pools and landscaping to frame those mountain views rather than compete with them.",
      "A mix of established and newer homes throughout Apache Junction means we handle everything from full backyard renovations to new builds on undeveloped desert lots.",
    ],
    localNotes:
      "Properties near the Superstitions often have rockier, well-draining soil and striking natural desert vegetation already in place — we design around what's there rather than clearing everything for a blank-slate build.",
    whyHomeowners:
      "Apache Junction homeowners often value the natural desert setting — we design pools and landscaping that enhance that setting instead of installing something that looks out of place against the mountain backdrop.",
    faqs: [
      { question: "Do you design pools that work with existing desert vegetation?", answer: "Yes, we regularly design around existing native vegetation and rock formations rather than clearing a property entirely." },
      { question: "What soil conditions are common near the Superstition Mountains?", answer: "Rocky, well-draining soil is common in this area, which we account for during excavation and structural planning." },
      { question: "Can you build on larger desert lots in Apache Junction?", answer: "Yes, larger lots are common here and give us flexibility in pool and landscape layout that tighter suburban lots don't allow." },
      { question: "How much does a custom pool cost in Apache Junction?", answer: "Cost depends on lot conditions, size, and features. We'll provide a specific quote after the site walk." },
      { question: "Do you handle Pinal County permitting for Apache Junction projects?", answer: "Yes, permitting and inspections are managed as part of our construction process." },
    ],
  },
  "gold-canyon-pool-builder": {
    intro: [
      "Gold Canyon's golf-course communities near the Superstition Mountains bring a specific design challenge: pools and outdoor living spaces that complement course views and HOA standards without feeling generic.",
      "Many Gold Canyon clients are designing for retirement-focused, lower-maintenance living — we factor that into material and plant selection from the start.",
    ],
    localNotes:
      "Golf-course-adjacent lots in Gold Canyon often have specific setback and view-corridor requirements — we design pool and landscape placement to respect those while still maximizing usable space.",
    whyHomeowners:
      "Gold Canyon homeowners often prioritize low-maintenance, high-comfort outdoor living — we design accordingly, favoring durable materials and simplified plant palettes over high-upkeep landscaping.",
    faqs: [
      { question: "Do you design pools for golf-course-adjacent properties in Gold Canyon?", answer: "Yes, we design around course setbacks and view corridors common in Gold Canyon's golf communities." },
      { question: "What low-maintenance landscaping options work well for Gold Canyon retirees?", answer: "Desert-adapted plantings with drip irrigation and minimal pruning needs are a common recommendation for lower-maintenance living here." },
      { question: "Are there HOA design requirements in Gold Canyon communities?", answer: "Many golf communities in Gold Canyon have HOA design review — we prepare submittals to meet those requirements." },
      { question: "How long does pool construction take in Gold Canyon?", answer: "Most projects take 8 to 14 weeks for construction, depending on design complexity and HOA approval timelines." },
      { question: "Can you design a pool with minimal upkeep for part-time residents?", answer: "Yes, automated equipment and simplified finish materials can be specified for owners who aren't on-site year-round." },
    ],
  },
  "casa-grande-pool-builder": {
    intro: [
      "Casa Grande sits between Phoenix and Tucson with a mix of larger established lots and newer growth as the city expands — we design pools and landscaping across both older agricultural-heritage properties and newer suburban developments.",
      "Larger lot sizes common in Casa Grande give us more room to work with for pool placement, expansive hardscape, and landscaping that doesn't feel cramped against property lines.",
    ],
    localNotes:
      "Casa Grande's growth means we regularly work on both established properties with mature landscaping and brand-new construction with a completely blank backyard.",
    whyHomeowners:
      "As Casa Grande continues to grow, homeowners here are often looking for outdoor spaces that set their property apart in a rapidly developing market — we design with that long-term property value in mind.",
    faqs: [
      { question: "Do you build pools on larger lots in Casa Grande?", answer: "Yes, larger lot sizes are common in Casa Grande and give us more flexibility for pool size, decking, and landscape layout." },
      { question: "What's the permitting process like in Casa Grande?", answer: "We manage plan submittal and permitting through the City of Casa Grande as part of our construction process." },
      { question: "Can you design landscaping for a newly built home with no existing yard?", answer: "Yes, this is common in Casa Grande's newer developments — we design a full landscape and hardscape plan starting from bare dirt." },
      { question: "How much does a custom pool cost in Casa Grande?", answer: "Cost depends on size, materials, and features. We'll provide a detailed quote after understanding your design goals." },
      { question: "Do you work with agricultural-zoned or larger acreage properties near Casa Grande?", answer: "Yes, we've designed for a range of property types in the area, including larger acreage lots — we'll assess specific zoning and setback requirements during the site visit." },
    ],
  },
  "paradise-valley-pool-builder": {
    intro: [
      "Paradise Valley is one of the most affluent communities in the state, tucked between Camelback and Mummy Mountain, and it holds property owners and their contractors to some of the strictest design and lighting standards in Arizona — low-profile structures, dark-sky-conscious lighting, and a strong emphasis on preserving mountain views.",
      "We design pools and landscaping in Paradise Valley to meet that standard from the start: resort-level finishes and layered lighting that stays within the town's dark-sky guidelines rather than fighting them.",
    ],
    localNotes:
      "Paradise Valley's town code includes some of the region's most detailed design and lighting ordinances — we factor those requirements into the plan from day one so approval doesn't stall the project.",
    whyHomeowners:
      "Paradise Valley clients are comparing our work against some of the finest private estates in the Southwest — we design and document every project to match that level of detail and to move cleanly through the town's review process.",
    faqs: [
      { question: "Does Paradise Valley have specific design or lighting restrictions?", answer: "Yes, the Town of Paradise Valley has detailed design review and dark-sky lighting ordinances. We design landscape lighting and structures to meet those requirements from the start." },
      { question: "What's the cost range for a luxury pool in Paradise Valley?", answer: "Paradise Valley projects vary widely based on scale and finish level. We provide a detailed, itemized quote after the design is finalized." },
      { question: "Do you handle town design review submittals?", answer: "Yes, we prepare and submit the documentation required for Paradise Valley's design review process as part of the project." },
      { question: "Can you preserve mountain views from Camelback or Mummy Mountain in the design?", answer: "Yes, view preservation is a standard part of site planning for Paradise Valley properties given how central those views are to the property's value." },
      { question: "How long does a high-end custom pool project take in Paradise Valley?", answer: "Complex luxury builds typically take 10 to 16 weeks for construction, depending on design detail and town approval timelines." },
    ],
  },
  "arcadia-pool-builder": {
    intro: [
      "Arcadia's roots as a citrus-growing district give the neighborhood something few Phoenix-area communities have: decades-old mature trees, flood-irrigated lots, and mid-century ranch homes on generous, established lots between Camelback Mountain and Downtown Phoenix.",
      "We design pools and landscaping in Arcadia to work with that mature canopy rather than clearing it — positioning pools and hardscape around established citrus and shade trees that took decades to grow.",
    ],
    localNotes:
      "Many Arcadia lots still have flood irrigation infrastructure from the neighborhood's agricultural history, which affects drainage and landscape planning in ways a typical Phoenix suburb doesn't need to consider.",
    whyHomeowners:
      "Arcadia homeowners are often renovating a backyard around trees and mature landscaping worth preserving — we have the experience to design around established growth instead of defaulting to a clear-and-rebuild approach.",
    faqs: [
      { question: "Can you design around Arcadia's mature citrus trees?", answer: "Yes, preserving established trees is a common priority in Arcadia projects, and we design pool and hardscape placement around them wherever possible." },
      { question: "Does flood irrigation affect pool or landscape design in Arcadia?", answer: "It can affect drainage and grading — we assess your lot's irrigation setup during the site walk and design accordingly." },
      { question: "Do you renovate pools in Arcadia's older homes?", answer: "Yes, pool renovation is common work for us in Arcadia, given the number of established homes with existing pools in the neighborhood." },
      { question: "What's the typical lot size you're designing for in Arcadia?", answer: "Arcadia lots tend to be larger and more established than typical Phoenix subdivisions, which gives us more flexibility in layout." },
      { question: "Do you handle City of Phoenix permitting for Arcadia projects?", answer: "Yes, we manage plan submittal and permitting through the City of Phoenix as part of construction." },
    ],
  },
  "north-phoenix-pool-builder": {
    intro: [
      "North Phoenix covers a lot of ground — from newer master-planned communities near Desert Ridge to established desert foothill neighborhoods near North Mountain — so our approach here depends heavily on which part of North Phoenix your property is in.",
      "We design pools and landscaping across that range, from clean, family-focused backyards in newer subdivisions to more dramatic desert-foothill lots with elevation change and natural rock outcroppings.",
    ],
    localNotes:
      "Foothill properties near North Mountain and the Phoenix Mountains Preserve often have more dramatic terrain than the flatter subdivisions further from the preserve — we adjust our design approach based on which situation your property is in.",
    whyHomeowners:
      "North Phoenix's range of neighborhoods means no single design approach fits everyone — we design around your specific property and its terrain rather than a one-size-fits-all template.",
    faqs: [
      { question: "Do you design for foothill lots near North Mountain?", answer: "Yes, sloped and rocky foothill lots are common in parts of North Phoenix, and we design retaining, decking, and pool placement to work with that terrain." },
      { question: "Can you work in newer North Phoenix communities like Desert Ridge?", answer: "Yes, we design for both newer master-planned communities and more established North Phoenix neighborhoods." },
      { question: "What's the cost range for a pool project in North Phoenix?", answer: "Cost varies significantly based on lot terrain, size, and features. We'll provide a specific quote after the site walk." },
      { question: "Do North Phoenix HOAs have design requirements?", answer: "Many newer communities do — we'll check specific HOA guidelines as part of project planning where applicable." },
      { question: "Do you handle City of Phoenix permitting?", answer: "Yes, we manage plan submittal and permitting through the City of Phoenix as part of construction." },
    ],
  },
  "cave-creek-pool-builder": {
    intro: [
      "Cave Creek keeps a rustic, high-desert character that's distinct from the master-planned suburbs closer to central Phoenix — larger lots, natural boulder outcroppings, and a real western-desert feel bordering the Tonto National Forest.",
      "We design pools and landscaping in Cave Creek to lean into that setting rather than smoothing it over — working with existing boulders and natural desert vegetation instead of clearing the lot for a suburban-style yard.",
    ],
    localNotes:
      "Cave Creek's larger, often irregular lots and rockier high-desert terrain call for a different design approach than flatter suburban subdivisions — grading, retaining, and pool placement all get evaluated on a site-by-site basis.",
    whyHomeowners:
      "Cave Creek homeowners typically chose the area for its rustic, natural desert character — we design pools and landscaping that enhance that setting rather than fighting it with an overly manicured look.",
    faqs: [
      { question: "Do you design around existing boulders and natural terrain in Cave Creek?", answer: "Yes, this is one of the defining features of Cave Creek properties, and we design pool and landscape placement to work with existing rock formations rather than removing them." },
      { question: "Are Cave Creek lots typically larger than in other East Valley suburbs?", answer: "Yes, larger and often more irregular lots are common in Cave Creek, which gives us more design flexibility but also requires more careful site planning." },
      { question: "Do you handle Maricopa County or Town of Cave Creek permitting?", answer: "Yes, we manage the appropriate permitting process depending on whether your property falls within town limits or the surrounding county area." },
      { question: "What landscaping fits Cave Creek's high-desert character best?", answer: "Native high-desert plants and materials that echo the surrounding natural terrain typically fit best, rather than a manicured suburban plant palette." },
      { question: "Can you build a pool on a sloped or rocky Cave Creek lot?", answer: "Yes, we regularly design for sloped and rocky terrain in this area, adjusting excavation and retaining approach to the specific site." },
    ],
  },
  "ahwatukee-pool-builder": {
    intro: [
      "Ahwatukee sits at the base of South Mountain, and its established, family-focused neighborhoods and golf communities give us a setting that's part suburban planning, part desert-foothill backdrop.",
      "We design pools and outdoor living spaces in Ahwatukee around that dual character — family-friendly layouts that still take advantage of the South Mountain views many properties here have.",
    ],
    localNotes:
      "Properties closer to South Mountain Park often have more usable elevation and view opportunities than the flatter sections of Ahwatukee further from the preserve — we assess this during the site walk.",
    whyHomeowners:
      "Ahwatukee families are often planning outdoor spaces around long-term, everyday use — we design pools and landscaping meant to hold up to daily family life, not just look good for photos.",
    faqs: [
      { question: "Do you design pools that take advantage of South Mountain views?", answer: "Yes, where a property has usable sightlines toward South Mountain, we position the pool and seating areas to make the most of that view." },
      { question: "Are there HOA guidelines to consider in Ahwatukee communities?", answer: "Many Ahwatukee neighborhoods have HOA design review — we'll prepare submittals to meet those requirements where applicable." },
      { question: "What's the typical cost for a family-focused pool project in Ahwatukee?", answer: "Cost depends on size and features. We'll provide a detailed quote after understanding your yard and family's needs." },
      { question: "Do you design pools with safety features for young kids?", answer: "Yes, sun ledges, clear sightlines from the house, and safety-conscious layouts are common priorities we design around for families." },
      { question: "Do you handle City of Phoenix permitting for Ahwatukee projects?", answer: "Yes, Ahwatukee falls within Phoenix city limits, and we manage plan submittal and permitting accordingly." },
    ],
  },
  "superstition-area-pool-builder": {
    intro: [
      "The Superstition Mountains give the whole area east of Apache Junction and Gold Canyon one of the most dramatic natural backdrops in the Phoenix metro — a lot of homeowners out here chose their property specifically for that view, and we design around it accordingly.",
      "Whether it's a full-time residence or a weekend property near the trailheads and Lost Dutchman State Park, we design pools and outdoor living spaces that put the mountain backdrop front and center rather than treating it as an afterthought.",
    ],
    localNotes:
      "Properties throughout the Superstition area tend to have larger desert lots and more dramatic natural terrain than closer-in suburbs, which gives us more room for freeform pool shapes and landscaping that echoes the surrounding desert.",
    whyHomeowners:
      "Homeowners in the Superstition area are often drawn to the region for its natural desert setting and recreational access — we design outdoor spaces that feel like a genuine extension of that landscape rather than a suburban yard dropped into the desert.",
    faqs: [
      { question: "Do you design pools that frame views of the Superstition Mountains?", answer: "Yes, positioning the pool and seating areas to take advantage of the mountain backdrop is a standard part of our design process in this area." },
      { question: "Do you work with weekend or part-time residence owners near the Superstitions?", answer: "Yes, we design with low-maintenance features and automated equipment where appropriate for owners who aren't on-site year-round." },
      { question: "What soil and terrain considerations come up in this area?", answer: "Rocky, well-draining soil and larger, often irregular lots are common — we account for this during excavation and structural planning." },
      { question: "How much does a custom pool cost in the Superstition area?", answer: "Cost depends on lot conditions, size, and features. We'll provide a specific quote after the site walk." },
      { question: "Do you handle Pinal or Maricopa County permitting depending on the property's location?", answer: "Yes, we manage permitting through the appropriate county or municipality based on your property's exact location." },
    ],
  },
  "maricopa-pool-builder": {
    intro: [
      "Maricopa has grown rapidly as a Pinal County community with newer master-planned neighborhoods like Rancho El Dorado and Province, alongside a broader agricultural heritage that's steadily giving way to suburban development.",
      "We design pools and landscaping across that mix — from newer-construction backyards starting as bare dirt to larger properties that still reflect the area's agricultural history.",
    ],
    localNotes:
      "As one of the fastest-growing communities south of the Valley, Maricopa has a lot of new construction with builder-grade backyards — we regularly design the full landscape and hardscape plan from scratch for these homes.",
    whyHomeowners:
      "Maricopa homeowners are often looking for an outdoor space that stands out in a community where most backyards started from the same builder template — we design something that doesn't look like everyone else's.",
    faqs: [
      { question: "Do you design for newer master-planned communities in Maricopa?", answer: "Yes, communities like Rancho El Dorado and Province are common project locations for us, typically starting from a builder-grade backyard." },
      { question: "What's the permitting process like in Maricopa?", answer: "We manage plan submittal and permitting through the City of Maricopa as part of construction." },
      { question: "Can you work with larger agricultural-zoned properties near Maricopa?", answer: "Yes, we've designed for a range of property types in the area — we'll assess specific zoning and setback requirements during the site visit." },
      { question: "How much does a custom pool cost in Maricopa?", answer: "Cost depends on size, materials, and features. We'll provide a detailed quote after understanding your design goals." },
      { question: "How long is the commute for your team to reach Maricopa projects?", answer: "We regularly work in Maricopa as part of our broader Pinal County service area and factor travel into project scheduling." },
    ],
  },
  "coolidge-pool-builder": {
    intro: [
      "Coolidge is one of the quieter, more established communities in Pinal County, with deep agricultural roots and a slower pace of growth than neighboring Maricopa or San Tan Valley — that often means larger, more affordable lots for custom outdoor living.",
      "We design pools and landscaping in Coolidge for both long-established properties and the newer homes gradually filling in around the town's historic core.",
    ],
    localNotes:
      "Coolidge's larger, often more affordable lots give homeowners room for a genuinely custom layout without the tighter constraints of a dense suburban subdivision.",
    whyHomeowners:
      "Coolidge homeowners often have more land to work with than in tighter Phoenix-area suburbs — we design layouts that take full advantage of that space rather than defaulting to a compact suburban footprint.",
    faqs: [
      { question: "Do you build pools on larger rural lots in Coolidge?", answer: "Yes, larger lots are common in Coolidge and give us more design flexibility for pool size, decking, and landscape layout." },
      { question: "What's the permitting process like in Coolidge?", answer: "We manage plan submittal and permitting through the City of Coolidge or Pinal County, depending on your property's location, as part of construction." },
      { question: "Can you design landscaping for an older, established Coolidge property?", answer: "Yes, we assess existing trees and landscaping during the site walk and design around what's worth preserving." },
      { question: "How much does a custom pool cost in Coolidge?", answer: "Cost depends on size, materials, and features. We'll provide a detailed quote after understanding your design goals." },
      { question: "Do you work with agricultural-zoned properties near Coolidge?", answer: "Yes, we've designed for a range of property types in the area, including larger acreage lots." },
    ],
  },
};
