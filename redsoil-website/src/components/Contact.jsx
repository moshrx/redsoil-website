import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get in touch</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Tell us about your business. We’ll send a short plan with quick wins for SEO and local visibility.
          </p>
        </div>
        <form
          action="https://formspree.io/f/your-id"  /* replace with your Formspree ID */
          method="POST"
          className="grid gap-4 rounded-2xl border border-black/10 bg-white/80 p-5 md:p-6"
        >
          <input name="name" placeholder="Your name" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30" required />
          <input type="email" name="email" placeholder="Email address" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30" required />
          <textarea name="message" placeholder="What do you need help with?" rows="4" className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30" />
          <button className="rounded-lg bg-brand-primary px-5 py-3 text-white hover:bg-brand-primary/90 transition">Send</button>
        </form>
      </div>
    </section>
  );
}
