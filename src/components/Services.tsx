import { Ambulance, Users, Stethoscope, Home, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Ambulance,
    title: "Ambulance Transfer Services",
    description: "Professional patient transfer and medical transport with trained paramedics. Hospital-to-hospital transfers, patient discharge transport, and inter-facility transfers available 24/7 across all UAE emirates.",
    link: "/ambulance-services-uae/",
    linkText: "Explore Ambulance Services"
  },
  {
    icon: Activity,
    title: "Non-Emergency Medical Transport",
    description: "Scheduled medical transport for dialysis appointments, outpatient procedures, medical check-ups, and routine hospital visits. Wheelchair and stretcher transport available with trained medical attendants.",
    link: "/non-emergency-medical-transport-uae/",
    linkText: "View Transport Services"
  },
  {
    icon: Stethoscope,
    title: "Doctor on Call",
    description: "24/7 doctor home visits and hotel doctor services across Dubai and UAE. Licensed physicians available for consultations, IV therapy, minor treatments, and prescription services at your location.",
    link: "/doctor-on-call-uae/",
    linkText: "Book Doctor on Call"
  },
  {
    icon: Home,
    title: "Home Healthcare Services",
    description: "Professional nursing care, physiotherapy, and elderly care in the comfort of your home. Post-operative care, wound management, medication administration, and rehabilitation services.",
    link: "/home-healthcare-services-uae/",
    linkText: "Explore Home Healthcare"
  },
  {
    icon: Users,
    title: "Event Medical Coverage",
    description: "Comprehensive medical support for corporate events, sports events, concerts, exhibitions, and private functions. On-site paramedics and ambulance standby services for events of all sizes.",
    link: "/ambulance-services-uae/",
    linkText: "Get Event Coverage"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Comprehensive Medical Transport & Healthcare Services in UAE
            </h2>
            <p className="text-lg text-muted-foreground">
              From ambulance transfers to home healthcare, EMRS provides a complete range of medical services across Dubai, Abu Dhabi, Sharjah, and all UAE emirates. Our professional team is available 24/7 to assist with your medical transport needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-103 group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#FF6200]/10 rounded-2xl group-hover:bg-[#FF6200]/20 transition-colors">
                  <service.icon className="w-8 h-8 text-[#FF6200]" />
                </div>

                <div className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {service.linkText} <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-to-br from-accent to-orange-light border-0 shadow-glow text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Need Medical Services Now?
                </h3>
                <p className="text-white/90 mb-6">
                  Contact us 24/7 for ambulance services, patient transfers, or any medical transport needs across the UAE.
                </p>
              </div>

              <Button
                variant="secondary"
                className="bg-white hover:bg-white/90 text-accent font-semibold w-full group"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center justify-center gap-2">
                  Call Dispatch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
