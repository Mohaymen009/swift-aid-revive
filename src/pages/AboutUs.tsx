import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Heart, Clock, MapPin, Users, Award, Shield, Stethoscope, Truck } from "lucide-react";

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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              About EMRS
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded on the principles of medical excellence and rapid response, <span className="text-primary font-bold">EMRS</span> has grown into a leading provider of clinical transport solutions throughout the UAE. Our mission is to bridge the gap between medical facilities and patients by offering specialized ambulance transfers that prioritize safety and clinical care in every journey.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a diverse team of international paramedics and nursing staff, we bring over half a century of shared expertise to the UAE's healthcare landscape. Our fleet represents the latest in medical transport technology, enabling us to handle everything from routine patient discharges to complex inter-hospital ICU transfers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We take pride in our ability to serve all seven emirates—Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain—with consistent quality. Our services are tailored to meet the unique needs of hospitals, clinics, and individuals, ensuring that every patient receives compassionate care and professional medical escorting.
            </p>
            <p className="text-lg text-gray-700">
              Operating 24/7, EMRS stands as a pillar of reliability in the UAE's healthcare ecosystem. We are committed to reducing the stress of medical logistics through punctuality, transparency, and a steadfast dedication to patient well-being across all our operations.
            </p>
          </section>

          {/* Core Values */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Patient-Centered Care",
                  description: "Every decision we make prioritizes patient comfort, safety, and dignity."
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Rigorous protocols and trained professionals ensure safe transport every time."
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description: "Punctual service you can count on for scheduled appointments and transfers."
                },
                {
                  icon: Award,
                  title: "Professionalism",
                  description: "Licensed staff, maintained vehicles, and transparent communication."
                }
              ].map((value, index) => (
                <div key={index} className="text-center bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section className="max-w-5xl mx-auto mb-16 bg-gray-50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Truck,
                  title: "Ambulance Transfer Services",
                  description: "Professional patient transfer and medical transport with trained paramedics. Hospital-to-hospital transfers, patient discharge transport, and inter-facility transfers available 24/7 across all UAE emirates."
                },
                {
                  icon: MapPin,
                  title: "Non-Emergency Medical Transport",
                  description: "Scheduled medical transport for dialysis appointments, outpatient procedures, medical check-ups, and routine hospital visits. Wheelchair and stretcher transport available."
                },
                {
                  icon: Stethoscope,
                  title: "Doctor on Call",
                  description: "24/7 doctor home visits and hotel doctor services across Dubai and UAE. Licensed physicians available for consultations, IV therapy, minor treatments, and prescription services at your location."
                },
                {
                  icon: Heart,
                  title: "Home Healthcare Services",
                  description: "Professional nursing care, physiotherapy, and elderly care in the comfort of your home. Post-operative care, wound management, medication administration, and rehabilitation services."
                },
                {
                  icon: Award, // Using Award as a placeholder for Repatriation if Plane is not available, or I can import Plane
                  title: "Repatriation Services",
                  description: "Specialized international patient transport services. We handle the complex logistics of moving patients across borders, including medical clearance, flight coordination, and bed-to-bed transfers."
                },
                {
                  icon: Users,
                  title: "Event Medical Coverage",
                  description: "Comprehensive medical support for corporate events, sports events, concerts, exhibitions, and private functions. On-site paramedics and ambulance standby services."
                }
              ].map((service, index) => (
                <div key={index} className="flex flex-col gap-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coverage Area */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              UAE-Wide Coverage
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              EMRS operates across all seven emirates of the United Arab Emirates, providing consistent,
              high-quality service whether you're in a major city or a more remote area:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Dubai",
                "Abu Dhabi",
                "Sharjah",
                "Ajman",
                "Ras Al Khaimah",
                "Fujairah",
                "Umm Al Quwain"
              ].map((emirate, index) => (
                <div key={index} className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-3">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{emirate}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Team */}
          <section className="max-w-4xl mx-auto mb-16 bg-blue-50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The strength of EMRS lies in our dedicated team of healthcare professionals. Every member
              of our organization is committed to delivering compassionate, professional care:
            </p>
            <ul className="space-y-4">
              {[
                "Licensed paramedics and Emergency Medical Technicians (EMTs)",
                "Qualified nurses with home healthcare experience",
                "Board-certified physicians for doctor on call services",
                "Trained patient transport specialists",
                "Experienced operations and dispatch coordinators",
                "Professional drivers with specialized medical transport training"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Why Choose EMRS?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "24/7 availability for your medical transport needs",
                "Fully licensed and compliant with UAE health regulations",
                "Modern, well-equipped ambulance fleet",
                "Transparent pricing with no hidden charges",
                "Multilingual staff (English, Arabic, Hindi, Urdu)",
                "Insurance coordination and documentation support",
                "Comfortable, dignified patient transport",
                "Prompt response and punctual scheduled services"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg p-4">
                  <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience Professional Care?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your medical transport or healthcare needs.
              Our team is available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971554728133"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call: +971 55 472 8133
              </a>
              <a
                href="https://wa.me/971554728133"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
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
