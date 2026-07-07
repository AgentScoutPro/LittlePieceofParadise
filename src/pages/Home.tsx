import React from "react";
import { ArrowRight, Flame, Medal, Sparkles, Sprout, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { cities, site } from "../lib/siteData";
import { HeroScrollVideo } from "../components/HeroScrollVideo";

/**
 * PLACEHOLDER MEDIA — see note in the original storyboard build. Swap each
 * src for the rendered asset from the matching Image Board once generated.
 */
const media = {
  emptyYard: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1200&q=85",
  construction: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
  paradiseFrame: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
  pool: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=85",
  outdoorLiving: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=85",
  family: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2400&q=85",
  landscape: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=2400&q=85",
  night: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <motion.img src={src} alt={alt} className="scene-media" style={{ y, scale: 1.15 }} />
    </div>
  );
}

function SceneTransformation() {
  const frames = [
    { label: "Empty Yard", src: media.emptyYard },
    { label: "Construction", src: media.construction },
    { label: "Paradise", src: media.paradiseFrame },
  ];
  return (
    <section className="scene" style={{ minHeight: "auto", background: "var(--near-black)" }} aria-labelledby="transform-title">
      <div className="transform-track">
        <Reveal>
          <p className="scene-eyebrow">The Transformation</p>
          <h2 id="transform-title">From bare dirt to <em>backyard paradise</em></h2>
          <p className="scene-copy">Every project follows the same arc: honest design, careful construction, and a finished space built for the way your family actually lives outside.</p>
        </Reveal>
        <div className="transform-frames">
          {frames.map((frame, i) => (
            <Reveal className="transform-frame" delay={i * 0.12} key={frame.label}>
              <img src={frame.src} alt={`${frame.label} stage of an Arizona backyard transformation`} />
              <span className="frame-label">{frame.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseScene({ id, eyebrow, title, copy, image, alt, dark = false }: { id: string; eyebrow: string; title: React.ReactNode; copy: string; image: string; alt: string; dark?: boolean }) {
  return (
    <section className="scene" id={id} aria-label={eyebrow}>
      <ParallaxImage src={image} alt={alt} />
      <div className={`scene-scrim ${dark ? "scrim-dark" : "scrim-standard"}`} />
      <div className="scene-content">
        <Reveal>
          <p className="scene-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="scene-copy">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

const whyUs = [
  { Icon: Sparkles, title: "Custom Design", body: "No templates — every space is designed around how your family lives outside." },
  { Icon: Medal, title: "Premium Craftsmanship", body: "Licensed contractors and boutique-level attention on every build." },
  { Icon: Sprout, title: "Arizona Expertise", body: "Desert-smart planting and materials built for Arizona heat and sun." },
  { Icon: Users, title: "Family-Focused", body: "Spaces designed for gathering, relaxing, and everyday outdoor living." },
  { Icon: Flame, title: "One Team, Start to Finish", body: "From concept through final walkthrough — a single point of contact." },
];

function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-inner">
        <Reveal>
          <p className="section-label">Why Homeowners Choose Us</p>
          <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(1.9rem,4vw,3rem)", color: "#fdfaf4", maxWidth: "18ch" }}>
            We build the place your family never wants to leave.
          </h2>
        </Reveal>
        <div className="why-grid">
          {whyUs.map((item, i) => (
            <Reveal className="why-card liquid-glass" delay={i * 0.08} key={item.title}>
              <span className="icon-pill liquid-glass"><item.Icon size={20} /></span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreasTeaser() {
  return (
    <section className="service-areas" id="service-areas">
      <div className="service-areas-inner">
        <Reveal>
          <h2>Serving custom pool &amp; landscape clients across the East Valley</h2>
        </Reveal>
        <Reveal delay={0.1} className="city-chip-list">
          {cities.map((city) => (
            <a className="city-chip" href={`/${city.slug}`} key={city.slug}>
              {city.cityName}, {city.region}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="scene final-cta" id="contact" style={{ minHeight: "auto", paddingTop: "clamp(70px,10vw,140px)", paddingBottom: 0 }}>
      <Reveal className="contact-panel liquid-glass">
        <h2>Let&rsquo;s Build <em>Your Paradise</em></h2>
        <p>Tell us about the backyard you keep imagining, and we&rsquo;ll shape the first design conversation around it.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input aria-label="Email address" placeholder="Enter your email" type="email" />
          <button type="submit"><span>Request Consultation</span><ArrowRight size={18} /></button>
        </form>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Seo
        title={site.tagline}
        description="Little Piece of Paradise designs and builds custom pools, luxury landscaping, and outdoor living spaces for Arizona homes. Request your free design consultation."
        path="/"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <HeroScrollVideo />
      <SceneTransformation />
      <ShowcaseScene id="pool-design" eyebrow="Scene 03 · Custom Pool Design" title={<>Geometric lines. <em>Resort-level detail.</em></>} copy="Custom pool design with integrated spas, water features, and travertine decking — engineered for Arizona's climate and built to be the centerpiece of your backyard." image={media.pool} alt="Luxury geometric custom swimming pool with travertine decking" />
      <ShowcaseScene id="outdoor-living" eyebrow="Scene 04 · Outdoor Living" title={<>Every evening, <em>an occasion.</em></>} copy="Covered patios, outdoor kitchens, and stone fireplaces designed for the way Arizona families actually spend their evenings outside." image={media.outdoorLiving} alt="Luxury covered patio with outdoor kitchen and fireplace" />
      <ShowcaseScene id="family" eyebrow="Scene 05 · Family Experience" title={<>Built for the moments <em>that matter most.</em></>} copy="From pool days to quiet evenings, every space is designed around how your family actually gathers outdoors." image={media.family} alt="Family enjoying a luxury backyard oasis" />
      <ShowcaseScene id="landscape-design" eyebrow="Scene 06 · Landscape Design" title={<>Desert-smart. <em>Award-worthy.</em></>} copy="Mature palms, layered native planting, and architectural lighting — landscape design built to thrive in the Arizona desert and mature beautifully over time." image={media.landscape} alt="Award-winning Arizona desert landscape design with mature palms and lighting" />
      <ShowcaseScene id="night-mode" eyebrow="Scene 07 · Night Mode" title={<>Paradise, <em>after dark.</em></>} copy="Landscape lighting and fire features designed so your backyard is just as breathtaking at twilight as it is at noon." image={media.night} alt="Luxury Arizona backyard illuminated at twilight with landscape lighting and fire features" dark />
      <WhyUs />
      <ServiceAreasTeaser />
      <FinalCta />
    </main>
  );
}
