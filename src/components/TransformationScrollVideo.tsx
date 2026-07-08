import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { transformation } from "../content/home";

const VIDEO_SRC = "/videos/transform-blueprint-to-oasis.mp4";
const POSTER_BLUEPRINT = "/videos/transform-poster-blueprint.jpg";
const POSTER_FINAL = "/videos/transform-poster-final.jpg";

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
function ReducedMotionTransformation() {
  return (
    <section className="scene" style={{ minHeight: "100vh" }} aria-labelledby="transform-title">
      <img
        className="scene-media"
        src={POSTER_FINAL}
        alt="Aerial view of a finished luxury Arizona backyard pool and patio"
        style={{ position: "absolute", inset: 0, objectFit: "cover" }}
      />
      <div className="scene-scrim scrim-standard" />
      <div className="scene-content">
        <p className="scene-eyebrow">{transformation.eyebrow}</p>
        <h2 id="transform-title">
          {transformation.headlinePrefix}
          <em>{transformation.headlineEmphasis}</em>
        </h2>
        <p className="scene-copy">{transformation.copy}</p>
      </div>
    </section>
  );
}

/** Crossfades between phase labels as the aerial build-out progresses. */
function PhaseLabel({ label, range, progress }: { label: string; range: [number, number]; progress: MotionValue<number> }) {
  // Clamped to [0, 1] — framer-motion hands this range to the browser's
  // native Web Animations API as keyframe offsets, which throws (crashing
  // the whole React tree, no error boundary) if any value falls outside
  // [0, 1], as range[0] - 0.06 / range[1] + 0.06 can for the first/last label.
  const fadeInStart = Math.max(0, range[0] - 0.06);
  const fadeOutEnd = Math.min(1, range[1] + 0.06);
  const opacity = useTransform(progress, [fadeInStart, range[0], range[1], fadeOutEnd], [0, 1, 1, 0]);
  return (
    <motion.span className="frame-label" style={{ opacity, position: "absolute" }}>
      {label}
    </motion.span>
  );
}

function ScrubbedTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [runwayVh, setRunwayVh] = useState(220);

  useEffect(() => {
    const setRunway = () => setRunwayVh(window.innerWidth < 640 ? 160 : 220);
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

  // Copy fades in early — this section opens the story, unlike the hero
  // where copy waits for the reveal to mostly complete.
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const copyY = useTransform(scrollYProgress, [0, 0.18], [24, 0]);

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
        <motion.div className="scene-content" style={{ opacity: copyOpacity, y: copyY }}>
          <p className="scene-eyebrow">{transformation.eyebrow}</p>
          <h2 id="transform-title">
            {transformation.headlinePrefix}
            <em>{transformation.headlineEmphasis}</em>
          </h2>
          <p className="scene-copy">{transformation.copy}</p>
        </motion.div>
        <div style={{ position: "absolute", left: "clamp(20px, 5vw, 72px)", bottom: "clamp(30px, 6vw, 64px)", zIndex: 2 }}>
          <PhaseLabel label="Empty Yard" range={[0.05, 0.28]} progress={scrollYProgress} />
          <PhaseLabel label="Taking Shape" range={[0.35, 0.62]} progress={scrollYProgress} />
          <PhaseLabel label="Paradise" range={[0.72, 0.98]} progress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}

/**
 * Scroll-scrubbed Transformation section: an aerial shot of the backyard
 * as a design-document blueprint that builds out into a finished pool
 * oasis in lockstep with scroll position — the same mechanism as
 * HeroScrollVideo, applied to a different shot (top-down, document-style
 * build-out vs. the hero's ground-level cinematic reveal). Falls back to
 * a static final-frame image with immediate copy for prefers-reduced-motion.
 */
export default function TransformationScrollVideo() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <ReducedMotionTransformation /> : <ScrubbedTransformation />;
}
