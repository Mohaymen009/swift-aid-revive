import React from "react";
import { Star, Quote } from "lucide-react";

interface Review {
    name: string;
    rating: number;
    text: string;
    date: string;
}

const reviews: Review[] = [
    {
        name: "Ahmed Al-Maktoum",
        rating: 5,
        text: "Excellent and professional medical team. They handled the patient transfer with great care and efficiency. Highly recommended for ambulance services in Dubai.",
        date: "2 months ago",
    },
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Used their home healthcare service for my elderly parents. The medical staff are knowledgeable, punctual, and very compassionate. Best healthcare partner in UAE.",
        date: "1 month ago",
    },
    {
        name: "Mohammad Bin Rashid",
        rating: 5,
        text: "Punctual, professional, and reliable. The ambulance was well-equipped and the paramedics were very attentive. Great service for non-emergency transport.",
        date: "3 weeks ago",
    },
];

const SuccessStories = () => {
    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold text-sm uppercase tracking-wide">Customer Feedback</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
                        Trusted by Thousands Across the UAE
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-lg font-bold text-primary">5.0 Rating on Google</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We take pride in delivering professional, compassionate, and timely medical services. Here is what our clients have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-b from-white to-blue-light/30 border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-elevated transition-all duration-300 relative"
                        >
                            <div className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors">
                                <Quote size={40} fill="currentColor" />
                            </div>

                            <div className="flex text-accent mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6 italic min-h-[100px]">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Maps link */}
                <div className="mt-16 text-center">
                    <a
                        href="https://maps.app.goo.gl/GPTV5QJX1e768W8C7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
                    >
                        Read more reviews on Google Maps
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
