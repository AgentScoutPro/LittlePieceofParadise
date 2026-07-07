import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { site } from "../lib/siteData";

export default function Contact() {
  return (
    <main>
      <Seo
        title="Contact a Phoenix Metro Pool &amp; Landscape Designer"
        description="Request a free design consultation with Little Piece of Paradise. Call, email, or send your project details."
        path="/contact"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="scene-scrim scrim-standard" style={{ background: "var(--near-black)" }} />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>Contact</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <h1>Let&rsquo;s Talk <em>Paradise</em></h1>
        </div>
      </section>
      <div className="page-content">
        <p style={{ marginBottom: 24, lineHeight: 1.8, color: "rgba(239,232,221,0.8)" }}>
          Call, email, or send a few details about your project and we&rsquo;ll follow up to schedule a free design consultation.
        </p>
        <div className="scene-actions">
          <a className="primary liquid-glass" href={site.phoneHref}>
            {site.phoneDisplay} <ArrowRight size={18} />
          </a>
          <a className="secondary liquid-glass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </main>
  );
}
