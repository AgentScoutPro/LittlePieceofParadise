import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema, faqSchema, personSchema } from "../lib/schema";
import { site } from "../lib/siteData";
import { approach, faqs, mission, ownerStory, processSteps, team, testimonials } from "../content/about";

export default function About() {
  return (
    <main>
      <Seo
        title="About Our Arizona Design Team"
        description="Meet Denise Caldwell and the licensed team behind Little Piece of Paradise — custom pool and landscape designers serving Arizona homeowners."
        path="/about"
        schema={[
          personSchema(),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        ]}
      />

      <section className="page-hero" style={{ minHeight: "44vh" }}>
        <div className="scene-scrim scrim-standard" style={{ background: "var(--near-black)" }} />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>About</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <p className="scene-eyebrow">Big Ideas, Personal Impact</p>
          <h1>About <em>Little Piece of Paradise</em></h1>
          <p className="scene-copy">{mission}</p>
        </div>
      </section>

      <div className="page-content">
        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="content-heading">Our Approach</h2>
          {approach.map((para, i) => (
            <p className="body-copy" key={i}>{para}</p>
          ))}
        </section>

        <section aria-labelledby="owner-heading">
          <h2 id="owner-heading" className="content-heading">Meet {site.owner.name}, {site.owner.role}</h2>
          {ownerStory.map((para, i) => (
            <p className="body-copy" key={i}>{para}</p>
          ))}
        </section>

        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="content-heading">Our Team</h2>
          <p className="body-copy">{team}</p>
        </section>

        <section aria-labelledby="process-heading">
          <h2 id="process-heading" className="content-heading">How It Works</h2>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="content-heading">What Clients Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure className="testimonial-card liquid-glass" key={t.name}>
                <Quote size={18} className="testimonial-icon" />
                <blockquote>{t.summary}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="content-heading">Common Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="scene-actions" style={{ marginTop: 32 }}>
          <a className="primary liquid-glass" href="/contact">
            Request Free Design Consultation <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
