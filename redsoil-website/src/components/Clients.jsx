import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Premier Windows & Building Centre",
    desc: "A home improvement and building supplies business based in Prince Edward Island. We manage their digital presence, website, and local SEO campaigns.",
    website: "https://moshrxz-oss.github.io/Premierwindows/",
    facebook: "https://www.facebook.com/premierwindowsandbuildingcentre/",
  },
  {
    name: "LootBins Canada",
    desc: "A modern retail store specializing in discounted products and daily deals. We helped build their brand visibility and optimize their Facebook marketing strategy.",
    website: "https://www.lootbinscanada.com/",
    facebook: "https://www.facebook.com/profile.php?id=61578218515270#",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 md:py-24 bg-white/70 border-t border-black/5">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Clients
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-600">
            A few of the local businesses that trusted RedSoil Creations to
            build their online presence and grow their reach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-brand-primary">
                {client.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{client.desc}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-primary hover:underline"
                >
                  Visit Website →
                </a>
                <a
                  href={client.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-600 hover:text-brand-primary transition"
                >
                  Facebook
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
