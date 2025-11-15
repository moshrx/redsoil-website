import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark antialiased">
      {/* background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_-10%,rgba(177,18,38,0.12),transparent),radial-gradient(40%_30%_at_-10%_20%,rgba(177,18,38,0.08),transparent)]"></div>

      <Header />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Terms & Conditions
          </h1>

          <p className="text-neutral-600 mb-4">
            These Terms & Conditions outline the rules and guidelines for using
            the RedSoil Creations website and services. By accessing this site,
            you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Our Website</h2>
          <p className="text-neutral-600 mb-4">
            You may browse our site for personal or business use. You may not
            copy, modify, or misuse any content, design, or material found here.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. Service Agreements</h2>
          <p className="text-neutral-600 mb-4">
            Any services provided by RedSoil Creations follow mutually agreed
            terms between us and the client. Pricing, timelines, and deliverables
            are discussed individually.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Accuracy of Information</h2>
          <p className="text-neutral-600 mb-4">
            We make reasonable efforts to keep our content accurate. However, we
            do not guarantee the completeness or reliability of the information
            displayed.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Links</h2>
          <p className="text-neutral-600 mb-4">
            Our website may include links to third-party websites. We are not
            responsible for content or privacy practices of external sites.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
          <p className="text-neutral-600 mb-4">
            RedSoil Creations is not liable for any losses or damages resulting
            from the use of our website, services, or external links.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Updates to Terms</h2>
          <p className="text-neutral-600 mb-4">
            We may revise these Terms & Conditions at any time. Updates will be
            posted on this page.
          </p>

          <p className="text-neutral-600 mt-6">
            For questions, reach us at:
            <br />
            <span className="font-medium">teamredsoilcreations@gmail.com</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
