import { useEffect } from "react";

function upsertMeta(attr, key, value) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  if (value !== undefined) tag.setAttribute("content", value);
}

function upsertLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(id, obj) {
  let script = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-id", id);
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(obj);
}

export default function SEOHead({
  title = "RedSoil Creations — PEI SEO & Marketing",
  description = "Get found on Google. We help PEI businesses rank on Maps and Search with SEO, GBP optimization, and content.",
  url = "https://your-live-domain.com", // update after deploy
  image = "/og-image.png",              // place file in /public if you want
}) {
  useEffect(() => {
    // <title>
    if (title) document.title = title;

    // Basic meta
    upsertMeta("name", "description", description);

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image.startsWith("http") ? image : new URL(image, url).toString());

    // Canonical
    upsertLink("canonical", url);

    // JSON-LD: LocalBusiness
    upsertJsonLd("localbusiness", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "RedSoil Creations",
      url,
      image: image.startsWith("http") ? image : new URL(image, url).toString(),
      areaServed: "Prince Edward Island, Canada",
      address: { "@type": "PostalAddress", addressRegion: "PE", addressCountry: "CA" },
      description,
      telephone: "+1-000-000-0000"
    });

    // JSON-LD: Service (SEO)
    upsertJsonLd("service-seo", {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Search Engine Optimization (SEO)",
      provider: { "@type": "Organization", name: "RedSoil Creations", url },
      areaServed: "Prince Edward Island, Canada"
    });
  }, [title, description, url, image]);

  return null;
}
