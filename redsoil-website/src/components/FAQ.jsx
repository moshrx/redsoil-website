import React from "react";

const faqs = [
  { q: "How long until SEO works?", a: "Maps improvements can appear in 2–6 weeks. Content rankings typically 2–3 months for low-competition local terms." },
  { q: "Do I need a website?", a: "You can start with Google Business Profile and content on your Facebook page, but a lightweight site improves conversions and tracking." },
  { q: "What will you optimize first?", a: "GBP categories/description/photos/reviews, then titles/meta/headers for your core service pages." },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">SEO FAQs</h2>
        <div className="mt-6 divide-y divide-black/5 rounded-2xl border border-black/10 bg-white/70">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 md:p-6">
              <h3 className="font-medium">{f.q}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
