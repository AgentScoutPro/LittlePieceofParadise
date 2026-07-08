import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { showcaseScenes } from "../content/home";
import { usePrefersReducedMotion, useResponsiveRunway, useScrollScrubbedVideo } from "./useScrollScrubbedVideo";

const VIDEO_SRC = "/videos/pool-underwater-to-aerial.mp4";
const POSTER_UNDERWATER = "/videos/pool-poster-underwater.jpg";
const POSTER_FINAL = "/videos/pool-poster-final.jpg";

const copy = showcaseScenes.find((s) => s.id === "pool-design")!;

/** Static fallback for prefers-reduced-motion: no pinning, no scrubbing. */
function ReducedMotionPoolDesign() {
  return (
    <section className="scene" id={copy.id} style={{ minHeight: "100vh" }} aria-label={copy.eyebrow}>
      <img
        className="scene-media"
        src={POSTER_FINAL}
        alt="Aerial view of a luxury Arizona infinity pool at the water's edge"
        style={{ position: "absolute", inset: 0, objectFit: "cover" }}
      />
      <div className="scene-scrim scrim-standard" />
      <div className="scene-content">
        <p className="scene-eyebrow">{copy.eyebrow}</p>
        <h2>
          {copy.headlinePrefix}
          <em>{copy.headlineEmphasis}</em>
        </h2>
        <p className="scene-copy">{copy.copy}</p>
      </div>
    </section>
  );
}

function ScrubbedPoolDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const runwayVh = useResponsiveRunway(240, 170);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const videoRef = useScrollScrubbedVideo(scrollYProgress);

  // Copy holds through the underwater beat and settles in as the aerial
  // reveal takes over — waits for the "surface break" (~45%) before
  // appearing, so it doesn't compete with the underwater visual. A third
  // keyframe pins the value through progress 1: framer-motion routes
  // 2-point scroll-linked opacity/transform through a native WAAPI
  // "accelerated" animation path that doesn't hold the last keyframe once
  // scroll moves past it — it decays back toward the first value instead
  // of staying clamped, so without this the copy fades back out while the
  // resolved aerial video is still fully pinned on screen.
  const copyOpacity = useTransform(scrollYProgress, [0.42, 0.68, 1], [0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0.42, 0.68, 1], [24, 0, 0]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: `${runwayVh}vh` }}>
      <div className="hero-sticky-wrap" id={copy.id}>
        <video
          ref={videoRef}
          className="scene-media"
          src={VIDEO_SRC}
          poster={POSTER_UNDERWATER}
          muted
          playsInline
          preload="auto"
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div className="scene-scrim scrim-standard" />
        <motion.div className="scene-content" style={{ opacity: copyOpacity, y: copyY }}>
          <p className="scene-eyebrow">{copy.eyebrow}</p>
          <h2>
            {copy.headlinePrefix}
            <em>{copy.headlineEmphasis}</em>
          </h2>
          <p className="scene-copy">{copy.copy}</p>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Scroll-scrubbed Pool Design section: begins underwater looking up
 * through the pool's surface, rises to break through, then continues the
 * same upward motion into a reversing aerial drone pull-back from the
 * infinity edge — one continuous scroll-driven camera move, same
 * mechanism as HeroScrollVideo and TransformationScrollVideo.
 */
export default function PoolDesignScrollVideo() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <ReducedMotionPoolDesign /> : <ScrubbedPoolDesign />;
}
