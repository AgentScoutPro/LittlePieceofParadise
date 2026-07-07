import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema, cityServiceSchema, faqSchema } from "../lib/schema";
import { cities, services } from "../lib/siteData";
import { cityContent } from "../content/cities";
import NotFound from "./NotFound";

export default function CityPage() {
  const { citySlug } = useParams();
  const city = cities.find((c) => c.slug === citySlug);
  const content = citySlug ? cityContent[citySlug] : undefined;

  if (!city || !content) return <NotFound />;

  const title = `Pool Builder in ${city.cityName}, ${city.region}`;
  const description = `Custom pool design and luxury landscaping for homeowners in ${city.cityName}, ${city.region}. Request a free design consultation.`;
  const path = `/${city.slug}`;

  return (
    <main>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={[
          cityServiceSchema(city),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: `${city.cityName}, ${city.region}`, path },
          ]),
        ]}
      />

      <section className="page-hero">
        <img
          className="scene-media"
          src="https://images.unsplash.com/photo-1593282153762-a4c4eac7d9bc?auto=format&fit=crop&w=2000&q=85"
          alt={`Custom pool and landscape design in ${city.cityName}, ${city.region}`}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div className="scene-scrim scrim-standard" />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <Link to="/service-areas">Service Areas</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>{city.cityName}</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <p className="scene-eyebrow">Service Area</p>
          <h1>Custom Pool &amp; Landscape Design in <em>{city.cityName}, {city.region}</em></h1>
          <p className="scene-copy">{description}</p>
        </div>
      </section>

      <div className="page-content">
        <section aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="content-heading">Designing for {city.cityName}</h2>
          {content.intro.map((para, i) => (
            <p className="body-copy" key={i}>{para}</p>
          ))}
        </section>

        <section aria-labelledby="local-heading">
          <h2 id="local-heading" className="content-heading">What Makes {city.cityName} Different</h2>
          <p className="body-copy">{content.localNotes}</p>
        </section>

        <section aria-labelledby="why-heading">
          <h2 id="why-heading" className="content-heading">Why {city.cityName} Homeowners Choose Us</h2>
          <p className="body-copy">{content.whyHomeowners}</p>
        </section>

        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="content-heading">Services in {city.cityName}</h2>
          <div className="index-grid">
            {services.slice(0, 4).map((s) => (
              <Link className="index-card liquid-glass" to={`/services/${s.slug}`} key={s.slug}>
                <h3>{s.name}</h3>
                <span className="card-link">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
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
