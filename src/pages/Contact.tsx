import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { cities, services, site } from "../lib/siteData";

const budgetOptions = ["Under $10,000", "$12,000–$25,000", "$25,000–$50,000", "$50,000+"];
const timelineOptions = ["ASAP", "1-3 months", "3-6 months", "6-12 months", "Just exploring"];

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  serviceArea: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  serviceArea: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = React.useState<ContactFormState>(initialFormState);
  const [submitted, setSubmitted] = React.useState(false);

  function updateField(name: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Project Consultation Request");
    const body = encodeURIComponent(
      [
        "I'd like to request a free design consultation.",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Service Area: ${form.serviceArea || "Not selected"}`,
        `Project Type: ${form.projectType || "Not selected"}`,
        `Estimated Budget: ${form.budget || "Not selected"}`,
        `Timeline: ${form.timeline || "Not selected"}`,
        "",
        "Project Details:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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
        <div className="scene-actions contact-quick-actions">
          <a className="primary liquid-glass" href={site.phoneHref}>
            {site.phoneDisplay} <ArrowRight size={18} />
          </a>
          <a className="secondary liquid-glass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <form className="contact-form liquid-glass" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </label>
            <label>
              <span>Service Area</span>
              <select
                name="serviceArea"
                value={form.serviceArea}
                onChange={(event) => updateField("serviceArea", event.target.value)}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.slug} value={`${city.cityName}, ${city.region}`}>
                    {city.cityName}, {city.region}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Project Type</span>
              <select
                name="projectType"
                value={form.projectType}
                onChange={(event) => updateField("projectType", event.target.value)}
              >
                <option value="">Select a project type</option>
                <option value="Multiple / Not Sure Yet">Multiple / Not Sure Yet</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Estimated Budget</span>
              <select
                name="budget"
                value={form.budget}
                onChange={(event) => updateField("budget", event.target.value)}
              >
                <option value="">Select a range</option>
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Timeline</span>
              <select
                name="timeline"
                value={form.timeline}
                onChange={(event) => updateField("timeline", event.target.value)}
              >
                <option value="">Select a timeline</option>
                {timelineOptions.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field-full">
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </label>
          </div>
          <button type="submit">
            <span>Prepare Email</span>
            <ArrowRight size={18} />
          </button>
          {submitted ? (
            <p className="form-note" role="status">
              Your email client should now be open with your message ready to send. If it didn&apos;t open, email us directly at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
