import React, { useEffect, useRef } from "react";

const TrustmaryWidget = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clean up previous instances if any
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = "https://widget.trustmary.com/D4dP0Hk22";
        script.async = true;

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <section className="py-20 bg-background" aria-labelledby="reviews-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold text-sm uppercase tracking-wide">Success Stories</span>
                    <h2 id="reviews-heading" className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
                        What Our Patients & Partners Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Trusted by hospitals, clinics, and families across the UAE for professional medical transport and compassionate care.
                    </p>
                </div>

                <div
                    style={{ minHeight: '600px' }}
                    className="max-w-6xl mx-auto trustmary-widget"
                    id="trustmary-widget-container"
                    ref={containerRef}
                >
                    {/* Script will be injected here */}
                </div>
            </div>
        </section>
    );
};

export default TrustmaryWidget;
