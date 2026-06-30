import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, ArrowUpRight, Camera, Droplets, Globe2, Leaf, Mountain, Sprout } from "lucide-react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const media = {
  heroPoster:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
  heroVideo:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4",
  featuredVideo:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  courtyard:
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85",
  gardenWalk:
    "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1600&q=85",
  serviceOne:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
  serviceTwo:
    "https://images.unsplash.com/photo-1593282153762-a4c4eac7d9bc?auto=format&fit=crop&w=1400&q=85",
};

function useFadeVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const opacityRef = React.useRef(0);
  const fadeRef = React.useRef<number | null>(null);

  const fadeTo = React.useCallback((target: number, duration = 500) => {
    const video = videoRef.current;
    if (!video) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const start = opacityRef.current;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const next = start + (target - start) * progress;
      opacityRef.current = next;
      video.style.opacity = String(next);
      if (progress < 1) fadeRef.current = requestAnimationFrame(tick);
    };
    fadeRef.current = requestAnimationFrame(tick);
  }, []);

  React.useEffect(() => () => {
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
  }, []);

  return { videoRef, fadeTo };
}

function Hero() {
  const { videoRef, fadeTo } = useFadeVideo();

  const playAndFade = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => undefined);
    fadeTo(1);
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-poster" src={media.heroPoster} alt="" />
      <video
        ref={videoRef}
        className="hero-video"
        src={media.heroVideo}
        muted
        autoPlay
        playsInline
        preload="auto"
        poster={media.heroPoster}
        onCanPlay={playAndFade}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (video.duration - video.currentTime <= 0.55) fadeTo(0);
        }}
        onEnded={(event) => {
          const video = event.currentTarget;
          video.style.opacity = "0";
          setTimeout(() => {
            video.currentTime = 0;
            video.play().catch(() => undefined);
            fadeTo(1);
          }, 100);
        }}
      />
      <div className="hero-scrim" />

      <nav className="nav liquid-glass" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Little Piece of Paradise home">
          <span>Little Piece of</span>
          <strong>Paradise</strong>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>
        <a className="nav-cta liquid-glass" href="#contact">
          Book a consultation <ArrowUpRight size={17} />
        </a>
      </nav>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <h1 id="hero-title">
          Shape your own <em>paradise</em>
        </h1>
        <p>
          Custom landscape design for Arizona homes, crafted around native beauty,
          livable shade, waterwise planting, and outdoor rooms made for gathering.
        </p>
        <div className="hero-actions">
          <a className="primary liquid-glass" href="#contact">
            Book a consultation <ArrowRight size={18} />
          </a>
          <a className="text-link" href="#portfolio">View our work</a>
        </div>
      </motion.div>

      <motion.div
        className="location-card liquid-glass"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <Sprout size={28} />
        <span>Proudly designing in</span>
        <strong>Scottsdale, Paradise Valley & Greater Arizona</strong>
      </motion.div>
    </section>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 46 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <Reveal className="about-copy">
        <p className="section-label">About</p>
        <h2>
          We design and build bespoke outdoor spaces that feel like home,
          <em> rooted in place, made for living.</em>
        </h2>
      </Reveal>
    </section>
  );
}

function FeaturedProject() {
  return (
    <section id="portfolio" className="section featured">
      <Reveal className="video-frame">
        <video src={media.featuredVideo} muted autoPlay loop playsInline preload="auto" />
        <div className="video-overlay" />
        <div className="video-copy liquid-glass">
          <p className="section-label">Featured Project</p>
          <h3>Desert sanctuary</h3>
          <p>
            A serene retreat shaped by layered native planting, evening light, poolside
            gathering zones, and materials that belong to the Sonoran Desert.
          </p>
        </div>
        <a className="video-button liquid-glass" href="#contact">
          Explore more <ArrowRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <Reveal>
        <h2 className="section-title">Nature <em>x</em> Intention</h2>
      </Reveal>
      <div className="philosophy-grid">
        <Reveal className="image-panel" delay={0.1}>
          <img src={media.gardenWalk} alt="Curving stone path through desert planting" />
        </Reveal>
        <Reveal className="philosophy-text" delay={0.18}>
          <div>
            <p className="section-label">Choose your space</p>
            <p>
              Every memorable landscape begins with how you want to live outside:
              morning coffee in filtered shade, dinners under stars, quiet corners,
              and pathways that make the whole property feel considered.
            </p>
          </div>
          <div className="divider" />
          <div>
            <p className="section-label">Shape the future</p>
            <p>
              Our process blends creative design, sustainable planting, construction
              knowledge, and Arizona climate intelligence so each garden can mature
              beautifully over time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    tag: "Design",
    title: "Custom Landscape Design",
    description: "Tailored concepts, planting palettes, hardscape plans, and outdoor living layouts for Arizona homes.",
    image: media.serviceOne,
    Icon: Sprout,
  },
  {
    tag: "Build",
    title: "Outdoor Living Spaces",
    description: "From kitchens and fire features to patios and pools, we shape spaces for daily rituals and special nights.",
    image: media.serviceTwo,
    Icon: Mountain,
  },
  {
    tag: "Waterwise",
    title: "Desert-Smart Planting",
    description: "Layered native and adapted planting plans that conserve water, soften architecture, and thrive in heat.",
    image: media.courtyard,
    Icon: Droplets,
  },
  {
    tag: "Care",
    title: "Project Stewardship",
    description: "Thoughtful guidance from first vision through installation details, finish selections, and final walkthrough.",
    image: media.gardenWalk,
    Icon: Leaf,
  },
];

function Services() {
  return (
    <section id="services" className="section services">
      <Reveal className="services-header">
        <h2>What we do</h2>
        <span>Our services</span>
      </Reveal>
      <div className="service-grid">
        {services.map((service, index) => (
          <Reveal className="service-card liquid-glass" delay={index * 0.08} key={service.title}>
            <div className="service-media">
              <img src={service.image} alt="" />
            </div>
            <div className="service-body">
              <div className="service-topline">
                <span>{service.tag}</span>
                <span className="icon-pill liquid-glass"><service.Icon size={22} /></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight className="card-arrow" size={18} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal className="contact-panel liquid-glass">
        <h2>Begin with the landscape you keep imagining.</h2>
        <p>Tell us about the outdoor life you want, and we will shape the first design conversation around it.</p>
        <form>
          <input aria-label="Email address" placeholder="Enter your email" type="email" />
          <button type="submit">
            <span>Start the conversation</span>
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="socials">
          <a className="liquid-glass" href="/" aria-label="Instagram"><Camera size={20} /></a>
          <a className="liquid-glass" href="/" aria-label="Website"><Globe2 size={20} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function App() {
  return (
    <main id="top">
      <Hero />
      <About />
      <FeaturedProject />
      <Philosophy />
      <Services />
      <Contact />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
