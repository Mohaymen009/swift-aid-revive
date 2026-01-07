import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const emirateServices = [
  {
    emirate: "Dubai",
    title: "Ambulance Services Dubai",
    url: "/dubai-ambulance-services",
    description: "Professional ambulance and patient transport services across Dubai including Dubai Marina, Downtown, JBR, Business Bay, Palm Jumeirah, and all areas. 24/7 availability."
  },
  {
    emirate: "Abu Dhabi",
    title: "Ambulance Services Abu Dhabi",
    url: "/abu-dhabi-ambulance-services",
    description: "Comprehensive medical transport in Abu Dhabi city, Yas Island, Saadiyat Island, Al Reem Island, Khalifa City, and surrounding areas. Hospital transfers and patient transport."
  },
  {
    emirate: "Sharjah",
    title: "Ambulance Services Sharjah",
    url: "/sharjah-ambulance-services",
    description: "Reliable ambulance services throughout Sharjah including Al Nahda, Al Majaz, Al Qasimia, and industrial areas. Inter-emirate transfers to Dubai and other emirates available."
  },
  {
    emirate: "Ajman",
    title: "Ambulance Services Ajman",
    url: "/ajman-ambulance-services",
    description: "Medical transport services in Ajman covering Al Nuaimiya, Al Rashidiya, Al Jurf, and Ajman Industrial areas. Fast response times and professional care."
  },
  {
    emirate: "Ras Al Khaimah",
    title: "Ambulance Services Ras Al Khaimah",
    url: "/ras-al-khaimah-ambulance-services",
    description: "Patient transfer and ambulance services in RAK including Al Hamra, Khuzam, Al Nakheel, and northern areas. Long-distance medical escorts available."
  },
  {
    emirate: "Fujairah",
    title: "Ambulance Services Fujairah",
    url: "/fujairah-ambulance-services",
    description: "Professional medical transport in Fujairah covering the city center, Dibba, Masafi, and coastal areas. Cross-emirate hospital transfers available."
  },
  {
    emirate: "Umm Al Quwain",
    title: "Ambulance Services Umm Al Quwain",
    url: "/umm-al-quwain-ambulance-services",
    description: "Ambulance and patient transport services in UAQ covering the city, industrial zones, and surrounding areas. Seamless transfers to other emirates."
  }
];

const EmirateServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">UAE-Wide Coverage</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Ambulance Services Across All Seven Emirates
            </h2>
            <p className="text-lg text-muted-foreground">
              EMRS provides professional ambulance and medical transport services throughout the United Arab Emirates. Whether you need patient transfers in Dubai, medical transport in Abu Dhabi, or ambulance services in Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain – our team is ready to assist 24/7.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {emirateServices.map((emirate, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-accent">{emirate.emirate}</span>
                  </div>

                  <div className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4 group-hover:text-accent transition-colors">
                    {emirate.title}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                    {emirate.description}
                  </p>

                  <Button
                    variant="outline"
                    className="group hover:bg-accent hover:text-white border-accent/20 hover:border-accent font-semibold w-full sm:w-auto"
                    asChild
                  >
                    <Link
                      to={emirate.url}
                      className="flex items-center justify-center gap-2"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {emirate.emirate} Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Need medical transport between emirates? EMRS offers seamless inter-emirate transfers across all of the UAE.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                24/7 Emergency Medical Response - Call Now
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
