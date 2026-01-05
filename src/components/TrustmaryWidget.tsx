import { useEffect, useRef } from "react";

const TrustmaryWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const scriptId = "trustmary-widget-script-D4dP0Hk22";
          if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://widget.trustmary.com/D4dP0Hk22";
            script.async = true;
            document.head.appendChild(script);
          }
          observer.disconnect();
        }
      });
    }, { rootMargin: "200px" });

    observer.observe(widgetRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            What Our Patients & Partners Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real reviews from people who trust EMRS across the UAE.
          </p>
        </div>
        <div ref={widgetRef} className="mt-6 min-h-[400px]" data-trustmary-widget="D4dP0Hk22">
        </div>
      </div>
    </section>
  );
};

export default TrustmaryWidget;
