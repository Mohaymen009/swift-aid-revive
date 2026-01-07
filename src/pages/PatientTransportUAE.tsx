import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, Clock, Phone, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PatientTransportUAE = () => {
    const faqs = [
        {
            question: "How do I book patient transport?",
            answer: "You can book patient transport by calling our 24/7 hotline or messaging us on WhatsApp. We'll need patient details and transport requirements."
        },
        {
            question: "Is patient transport suitable for elderly citizens?",
            answer: "Absolutely. Our patient transport service is designed with the elderly in mind, providing assistance from bed-to-bed with maximum comfort."
        }
    ];

    return (
        <ServicePageTemplate
            title="Patient Transport Services UAE | 24/7 Safe & Reliable Transfer"
            description="Specialized patient transport services across UAE. Ideal for hospital discharges, dialysis appointments, and non-emergency medical transfers. Available 24/7."
            canonical="https://emrs.ae/patient-transport"
            imageUrl="/images/og/patient-transport.jpg"
            imageAlt="Patient Transport Services in UAE"
            faqs={faqs}
            phoneNumber="+971 55 472 8133"
        >
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Safe Patient Transport Across UAE</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        Non-emergency ambulance and patient transfer solutions tailored to your specific medical needs.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 h-14 px-10 text-white font-bold rounded-xl" asChild>
                        <a href="tel:+971554728133"><Phone className="mr-3 h-6 w-6" /> Book Patient Transport</a>
                    </Button>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <h2 className="text-3xl font-bold text-primary mb-6">Professional Patient Transfer Services for the UAE Community</h2>
                        <p className="mb-8">
                            Navigating medical appointments and hospital discharges shouldn't be a source of stress. EMRS provides specialized patient transport services across Dubai, Abu Dhabi, Sharjah, and the northern emirates, ensuring that every patient reaches their destination with dignity and care.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 my-12">
                            {[
                                { title: "Dialysis Transport", text: "Regular, reliable transport for dialysis patients seeking clinical consistency." },
                                { title: "Discharge Assistance", text: "Safe return home after hospital admission with professional monitoring." },
                                { title: "Outpatient Visits", text: "Stress-free transport to and from specialist clinics and diagnostic centers." }
                            ].map((item, i) => (
                                <div key={i} className="border border-blue-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">A Focus on Comfort and Patient Stability</h2>
                        <p className="mb-6">
                            Our patient transport vehicles are not just cars; they are designed for clinical safety. We utilize ergonomic stretchers, specialized seating, and climate control to ensure that even short journeys are as comfortable as possible for those with medical conditions.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mb-6">Bed-to-Bed Service: What Does It Mean?</h2>
                        <p className="mb-6">
                            Unlike standard taxi services, EMRS offers a comprehensive "bed-to-bed" service. Our medical technicians will assist the patient from their bedside, handle all logistics during the journey, and ensure they are safely settled in their destination bed or clinical chair. This level of support is vital for patients with limited mobility or those recovering from surgery.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mb-6">Serving All Corners of the Emirates</h2>
                        <div className="flex flex-wrap gap-4 mb-10">
                            {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((city) => (
                                <div key={city} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-primary font-semibold">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    {city}
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">How to Prepare for Your Transport</h2>
                        <p className="mb-6">
                            When booking with EMRS, please have the following information ready: patient name, pickup/drop-off location, medical condition, and any specific equipment needs (like oxygen or wheelchair access). This allows our team to dispatch the most appropriate vehicle and staff for your requirements.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
            <FloatingContact />
        </ServicePageTemplate>
    );
};

export default PatientTransportUAE;
