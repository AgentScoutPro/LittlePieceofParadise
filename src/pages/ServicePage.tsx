import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";
import { cities, relatedServices, serviceFeaturedCities, services } from "../lib/siteData";
import { serviceContent } from "../content/services";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const content = slug ? serviceContent[slug] : undefined;

  if (!service || !content) return <NotFound />;

  const title = `${service.name} in Arizona`;
  const path = `/services/${service.slug}`;

  return (
    <main>
      <Seo
        title={title}
        description={service.metaDescription}
        path={path}
        image={service.heroImage}
        schema={[
          serviceSchema(service),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        ]}
      />

      <section className="page-hero">
        <img className="scene-media" src={service.heroImage} alt={`${service.name} in Arizona`} style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
        <div className="scene-scrim scrim-standard" />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <Link to="/services">Services</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>{service.shortName}</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <p className="scene-eyebrow">Service</p>
          <h1>{service.name} <em>in Arizona</em></h1>
          <p className="scene-copy">{service.intro}</p>
        </div>
      </section>

      <div className="page-content">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="content-heading">Overview</h2>
          {content.overview.map((para, i) => (
            <p className="body-copy" key={i}>{para}</p>
          ))}
        </section>

        <section aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="content-heading">Why This Matters</h2>
          <ul className="content-list">
            {content.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="process-heading">
          <h2 id="process-heading" className="content-heading">Our Process</h2>
          <ol className="process-list">
            {content.process.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="why-us-heading">
          <h2 id="why-us-heading" className="content-heading">Why Choose Little Piece of Paradise</h2>
          <p className="body-copy">{content.whyChooseUs}</p>
        </section>

        <section aria-labelledby="areas-heading">
          <h2 id="areas-heading" className="content-heading">{service.shortName} Across Arizona</h2>
          <div className="index-grid">
            {serviceFeaturedCities[service.slug].map((slug) => {
              const c = cities.find((city) => city.slug === slug)!;
              return (
                <Link className="index-card liquid-glass" to={`/${c.slug}`} key={c.slug}>
                  <h3>{c.cityName}, {c.region}</h3>
                  <span className="card-link">View service area <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="content-heading">Related Services</h2>
          <div className="index-grid">
            {relatedServices[service.slug].map((slug) => {
              const s = services.find((svc) => svc.slug === slug)!;
              return (
                <Link className="index-card liquid-glass" to={`/services/${s.slug}`} key={s.slug}>
                  <h3>{s.name}</h3>
                  <span className="card-link">Learn more <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="content-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            {content.faqs.map((faq) => (
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
