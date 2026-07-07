/**
 * Sourced and paraphrased from the live site's /about page (accessed for
 * this rebuild). Testimonials are summarized rather than quoted directly —
 * original reviewer wording lives on the current site and in the client's
 * Google/Facebook reviews.
 */

export const mission =
  "Every project starts with your style, your family's routine, and what you actually want to feel when you step outside — not a template pulled from a catalog. We hand-select every material and detail for the specific people who'll be using the space, because a backyard that means something to you can't be a copy of what's trending on social media this month.";

export const approach = [
  "Every project begins with listening, not selling. Before a single design element gets sketched, we want to understand how you actually use — or want to use — your outdoor space: quiet mornings, weekend entertaining, a place for the kids to grow up, or a backdrop that impresses clients and colleagues.",
  "Commercial projects follow the same principle, built around how you want your space to represent your business to the people who walk through it.",
  "We also think beyond the first project — many clients plan their outdoor space in stages, and we help map that out so today's install sets up tomorrow's addition instead of working against it.",
];

export const team =
  "No single company can do everything well, so we work with a vetted network of local landscapers, hardscape and concrete contractors, water feature specialists, pool contractors, electricians, and other trade professionals — each licensed, insured, and bonded under Arizona requirements. You get one point of contact managing a team of specialists, rather than a generalist crew stretched across trades they don't specialize in.";

export const ownerStory = [
  "Denise Caldwell founded Little Piece of Paradise after a career that looks nothing like a typical design résumé — and that's part of what shapes how she runs projects today.",
  "She spent two decades in legal and operations roles, including work within the federal judicial system, before shifting into business administration, bookkeeping, and operations management. Underneath all of it was a passion for gardening and landscape design that started in childhood, working alongside her mother, and continued through designing the landscaping and outdoor living spaces for her own homes in Illinois.",
  "After relocating to Arizona in 2018 with her son, she took on her own backyard as a blank-slate project — and it became the spark for turning a lifelong passion into a full-time business. That project management background shows up in how every job runs today: clear communication, realistic timelines, and a process that doesn't leave clients guessing what happens next.",
  "Since then, she's worked alongside homeowners, neighbors, landscape and pool contractors, general contractors, investors, and commercial property owners across the Phoenix area to bring their own version of a backyard retreat to life.",
];

export const processSteps = [
  { title: "Schedule a consultation", body: "Call or text to set up a personal consultation and start building your project wish list." },
  { title: "Meet & discuss your vision", body: "We talk through your style preferences, family dynamics, and goals, and take photos or measurements on-site." },
  { title: "Design & presentation", body: "Depending on your project, we create a custom design or visual aid and schedule a time to walk through it together." },
  { title: "Review & refine", body: "We revisit the design options together and make any revisions until it's right." },
  { title: "Estimate & scheduling", body: "Once the design is approved, we build a detailed estimate and schedule your installation." },
  { title: "Installation", body: "Your project is brought to life by our licensed, insured team of specialists." },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How long does it take to get a custom design?",
    answer: "Timing depends on the size and scope of the project, but most designs are ready for review within 7 to 10 business days.",
  },
  {
    question: "Do you charge for the landscape design?",
    answer: "Yes — design work is billed as a flat fee based on the scope of the project. If we complete the installation, a portion of that design fee is credited back toward your final balance.",
  },
  {
    question: "Can I just get the design and handle installation myself?",
    answer: "Absolutely. We're happy to create a design-only package, and can include a plant guide or additional aerial view for a reduced fee if you'd like extra detail for a DIY install.",
  },
  {
    question: "Can you install without creating a full design first?",
    answer: "Yes — paver, concrete, landscape, hardscape, and water feature installation are all available without a formal design phase, handled by our team of licensed contractors.",
  },
  {
    question: "What if my budget is more modest than a magazine-cover backyard?",
    answer: "We design within your actual budget and make recommendations that fit it — a smaller budget gets the same attention to design as a larger one, just scoped appropriately.",
  },
  {
    question: "What does a new backyard typically cost?",
    answer: "Project size varies widely — we've completed installs from $5,000 to $10,000 up through six-figure builds. A typical new backyard build runs roughly $12,000 to $25,000 depending on your wish list and material selections, and we can help you plan the project in phases if that fits your budget better.",
  },
  {
    question: "How soon after signing can installation start?",
    answer: "Once we have your signed contract and deposit, installation typically begins within 2 to 3 weeks.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  summary: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel S.",
    location: "San Tan Valley, AZ",
    summary:
      "Praised the attention to detail from first consultation through final walkthrough, and said his family now spends whole evenings enjoying the backyard together.",
  },
  {
    name: "Kari Q.",
    location: "Florence, AZ",
    summary:
      "Bought a home in Florence with no local contacts, coordinated the project remotely while still living out of state, and returned to find the finished yard exceeded what she'd pictured.",
  },
  {
    name: "Chris P.",
    location: "Gilbert, AZ",
    summary:
      "Compared three quotes for a backyard pergola and chose Little Piece of Paradise for offering a genuinely custom design instead of a cookie-cutter option, at a reasonable price.",
  },
  {
    name: "Carrie M.",
    location: "Queen Creek, AZ",
    summary: "Described the team as friendly and professional, and said the project exceeded expectations.",
  },
  {
    name: "Kari M.",
    location: "San Tan Valley, AZ",
    summary: "Had a large amount of shrub removal done efficiently, with the crew leaving the site completely clean afterward.",
  },
  {
    name: "Matt Z.",
    location: "San Tan Valley, AZ",
    summary: "Appreciated the design rendering and legwork provided ahead of a planned fall backyard project.",
  },
];
