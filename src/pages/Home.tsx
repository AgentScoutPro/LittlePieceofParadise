import React from "react";
import { ArrowRight, Flame, Medal, Sparkles, Sprout, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroScrollVideo from "../components/HeroScrollVideo";
import TransformationScrollVideo from "../components/TransformationScrollVideo";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { cities, site } from "../lib/siteData";
import { finalCta, serviceAreasTeaser, showcaseScenes, whyUs } from "../content/home";

/**
 * PLACEHOLDER MEDIA for scenes below the hero — swap each src for the
 * rendered Image Board asset once generated. The hero itself now uses the
 * real scroll-scrubbed blueprint-to-paradise video (see HeroScrollVideo).
 */
const media = {
  pool: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=85",
  outdoorLiving: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=85",
  family: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2400&q=85",
  landscape: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=2400&q=85",
  night: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
};

const showcaseImages: Record<string, string> = {
  "pool-design": media.pool,
  "outdoor-living": media.outdoorLiving,
  family: media.family,
  "landscape-design": media.landscape,
  "night-mode": media.night,
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



function ShowcaseScene({ id, eyebrow, headlinePrefix, headlineEmphasis, copy, image, alt, dark = false }: { id: string; eyebrow: string; headlinePrefix: string; headlineEmphasis: string; copy: string; image: string; alt: string; dark?: boolean }) {
  return (
    <section className="scene" id={id} aria-label={eyebrow}>
      <ParallaxImage src={image} alt={alt} />
      <div className={`scene-scrim ${dark ? "scrim-dark" : "scrim-standard"}`} />
      <div className="scene-content">
        <Reveal>
          <p className="scene-eyebrow">{eyebrow}</p>
          <h2>
            {headlinePrefix}
            <em>{headlineEmphasis}</em>
          </h2>
          <p className="scene-copy">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

const whyUsIcons = [Sparkles, Medal, Sprout, Users, Flame];

function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-inner">
        <Reveal>
          <p className="section-label">{whyUs.label}</p>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.9rem,4vw,3rem)", color: "#fdfaf4", maxWidth: "18ch" }}>
            {whyUs.headline}
          </h2>
        </Reveal>
        <div className="why-grid">
          {whyUs.items.map((item, i) => {
            const Icon = whyUsIcons[i % whyUsIcons.length];
            return (
              <Reveal className="why-card liquid-glass" delay={i * 0.08} key={item.title}>
                <span className="icon-pill liquid-glass"><Icon size={20} /></span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Reveal>
            );
          })}
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
          <h2>{serviceAreasTeaser.headline}</h2>
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
        <h2>
          {finalCta.headlinePrefix}
          <em>{finalCta.headlineEmphasis}</em>
        </h2>
        <p>{finalCta.copy}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input aria-label="Email address" placeholder="Enter your email" type="email" />
          <button type="submit"><span>{finalCta.ctaLabel}</span><ArrowRight size={18} /></button>
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
      <TransformationScrollVideo />
      {showcaseScenes.map((scene) => (
        <ShowcaseScene
          key={scene.id}
          id={scene.id}
          eyebrow={scene.eyebrow}
          headlinePrefix={scene.headlinePrefix}
          headlineEmphasis={scene.headlineEmphasis}
          copy={scene.copy}
          image={showcaseImages[scene.id]}
          alt={scene.alt}
          dark={scene.dark}
        />
      ))}
      <WhyUs />
      <ServiceAreasTeaser />
      <FinalCta />
    </main>
  );
}
