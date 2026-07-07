import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sprout } from "lucide-react";
import { hero } from "../content/home";

const VIDEO_SRC = "/videos/hero-blueprint-to-paradise.mp4";
const POSTER_BLUEPRINT = "/videos/hero-poster-blueprint.jpg";
const POSTER_FINAL = "/videos/hero-poster-final.jpg";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/** Static fallback for prefers-reduced-motion: no pinning, no scrubbing. */
function ReducedMotionHero() {
  return (
    <section className="scene" style={{ minHeight: "100vh" }} aria-labelledby="hero-title">
      <img className="scene-media" src={POSTER_FINAL} alt="Luxury Arizona backyard with custom pool and outdoor living space" style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
      <div className="scene-scrim scrim-standard" />
      <div className="scene-content centered">
        <p className="scene-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          {hero.headlinePrefix}
          <em>{hero.headlineEmphasis}</em>
        </h1>
        <p className="scene-copy" style={{ marginInline: "auto" }}>{hero.copy}</p>
        <div className="scene-actions">
          <a className="primary liquid-glass" href="/contact">
            {hero.primaryCta} <ArrowRight size={18} />
          </a>
          <a className="text-link" href="/gallery">{hero.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
}

function ScrubbedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [runwayVh, setRunwayVh] = useState(280);

  useEffect(() => {
    const setRunway = () => setRunwayVh(window.innerWidth < 640 ? 180 : 280);
    setRunway();
    window.addEventListener("resize", setRunway);
    return () => window.removeEventListener("resize", setRunway);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      durationRef.current = video.duration || 0;
    };
    video.addEventListener("loadedmetadata", onLoaded);
    if (video.readyState >= 1) onLoaded();
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const video = videoRef.current;
      const duration = durationRef.current;
      if (!video || !duration) return;
      const clamped = Math.min(Math.max(progress, 0), 1);
      video.currentTime = clamped * duration;
    });
  });

  const copyOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const copyY = useTransform(scrollYProgress, [0.55, 0.85], [24, 0]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: `${runwayVh}vh` }}>
      <div className="hero-sticky-wrap">
        <video
          ref={videoRef}
          className="scene-media"
          src={VIDEO_SRC}
          poster={POSTER_BLUEPRINT}
          muted
          playsInline
          preload="auto"
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div className="scene-scrim scrim-standard" />
        <motion.div className="scene-content centered" style={{ opacity: copyOpacity, y: copyY }}>
          <p className="scene-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">
            {hero.headlinePrefix}
            <em>{hero.headlineEmphasis}</em>
          </h1>
          <p className="scene-copy" style={{ marginInline: "auto" }}>{hero.copy}</p>
          <div className="scene-actions">
            <a className="primary liquid-glass" href="/contact">
              {hero.primaryCta} <ArrowRight size={18} />
            </a>
            <a className="text-link" href="/gallery">{hero.secondaryCta}</a>
          </div>
        </motion.div>
        <motion.div className="location-pill liquid-glass" style={{ opacity: copyOpacity }}>
          <Sprout size={26} />
          <span>{hero.locationEyebrow}</span>
          <strong>{hero.locationCopy}</strong>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Scroll-scrubbed hero: the video plays forward/backward in lockstep with
 * scroll position rather than on a timer, so the blueprint resolves into
 * the finished pool exactly as fast as the user scrolls. Falls back to a
 * static final-frame image with immediate copy for prefers-reduced-motion.
 */
export default function HeroScrollVideo() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <ReducedMotionHero /> : <ScrubbedHero />;
}
