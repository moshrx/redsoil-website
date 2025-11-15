import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="block px-4 py-2 text-sm md:text-[15px] hover:text-brand-primary transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* logo area (swap with <img src="/logo.png" /> later) */}
          <a href="#top" className="inline-flex items-center gap-2">
            <span className="h-7 w-7 rounded-[10px] bg-brand-primary/90"></span>
            <span className="font-semibold tracking-tight">
              RedSoil <span className="text-brand-primary">Creations</span>
            </span>
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
        <NavLink href="/#services">Services</NavLink>
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/#contact">Contact</NavLink>


            <a
              href="#contact"
              className="ml-2 rounded-lg bg-brand-primary px-3 py-2 text-white text-sm hover:bg-brand-primary/90 transition"
            >
              Free Audit
            </a>
          </nav>

          {/* mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="i-bar w-4">
              <span className={`block h-[2px] w-4 bg-black transition ${open ? "translate-y-[6px] rotate-45" : ""}`}></span>
              <span className={`mt-1 block h-[2px] w-4 bg-black transition ${open ? "opacity-0" : ""}`}></span>
              <span className={`mt-1 block h-[2px] w-4 bg-black transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-xl border border-black/10 bg-white/80 shadow-sm">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="px-4 pb-3">
                <a
                  href="#contact"
                  className="block w-full text-center rounded-lg bg-brand-primary px-3 py-2 text-white text-sm hover:bg-brand-primary/90 transition"
                >
                  Free Audit
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
