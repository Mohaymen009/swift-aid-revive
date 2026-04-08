import { Phone, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ambulance.jpg";
import TabbyBadge from "@/components/TabbyBadge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="EMRS 24/7 - Professional Ambulance Services UAE"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-sm font-semibold tracking-wide">Available 24/7 Across UAE</span>
          </div>

          {/* Main heading */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
            Licensed Medical Transport & Patient Transfer Services
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            Whether you need a scheduled hospital transfer, patient discharge transport, or urgent medical escort — our licensed paramedics are ready to help across all seven Emirates.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { icon: Clock, text: "24/7 Dispatch" },
              { icon: MapPin, text: "All 7 Emirates" },
              { icon: Shield, text: "DHA Licensed" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70">
                <item.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-glow transition-all duration-300 hover:shadow-elevated"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Call +971 55 472 8133</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-6 text-lg rounded-xl border border-white/20 transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-center gap-3">
                <img
                  src="/whatsapp.svg"
                  alt="Contact EMRS 24/7 Professional Medical Transport on WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5 flex-shrink-0"
                  loading="lazy"
                />
                <span>WhatsApp Us</span>
          </a>
            </Button>
          </div>

          {/* Tabby Payment Badge */}
          <div className="mt-4">
            <TabbyBadge />
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center py-4 gap-6 sm:gap-0">
            {[
              { value: "50+", label: "Years Combined Experience" },
              { value: "7", label: "Emirates Covered" },
              { value: "24/7", label: "Always Available" },
              { value: "100%", label: "Licensed Staff" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-2xl sm:text-3xl font-black text-accent">{stat.value}</div>
                <div className="text-xs text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
