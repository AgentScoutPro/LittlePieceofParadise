import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { showcaseScenes } from "../content/home";
import { usePrefersReducedMotion, useResponsiveRunway, useScrollScrubbedVideo } from "./useScrollScrubbedVideo";

const VIDEO_SRC = "/videos/paradise-after-dark-scroll.mp4";
const POSTER_START = "/images/paradise-after-dark-poster-start.jpg";
const POSTER_FALLBACK = "/images/paradise-after-dark-poster-fallback.jpg";

const copy = showcaseScenes.find((s) => s.id === "night-mode")!;

/** Static fallback for prefers-reduced-motion: no pinning, no scrubbing. */
function ReducedMotionParadiseAfterDark() {
  return (
    <section className="scene" id={copy.id} style={{ minHeight: "100vh" }} aria-label={copy.eyebrow}>
      <img
        className="scene-media"
        src={POSTER_FALLBACK}
        alt={copy.alt}
        style={{ position: "absolute", inset: 0, objectFit: "cover" }}
      />
      <div className="scene-scrim scrim-dark" />
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

function ScrubbedParadiseAfterDark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const runwayVh = useResponsiveRunway(230, 165);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const videoRef = useScrollScrubbedVideo(scrollYProgress);

  // Copy waits until the twilight-to-night transformation is underway,
  // then holds through the resolved lit-backyard state.
  const copyOpacity = useTransform(scrollYProgress, [0.2, 0.42, 1], [0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0.2, 0.42, 1], [24, 0, 0]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: `${runwayVh}vh` }}>
      <div className="hero-sticky-wrap" id={copy.id}>
        <video
          ref={videoRef}
          className="scene-media"
          src={VIDEO_SRC}
          poster={POSTER_START}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div className="scene-scrim scrim-dark" />
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
 * Scroll-scrubbed After Dark section: transitions the finished backyard
 * from twilight into the fully lit evening state in lockstep with scroll.
 */
export default function ParadiseAfterDarkScrollVideo() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <ReducedMotionParadiseAfterDark /> : <ScrubbedParadiseAfterDark />;
}
