import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { cities } from "../lib/siteData";

export default function ServiceAreasIndex() {
  return (
    <main>
      <Seo
        title="Service Areas"
        description="Little Piece of Paradise designs custom pools and luxury landscaping throughout Florence, Queen Creek, Gilbert, Chandler, Scottsdale, and the greater Phoenix East Valley."
        path="/service-areas"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas" }])}
      />
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="scene-scrim scrim-standard" style={{ background: "var(--near-black)" }} />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>Service Areas</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <h1>Service <em>Areas</em></h1>
        </div>
      </section>
      <div className="page-content" style={{ width: "min(1100px, 100%)" }}>
        <div className="index-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
          {cities.map((city) => (
            <Link className="index-card liquid-glass" to={`/${city.slug}`} key={city.slug}>
              <h3>{city.cityName}, {city.region}</h3>
              <span className="card-link">View area <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
