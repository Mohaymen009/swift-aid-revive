import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Shield, Music, Users, Trophy, Heart, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventMedicalCoverage = () => {
    return (
        <div className="min-h-screen">
            <SEOHead
                title="Event Medical Services Dubai & UAE | Ambulance Standby"
                description="Professional event medical coverage and ambulance standby services in Dubai and UAE. Licensed paramedics and medical teams for sports, corporate, and private events."
                canonical="https://emrs.ae/event-medical-services-uae/"
                image="/site-logo.png"
                keywords={[
                    "event medical services dubai",
                    "ambulance standby uae",
                    "event first aid dubai",
                    "medical coverage for events",
                    "sports event ambulance",
                    "corporate event medical support"
                ]}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-bold tracking-wide mb-6 border border-blue-400/30">
                            Trusted Event Safety Partner
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Event Medical Coverage & Ambulance Standby
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Ensure the safety of your guests with our professional on-site medical teams.
                            From gala dinners to major sporting events, EMRS provides licensed paramedics and fully equipped ambulances across the UAE.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all" asChild>
                                <a href="tel:+971554728133">Request Event Quotation</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Event Safety Solutions</h2>
                        <p className="text-gray-600">We tailor our medical support to the specific risk profile and size of your event.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Trophy,
                                title: "Sports Events",
                                desc: "Pitch-side paramedics and ambulances for tournaments, marathons, and motorsports."
                            },
                            {
                                icon: Music,
                                title: "Concerts & Festivals",
                                desc: "High-capacity medical tents and crowd safety teams for large-scale gatherings."
                            },
                            {
                                icon: Users,
                                title: "Corporate Functions",
                                desc: "Discreet medical presence for VIP galas, conferences, and exhibitions."
                            },
                            {
                                icon: Shield,
                                title: "Risk Assessment",
                                desc: "Pre-event medical risk analysis and safety planning in compliance with Dubai Health Authority regulations."
                            },
                            {
                                icon: Heart,
                                title: "VIP Medical Support",
                                desc: "Dedicated doctors and paramedics for dignitaries and high-profile attendees."
                            },
                            {
                                icon: CheckCircle,
                                title: "Fully Licensed",
                                desc: "All our staff and vehicles are fully licensed by DCAS (Dubai), DOH (Abu Dhabi), and MOH."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-primary mb-6">Planning an Event in the UAE?</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Don't leave safety to chance. Contact our events team for a customized medical coverage plan that meets all regulatory requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-[#11632B] hover:bg-[#0D4D21] text-white h-12 px-8 rounded-xl font-bold flex items-center gap-2" asChild>
                                    <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer">
                                        WhatsApp Us
                                    </a>
                                </Button>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 h-12 px-8 rounded-xl font-bold flex items-center gap-2" asChild>
                                    <a href="tel:+971554728133">
                                        <Phone className="w-4 h-4" /> Call 24/7 Dispatch
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </div>
    );
};

export default EventMedicalCoverage;
