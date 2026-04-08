import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import tabbyLogo from "@/assets/tabby-logo.png";

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTabbyOpen, setIsTabbyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
        <button
          onClick={() => setIsTabbyOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-elevated transition-all duration-300 hover:scale-110"
          aria-label="Tabby payment options"
        >
          <img
            src={tabbyLogo}
            alt="Tabby - Pay in 4 interest-free instalments"
            width={32}
            height={32}
            className="w-8 h-8 rounded-md object-contain"
          />
        </button>
        <a
          href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center w-14 h-14 bg-[#11632B] hover:bg-[#0D4D21] text-white rounded-full shadow-elevated transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <img
            src="/whatsapp.svg"
            alt="Contact 24/7 Private Ambulance Service on WhatsApp UAE"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </a>
        <a
          href="tel:+971554728133"
          className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-110"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
        </a>
      </div>

      {/* Tabby popup */}
      {isTabbyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsTabbyOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTabbyOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none p-1"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <img src={tabbyLogo} alt="Tabby payments" className="h-10 w-auto rounded-lg" width={120} height={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Payment Options</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with <strong className="text-gray-900">Tabby</strong> which lets you split your purchases into{" "}
              <strong className="text-gray-900">4 interest-free payments</strong> or up to{" "}
              <strong className="text-gray-900">12 monthly payments</strong>.
            </p>
            <ul className="space-y-2 mb-5">
              {["No interest, no hidden fees", "Split into 4 equal payments", "Or choose up to 12 monthly instalments", "Quick and easy checkout"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsTabbyOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContact;
