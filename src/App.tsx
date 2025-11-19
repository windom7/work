import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import imgHeroImage from "./imports/I&P Blue.png";

const heroObjectPosition = "60% 50%";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const newsItems = useMemo(
    () => [
      { id: 1, category: "APP", title: "Latest Application Updates", color: "green" },
      { id: 2, category: "APP", title: "New Features Released", color: "gold" },
      { id: 3, category: "APP", title: "Performance Improvements", color: "green" },
      { id: 4, category: "APP", title: "Security Enhancements", color: "gold" },
      { id: 5, category: "APP", title: "User Experience Updates", color: "gold" },
      { id: 6, category: "APP", title: "Integration Updates", color: "green" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#D2B48C] text-[#1A1A1A] flex flex-col">
      <header className="bg-[#1A3329] shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <span className="text-white text-xl font-semibold">ARMY</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-white text-sm tracking-wide">
              <a href="#hero" className="hover:text-[#D4AF37] transition-colors">
                Home
              </a>
              <a href="#news" className="hover:text-[#D4AF37] transition-colors">
                News
              </a>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                Contact
              </a>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2 text-sm">
              {["Home", "News", "About", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-white hover:text-[#D4AF37] transition-colors py-2"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main
        className="flex-1"
        style={{ minHeight: "calc(100vh - 64px)", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 grid md:grid-cols-2 gap-8 items-stretch">
          <section
            id="hero"
            className="relative rounded-3xl overflow-hidden h-full shadow-2xl bg-[#10231c]"
            aria-label="Hero"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${imgHeroImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: heroObjectPosition,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a14]/80 via-[#1A3329]/60 to-[#D4AF37]/40" />

            <div className="relative h-full flex flex-col items-start justify-center px-6 sm:px-10 gap-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80">Caravan 1</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">Hero Image</h1>
              <p className="text-lg sm:text-xl text-white/85 max-w-xl">
                Modernized layout with balanced spacing to keep the entire experience in view without scrolling.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#1A1A1A] px-7 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg">
                  Login
                </button>
                <button className="bg-[#D4AF37] text-[#1A1A1A] px-7 py-3 rounded-lg hover:bg-[#1A3329] hover:text-white transition-all duration-300 shadow-lg">
                  Forgot Login
                </button>
              </div>
            </div>
          </section>

          <section
            id="news"
            className="h-full rounded-3xl bg-white/80 backdrop-blur shadow-xl border border-white/50 p-6 flex flex-col"
            aria-label="Latest news"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#1A3329]/80">Latest</p>
                <h2 className="text-2xl font-semibold text-[#1A1A1A]">News &amp; Updates</h2>
              </div>
              <div className="hidden sm:block text-xs text-[#1A1A1A]/70">All systems operational</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className={`${
                    item.color === "green" ? "bg-[#1A3329] text-white" : "bg-[#D4AF37] text-[#1A1A1A]"
                  } rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className="flex items-center justify-between text-xs opacity-80">
                    <span>{item.category}</span>
                    <span>{new Date().getFullYear()}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm opacity-90">
                    Concise highlights keep this tile compact so the full grid remains within the visible viewport.
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-[#1A1A1A]/75" id="about">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A3329]" />
              <span>About the Caravan: Reliable information and streamlined access for every visitor.</span>
            </div>
            <div className="mt-2 text-sm text-[#1A1A1A]/70" id="contact">
              Need help? Reach us at support@caravan.example.
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-6 text-center text-sm">
        <p>&copy; 2025 Caravan. All rights reserved.</p>
      </footer>
    </div>
  );
}
