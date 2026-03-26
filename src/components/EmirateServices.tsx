import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const emirateServices = [
  {
    emirate: "Dubai",
    title: "Ambulance Services Dubai",
    url: "/dubai-ambulance-services/",
    description: "Professional ambulance and patient transport across Dubai Marina, Downtown, JBR, Business Bay, Palm Jumeirah. 24/7 availability.",
  },
  {
    emirate: "Abu Dhabi",
    title: "Ambulance Services Abu Dhabi",
    url: "/abu-dhabi-ambulance-services/",
    description: "Medical transport in Abu Dhabi city, Yas Island, Saadiyat, Al Reem, Khalifa City. Hospital transfers and patient transport.",
  },
  {
    emirate: "Sharjah",
    title: "Ambulance Services Sharjah",
    url: "/sharjah-ambulance-services/",
    description: "Reliable ambulance services throughout Sharjah including Al Nahda, Al Majaz, Al Qasimia. Inter-emirate transfers available.",
  },
  {
    emirate: "Ajman",
    title: "Ambulance Services Ajman",
    url: "/ajman-ambulance-services/",
    description: "Medical transport in Ajman covering Al Nuaimiya, Al Rashidiya, Al Jurf, and industrial areas. Fast response times.",
  },
  {
    emirate: "Ras Al Khaimah",
    title: "Ambulance Services RAK",
    url: "/ras-al-khaimah-ambulance-services/",
    description: "Patient transfer and ambulance services in RAK including Al Hamra, Khuzam, Al Nakheel. Long-distance escorts available.",
  },
  {
    emirate: "Fujairah",
    title: "Ambulance Services Fujairah",
    url: "/fujairah-ambulance-services/",
    description: "Professional medical transport in Fujairah covering city center, Dibba, Masafi. Cross-emirate transfers available.",
  },
  {
    emirate: "Al Ain",
    title: "Ambulance Services Al Ain",
    url: "/al-ain-ambulance-services/",
    description: "24/7 ambulance and patient transport throughout Al Ain city and surrounding regions. Emergency and non-emergency.",
  },
  {
    emirate: "Umm Al Quwain",
    title: "Ambulance Services UAQ",
    url: "/umm-al-quwain-ambulance-services/",
    description: "Ambulance and patient transport in UAQ covering the city, industrial zones. Seamless transfers to other emirates.",
  },
];

const EmirateServices = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Serving the Entire UAE</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
              Find Your Local Service
            </h2>
            <p className="text-white/60 text-lg">
              We operate across all seven emirates with local teams and rapid response. Inter-emirate transfers are also available.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emirateServices.map((emirate, index) => (
              <Link
                key={index}
                to={emirate.url}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-semibold">{emirate.emirate}</span>
                </div>

                <h3 className="text-white font-bold text-base mb-2 group-hover:text-accent transition-colors">
                  {emirate.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {emirate.description}
                </p>

                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/50 mb-6">
              Need <strong className="text-white/80">medical transport between emirates</strong>? We offer seamless inter-emirate transfers.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold rounded-xl"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                Call for Inter-Emirate Transfer
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmirateServices;
