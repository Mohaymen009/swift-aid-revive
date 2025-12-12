import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
    }`}>
      <a
        href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-green-glow hover:shadow-elevated transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
      </a>
      <a
        href="tel:+971554728133"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-green-glow hover:shadow-elevated transition-all duration-300 hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
