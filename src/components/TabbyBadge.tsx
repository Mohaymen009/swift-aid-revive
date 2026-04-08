import { useState } from "react";
import tabbyLogo from "@/assets/tabby-logo.png";

const TabbyBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
        aria-label="Learn about Tabby payment options"
      >
        <img
          src={tabbyLogo}
          alt="Tabby - Split payments into 4 interest-free instalments"
          className="h-6 w-auto rounded-md"
          width={80}
          height={24}
        />
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
          Pay in 4. Interest-free.
        </span>
      </button>

      {/* Popup overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none p-1"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={tabbyLogo}
                alt="Tabby payments"
                className="h-10 w-auto rounded-lg"
                width={120}
                height={40}
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Flexible Payment Options
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              We work with <strong className="text-gray-900">Tabby</strong> which lets you split your purchases into{" "}
              <strong className="text-gray-900">4 interest-free payments</strong> or up to{" "}
              <strong className="text-gray-900">12 monthly payments</strong>.
            </p>

            <ul className="space-y-2 mb-5">
              {[
                "No interest, no hidden fees",
                "Split into 4 equal payments",
                "Or choose up to 12 monthly instalments",
                "Quick and easy checkout",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-green-500 mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TabbyBadge;
