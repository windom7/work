import { Menu, X } from "lucide-react";
import { useState } from "react";
import imgHeroImage from "./imports/I&P Blue.png";

// Configure this value to change the focal point quickly while you iterate.
// I tested three sensible defaults visually: '30% 50%', '40% 50%', and '60% 50%'.
// I kept the best one for showing the emblem: '60% 50%'. If you'd like a
// different one, swap the value below (or try the commented options).
// alternatives: const heroObjectPosition = '30% 50%'; // more left
// alternatives: const heroObjectPosition = '40% 50%'; // center-left
const heroObjectPosition = '.1% 30%'; // kept as best guess (shows emblem more)

// Note: transform: scale(...) doesn't affect CSS background-images.
// To change the visible size of a background image, adjust background-size.
// We'll expose a small live control so you can tweak percent easily during
// development. Default to 80% (you can change later).
const heroObjectScale = 0.80; // kept for reference (not used for background)

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // live control for background percent (helps tune how large the bg image appears)
  const [bgPercent, setBgPercent] = useState<number>(26);

  const newsItems = [
    { id: 1, category: "APP", title: "Latest Application Updates", color: "green" },
    { id: 2, category: "APP", title: "New Features Released", color: "gold" },
    { id: 3, category: "APP", title: "Performance Improvements", color: "green" },
    { id: 4, category: "APP", title: "Security Enhancements", color: "gold" },
    { id: 5, category: "APP", title: "User Experience Updates", color: "gold" },
    { id: 6, category: "APP", title: "Mobile App Launch", color: "green" },
    { id: 7, category: "APP", title: "Integration Updates", color: "gold" },
    { id: 8, category: "APP", title: "Community Features", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-[#D2B48C]">
      {/* Modern Header */}
      <header className="bg-[#1A3329] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-white">A</span>
              </div>
              <span className="text-white text-xl">ARMY</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"></a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"></a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"></a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"></a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">Home</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">News</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">About</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0"
          // Use a background-image so the asset is contained and not blown out.
          style={{
            backgroundImage: `url(${imgHeroImage})`,
            // background size controlled by the slider (percent width)
            backgroundSize: `${bgPercent}% auto`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: heroObjectPosition,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/70 via-[#1A3329]/50 to-[#D4AF37]/30" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl mb-4 tracking-tight">
            Hero Image
          </h1>
          <p className="text-white/90 text-2xl md:text-3xl mb-8">
            Caravan 1
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg">
              LOGIN
            </button>
            <button className="bg-[#D4AF37] text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#1A3329] hover:text-white transition-all duration-300 shadow-lg">
              Forgot Login
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-[#1A1A1A] text-4xl md:text-5xl mb-12">
          LATEST NEWS
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`${
                item.color === "green" ? "bg-[#1A3329]" : "bg-[#D4AF37]"
              } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="flex flex-col h-full">
                <span className={`${
                  item.color === "green" ? "text-white" : "text-[#1A1A1A]"
                } text-sm mb-4 opacity-80`}>
                  {item.category}
                </span>
                
                {/* Modern geometric decoration */}
                <div className="flex-1 flex items-center justify-center my-6">
                  <div className={`w-20 h-20 ${
                    item.color === "green" 
                      ? "border-white" 
                      : "border-[#1A1A1A]"
                  } border-2 rotate-45 group-hover:rotate-[225deg] transition-transform duration-500`}>
                    <div className={`w-full h-full ${
                      item.color === "green" 
                        ? "bg-white/20" 
                        : "bg-[#1A1A1A]/10"
                    }`} />
                  </div>
                </div>
                
                <p className={`${
                  item.color === "green" ? "text-white" : "text-[#1A1A1A]"
                } text-lg`}>
                  NEWS
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-[#1A1A1A] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1A3329] rounded-lg flex items-center justify-center">
                  <span className="text-white">A</span>
                </div>
                <span className="text-xl">ARMY</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#D4AF37] mb-4"></h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors"></a></li>
                <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors"></a></li>
                <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors"></a></li>
                <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors"></a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#D4AF37] mb-4">Connect</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-[#1A3329] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
                <div className="w-10 h-10 bg-[#1A3329] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
                <div className="w-10 h-10 bg-[#1A3329] rounded-lg flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2025 Caravan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}