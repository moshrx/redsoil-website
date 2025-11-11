import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SEOHead from "./components/SEOHead";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";


function App() {
  return (
    
    <div className="min-h-screen bg-brand-light text-brand-dark antialiased">
      {/* soft radial background */}
      <SEOHead
        title="RedSoil Creations — Local SEO & Marketing in PEI"
        description="Simple, effective SEO: Google Business Profile, on-page, and local content that brings calls in PEI."
        url="https://your-live-domain.com"
        image="/og-image.png"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_-10%,rgba(177,18,38,0.12),transparent),radial-gradient(40%_30%_at_-10%_20%,rgba(177,18,38,0.08),transparent)]"></div>

      <Header />
     <main>
        <Hero />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} RedSoil Creations
      </footer>
    </div>
  );
}

export default App;
