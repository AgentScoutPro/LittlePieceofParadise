import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { services } from "../lib/siteData";

export default function ServicesIndex() {
  return (
    <main>
      <Seo
        title="Custom Pool &amp; Landscape Design Services"
        description="Explore custom pool design, pool construction, landscape design, outdoor living, and more from Little Piece of Paradise in Arizona."
        path="/services"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="scene-scrim scrim-standard" style={{ background: "var(--near-black)" }} />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>Services</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <h1>Our <em>Services</em></h1>
        </div>
      </section>
      <div className="page-content" style={{ width: "min(1100px, 100%)" }}>
        <div className="index-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
          {services.map((service) => (
            <Link className="index-card liquid-glass" to={`/services/${service.slug}`} key={service.slug}>
              <h3>{service.name}</h3>
              <p>{service.intro}</p>
              <span className="card-link">Learn more <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
