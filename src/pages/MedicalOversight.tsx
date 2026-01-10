
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Stethoscope, Activity, FileText, Users, ShieldCheck, BookOpen } from "lucide-react";

const MedicalOversight = () => {
    return (
        <div className="min-h-screen" id="home">
            <SEOHead
                title="Medical Oversight & Clinical Governance | EMRS UAE"
                description="Our clinical operations are led by licensed medical directors ensuring the highest standards of pre-hospital care, compliance, and patient safety in the UAE."
                canonical="https://emrs.ae/medical-oversight/"
                image="/site-logo.png"
            />
            <Navigation />

            {/* Hero Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                            <Stethoscope className="w-5 h-5 text-green-400" />
                            <span className="text-white/90 text-sm font-medium">Physician-Led Care</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Medical Oversight & Clinical Governance
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                            At EMRS, patient safety is our absolute priority. Our <a href="/doctor-on-call-uae" className="text-white underline decoration-blue-300 hover:text-blue-200">Doctor on Call</a> and <a href="/ambulance-services-uae" className="text-white underline decoration-blue-300 hover:text-blue-200">Ambulance Services</a> are guided by strict clinical protocols
                            and overseen by qualified medical directors to ensure evidence-based pre-hospital care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Governance Structure */}
                    <section className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                            Clinical Leadership
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Our clinical governance framework ensures that every decision works towards the best possible outcome for the patient.
                            This structure is led by experienced medical professionals who define our scopes of practice.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Medical Director</h3>
                                        <p className="text-blue-600 text-sm">Consultant Emergency Physician</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Responsible for all clinical protocols, offline medical direction, and quality assurance reviews.
                                    Ensures alignment with international resuscitation guidelines and local health authority regulations.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                        <Activity className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Clinical Operations Manager</h3>
                                        <p className="text-green-600 text-sm">Senior Paramedic Specialist</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Oversees daily clinical operations, staff competencies, equipment readiness, and adherence to
                                    standard operating procedures (SOPs) during patient transfers.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Governance Areas */}
                    <section className="max-w-5xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Our Clinical Standards
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: BookOpen,
                                    title: "Evidence-Based Protocols",
                                    description: "Treatment guidelines derived from the latest AHA and ERC resuscitation standards."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Quality Assurance",
                                    description: "100% PCR (Patient Care Report) audit rate for critical cases to monitor clinical quality."
                                },
                                {
                                    icon: FileText,
                                    title: "Documentation",
                                    description: "Detailed electronic medical records maintained for continuity of care and legal compliance."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust Statement (Box) */}
                    <section className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 sm:p-10 border-l-4 border-blue-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Commitment to Clinical Excellence</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            EMRS does not compromise on medical safety. Our oversight mechanisms act as a safeguard, ensuring that
                            every ambulance dispatch is not just a transport service, but a professional medical intervention.
                            We operate under the direct authorization of relevant UAE health authorities.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                DHA Compliant
                            </span>
                            <span className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                MOHAP Regulations
                            </span>
                        </div>
                    </section>

                </div>
            </main >

            <Footer />
            <FloatingContact />
        </div >
    );
};

export default MedicalOversight;
