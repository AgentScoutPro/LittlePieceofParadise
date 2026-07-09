import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Soft, slow-moving light bands reminiscent of sunlight through water —
// two layered sine fields, sharpened so highlights read as caustic-like
// glimmers rather than a smooth gradient. Alpha is capped low so this
// stays an ambient accent, never competes with foreground content.
const FRAGMENT_SHADER = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uClearColor;

  void main() {
    vec2 uv = vUv;
    uv.x *= uResolution.x / uResolution.y;
    float t = uTime * 0.045;

    float pattern = 0.0;
    pattern += sin((uv.x * 2.6 + t) + sin(uv.y * 3.4 - t * 0.7));
    pattern += sin((uv.y * 3.0 - t * 0.55) + cos(uv.x * 2.1 + t * 0.35));
    pattern = pattern * 0.5 + 0.5;
    pattern = pow(pattern, 4.0);

    vec3 color = mix(uColorB, uColorA, pattern);
    float alpha = pattern * 0.14;

    gl_FragColor = vec4(mix(uClearColor, color, alpha), 1.0);
  }
`;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * A single full-screen WebGL shader pass — no GPU compute, no instancing,
 * no post-processing chain. Renders behind all page content (fixed,
 * z-index 0) as a subtle animated accent. Skips itself entirely for
 * prefers-reduced-motion or if WebGL is unavailable, in which case the
 * plain CSS near-black background (already the page default) is the
 * fallback — no broken/blank state either way.
 */
export default function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
    } catch {
      return; // WebGL unavailable — fall back to plain CSS background
    }

    const dpr = Math.min(window.innerWidth < 768 ? 1 : 1.5, window.devicePixelRatio || 1);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const nearBlack = new THREE.Color("#14120f");
    const paradiseBlue = new THREE.Color("#3a8fb7");
    const deepWater = new THREE.Color("#1f4d68");

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uColorA: { value: paradiseBlue },
        uColorB: { value: deepWater },
        uClearColor: { value: nearBlack },
      },
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let rafId: number;
    let running = true;
    const startTime = performance.now();

    function animate() {
      if (!running) return;
      material.uniforms.uTime.value = (performance.now() - startTime) / 1000;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (running) rafId = requestAnimationFrame(animate);
      else cancelAnimationFrame(rafId);
    }
    document.addEventListener("visibilitychange", handleVisibility);

    let resizeTimeout: number;
    function handleResize() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        material.uniforms.uResolution.value.set(w, h);
      }, 120);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(resizeTimeout);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="ambient-bg" aria-hidden="true" />;
}
