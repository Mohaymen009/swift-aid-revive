import React from 'react';
import ServicePageTemplate from '../templates/ServicePageTemplate';
import { Ambulance, Calendar, Globe, Phone } from 'lucide-react';

const AlAinAmbulanceServices = () => {
    const updates = [
        "New ambulance fleet in Al Ain",
        "24/7 patient transport available",
        "Expanded coverage to industrial areas"
    ];

    const faqs = [
        {
            question: "Do you provide ambulance services in Al Ain?",
            answer: "Yes. We cover all areas of Al Ain. This includes the city center, industrial areas, and outskirts. We are available 24/7."
        },
        {
            question: "How can I book an ambulance?",
            answer: "Booking is easy. Call us at +971 55 472 8133. You can also message us on WhatsApp. We respond immediately."
        },
        {
            question: "Do you offer non-emergency transport?",
            answer: "Yes. We specialize in non-emergency transport. We handle hospital appointments, dialysis visits, and patient discharges."
        },
        {
            question: "Are your ambulances equipped?",
            answer: "Yes. All our ambulances are fully equipped. They have advanced medical tools. We adhere to strict safety standards."
        },
        {
            question: "Can you transfer patients to Abu Dhabi or Dubai?",
            answer: "Yes. We provide long-distance transfers. We can move patients from Al Ain to any hospital in the UAE safely."
        }
    ];

    return (
        <ServicePageTemplate
            title="Ambulance Services in Al Ain"
            seoTitle="Al Ain Ambulance Services | 24/7 Patient Transport | EMRS"
            description="Reliable ambulance services in Al Ain. We provide 24/7 emergency and non-emergency patient transport. Professional medical team. Call now."
            imageUrl="/site-logo.png"
            imageAlt="Ambulance Services in Al Ain UAE"
            lastUpdated="2025-01-10"
            updates={updates}
            faqs={faqs}
            canonical="https://emrs.ae/al-ain-ambulance-services/"
            emirate="Al Ain"
        >
            {/* Introduction */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Medical Transport in Al Ain</h2>
                <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                        EMRS provides top-quality ambulance services in Al Ain. We are here to help you 24 hours a day. Our goal is safe and quick medical transport.
                    </p>
                    <p className="mb-4">
                        We serve hospitals, clinics, and homes. Our team is trained and caring. We ensure every patient is comfortable.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services in Al Ain</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                            <Ambulance className="w-5 h-5" />
                            Patient Transport
                        </h3>
                        <p className="text-gray-700">
                            Safe rides for patients. We help with:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>Hospital appointments</li>
                            <li>Dialysis sessions</li>
                            <li>Physiotherapy visits</li>
                            <li>Routine check-ups</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            Transfer Services
                        </h3>
                        <p className="text-gray-700">
                            We move patients between facilities.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>Hospital to hospital</li>
                            <li>Hospital to home</li>
                            <li>Al Ain to other Emirates</li>
                            <li>Airport transfers</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Emergency Support
                        </h3>
                        <p className="text-gray-700">
                            Ready for urgent needs.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>24/7 Availability</li>
                            <li>Quick response time</li>
                            <li>Trained paramedics</li>
                            <li>Advanced life support</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Event Coverage
                        </h3>
                        <p className="text-gray-700">
                            Medical safety for events.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>Sports events</li>
                            <li>Corporate gatherings</li>
                            <li>Public exhibitions</li>
                            <li>Private parties</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose EMRS?</h2>
                <div className="bg-white border rounded-xl p-8 shadow-sm">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="bg-green-100 text-green-700 p-1 rounded-full text-xs font-bold">✓</span>
                            <span className="text-gray-700"><strong>Experienced Team:</strong> Our staff is certified and skilled.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-green-100 text-green-700 p-1 rounded-full text-xs font-bold">✓</span>
                            <span className="text-gray-700"><strong>Modern Fleet:</strong> Clean, safe, and fully equipped ambulances.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-green-100 text-green-700 p-1 rounded-full text-xs font-bold">✓</span>
                            <span className="text-gray-700"><strong>Always Open:</strong> We operate 24 hours a day, 7 days a week.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-green-100 text-green-700 p-1 rounded-full text-xs font-bold">✓</span>
                            <span className="text-gray-700"><strong>Affordable:</strong> Quality service at fair prices.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas Support in Al Ain</h2>
                <p className="text-gray-600 mb-4">We cover all major locations, including:</p>
                <div className="flex flex-wrap gap-2">
                    {['Al Jimi', 'Al Jahili', 'Al Maqam', 'Zakher', 'Al Muwaiji', 'Al Foah', 'Al Yahar', 'Al Ain Industrial Area', 'Town Center'].map((area) => (
                        <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {area}
                        </span>
                    ))}
                </div>
            </section>

        </ServicePageTemplate>
    );
};

export default AlAinAmbulanceServices;
