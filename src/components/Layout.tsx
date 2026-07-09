import { Suspense, lazy, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { localBusinessSchema } from "../lib/schema";
import { cities, primaryNav, services, site, socialLinks } from "../lib/siteData";
import ScrollProgressBar from "./ScrollProgressBar";

const AmbientBackground = lazy(() => import("./AmbientBackground"));

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

/** Nav starts hidden at the very top of a page and fades in after a small scroll. */
function useNavVisible(threshold = 48) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function check() {
      setVisible((window.scrollY || document.documentElement.scrollTop) > threshold);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);
  return visible;
}

function Nav({ visible, onOpenMenu }: { visible: boolean; onOpenMenu: () => void }) {
  return (
    <nav className={`nav liquid-glass${visible ? " nav-visible" : ""}`} aria-label="Main navigation">
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
      <div className="nav-right">
        <a className="nav-cta liquid-glass" href="/contact">
          Request Consultation <ArrowUpRight size={16} />
        </a>
        <button className="nav-hamburger" onClick={onOpenMenu} aria-label="Open menu">
          <Menu size={18} />
        </button>
      </div>
    </nav>
  );
}

function MobileNavOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`nav-mobile-overlay${open ? " open" : ""}`}>
      <button className="nav-mobile-close" onClick={onClose} aria-label="Close menu">
        <X size={22} />
      </button>
      {primaryNav.map((item, i) => (
        <Link key={item.href} to={item.href} onClick={onClose} style={{ transitionDelay: `${0.06 + i * 0.06}s` }}>
          {item.label}
        </Link>
      ))}
      <a href="/contact" onClick={onClose} className="nav-mobile-cta" style={{ transitionDelay: `${0.06 + primaryNav.length * 0.06}s` }}>
        Request Consultation
      </a>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer-global">
      <div className="site-footer-shell">
        <div className="site-footer-brand">
          <strong>{site.name}</strong>
          <p>
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
          </p>
        </div>

        <div className="site-footer-inner">
          <div className="site-footer-column">
            <h2>Services</h2>
            <Link to="/services">All Services</Link>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.shortName}
              </Link>
            ))}
          </div>

          <div className="site-footer-column">
            <h2>Service Areas</h2>
            <Link to="/service-areas">All Service Areas</Link>
            {cities.map((city) => (
              <Link key={city.slug} to={`/${city.slug}`}>
                {city.cityName}, {city.region}
              </Link>
            ))}
          </div>

          <div className="site-footer-column">
            <h2>Company</h2>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="site-footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="site-footer-copy">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}

/**
 * Wraps every route. Renders the sitewide LocalBusiness schema once (not
 * per-page), the ambient WebGL background and scroll progress bar (both
 * mounted once, not per-page), plus nav/footer with consistent NAP.
 */
export function Layout() {
  useSitewideSchema();
  const navVisible = useNavVisible();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={null}>
        <AmbientBackground />
      </Suspense>
      <ScrollProgressBar />
      <div className="site-content">
        <Nav visible={navVisible} onOpenMenu={() => setMenuOpen(true)} />
        <MobileNavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Outlet />
        <SiteFooter />
      </div>
    </>
  );
}
