import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Shield, Award, FileCheck, Building2, Users, CheckCircle2, ShieldCheck } from "lucide-react";

const Licensing = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead
        title="Licensing & Regulatory Compliance | EMRS UAE"
        description="EMRS is a fully licensed ambulance and medical transport provider in the UAE. Learn about our DHA and MOH compliance, medical governance, and professional standards."
        canonical="https://emrs.ae/licensing"
        image="/site-logo.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/90 text-sm font-medium">Fully Licensed & Compliant</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Licensing & Regulatory Compliance
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              EMRS operates under full regulatory compliance with UAE health authorities.
              Our commitment to legal and medical standards ensures the highest quality care for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Licensing Overview */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Regulatory Framework
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              <a href="/ambulance-services-uae" className="text-blue-600 hover:underline">ambulance and medical transport provider</a> operating across all seven emirates of the UAE,
              EMRS maintains strict compliance with all relevant health authority regulations. Our operations are governed
              by the regulatory frameworks established by the Ministry of Health and Prevention (MOHAP), Dubai Health
              Authority (DHA), and Ministry of Health and Prevention (MOHAP).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Every aspect of our service—from vehicle specifications to staff qualifications—adheres to the standards
              set forth by these regulatory bodies, ensuring patient safety and quality of care remain our top priorities.
            </p>
            {/* Professional Certifications & Licensing */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-accent" />
                Professional Certifications & Licensing
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-slate-700">
                <div>
                  <h4 className="font-bold text-primary mb-3">Staff Licensing</h4>
                  <p className="mb-4">
                    Our medical team, including Paramedics, Medics, and EMTs, holds both <span className="font-bold">UAE Professional Licenses</span> (DHA/HAAD/MOH) and <span className="font-bold">Home Country Licenses</span>, ensuring international standards and local compliance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Dual-licensed professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>Continuous professional development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Advanced Certifications</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span><span className="font-bold">PHTLS:</span> Pre-Hospital Trauma Life Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span><span className="font-bold">ACLS:</span> Advanced Cardiac Life Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span><span className="font-bold">PALS:</span> Paediatric Advanced Life Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span><span className="font-bold">BLS:</span> Basic Life Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span><span className="font-bold">Rescue Certified:</span> Specialized Rescue Operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 italic">"Quality medical care is not just about the equipment; it's about the standard of leadership and clinical competence."</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-white/30"></div>
                    <p className="font-semibold text-blue-100">EMRS Clinical Governance Team</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Areas of Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: "Business Licensing",
                  description: "Fully registered and licensed to operate ambulance and medical transport services across the UAE."
                },
                {
                  icon: Award,
                  title: "Healthcare Standards",
                  description: "Adherence to UAE healthcare quality standards and international best practices for patient care."
                },
                {
                  icon: Building2,
                  title: "Vehicle Certification",
                  description: "All ambulances meet regulatory specifications for medical equipment, safety, and patient transport."
                },
                {
                  icon: Users,
                  title: "Staff Credentials",
                  description: "All medical personnel hold valid UAE healthcare licenses and undergo regular training updates."
                },
                {
                  icon: Shield,
                  title: "Insurance Coverage",
                  description: "Comprehensive liability insurance protecting patients and operations in accordance with UAE law."
                },
                {
                  icon: CheckCircle2,
                  title: "Quality Assurance",
                  description: "Regular audits and inspections to ensure ongoing compliance with all regulatory requirements."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Staff Qualifications */}
          <section className="max-w-4xl mx-auto mb-16 bg-gray-50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Medical Staff Qualifications
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our medical team consists of qualified healthcare professionals who meet the stringent requirements
              of UAE health authorities:
            </p>
            <ul className="space-y-4">
              {[
                "All paramedics and EMTs hold valid UAE healthcare professional licenses",
                "Regular continuing education and skills certification",
                "Basic Life Support (BLS) and Advanced Cardiac Life Support (ACLS) certified",
                "Training in patient handling, medical emergencies, and transport protocols",
                "Background verification and credential authentication",
                "Ongoing professional development and performance evaluation"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Fleet Standards */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ambulance Fleet Standards
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Every vehicle in our fleet is maintained to the highest standards and equipped according to
              regulatory specifications:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Regular inspection and certification",
                "Compliant medical equipment inventory",
                "GPS tracking and communication systems",
                "Sanitization protocols between transports",
                "Wheelchair and stretcher accessibility",
                "Climate-controlled patient compartments",
                "Emergency medical supplies and medications",
                "Proper waste disposal systems"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Patient Rights */}
          <section className="max-w-4xl mx-auto mb-16 bg-blue-50 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Patient Rights & Privacy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              EMRS is committed to upholding patient rights and maintaining strict confidentiality in
              accordance with UAE healthcare regulations:
            </p>
            <ul className="space-y-4">
              {[
                "Patient information is handled with strict confidentiality",
                "Compliance with UAE data protection requirements",
                "Transparent communication about services and procedures",
                "Respect for patient dignity and comfort during transport",
                "Clear consent processes for all medical interventions",
                "Accessible complaint and feedback mechanisms"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact for Verification */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Verify Our Credentials
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For verification of our licensing and regulatory compliance, or for any questions regarding
              our operational standards, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971554728133"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call: +971 55 472 8133
              </a>
              <a
                href="mailto:info@emrs.ae"
                className="inline-flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Email: info@emrs.ae
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

export default Licensing;
