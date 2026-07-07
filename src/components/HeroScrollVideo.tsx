import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sprout } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const VIDEO_SRC = "/videos/hero-blueprint-to-paradise.mp4";
const POSTER_BLUEPRINT = "/videos/hero-poster-blueprint.jpg";
const POSTER_FINAL = "/videos/hero-poster-final.jpg";

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function HeroCopy({ idPrefix = "hero-title" }: { idPrefix?: string }) {
  return (
    <>
      <p className="scene-eyebrow">Custom Pools &amp; Luxury Outdoor Living · Arizona</p>
      <h1 id={idPrefix}>
        Create Your Own <em>Little Piece of Paradise</em>
      </h1>
      <p className="scene-copy" style={{ marginInline: "auto" }}>
        Custom pools, luxury landscaping, outdoor living spaces, and backyard transformations designed for Arizona living.
      </p>
      <div className="scene-actions">
        <a className="primary liquid-glass" href="/contact">
          Request Free Design Consultation <ArrowRight size={18} />
        </a>
        <a className="text-link" href="/gallery">View Our Work</a>
      </div>
    </>
  );
}

/**
 * Reduced-motion fallback: static final-state poster, copy visible
 * immediately, normal (non-inflated) single-viewport section — no scroll
 * runway, no pinning, no video decode/seek cost at all.
 */
function StaticHero() {
  return (
    <section className="scene" id="top" aria-labelledby="hero-title">
      <img className="scene-media" src={POSTER_FINAL} alt="Finished luxury Arizona backyard with custom pool and patio" />
      <div className="scene-scrim scrim-standard" />
      <div className="scene-content centered">
        <HeroCopy />
      </div>
      <div className="location-pill liquid-glass">
        <Sprout size={26} />
        <span>Proudly serving</span>
        <strong>Scottsdale, Gilbert, Chandler &amp; Greater Phoenix</strong>
      </div>
    </section>
  );
}

/**
 * Scroll-scrubbed hero: a 250-300vh (180vh on small viewports) runway with
 * a pinned 100vh (100dvh on small viewports) inner wrapper. The video's
 * currentTime is driven entirely by scroll position across that runway —
 * it never plays on its own. Copy fades in only once the video has mostly
 * resolved from blueprint to finished pool (progress 0.55 -> 0.85).
 */
function ScrubbedHero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const latestProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const copyOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const copyPointerEvents = useTransform(copyOpacity, (v) => (v > 0.05 ? "auto" : "none"));

  const applyProgress = () => {
    rafId.current = null;
    const video = videoRef.current;
    if (!video || !durationRef.current) return;
    video.currentTime = latestProgress.current * durationRef.current;
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latestProgress.current = latest;
    if (rafId.current == null) {
      rafId.current = requestAnimationFrame(applyProgress);
    }
  });

  useEffect(() => {
    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="hero-scroll-video" ref={containerRef}>
      <div className="hero-scroll-video-inner">
        <video
          ref={videoRef}
          className="scene-media"
          src={VIDEO_SRC}
          poster={POSTER_BLUEPRINT}
          muted
          playsInline
          preload="auto"
          controls={false}
          onLoadedMetadata={(e) => {
            durationRef.current = e.currentTarget.duration;
            e.currentTarget.currentTime = latestProgress.current * durationRef.current;
          }}
        />
        <motion.div className="scene-scrim scrim-standard" style={{ opacity: copyOpacity }} />
        <motion.div
          className="scene-content centered"
          style={{ opacity: copyOpacity, pointerEvents: copyPointerEvents }}
        >
          <HeroCopy />
        </motion.div>
        <motion.div
          className="location-pill liquid-glass"
          style={{ opacity: copyOpacity, pointerEvents: copyPointerEvents }}
        >
          <Sprout size={26} />
          <span>Proudly serving</span>
          <strong>Scottsdale, Gilbert, Chandler &amp; Greater Phoenix</strong>
        </motion.div>
      </div>
    </section>
  );
}

export function HeroScrollVideo() {
  const reducedMotion = useReducedMotion();
  return reducedMotion ? <StaticHero /> : <ScrubbedHero />;
}
