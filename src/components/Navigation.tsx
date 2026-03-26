import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us/" },
    { name: "Services", href: "/services/" },
    { name: "Licensing", href: "/licensing/" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-elevated py-2"
        : "bg-transparent py-4"
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="EMRS 24/7 Home">
            <picture>
              <source srcSet="/site-logo.webp" type="image/webp" />
              <img
                src="/site-logo.png"
                alt="EMRS 24/7 Professional Ambulance and Home Healthcare UAE"
                width={36}
                height={36}
                className="w-9 h-9 aspect-square object-contain"
                loading="eager"
              />
            </picture>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                EMRS
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] -mt-1 transition-colors ${
                isScrolled ? "text-accent" : "text-accent"
              }`}>
                24/7 Medical
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isScrolled
                      ? "text-foreground hover:text-accent hover:bg-accent/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971554728133" className={`flex items-center gap-2 font-bold text-sm transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <span className="hidden xl:inline">+971 55 472 8133</span>
            </a>
            <Button
              size="sm"
              className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-semibold shadow-md rounded-lg h-9"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="/whatsapp.svg" alt="Instant Emergency WhatsApp Help UAE" width={18} height={18} className="w-[18px] h-[18px]" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md rounded-lg h-9"
              asChild
            >
              <a href="#contact">Get Help Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-6 rounded-xl ${
            isScrolled ? "bg-white" : "bg-primary/95 backdrop-blur-md"
          }`} id="mobile-menu">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? "text-foreground hover:bg-secondary hover:text-accent"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+971554728133"
                  className={`flex items-center gap-2 px-4 py-3 font-semibold rounded-lg ${
                    isScrolled ? "text-primary bg-secondary" : "text-white bg-white/10"
                  }`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +971 55 472 8133
                </a>
                <Button
                  className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-semibold w-full h-12"
                  asChild
                >
                  <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/whatsapp.svg" alt="Instant Non-Emergency WhatsApp Help UAE" width={20} height={20} className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-semibold w-full h-12"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Help Now</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
