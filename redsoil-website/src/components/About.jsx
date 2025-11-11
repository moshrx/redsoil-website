import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              About <span className="text-brand-primary">RedSoil Creations</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              RedSoil Creations is a small digital marketing studio based in
              Prince Edward Island. We help local businesses grow online through
              clear branding, SEO, and content that connects with real people.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              Our focus is simple — make marketing easy to understand and
              effective. Whether you run a trade company, restaurant, or local
              service, we tailor strategies that match your goals, not generic
              templates.
            </p>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              Founded by <strong>Mohammed & Reneesh</strong>, RedSoil is built on
              transparency, creativity, and real results. Every project starts
              with understanding your business, audience, and how to make you
              stand out in your local market.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-white text-sm md:text-base font-medium shadow-sm hover:bg-brand-primary/90 transition"
              >
                Let’s Work Together
              </a>
            </div>
          </motion.div>

          {/* image placeholder 
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="/about-photo.jpg"
                alt="RedSoil Creations team at work"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent"></div>
            </div>
          </motion.div>*/}
        </div>
      </div>
    </section>
  );
}
