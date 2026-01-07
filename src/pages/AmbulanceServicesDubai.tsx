import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, MapPin, Phone, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmbulanceServicesDubai = () => {
    return (
        <ServicePageTemplate
            title="Ambulance Services Dubai | 24/7 Professional Medical Transport"
            description="Premier ambulance services in Dubai. Licensed 24/7 patient transport, critical care ICU transfers, and medical standby services throughout the city."
            canonical="https://emrs.ae/ambulance-services-dubai"
            imageUrl="/images/og/dubai-ambulance.jpg"
            imageAlt="Ambulance Services in Dubai"
            faqs={[]}
            phoneNumber="+971 55 472 8133"
        >
            <section className="py-20 bg-primary text-white text-center relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Ambulance Services in Dubai</h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
                        Reliable 24/7 medical transport and response services across the heart of Dubai.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 h-14 px-10 text-white font-bold rounded-xl" asChild>
                        <a href="tel:+971554728133"><Phone className="mr-3 h-6 w-6" /> Call Dubai Dispatch</a>
                    </Button>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <h2 className="text-3xl font-bold text-primary mb-6">Premium Medical Transport in a Global Hub</h2>
                        <p className="mb-6">
                            Dubai is a fast-paced city where having a dependable medical transport partner is essential. EMRS provides world-class ambulance services in Dubai, catering to residents, tourists, and healthcare facilities with equal precision and dedication.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <Zap className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-3">Rapid Deployment</h3>
                                <p className="text-sm">Strategic positioning of our fleet across Dubai allows for quick response times and efficient patient transfers, even during peak traffic hours.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-3">Licensed & Regulated</h3>
                                <p className="text-sm">Our services are fully licensed by the Dubai Health Authority (DHA), ensuring that every aspect of our care meets the highest municipal standards.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">Extensive Coverage Across the City</h2>
                        <p className="mb-6">
                            From the historical districts of Deira to the futuristic skyline of Dubai Marina, EMRS is present everywhere. We provide localized services for every community in Dubai:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
                            {["Downtown Dubai", "Dubai Marina", "Jumeirah", "Business Bay", "Deira", "Bur Dubai", "Al Quoz", "JLT", "DIFC", "Mirdif"].map(area => (
                                <div key={area} className="p-3 bg-gray-100 rounded-lg text-primary text-xs font-bold uppercase tracking-wider">
                                    {area}
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">Expert Hospital Transfers in Dubai</h2>
                        <p className="mb-6">
                            Dubai is home to some of the finest medical centers in the world. EMRS facilitates critical and non-emergency transfers to and from flagship hospitals like Rashid Hospital, Dubai Hospital, Mediclinic City Hospital, and Kings College Hospital Dubai. We ensure that the handover process between medical teams is professional and clinically accurate.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mb-6">Why Dubai Families Trust EMRS</h2>
                        <p className="mb-8">
                            Excellence doesn't happen by accident. Families across Dubai choose us because we treat every patient like they are our own family. Our ambulances are equipped with the latest medical technology, and our professionals are trained in both clinical care and empathic communication.
                        </p>

                        <div className="p-8 bg-primary text-white rounded-3xl text-center">
                            <h3 className="text-2xl font-bold mb-4">Need a Patient Transfer in Dubai Today?</h3>
                            <p className="mb-6 opacity-90">Our dispatch team is standing by to assist with your medical transport request. Available 24/7 across all of Dubai.</p>
                            <Button className="bg-white text-primary hover:bg-gray-100 font-bold" asChild>
                                <a href="tel:+971554728133">Call +971 55 472 8133</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
            <FloatingContact />
        </ServicePageTemplate>
    );
};

export default AmbulanceServicesDubai;
