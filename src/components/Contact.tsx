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
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors text-accent">
                  {method.title === 'WhatsApp' ? (
                    <svg viewBox="0 0 24 24" width="28" height="28" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  ) : (
                    <method.icon className="w-7 h-7 text-accent" />
                  )}
                </div>

                <div className={`text-lg font-bold mb-2 ${method.title === 'Location' ? 'text-[#A83300]' : 'text-primary'}`}>
                  {method.title}
                </div>

                {method.link ? (
                  <a
                    href={method.link}
                    className="text-[#A83300] font-semibold hover:underline block mb-1"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={trackConversion}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-[#A83300] font-semibold mb-1">{method.detail}</p>
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
                <div className="font-bold text-primary">Professional Team</div>
                <p className="text-sm text-primary/70">Trained paramedics & medical staff</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <Ambulance className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <div className="font-bold text-primary">Modern Fleet</div>
                <p className="text-sm text-primary/70">Well-equipped ambulances</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <div className="font-bold text-primary">UAE Coverage</div>
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

                  <a
                    href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-white hover:bg-white/90 text-[#A83300] font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg gap-2"
                    onClick={trackConversion}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    WhatsApp Us
                  </a>
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
