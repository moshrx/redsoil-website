import React from "react";

const items = [
  {
    title: "Google Business Profile (Maps) Optimization",
    body: "Categories, description, photos, products, Q&A, posts — weekly optimization to rank in the local 3-pack.",
    points: ["Keyword-rich description", "Photo cadence", "Reviews strategy", "Products & updates"]
  },
  {
    title: "On-Page SEO",
    body: "Fast, mobile-friendly pages with clear headings and internal links. Lightweight copy that targets PEI intent.",
    points: ["Titles & meta", "H1-H3 structure", "Image alt text", "Internal links"]
  },
  {
    title: "Content & Local Landing Pages",
    body: "Service pages for windows, doors, building supplies + local areas (Charlottetown, Summerside…).",
    points: ["Topic research", "Local modifiers", "FAQ blocks", "CTA placement"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">SEO Services</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Simple actions that move the needle: fix the basics, publish useful pages, and keep the profile active.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-black/10 bg-white/80 p-5 md:p-6 hover:shadow-sm transition"
            >
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.body}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* mini-cta */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border border-black/10 bg-white/70 p-5">
          <div>
            <h4 className="font-semibold">Free 5-minute SEO audit</h4>
            <p className="text-sm text-neutral-600">We’ll check your Google Business Profile and top pages.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-white text-sm hover:bg-brand-primary/90 transition"
          >
            Get Audit
          </a>
        </div>
      </div>
    </section>
  );
}
