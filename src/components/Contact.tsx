import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Users, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+971 55 472 8133",
    link: "tel:+971554728133",
    description: "24/7 Available",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with us",
    link: "https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services.",
    description: "Quick messaging support",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@emrs.ae",
    link: "mailto:info@emrs.ae",
    description: "General inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Al Qusais Industrial Area, Dubai",
    description: "Serving all seven Emirates",
  },
];

const Contact = () => {
  const trackConversion = () => {
    // Call the global function defined in index.html
    if (typeof window !== 'undefined' && window.trackContactConversion) {
      window.trackContactConversion();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Contact EMRS</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Get in Touch for Ambulance Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Need ambulance services, patient transport, or medical assistance in the UAE? Our professional team is available 24/7 to help. Contact us through any of these channels for immediate assistance.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  {method.title === 'WhatsApp' ? (
                    <picture className="flex items-center">
                      <source srcSet="/whatsapp.webp" type="image/webp" />
                      <img src="/whatsapp.webp" alt="" width={28} height={28} className="w-7 h-7" loading="lazy" />
                    </picture>
                  ) : (
                    <method.icon className="w-7 h-7 text-accent" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-primary mb-2">
                  {method.title}
                </h3>

                {method.link ? (
                  <a
                    href={method.link}
                    className="text-[#11632B] font-semibold hover:underline block mb-1"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={trackConversion}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold mb-1">{method.detail}</p>
                )}

                <p className="text-sm text-primary/70">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Trust Signals Section */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <Shield className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Professional Team</h4>
                <p className="text-sm text-primary/70">Trained paramedics & medical staff</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <Ambulance className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Modern Fleet</h4>
                <p className="text-sm text-primary/70">Well-equipped ambulances</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary">UAE Coverage</h4>
                <p className="text-sm text-primary/70">All 7 emirates served</p>
              </div>
            </div>
          </div>

          {/* Contact Banner */}
          <Card className="bg-gradient-to-r from-accent to-orange-light border-0 shadow-glow text-white overflow-hidden">
            <div className="p-8 sm:p-12 relative">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8" />
                  <span className="text-lg font-semibold">24/7 Ambulance & Medical Services</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Need Ambulance or Medical Transport?
                </h3>

                <p className="text-lg text-white mb-6">
                  Whether you need hospital transfers, patient transport, or medical assistance anywhere in the UAE — our professional team is ready to help around the clock.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-[#A83300] font-bold px-8 shadow-lg"
                    asChild
                  >
                    <a href="tel:+971554728133" className="flex items-center gap-2" onClick={trackConversion}>
                      <Phone className="w-5 h-5" />
                      Call +971 55 472 8133
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-bold px-8"
                    asChild
                  >
                    <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" onClick={trackConversion}>
                      <picture className="flex items-center">
                        <source srcSet="/whatsapp.webp" type="image/webp" />
                        <img src="/whatsapp.webp" alt="Contact EMRS WhatsApp" width={20} height={20} className="w-5 h-5" />
                      </picture>
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                  <path d="M100 20L120 80L180 80L130 115L150 175L100 140L50 175L70 115L20 80L80 80L100 20Z" fill="white" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
