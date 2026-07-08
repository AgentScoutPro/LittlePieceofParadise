import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { transformation } from "../content/home";
import { usePrefersReducedMotion, useResponsiveRunway, useScrollScrubbedVideo } from "./useScrollScrubbedVideo";

const VIDEO_SRC = "/videos/transform-blueprint-to-oasis.mp4";
const POSTER_BLUEPRINT = "/videos/transform-poster-blueprint.jpg";
const POSTER_FINAL = "/videos/transform-poster-final.jpg";

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
  const runwayVh = useResponsiveRunway(220, 160);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const videoRef = useScrollScrubbedVideo(scrollYProgress);

  // Copy fades in early — this section opens the story, unlike the hero
  // where copy waits for the reveal to mostly complete. Third keyframe
  // pins the value through progress 1 — framer-motion routes 2-point
  // scroll-linked opacity/transform through a native WAAPI "accelerated"
  // animation path that doesn't hold the last keyframe once scroll moves
  // past it, decaying back toward the first value instead of staying
  // clamped, which fades the copy back out while still pinned.
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0, 0.18, 1], [24, 0, 0]);

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
