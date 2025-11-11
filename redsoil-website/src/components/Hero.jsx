import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-content px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        {/* tiny label */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur"
        >
          PEI · Digital Marketing & Branding
          <span className="inline-block h-1 w-1 rounded-full bg-brand-primary"></span>
          Trade & Restaurant Specialists
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-brand-dark"
        >
          Simple, effective marketing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-rose-400">
            that brings local customers
          </span>
        </motion.h1>

        {/* subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-neutral-600"
        >
          We help PEI businesses show up, stand out, and get calls — with clean branding,
          focused ads, and a website that works on every screen.
        </motion.p>

        {/* ctas */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-white text-sm md:text-base font-medium shadow-sm hover:bg-brand-primary/90 transition"
          >
            Get a Free Audit
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/80 px-5 py-3 text-sm md:text-base font-medium hover:border-black/20 transition"
          >
            See Services
          </a>
        </motion.div>

        {/* tiny trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex items-center gap-6 text-xs text-neutral-500"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Fast turnaround
          </span>
          <span className="inline-block h-1 w-1 rounded-full bg-neutral-300"></span>
          <span>Local PEI expertise</span>
          <span className="inline-block h-1 w-1 rounded-full bg-neutral-300"></span>
          <span>No long-term contracts</span>
        </motion.div>
      </div>
    </section>
  );
}
