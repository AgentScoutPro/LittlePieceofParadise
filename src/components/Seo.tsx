import { useEffect } from "react";
import { site } from "../lib/siteData";

type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/services/custom-pool-design" — used for canonical + OG url
  image?: string;
  /** One or more JSON-LD objects to inject as <script type="application/ld+json"> */
  schema?: object | object[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Client-rendered per-page SEO: title, meta description, canonical, Open
 * Graph / Twitter tags, and JSON-LD schema. Googlebot renders JS, so this
 * works for a client-only Vite/React SPA without needing SSR — but if this
 * site later moves to a framework with SSR/prerendering, this is the first
 * thing to port so tags are present on the very first response.
 */
export function Seo({ title, description, path, image, schema }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(site.shortName) ? title : `${title} | ${site.shortName}`;
    document.title = fullTitle;

    const canonicalUrl = `${site.url}${path}`;
    const ogImage = image ? `${site.url}${image}` : `${site.url}${site.defaultOgImage}`;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", site.shortName);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const injectedNodes: HTMLScriptElement[] = [];
    schemaList.forEach((entry, i) => {
      const scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.setAttribute("data-seo-schema", String(i));
      scriptEl.textContent = JSON.stringify(entry);
      document.head.appendChild(scriptEl);
      injectedNodes.push(scriptEl);
    });

    return () => {
      injectedNodes.forEach((node) => node.remove());
    };
  }, [title, description, path, image, schema]);

  return null;
}
