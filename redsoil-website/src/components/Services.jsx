import React from "react";

const items = [
  {
    title: "Google Business Profile Optimization",
    body:
      "Make your business easy to find and trust on Google. We create, update, and manage your profile with accurate info, engaging posts, and reviews that build credibility.",
    points: [
      "Accurate business info & categories",
      "Engaging photo and post updates",
      "Review response strategy",
      "Profile insights & reporting",
    ],
  },
  {
    title: "On-Page SEO",
    body:
      "We optimize your website so search engines and people understand what you offer. Every page is fast, mobile-friendly, and written in clear language that drives results.",
    points: [
      "Optimized titles & meta tags",
      "Fast, mobile-ready pages",
      "Keyword placement & internal links",
      "Image alt text & accessibility",
    ],
  },
  {
    title: "Content & Local Pages",
    body:
      "We write helpful, easy-to-read content that answers customer questions and highlights your local expertise. Great for blogs, service pages, and local searches.",
    points: [
      "Keyword-based topic planning",
      "Simple, informative writing",
      "Local SEO targeting",
      "Calls-to-action that convert",
    ],
  },
  {
    title: "Social Media Marketing",
    body:
      "We plan and create posts that connect with your audience. From visuals to ad campaigns, we help you stay active and consistent on Facebook, Instagram, and more.",
    points: [
      "Post planning & content calendar",
      "Creative visuals & short videos",
      "Community engagement & replies",
      "Targeted social ads",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            What We Do
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-600">
            We build visibility and trust for local businesses through smart SEO
            and digital marketing. Everything we do is focused on helping
            customers find you and choose you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-black/10 bg-white/80 p-5 md:p-6 hover:shadow-md transition"
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

        {/* subtle CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-700 text-sm md:text-base">
            Want to see how we can help your business grow online?{" "}
            <a
              href="#contact"
              className="text-brand-primary font-medium hover:underline"
            >
              Get in touch with us today.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
