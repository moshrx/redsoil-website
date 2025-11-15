import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark antialiased">
      {/* background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_-10%,rgba(177,18,38,0.12),transparent),radial-gradient(40%_30%_at_-10%_20%,rgba(177,18,38,0.08),transparent)]"></div>

      <Header />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-neutral-600 mb-4">
            At RedSoil Creations, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains what information we collect, how we use it, and how
            it is safeguarded.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
          <p className="text-neutral-600 mb-4">
            We may collect personal information such as your name, email
            address, and message details when you contact us through our
            website. We do not collect any unnecessary or sensitive information.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
          <p className="text-neutral-600 mb-4">
            We use the information you provide to respond to your inquiries,
            deliver requested services, and improve our website and marketing
            efforts. We do not sell or rent your information to third parties.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Security</h2>
          <p className="text-neutral-600 mb-4">
            We take reasonable steps to protect your information from
            unauthorized access, misuse, or disclosure. However, no online
            transmission is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
          <p className="text-neutral-600 mb-4">
            Our website may use trusted third-party services such as Formspree
            for contact form submissions. These services have their own privacy
            policies and practices.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
          <p className="text-neutral-600 mb-4">
            You may request access, updates, or deletion of your personal
            information at any time by contacting us.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
          <p className="text-neutral-600 mb-4">
            We may update this Privacy Policy from time to time. The latest
            version will always be available on our website.
          </p>

          <p className="text-neutral-600 mt-6">
            If you have any questions, please contact us at:
            <br />
            <span className="font-medium">teamredsoilcreations@gmail.com</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
