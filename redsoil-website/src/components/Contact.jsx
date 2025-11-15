import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    setStatus("submitting");

    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get in touch</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Tell us about your business. We’ll get back to you with simple ideas to help grow your online presence.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xjkjyley" // <-- replace with your ID
          method="POST"
          className="grid gap-4 rounded-2xl border border-black/10 bg-white/80 p-5 md:p-6"
        >
          <input
            name="name"
            placeholder="Your name"
            className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30"
            required
          />

          <textarea
            name="message"
            placeholder="What do you need help with?"
            rows="4"
            className="rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary/30"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-lg bg-brand-primary px-5 py-3 text-white hover:bg-brand-primary/90 transition disabled:opacity-70 disabled:cursor-wait"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600 pt-2">
              ✔ Message sent! We'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600 pt-2">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
