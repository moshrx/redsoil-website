import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SEOHead from "./components/SEOHead";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import ScrollToHash from "./components/ScrollToHash";

function HomePage() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark antialiased">
      <SEOHead
        title="RedSoil Creations — Local SEO & Marketing in PEI"
        description="Simple, effective SEO: Google Business Profile, on-page, and local content that brings calls in PEI."
        url="https://your-live-domain.com"
        image="/og-image.png"
      />

      {/* soft radial background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_-10%,rgba(177,18,38,0.12),transparent),radial-gradient(40%_30%_at_-10%_20%,rgba(177,18,38,0.08),transparent)]"></div>

      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* legal pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
