import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "../content/home";
import { usePrefersReducedMotion, useResponsiveRunway, useScrollScrubbedVideo } from "./useScrollScrubbedVideo";

const VIDEO_SRC = "/videos/hero-blueprint-to-paradise.mp4";
const POSTER_BLUEPRINT = "/videos/hero-poster-blueprint.jpg";
const POSTER_FINAL = "/videos/hero-poster-final.jpg";

/** Static fallback for prefers-reduced-motion: no pinning, no scrubbing. */
function ReducedMotionHero() {
  return (
    <section className="scene" style={{ minHeight: "100vh" }} aria-labelledby="hero-title">
      <img className="scene-media" src={POSTER_FINAL} alt="Luxury Arizona backyard with custom pool and outdoor living space" style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
      <div className="scene-scrim scrim-standard" />
      <div className="scene-content centered">
        <p className="scene-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          <span>{hero.headlinePrefix}</span>
          <em className="headline-line">{hero.headlineEmphasis}</em>
        </h1>
        <p className="scene-copy" style={{ marginInline: "auto" }}>{hero.copy}</p>
        <div className="scene-actions hero-actions">
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
  const runwayVh = useResponsiveRunway(280, 180);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const videoRef = useScrollScrubbedVideo(scrollYProgress);

  // Third keyframe pins the value through progress 1 — framer-motion routes
  // 2-point scroll-linked opacity/transform through a native WAAPI
  // "accelerated" animation path that doesn't hold the last keyframe once
  // scroll moves past it, decaying back toward the first value instead of
  // staying clamped, which fades the copy back out while still pinned.
  const copyOpacity = useTransform(scrollYProgress, [0.55, 0.85, 1], [0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0.55, 0.85, 1], [24, 0, 0]);

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
            <span>{hero.headlinePrefix}</span>
            <em className="headline-line">{hero.headlineEmphasis}</em>
          </h1>
          <p className="scene-copy" style={{ marginInline: "auto" }}>{hero.copy}</p>
          <div className="scene-actions hero-actions">
            <a className="primary liquid-glass" href="/contact">
              {hero.primaryCta} <ArrowRight size={18} />
            </a>
            <a className="text-link" href="/gallery">{hero.secondaryCta}</a>
          </div>
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
