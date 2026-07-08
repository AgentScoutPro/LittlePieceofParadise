import React from "react";
import { ArrowRight, Flame, Medal, Sparkles, Sprout, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroScrollVideo from "../components/HeroScrollVideo";
import TransformationScrollVideo from "../components/TransformationScrollVideo";
import PoolDesignScrollVideo from "../components/PoolDesignScrollVideo";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { cities, site } from "../lib/siteData";
import { finalCta, serviceAreasTeaser, showcaseScenes, whyUs } from "../content/home";

const media = {
  outdoorLiving: "/images/home/outdoor-living-patio.jpg",
  family: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2400&q=85",
  landscape: "/images/home/landscape-design-desert.jpg",
  night: "/images/home/after-dark-pool.jpg",
};

const showcaseImages: Record<string, string> = {
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
  const forceEmphasisLine = id === "outdoor-living" || id === "landscape-design";

  return (
    <section className="scene" id={id} aria-label={eyebrow}>
      <ParallaxImage src={image} alt={alt} />
      <div className={`scene-scrim ${dark ? "scrim-dark" : "scrim-standard"}`} />
      <div className="scene-content">
        <Reveal>
          <p className="scene-eyebrow">{eyebrow}</p>
          <h2>
            {headlinePrefix}
            {forceEmphasisLine ? " " : ""}
            <em className={forceEmphasisLine ? "headline-line" : undefined}>{headlineEmphasis}</em>
          </h2>
          <p className="scene-copy">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

const whyUsIcons = [Sparkles, Medal, Sprout, Users, Flame];

function InteractiveWhyCard({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    const magnetX = (x - centerX) * 0.035;
    const magnetY = (y - centerY) * 0.035;

    setStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
      transform: `perspective(900px) translate3d(${magnetX}px, ${magnetY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    } as React.CSSProperties);
  }

  function handlePointerLeave() {
    setStyle({
      transform: "perspective(900px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
    });
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setRipples((current) => [...current, ripple]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id));
    }, 850);
  }

  return (
    <div
      className="why-card magic-why-card liquid-glass"
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <span className="why-card-spotlight" aria-hidden="true" />
      <span className="why-card-border-glow" aria-hidden="true" />
      <span className="why-card-stars" aria-hidden="true" />
      {children}
      {ripples.map((ripple) => (
        <span
          className="why-card-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          key={ripple.id}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

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
              <Reveal delay={i * 0.08} key={item.title}>
                <InteractiveWhyCard>
                  <span className="icon-pill liquid-glass"><Icon size={20} /></span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </InteractiveWhyCard>
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
      <PoolDesignScrollVideo />
      <WhyUs />
      <ServiceAreasTeaser />
      {showcaseScenes.filter((scene) => !["pool-design", "family"].includes(scene.id)).map((scene) => (
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
      <FinalCta />
    </main>
  );
}
