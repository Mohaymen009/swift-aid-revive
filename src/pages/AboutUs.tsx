import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Heart, Clock, MapPin, Users, Award, Shield, Stethoscope, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead
        title="About EMRS | Professional Ambulance & Healthcare Services UAE"
        description="Learn about EMRS - UAE's trusted provider of professional ambulance services, patient transport, and home healthcare. Serving all seven emirates with licensed medical professionals."
        canonical="https://emrs.ae/about-us/"
        image="/site-logo.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              About EMRS
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Providing professional ambulance and medical transport services across all seven emirates of the UAE.
              Your trusted partner for reliable healthcare logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Who We Are */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6">Who We Are</h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded on the principles of medical excellence and rapid response, <strong className="text-primary">EMRS</strong> has grown into a leading provider of clinical transport solutions throughout the UAE. Our mission is to bridge the gap between medical facilities and patients by offering specialized <strong>ambulance transfers</strong> that prioritize safety and clinical care in every journey.
              </p>
              <p>
                With a diverse team of international paramedics and nursing staff, we bring over half a century of shared expertise to the UAE's healthcare landscape. Our fleet represents the latest in medical transport technology, enabling us to handle everything from routine patient discharges to complex inter-hospital <Link to="/icu-ambulance-dubai/" className="text-accent hover:underline font-semibold">ICU transfers</Link>.
              </p>
              <p>
                We serve all seven emirates—<Link to="/dubai-ambulance-services/" className="text-accent hover:underline">Dubai</Link>, <Link to="/abu-dhabi-ambulance-services/" className="text-accent hover:underline">Abu Dhabi</Link>, <Link to="/sharjah-ambulance-services/" className="text-accent hover:underline">Sharjah</Link>, <Link to="/ajman-ambulance-services/" className="text-accent hover:underline">Ajman</Link>, <Link to="/ras-al-khaimah-ambulance-services/" className="text-accent hover:underline">Ras Al Khaimah</Link>, <Link to="/fujairah-ambulance-services/" className="text-accent hover:underline">Fujairah</Link>, and <Link to="/umm-al-quwain-ambulance-services/" className="text-accent hover:underline">Umm Al Quwain</Link>—with consistent quality. Operating under UAE health authority regulations. <Link to="/licensing/" className="text-accent hover:underline font-semibold">Licensing documents available upon request</Link>.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Patient-Centered Care", description: "Every decision we make prioritizes patient comfort, safety, and dignity." },
                { icon: Shield, title: "Safety First", description: "Rigorous protocols and trained professionals ensure safe transport every time." },
                { icon: Clock, title: "Reliability", description: "Punctual service you can count on for scheduled appointments and transfers." },
                { icon: Award, title: "Professionalism", description: "Licensed staff, maintained vehicles, and transparent communication." },
              ].map((value, index) => (
                <div key={index} className="text-center bg-white border border-border rounded-xl p-6 shadow-card">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section className="max-w-5xl mx-auto mb-16 bg-secondary rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-8 text-center">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Truck, title: "Ambulance Transfer Services", description: "Professional patient transfer and medical transport with trained paramedics. Hospital-to-hospital transfers, patient discharge transport, and inter-facility transfers available 24/7.", link: "/ambulance-services-uae/" },
                { icon: MapPin, title: "Non-Emergency Medical Transport", description: "Scheduled medical transport for dialysis, outpatient procedures, check-ups, and routine hospital visits. Wheelchair and stretcher transport available.", link: "/non-emergency-medical-transport-uae/" },
                { icon: Stethoscope, title: "Doctor on Call", description: "24/7 doctor home visits and hotel doctor services across Dubai and UAE. Licensed physicians for consultations, IV therapy, and prescriptions.", link: "https://homehealthcare.emrs.ae/", external: true },
                { icon: Heart, title: "Home Healthcare Services", description: "Professional nursing care, physiotherapy, and elderly care at home. Post-operative care, wound management, and rehabilitation.", link: "https://homehealthcare.emrs.ae/", external: true },
                { icon: Award, title: "Private Ambulance", description: "Dedicated private ambulance hire with ICU capability, airport medical escorts, and international repatriation coordination.", link: "/private-ambulance-uae/" },
                { icon: Users, title: "Event Medical Coverage", description: "On-site paramedics and ambulance standby for corporate events, sports, concerts, and private functions.", link: "/event-medical-services-uae/" },
              ].map((service, index) => (
                <div key={index} className="flex flex-col gap-4 bg-white rounded-lg p-6 shadow-card border border-border hover:shadow-elevated transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                    {service.external ? (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-semibold hover:underline">Learn More →</a>
                    ) : (
                      <Link to={service.link} className="text-accent text-sm font-semibold hover:underline">Learn More →</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coverage Area */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6">UAE-Wide Coverage</h2>
            <p className="text-lg text-muted-foreground mb-6">
              EMRS operates across all seven emirates, providing consistent, high-quality <strong>ambulance services</strong> whether you're in a major city or a remote area:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "Dubai", link: "/dubai-ambulance-services/" },
                { name: "Abu Dhabi", link: "/abu-dhabi-ambulance-services/" },
                { name: "Sharjah", link: "/sharjah-ambulance-services/" },
                { name: "Ajman", link: "/ajman-ambulance-services/" },
                { name: "Ras Al Khaimah", link: "/ras-al-khaimah-ambulance-services/" },
                { name: "Fujairah", link: "/fujairah-ambulance-services/" },
                { name: "Umm Al Quwain", link: "/umm-al-quwain-ambulance-services/" },
              ].map((emirate) => (
                <Link key={emirate.name} to={emirate.link} className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3 hover:bg-accent/10 transition-colors">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{emirate.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Our Team */}
          <section className="max-w-4xl mx-auto mb-16 bg-secondary rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The strength of EMRS lies in our dedicated team of healthcare professionals, all operating under strict <Link to="/medical-oversight/" className="text-accent hover:underline font-semibold">medical oversight</Link>:
            </p>
            <ul className="space-y-4">
              {[
                "Licensed paramedics and EMTs with DHA/HAAD credentials",
                "Qualified nurses with home healthcare experience",
                "Board-certified physicians for doctor on call services",
                "Trained patient transport specialists",
                "Experienced operations and dispatch coordinators",
                "Professional drivers with specialized medical transport training",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact CTA */}
          <section className="max-w-4xl mx-auto text-center bg-primary rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Experience Professional Care?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your medical transport or healthcare needs. Our team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971503790382" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Call: +971 50 379 0382
              </a>
              <a href="https://wa.me/971503790382" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center gap-2 bg-[#11632B] hover:bg-[#0D4D21] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                <img src="/whatsapp.svg" alt="WhatsApp EMRS" width={20} height={20} className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default AboutUs;
