import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 backdrop-blur py-10 mt-10">
      <div className="mx-auto max-w-content px-4 md:px-6 text-center text-sm text-neutral-600">
        <p>
          © {new Date().getFullYear()} <span className="font-medium">RedSoil Creations</span>. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-neutral-500">
          {/* <a
            href="https://www.facebook.com/premierwindowsandbuildingcentre/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-primary transition"
          >
            Facebook
          </a> */}
          <a
            href="#contact"
            className="hover:text-brand-primary transition"
          >
            Contact
          </a>
          <a
            href="#about"
            className="hover:text-brand-primary transition"
          >
            About
          </a>
            <a href="/privacy" className="hover:text-brand-primary transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-brand-primary transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
