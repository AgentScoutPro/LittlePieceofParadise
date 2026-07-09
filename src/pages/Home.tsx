import React from "react";
import { ArrowRight, Flame, Hammer, Home as HomeIcon, Medal, Palette, ShieldCheck, Sparkles, Sprout, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroScrollVideo from "../components/HeroScrollVideo";
import TransformationScrollVideo from "../components/TransformationScrollVideo";
import PoolDesignScrollVideo from "../components/PoolDesignScrollVideo";
import ParadiseAfterDarkScrollVideo from "../components/ParadiseAfterDarkScrollVideo";
import { Seo } from "../components/Seo";
import { ReviewsSection } from "../components/ReviewsSection";
import { breadcrumbSchema, reviewSchema } from "../lib/schema";
import { cities, services, site } from "../lib/siteData";
import { finalCta, serviceAreasTeaser, showcaseScenes, whyUs } from "../content/home";
import { reviews } from "../content/reviews";

const media = {
  outdoorLiving: "/images/home/outdoor-living-patio.jpg",
  family: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2400&q=85",
  landscape: "/images/home/landscape-design-desert.jpg",
};

const showcaseImages: Record<string, string> = {
  "outdoor-living": media.outdoorLiving,
  family: media.family,
  "landscape-design": media.landscape,
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
const trustBadges = [
  { label: "Licensed, Bonded & Insured Network", icon: ShieldCheck },
  { label: "100% Custom Design — No AI Templates", icon: Palette },
  { label: "One Team, Concept to Completion", icon: Hammer },
  { label: "Family-Owned & Arizona-Based", icon: HomeIcon },
];

const challenges = [
  {
    title: "Stuck With a Builder-Grade Backyard?",
    body: "Most new Arizona homes hand you a flat lot of dirt and call it a yard. We turn that blank builder lot into a fully designed outdoor living space — planned in phases if that fits your budget better.",
    cta: "See Landscape Design",
    href: "/services/landscape-design",
  },
  {
    title: "No Privacy From the Neighbors?",
    body: "Strategic planting, hardscape, and shade structures placed to actually block sightlines into your yard — not just decorate around the edges.",
    cta: "See Pergolas & Gazebos",
    href: "/services/pergolas-gazebos",
  },
  {
    title: "HOA Wants a Full Design Package?",
    body: "We create the complete 2D or 3D design package most HOA design review boards ask for, not just a rough sketch — most designs are ready for review within 7 to 10 business days.",
    cta: "See Custom Pool Design",
    href: "/services/custom-pool-design",
  },
  {
    title: "Pool Feels Dated or Underused?",
    body: "A tired deck or an outdated shape doesn't always mean starting over. Sometimes it means redesigning the space around how your family actually uses it now.",
    cta: "See Pool Construction",
    href: "/services/custom-pool-construction",
  },
  {
    title: "Planning a Backyard in Stages?",
    body: "Not ready to do it all at once? We help map out a sequence so today's install sets up tomorrow's addition instead of working against it.",
    cta: "Start With a Consultation",
    href: "/contact",
  },
  {
    title: "Tired of Cookie-Cutter Design Ideas?",
    body: "Every design is built around your style, your family, and your yard — not pulled from a template that's already all over the internet and social media.",
    cta: "See Our Process",
    href: "/about",
  },
];

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

function TrustBadgeStrip() {
  return (
    <section className="trust-strip" aria-label="Trust signals">
      <div className="trust-strip-inner">
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div className="trust-strip-item" key={badge.label}>
              <Icon size={17} aria-hidden="true" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="services-home-section" id="services">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Our Services</p>
          <h2 className="section-heading">
            Everything Your Backyard Needs, <em>One Team</em>
          </h2>
        </Reveal>
        <div className="services-home-grid">
          {services.map((service) => (
            <a className="service-home-card liquid-glass" href={`/services/${service.slug}`} key={service.slug}>
              <h3>{service.shortName}</h3>
              <p>{service.intro}</p>
              <span>View Service <ArrowRight size={14} /></span>
            </a>
          ))}
        </div>
        <a className="section-small-link" href="/services">
          See All Services <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function CommonChallenges() {
  return (
    <section className="challenges-section" id="common-backyard-challenges">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Common Backyard Challenges</p>
          <h2 className="section-heading">
            Not Sure Where to Start? <em>Start Here.</em>
          </h2>
        </Reveal>
        <div className="challenge-grid">
          {challenges.map((challenge) => (
            <a className="challenge-card liquid-glass" href={challenge.href} key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.body}</p>
              <span>{challenge.cta} <ArrowRight size={14} /></span>
            </a>
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
          <h2>{serviceAreasTeaser.headline}</h2>
        </Reveal>
        <Reveal delay={0.1} className="service-areas-grid">
          {cities.map((city) => (
            <a className="service-area-card liquid-glass" href={`/${city.slug}`} key={city.slug}>
              <h3>{city.cityName}, {city.region}</h3>
              <p>{city.tagline}</p>
            </a>
          ))}
          <div className="service-area-card service-area-card-static liquid-glass">
            <h3>Don&apos;t see your city?</h3>
            <p>We serve the greater Phoenix Metro and Pinal County area — call to confirm your location.</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
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
        schema={[breadcrumbSchema([{ name: "Home", path: "/" }]), ...reviewSchema(reviews)]}
      />
      <HeroScrollVideo />
      <TransformationScrollVideo />
      <PoolDesignScrollVideo />
      <WhyUs />
      <TrustBadgeStrip />
      {showcaseScenes.filter((scene) => !["pool-design", "family", "night-mode"].includes(scene.id)).map((scene) => (
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
      <ParadiseAfterDarkScrollVideo />
      <ServicesGrid />
      <CommonChallenges />
      <ServiceAreasTeaser />
      <ReviewsSection />
      <FinalCta />
    </main>
  );
}
