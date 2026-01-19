import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const trackConversion = () => {
    // Call the global function defined in index.html
    if (typeof window !== 'undefined' && (window as any).trackContactConversion) {
      (window as any).trackContactConversion();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
      <a
        href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex items-center justify-center w-14 h-14 bg-[#11632B] hover:bg-[#0D4D21] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#11632B]"
        aria-label="Contact us on WhatsApp"
        onClick={trackConversion}
      >
        <img
          src="/contact-emrs-ambulance-service-whatsapp.svg"
          alt="Contact 24/7 Private Ambulance Service on WhatsApp UAE"
          title="Contact EMRS Ambulance Service on WhatsApp"
          width={35}
          height={35}
          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] object-contain"
        />
      </a>
      <a
        href="tel:+971554728133"
        className="flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] bg-[#11632B] hover:bg-[#0D4D21] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#11632B]"
        aria-label="Call Us"
        onClick={trackConversion}
      >
        <Phone className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContact;
