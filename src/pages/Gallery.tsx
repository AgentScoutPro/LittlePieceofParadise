import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";

export default function Gallery() {
  return (
    <main>
      <Seo
        title="Project Gallery"
        description="Browse custom pool, landscape, and outdoor living projects by Little Piece of Paradise across Arizona."
        path="/gallery"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])}
      />
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="scene-scrim scrim-standard" style={{ background: "var(--near-black)" }} />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>Gallery</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <h1>Project <em>Gallery</em></h1>
        </div>
      </section>
      <div className="page-content">
        <div className="todo-banner">
          <strong>Content phase next:</strong> the 80+ portfolio photos
          currently buried in an About-page accordion move here as a
          properly indexed, crawlable gallery — grouped by city/project type
          with descriptive alt text and captions (per the SEO audit fix).
        </div>
      </div>
    </main>
  );
}
