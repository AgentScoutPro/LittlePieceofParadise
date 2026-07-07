export type ServiceContent = {
  overview: string[];
  benefits: string[];
  process: { title: string; body: string }[];
  whyChooseUs: string;
  faqs: { question: string; answer: string }[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "custom-pool-design": {
    overview: [
      "A custom pool starts with how you actually want to live outside, not a catalog of shapes. We walk your property, talk through sun exposure, sightlines from the house, and how many people you're realistically designing for, then build a layout around that — geometric or freeform, with a Baja shelf, sun ledge, or attached spa where it makes sense.",
      "Every design accounts for Arizona's heat: shade structures, water features positioned for evening use, and decking materials chosen to stay walkable barefoot in July.",
    ],
    benefits: [
      "Layouts designed around your yard's sun path and existing structures, not a generic template",
      "Material selections (plaster, pebble finish, tile) matched to Arizona water chemistry and sun exposure",
      "Integrated spa, sun ledge, and water feature options planned from day one, not bolted on later",
      "3D renderings before construction begins, so there are no surprises mid-build",
    ],
    process: [
      { title: "Site walk & consultation", body: "We assess your yard's orientation, drainage, existing hardscape, and how your family plans to use the space." },
      { title: "Concept & 3D design", body: "You'll see a rendered layout with material and finish options before anything is priced or built." },
      { title: "Permitting", body: "We handle plan submittal and permitting with your city or county so this doesn't fall on you." },
      { title: "Refinement", body: "Adjust the design based on your feedback until it's exactly right, then lock the final plan." },
    ],
    whyChooseUs:
      "We design every pool in-house rather than pulling from a fixed catalog, which means the layout actually fits your yard instead of your yard being forced to fit a standard shape.",
    faqs: [
      { question: "How much does a custom pool design cost in Arizona?", answer: "Design fees vary by scope and are typically credited toward construction if you move forward. We'll give you a firm design quote after the initial site walk, based on your yard size and the features you're considering." },
      { question: "How long does the design phase take?", answer: "Most custom pool designs take two to four weeks from site walk to a finished, renderable plan, depending on how many revisions you'd like to make." },
      { question: "Can you design a pool that includes a spa and water feature?", answer: "Yes — spas, sun ledges, waterfalls, and pondless water features are all planned into the layout from the start rather than added as afterthoughts." },
      { question: "Do I need a permit for a custom pool in Arizona?", answer: "Yes, pool construction requires permitting through your city or county. We handle plan submittal and permitting as part of the design and construction process." },
      { question: "Can you work with an existing patio or landscaping I want to keep?", answer: "Absolutely. The site walk includes assessing what's already in place so the new design integrates with it instead of requiring a full teardown." },
    ],
  },
  "custom-pool-construction": {
    overview: [
      "Construction is where a design either holds up or falls apart. We manage excavation, plumbing, gunite or shotcrete shell work, decking, and finish coats under one team, so you're not coordinating between five different subcontractors.",
      "We build for Arizona's soil and climate conditions specifically — proper steel reinforcement, expansion joints in decking, and finish materials selected to handle summer heat without degrading early.",
    ],
    benefits: [
      "One point of contact from excavation through final walkthrough",
      "Licensed, insured crews for every phase — structural, plumbing, electrical, and finish work",
      "Construction scheduled around Arizona's weather windows to avoid unnecessary delays",
      "Clear milestone updates so you always know what phase your project is in",
    ],
    process: [
      { title: "Excavation & steel", body: "Site prep, excavation, and structural steel reinforcement sized to your pool's shape and local soil conditions." },
      { title: "Shell & plumbing", body: "Gunite or shotcrete shell application alongside plumbing and electrical rough-in." },
      { title: "Decking & hardscape", body: "Travertine, pavers, or your selected decking material installed around the completed shell." },
      { title: "Finish & startup", body: "Interior finish coat, equipment startup, water balancing, and a full walkthrough before you take over." },
    ],
    whyChooseUs:
      "We manage construction as one continuous project rather than handing you off between separate design and build companies — the crew that builds your pool is accountable to the plan we designed together.",
    faqs: [
      { question: "How long does pool construction take in Arizona?", answer: "Most custom pool builds take 8 to 14 weeks from groundbreaking to final walkthrough, depending on complexity, permitting timelines, and weather." },
      { question: "What's the typical cost range for a custom pool build?", answer: "Costs vary widely based on size, materials, and features like spas or water features. We provide a detailed, itemized quote after the design is finalized so there are no surprise line items." },
      { question: "Do you handle permits and inspections?", answer: "Yes, permitting and scheduling required inspections are part of our construction management — you don't need to coordinate this yourself." },
      { question: "What happens if we hit unexpected soil or utility issues during excavation?", answer: "We flag any issues immediately and walk you through options and cost impact before proceeding, rather than making changes without your sign-off." },
      { question: "Is financing available for pool construction?", answer: "We can point you toward financing partners during your consultation — ask your project lead for current options." },
    ],
  },
  "landscape-design": {
    overview: [
      "Arizona landscaping has to work with the desert, not against it. We design planting palettes using native and desert-adapted species that thrive in low water conditions, then layer in hardscape, pathways, and lighting so the whole property reads as one cohesive design rather than a lawn with some cacti added on.",
      "Every plan considers how your landscape will look in year five, not just at installation — mature canopy size, root spread near hardscape, and seasonal bloom timing all factor into placement.",
    ],
    benefits: [
      "Water-wise plant palettes that reduce long-term irrigation costs",
      "Layouts that account for mature plant size, not just how it looks on install day",
      "Pathway and lighting integration planned alongside planting, not as a separate add-on",
      "Designs that complement your home's architecture instead of competing with it",
    ],
    process: [
      { title: "Site & soil assessment", body: "We evaluate sun exposure, drainage, and existing soil conditions across the property." },
      { title: "Planting & hardscape plan", body: "A full plan covering plant selection, pathways, boulders, and lighting placement." },
      { title: "Material & plant sourcing", body: "We source mature specimens and quality hardscape materials rather than the smallest, cheapest stock." },
      { title: "Installation", body: "Planting, irrigation, and hardscape installed in the correct sequence to protect root systems and finish grades." },
    ],
    whyChooseUs:
      "Our designs are built around Arizona's climate from the first sketch, using plant palettes and irrigation approaches suited to the desert rather than adapting a template designed for a different climate.",
    faqs: [
      { question: "What plants work best for Arizona landscaping?", answer: "Native and desert-adapted species — palo verde, agave, desert marigold, and similar low-water plants — perform best long-term. We'll recommend a specific palette based on your yard's sun exposure and your maintenance preferences." },
      { question: "How much does landscape design cost in Arizona?", answer: "Cost depends on property size and design complexity. We provide a scoped quote after an initial site visit." },
      { question: "How much water do desert-adapted landscapes actually save?", answer: "Water-wise landscaping typically uses significantly less irrigation than traditional turf-heavy yards, though exact savings depend on your existing setup and the final plant palette chosen." },
      { question: "Can you design around an existing pool or patio?", answer: "Yes — landscape design is often done alongside or after pool and hardscape projects, and we plan planting to complement what's already built." },
      { question: "How long before new landscaping looks fully established?", answer: "Most desert-adapted plantings show strong growth within one to two growing seasons, with full maturity depending on species selection." },
    ],
  },
  "outdoor-living-spaces": {
    overview: [
      "Outdoor living spaces are where a backyard actually gets used — covered patios, shaded seating areas, and pergolas designed for the specific spot on your property that gets evening shade or catches the breeze. We design these as an extension of your home's floor plan, not a disconnected structure at the back of the yard.",
      "Material and structural choices account for Arizona's sun exposure and monsoon season, so the space holds up and stays comfortable through the full year.",
    ],
    benefits: [
      "Shade and airflow planned around your yard's actual sun path, not guesswork",
      "Structures designed to complement your home's architecture",
      "Wiring and plumbing planned in advance for future additions like outdoor kitchens or fireplaces",
      "Materials selected to hold up through Arizona summers and monsoon season",
    ],
    process: [
      { title: "Use & layout planning", body: "We talk through how you'll actually use the space — dining, lounging, entertaining — and design the layout around that." },
      { title: "Structural design", body: "Pergola, ramada, or covered patio design engineered for Arizona wind and sun loads." },
      { title: "Utilities rough-in", body: "Electrical and plumbing planned in before construction, even if you're not adding a kitchen or fireplace yet." },
      { title: "Build & finish", body: "Construction and finish work, including any integrated lighting or fans." },
    ],
    whyChooseUs:
      "We design outdoor living spaces as part of the whole-property plan, so they connect naturally to your pool, kitchen, or landscaping instead of feeling like a separate project bolted on afterward.",
    faqs: [
      { question: "What's the difference between a pergola and a ramada?", answer: "A pergola typically has an open or partially-covered lattice roof, while a ramada has a solid roof for full shade. We'll recommend the right structure based on how much shade you want and your budget." },
      { question: "Can you add an outdoor kitchen to an existing patio?", answer: "In many cases, yes — we'll assess your existing structure and utilities to see what's feasible before recommending a full rebuild versus an addition." },
      { question: "Do outdoor living structures need a permit in Arizona?", answer: "Depending on size and whether it's attached to your home, a permit may be required. We handle that process as part of the project." },
      { question: "How do you keep outdoor spaces cool in the summer?", answer: "Orientation, shade coverage, and airflow are all designed in from the start — fans, shade density, and structure placement relative to the sun all factor into keeping the space usable in peak summer." },
      { question: "How long does an outdoor living space project take?", answer: "Simple pergola or patio cover projects can take a few weeks; larger structures with integrated utilities take longer. We'll give you a specific timeline after design." },
    ],
  },
  "outdoor-kitchens": {
    overview: [
      "An outdoor kitchen has to handle real entertaining, not just a single grill against a wall. We design layouts with enough counter space, storage, and seating to actually host — built-in grills, prep stations, bar seating, and refrigeration, all planned around how your family entertains.",
      "Materials and finishes are selected specifically for outdoor durability in Arizona's sun and heat, so the kitchen still looks and functions well years in.",
    ],
    benefits: [
      "Layouts designed for real entertaining, not a single appliance against a wall",
      "Weather-resistant materials selected for Arizona's sun and heat exposure",
      "Utility planning (gas, electrical, water) handled up front to avoid costly retrofits",
      "Design coordinated with your existing patio, pergola, or pool layout",
    ],
    process: [
      { title: "Entertaining needs assessment", body: "We talk through how you host — casual family dinners, larger parties — to size the kitchen correctly." },
      { title: "Layout & appliance selection", body: "Grill, prep space, storage, and seating planned as one connected layout." },
      { title: "Utility rough-in", body: "Gas, electrical, and water lines run and roughed in before finish work begins." },
      { title: "Construction & finish", body: "Framing, counter material installation, and appliance integration." },
    ],
    whyChooseUs:
      "We size and lay out outdoor kitchens around how you actually entertain rather than defaulting to a standard grill-island package that may not fit your yard or your guest list.",
    faqs: [
      { question: "What materials hold up best for outdoor kitchens in Arizona?", answer: "Stone, concrete, and stainless steel finishes handle Arizona sun and heat best. We'll walk you through options based on your budget and the look you want." },
      { question: "Do I need a permit for an outdoor kitchen?", answer: "If gas or electrical lines are being run, yes — permitting is typically required, and we manage that process." },
      { question: "Can an outdoor kitchen be added to an existing patio?", answer: "Often yes, depending on your existing structure and available utility access. We'll assess this during the site visit." },
      { question: "How much does a custom outdoor kitchen cost?", answer: "Cost depends on size, appliance selection, and materials. We'll provide a detailed quote after discussing your layout and appliance needs." },
      { question: "How long does installation take?", answer: "Most outdoor kitchen projects take four to eight weeks depending on scope and whether utilities need to be run from scratch." },
    ],
  },
  "fire-features": {
    overview: [
      "Fire features extend how long you can use your backyard on cool desert evenings, and they're one of the highest-impact additions for how a space feels at night. We design fire pits, fire bowls, and linear fireplaces as part of the landscape — positioned for sightlines from the house and integrated seating, not dropped in as an afterthought.",
      "Gas and wood-burning options are both available, and we'll walk through the tradeoffs based on how you'll actually use the feature.",
    ],
    benefits: [
      "Positioned within the landscape for sightlines and seating, not just wherever there's open space",
      "Gas or wood-burning options based on how you'll use it",
      "Integrated with existing patios, pools, or seating areas",
      "Safe clearance and material choices appropriate for Arizona's dry conditions",
    ],
    process: [
      { title: "Placement & style", body: "We determine the best location based on sightlines, prevailing wind, and how the seating area will be arranged." },
      { title: "Gas line or fuel planning", body: "For gas features, lines are planned and permitted as part of the build." },
      { title: "Construction", body: "Fire feature construction integrated with surrounding hardscape or landscaping." },
      { title: "Safety & finish check", body: "Final clearance and safety check before handoff." },
    ],
    whyChooseUs:
      "We treat fire features as part of the overall landscape design — positioned and built to match the rest of your outdoor space rather than sold as a standalone kit.",
    faqs: [
      { question: "Gas or wood-burning — which is better for Arizona backyards?", answer: "Gas features are more convenient and have fewer restrictions during burn bans, while wood-burning offers a more traditional experience. We'll help you weigh the tradeoffs based on how often you'll use it." },
      { question: "Do fire features require a permit?", answer: "Gas fire features typically require permitting for the gas line. We handle this as part of the project." },
      { question: "How close can a fire feature be to seating or structures?", answer: "Clearance requirements depend on the feature type and local code — we design to those requirements as part of the layout." },
      { question: "Can you add a fire feature to an existing patio?", answer: "In most cases, yes. We'll assess your existing hardscape and utility access during the site visit." },
      { question: "What's the cost range for a custom fire feature?", answer: "Cost varies based on size, materials, and whether it's gas or wood-burning. We'll provide a specific quote after discussing your preferences." },
    ],
  },
  "artificial-turf": {
    overview: [
      "Artificial turf gives you a green, usable lawn without fighting Arizona's water restrictions and summer heat. We install turf systems with proper base preparation and heat-resistant infill, so the lawn drains well, doesn't get uncomfortably hot underfoot, and holds its look for years rather than matting down or fading.",
      "Turf is a strong fit for play areas, pet zones, and low-maintenance front yards where a real lawn would require constant upkeep in desert conditions.",
    ],
    benefits: [
      "No irrigation required once installed, reducing long-term water costs",
      "Heat-resistant infill options to reduce surface temperature underfoot",
      "Proper base preparation for drainage and long-term durability",
      "Pet-friendly and play-area-friendly turf systems available",
    ],
    process: [
      { title: "Base assessment", body: "We evaluate existing grade and drainage before recommending a base preparation approach." },
      { title: "Base preparation", body: "Proper excavation and base material installation — this is what determines whether turf lasts or fails early." },
      { title: "Turf installation", body: "Turf laid, seamed, and infilled with material chosen for your use case (pets, play, general lawn)." },
      { title: "Final grooming", body: "Brushing and grooming for a natural finished look." },
    ],
    whyChooseUs:
      "Turf failures almost always come down to inadequate base preparation — we don't skip that step to save time, which is why our installations hold up under Arizona heat instead of shifting or draining poorly.",
    faqs: [
      { question: "Does artificial turf get too hot to walk on in Arizona?", answer: "Heat-resistant infill options significantly reduce surface temperature compared to standard turf. We'll recommend the right infill based on how the space will be used." },
      { question: "How long does artificial turf last?", answer: "Quality turf systems with proper base preparation typically last well over a decade with minimal maintenance." },
      { question: "Is artificial turf safe for pets?", answer: "Yes — we offer pet-specific turf systems with drainage designed to handle pet use without odor buildup." },
      { question: "How much does artificial turf installation cost?", answer: "Cost depends on square footage, base condition, and turf/infill selection. We'll provide a quote after assessing your yard." },
      { question: "Does turf require any maintenance?", answer: "Occasional rinsing and brushing to keep fibers upright is typically all that's needed — no mowing, watering, or fertilizing." },
    ],
  },
  "pavers-hardscapes": {
    overview: [
      "Pavers and hardscape are the foundation the rest of your outdoor design stands on — patios, walkways, pool decks, and driveways. We work with travertine, natural stone, and concrete pavers, selecting materials and patterns that fit your home's architecture and hold up under Arizona sun without excessive heat retention.",
      "Proper base compaction and drainage planning are non-negotiable in every hardscape install, since that's what prevents shifting, cracking, and pooling water down the line.",
    ],
    benefits: [
      "Material options selected for Arizona heat, including cooler-underfoot travertine",
      "Proper base compaction and drainage planning to prevent shifting and cracking",
      "Patterns and layouts matched to your home's architecture",
      "Integration with pool decks, walkways, and outdoor living spaces as one cohesive design",
    ],
    process: [
      { title: "Layout & material selection", body: "We walk through material and pattern options based on your home's style and budget." },
      { title: "Base preparation", body: "Excavation and base compaction sized correctly for the intended use — foot traffic vs. vehicle traffic." },
      { title: "Installation", body: "Paver or stone installation with attention to drainage slope and joint spacing." },
      { title: "Sealing & finish", body: "Sealing where appropriate to protect against staining and extend the surface's lifespan." },
    ],
    whyChooseUs:
      "We don't cut corners on base preparation — it's the least visible part of a hardscape project and the most common place other contractors save time, which is exactly why pavers shift and settle within a few years elsewhere.",
    faqs: [
      { question: "What's the best paver material for Arizona heat?", answer: "Travertine stays notably cooler underfoot than concrete pavers or standard stone, making it a strong choice for pool decks and patios in direct sun." },
      { question: "How long do paver installations last?", answer: "With proper base preparation, paver and hardscape installations typically last decades with minimal issues." },
      { question: "Can pavers be installed around an existing pool?", answer: "Yes, this is one of the most common hardscape projects we handle — we design the paver layout to integrate cleanly with your existing pool deck." },
      { question: "Do you offer permeable paver options for drainage?", answer: "Yes, permeable systems are available where drainage is a concern — we'll recommend this if your site conditions call for it." },
      { question: "What's the cost range for paver and hardscape projects?", answer: "Cost depends on square footage, material selection, and site preparation needs. We'll provide a detailed quote after the site visit." },
    ],
  },
  "water-features": {
    overview: [
      "Moving water changes how a backyard feels — the sound alone makes a space feel cooler and more private. We design waterfalls, pondless features, and pool-integrated water elements that fit naturally into the landscape rather than reading as a separate installed object.",
      "Every water feature is designed with Arizona's evaporation and water quality considerations in mind, including recirculation systems that keep maintenance manageable.",
    ],
    benefits: [
      "Designed to integrate naturally into the landscape, not as a standalone add-on",
      "Pondless and recirculating systems available to manage water use and evaporation",
      "Positioned for both sound and sightlines from key areas of the yard",
      "Can be integrated directly into pool design or built as a standalone feature",
    ],
    process: [
      { title: "Placement & style", body: "We identify the best location based on sightlines, sound carry, and how it fits the surrounding landscape." },
      { title: "System design", body: "Pump, plumbing, and recirculation system sized correctly for the feature." },
      { title: "Construction", body: "Rockwork, plumbing, and finish work installed and tested for proper flow." },
      { title: "Water quality setup", body: "Initial water treatment and a walkthrough on ongoing maintenance." },
    ],
    whyChooseUs:
      "We design water features as part of the landscape's overall composition, not as a prefabricated kit — the rockwork, plant surroundings, and sightlines are all planned together.",
    faqs: [
      { question: "How much maintenance does a water feature require in Arizona?", answer: "With a properly sized recirculation system, maintenance is generally limited to periodic water top-off due to evaporation and occasional debris removal." },
      { question: "What's a pondless water feature?", answer: "A pondless feature recirculates water through a hidden underground reservoir rather than an open pond, reducing evaporation and eliminating standing water — a popular choice in Arizona." },
      { question: "Can a water feature be added to an existing pool?", answer: "Yes, waterfalls and other features are commonly integrated into existing pool designs — we'll assess feasibility during a site visit." },
      { question: "Do water features increase my water bill significantly?", answer: "Recirculating systems reuse the same water, so the ongoing cost is generally limited to occasional refills for evaporation, not continuous fresh water use." },
      { question: "How much does a custom water feature cost?", answer: "Cost depends on scale and complexity. We'll provide a specific quote once we understand the size and style you're considering." },
    ],
  },
  "landscape-lighting": {
    overview: [
      "Good lighting is what makes a backyard feel finished at night instead of going dark the moment the sun sets. We design layered lighting plans — path lighting, uplighting on trees and architecture, and accent lighting around pools and fire features — so the whole property reads as intentional after dark.",
      "Fixtures and placement are selected to minimize glare and light pollution while still making the space fully usable in the evening.",
    ],
    benefits: [
      "Layered lighting design — path, accent, and feature lighting planned together",
      "Fixtures selected to minimize glare while maximizing usability after dark",
      "Energy-efficient LED systems with long fixture lifespans",
      "Lighting planned alongside landscaping and hardscape, not added as an afterthought",
    ],
    process: [
      { title: "Nighttime walkthrough", body: "Where possible, we assess the property after dark to identify natural focal points and problem areas." },
      { title: "Lighting plan", body: "A full plan covering path, accent, and feature lighting, with fixture and placement recommendations." },
      { title: "Wiring & installation", body: "Low-voltage wiring run and fixtures installed with attention to concealment and durability." },
      { title: "Final adjustment", body: "On-site adjustment of angles and brightness after dark to fine-tune the final look." },
    ],
    whyChooseUs:
      "We design lighting as its own layered plan rather than a handful of path lights added at the end of a project — the goal is a backyard that looks intentional after dark, not just lit.",
    faqs: [
      { question: "How much does landscape lighting cost?", answer: "Cost depends on the number of fixtures and complexity of the layout. We'll provide a specific quote after the lighting plan is developed." },
      { question: "Is landscape lighting expensive to run?", answer: "LED landscape lighting systems are energy-efficient and generally add minimally to your electric bill." },
      { question: "Can lighting be added to existing landscaping?", answer: "Yes, this is a common standalone project — we'll design a lighting layout around your existing plants and hardscape." },
      { question: "Do you offer smart or app-controlled lighting systems?", answer: "Yes, smart control options are available if you'd like to schedule or adjust lighting remotely." },
      { question: "How long does installation take?", answer: "Most landscape lighting installations take one to three days depending on property size and fixture count." },
    ],
  },
};
