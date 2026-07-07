import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { localBusinessSchema } from "../lib/schema";
import { primaryNav, site } from "../lib/siteData";

/**
 * Injects the sitewide LocalBusiness schema exactly once for the life of the
 * app (Layout never unmounts during client-side navigation, so this does not
 * re-fire per route). Per-page title/description/OG/canonical/extra schema
 * is handled separately by each page's own <Seo> call.
 */
function useSitewideSchema() {
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.setAttribute("data-seo-schema", "sitewide-local-business");
    scriptEl.textContent = JSON.stringify(localBusinessSchema());
    document.head.appendChild(scriptEl);
    return () => scriptEl.remove();
  }, []);
}

function Nav() {
  return (
    <nav className="nav liquid-glass" aria-label="Main navigation">
      <Link className="brand" to="/" aria-label={`${site.name} home`}>
        <span>Little Piece of</span>
        <strong>Paradise</strong>
      </Link>
      <div className="nav-links">
        {primaryNav.map((item) => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <a className="nav-cta liquid-glass" href="/contact">
        Request Consultation <ArrowUpRight size={16} />
      </a>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer-global">
      <div className="site-footer-inner">
        <div>
          <strong>{site.name}</strong>
          <p>
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
          </p>
        </div>
        <div className="site-footer-links">
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="site-footer-nav">
          {primaryNav.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="site-footer-copy">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}

/**
 * Wraps every route. Renders the sitewide LocalBusiness schema once (not
 * per-page) plus nav/footer with consistent NAP — the two things the audit
 * flagged as entirely missing.
 */
export function Layout() {
  useSitewideSchema();
  return (
    <>
      <Nav />
      <Outlet />
      <SiteFooter />
    </>
  );
}
