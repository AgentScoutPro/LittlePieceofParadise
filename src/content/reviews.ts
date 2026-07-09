/**
 * Verbatim client testimonials, copied directly from the current live site's
 * About page (source text supplied by the client, July 2026). Unlike the
 * paraphrased summaries in content/about.ts, these are word-for-word so they
 * can be shown in full when a review card is expanded.
 *
 * IMPORTANT — location field: the source text only states a city for one
 * reviewer (Kari Q. — "I bought a home in Florence"). No city is included
 * for the rest. Do not invent one; leave `location` unset until Denise
 * confirms where each of these clients' projects were, then fill it in here.
 */

export type Review = {
  id: string;
  name: string;
  location?: string;
  excerpt: string;
  fullText: string;
};

export const reviews: Review[] = [
  {
    id: "daniel-s",
    name: "Daniel S.",
    excerpt:
      "She loves her yard! From the initial consultation to the final result, Denise demonstrates exceptional attention to detail and a genuine passion for what she does.",
    fullText:
      "She loves her yard! Thank you so very much! From the initial consultation to the final result, Denise demonstrates exceptional attention to detail and a genuine passion for what she does. She has an incredible eye for design and an intuitive understanding of how to transform outdoor spaces into beautiful, functional, and inviting environments. Her work not only enhanced the appearance of our property but also adds lasting value and enjoyment for our family and guests.",
  },
  {
    id: "john-b",
    name: "John B.",
    excerpt:
      "Denise is reliable, punctual, and communicative throughout every stage of a project. She takes the time to listen carefully and offers thoughtful suggestions.",
    fullText:
      "Denise is reliable, punctual, and communicative throughout every stage of a project. She takes the time to listen carefully, offers thoughtful suggestions, and ensures that the finished work exceeds expectations. It is clear that she takes great pride in her business, and that pride shows in both the quality of her work and the way she treats her clients.",
  },
  {
    id: "kim-s",
    name: "Kim S.",
    excerpt:
      "One of the greatest testaments to Denise's work is how much our family genuinely loves spending time in our backyard now.",
    fullText:
      "One of the greatest testaments to Denise's work is how much our family genuinely loves spending time in our backyard now. The space she created is so beautiful and peaceful that we often find ourselves outside for entire evenings, relaxing together and enjoying the atmosphere. It has become a favorite place for our family to unwind, connect, and appreciate the outdoors, and it truly feels like an extension of our home.",
  },
  {
    id: "kari-m",
    name: "Kari M.",
    excerpt:
      "Shout out to Denise, Paul and the rest of crew from Little Piece of Paradise! They showed up, did the job well, and cleaned up completely.",
    fullText:
      "Shout out to Denise, Paul and the rest of crew from Little Piece of Paradise! I had a lot of shrubs I needed removed. They showed up, did the job, did the job well, cleaned up and made it look like they were never there! Highly recommend.",
  },
  {
    id: "matt-z",
    name: "Matt Z.",
    excerpt: "Thank you for the rendering, and the leg work. I will surely give you an opportunity to design the backyard in the fall.",
    fullText: "Thank you for the rendering, and the leg work. I will surely give you an opportunity to design the backyard in the fall.",
  },
  {
    id: "carrie-a",
    name: "Carrie A.",
    excerpt:
      "We had an amazing experience working with Little Piece of Paradise! Denise was so friendly, professional, and truly a pleasure to work with.",
    fullText:
      "We had an amazing experience working with Little Piece of Paradise! Denise was so friendly, professional, and truly a pleasure to work with. The team went above and beyond to meet our needs and completely exceeded our expectations.",
  },
  {
    id: "chris-p",
    name: "Chris P.",
    excerpt:
      "Little Piece of Paradise did such a great job on our custom backyard pergola — I got 3 quotes, and Denise was the first one who offered something beyond the usual cookie-cutter design.",
    fullText:
      "Little Piece of Paradise did such a great job on our custom back yard pergola, I thought it was worth sharing. It fit so well in our yard and matches the style perfectly. I haven't seen anything just like this! I got 3 quotes, and Denise was the first one who actually offered something beyond the usual cookie cutter design. She listened, understood our needs perfectly, and her craftsmen were meticulous in making it work. They were also very friendly and easy to work with. To top it off, her price was super reasonable. I would have paid more for the cookie cutter pergola if I had gone with the other companies. I'm very happy with the result (I mean, LOOK at it!), the price and the great customer service. Would definitely work with Denise and crew again!",
  },
  {
    id: "kari-q",
    name: "Kari Q.",
    location: "Florence, AZ",
    excerpt:
      "In 2025 I bought a home in Florence with no contacts and no relatives in Arizona. I depended on Facebook for leads and found Denise — I cannot recommend her and her team enough.",
    fullText:
      "In 2025 I bought a home in Florence. I had no contacts, no relatives here in Arizona so I had no idea what I was getting into hiring people to work on my new home. I depended on Facebook to give me leads to Contractors in the area and they did not disappoint. I had at least 3 referrals for Denise and her team. I called Denise with a brief sketch on what I thought I wanted and she took it from there drawing up sketches for me as to what her vision was. Around Thanksgiving I flew down to meet the Contractors that I had chosen and Denise and I hit it off famously. I had to leave back to Seattle (I was still working) and Denise assured me that while I was gone her team could work magic without me even being present. After Denise's team had completed the project she sent me photos. I loved it...but the best was yet to come. I arrived, all of my things in tow on the 31st of December, when I got to see her work in person. Everything was just as I had imagined and more. I cannot recommended Denise and her team enough...my yard is perfect for myself and my dogs. I am forever grateful that I could trust her completely when I knew no one.",
  },
];
