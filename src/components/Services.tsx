import { Ambulance, Users, Activity, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EXTERNAL_URL = "https://homehealthcare.emrs.ae/";

const services = [
  {
    icon: Ambulance,
    title: "Ambulance Transfer Services",
    description: "Professional patient transfer and medical transport with trained paramedics. Hospital-to-hospital transfers, patient discharge transport, and inter-facility transfers available 24/7.",
    link: "/ambulance-services-uae/",
    linkText: "Explore Ambulance Services",
    external: false,
  },
  {
    icon: Activity,
    title: "Non-Emergency Medical Transport",
    description: "Scheduled medical transport for dialysis, outpatient procedures, check-ups, and routine hospital visits. Wheelchair and stretcher transport with trained medical attendants.",
    link: "/non-emergency-medical-transport-uae/",
    linkText: "View Transport Services",
    external: false,
  },
  {
    icon: Users,
    title: "Event Medical Coverage",
    description: "Comprehensive medical support for corporate events, sports events, concerts, exhibitions, and private functions. On-site paramedics and ambulance standby for events of all sizes.",
    link: "/event-medical-services-uae/",
    linkText: "Get Event Coverage",
    external: false,
  },
  {
    icon: Activity,
    title: "Doctor on Call",
    description: "24/7 doctor home visits and hotel doctor services across Dubai and UAE. Licensed physicians for consultations, IV therapy, minor treatments, and prescriptions.",
    link: EXTERNAL_URL,
    linkText: "Book Doctor on Call",
    external: true,
  },
  {
    icon: Activity,
    title: "Home Healthcare Services",
    description: "Professional nursing care, physiotherapy, and elderly care at home. Post-operative care, wound management, medication administration, and rehabilitation.",
    link: EXTERNAL_URL,
    linkText: "Explore Home Healthcare",
    external: true,
  },
  {
    icon: Activity,
    title: "Wellness & Diagnostics",
    description: "Convenient at-home blood tests, IV therapy, vaccinations, and health check-ups performed by certified nurses. Wellness solutions at your doorstep.",
    link: EXTERNAL_URL,
    linkText: "View Wellness Services",
    external: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">What We Offer</span>
            <h2 className="text-4xl sm:text-5xl font-black text-primary mt-3 mb-6">
              How Can We Help You Today?
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you need hospital transport, medical care at home, or event coverage — our professional team handles the logistics so you can focus on recovery.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-accent/10"
              >
                <div className="mb-6 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.external ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {service.linkText} <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={service.link}
                    className="text-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {service.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-glow"
              asChild
            >
              <a href="tel:+971503790382" className="flex items-center gap-3">
                Need <strong>ambulance services</strong> now? Call Dispatch
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
