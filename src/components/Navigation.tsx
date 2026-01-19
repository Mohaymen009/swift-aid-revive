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
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-primary/95 backdrop-blur-sm py-4"
      }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 group" aria-label="EMRS 24/7 Home">
            <picture>
              <source srcSet="/emrs-ambulance-medical-services-dubai-logo.webp" type="image/webp" />
              <img
                src="/emrs-ambulance-medical-services-dubai-logo.png"
                alt="EMRS 24/7 Professional Ambulance and Home Healthcare UAE"
                title="EMRS Ambulance Services Dubai"
                width={32}
                height={32}
                className="w-8 h-8 aspect-square object-contain"
                loading="eager"
              />
            </picture>
            <div>
              <span className={`font-black text-2xl transition-colors ${isScrolled ? "text-primary" : "text-white"
                }`}>
                EMRS 24/7
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971554728133" className={`flex items-center gap-2 font-bold text-lg transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"
              }`}>
              <Phone className="w-4 h-4 text-[#FF6200]" aria-hidden="true" />
              <span className="hidden xl:inline">+971 55 472 8133</span>
            </a>
            <Button
              size="sm"
              className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-semibold shadow-md"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="/contact-emrs-ambulance-service-whatsapp.svg" alt="Instant Emergency WhatsApp Help UAE" title="Contact EMRS WhatsApp" width={20} height={20} className="w-5 h-5" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-accent hover:bg-orange-light text-white font-semibold shadow-md"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-haspopup="true"
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10"
              }`}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10" id="mobile-menu">
            <ul className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
                <a
                  href="tel:+971554728133"
                  className={`flex items-center gap-2 font-medium ${isScrolled ? "text-foreground" : "text-white"
                    }`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +971 55 472 8133
                </a>
                <Button
                  className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-semibold w-full"
                  asChild
                >
                  <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/contact-emrs-ambulance-service-whatsapp.svg" alt="Instant Non-Emergency WhatsApp Help UAE" title="Contact EMRS WhatsApp Mobile" width={20} height={20} className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  className="bg-accent hover:bg-orange-light text-white font-semibold w-full"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
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
