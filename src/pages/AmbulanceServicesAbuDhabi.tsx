import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, MapPin, Phone, Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmbulanceServicesAbuDhabi = () => {
    return (
        <ServicePageTemplate
            title="Ambulance Services Abu Dhabi | 24/7 Professional Medical Transport"
            description="Reliable ambulance services in Abu Dhabi. Licensed 24/7 patient transport, ICU transfers, and emergency response across the capital and Al Ain."
            canonical="https://emrs.ae/ambulance-services-abu-dhabi"
            imageUrl="/images/og/abu-dhabi-ambulance.jpg"
            imageAlt="Ambulance Services in Abu Dhabi"
            faqs={[]}
            phoneNumber="+971 55 472 8133"
        >
            <section className="py-20 bg-primary text-white text-center relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Ambulance Services in Abu Dhabi</h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
                        Professional medical response and patient transport services serving the entire Abu Dhabi Emirate.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 h-14 px-10 text-white font-bold rounded-xl" asChild>
                        <a href="tel:+971554728133"><Phone className="mr-3 h-6 w-6" /> Contact Abu Dhabi Team</a>
                    </Button>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <h2 className="text-3xl font-bold text-primary mb-6">Your Trusted Partner in Healthcare Across the Capital</h2>
                        <p className="mb-6">
                            Finding a reliable ambulance service in Abu Dhabi requires choosing a provider that understands the unique regulatory and geographic landscape of the capital. EMRS provides high-tier medical transport solutions that comply with all local health authority standards.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-2xl my-10 border-l-4 border-accent">
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                <Building2 className="text-accent" /> Hospital Coordination in Abu Dhabi
                            </h3>
                            <p>We work closely with major healthcare hubs in Abu Dhabi, including Sheikh Shakhbout Medical City (SSMC), Cleveland Clinic Abu Dhabi, and private facilities such as Burjeel and NMC. Our teams are well-versed in the protocols required for patient intake and transfers at these institutions.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">Coverage Areas: From City Center to Al Ain</h2>
                        <p className="mb-6">
                            Our Abu Dhabi division covers all major areas of the emirate, ensuring that no matter the location, professional medical help is just a phone call away.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {["Musaffah", "Yas Island", "Khalifa City", "Al Reem Island", "Al Ain", "Al Dhafra", "Ruwais", "Bani Yas"].map(area => (
                                <div key={area} className="p-4 bg-blue-50 text-center rounded-xl font-semibold text-primary">
                                    {area}
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-6">Types of Services Offered in Abu Dhabi</h2>
                        <ul className="list-disc pl-6 space-y-3 mb-8">
                            <li><strong>Advanced Life Support (ALS):</strong> For critical patients requiring high-level intervention during transit.</li>
                            <li><strong>Non-Emergency Patient Transfer:</strong> For stable patients going home or to follow-up visits.</li>
                            <li><strong>Event Medical Standby:</strong> Providing emergency medical coverage for corporate and sporting events in Abu Dhabi.</li>
                            <li><strong>International Repatriation Support:</strong> Coordinating patient transfers to and from Abu Dhabi International Airport.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mb-6">Excellence in Clinical Care</h2>
                        <p className="mb-6">
                            Our paramedics and EMTs in Abu Dhabi are selected for their extensive experience in emergency medicine. Every EMRS ambulance is a sterile, well-equipped environment where patient health is our only priority. We utilize the latest in resuscitation technology and monitoring systems to ensure safe passage across the emirate.
                        </p>

                        <div className="flex items-center gap-6 p-8 bg-blue-900 text-white rounded-2xl">
                            <Landmark className="w-16 h-16 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold mb-2">DHA & DOH Compliance</h4>
                                <p className="text-sm">EMRS operates in strict adherence to the regulations set by the Department of Health (DOH) Abu Dhabi, ensuring the highest standards of safety and professional conduct at all times.</p>
                            </div>
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

export default AmbulanceServicesAbuDhabi;
