import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I book an ambulance with EMRS?",
    answer: "You can call us directly at +971 55 472 8133 or send a WhatsApp message. For non-urgent transfers, we recommend booking 2-4 hours in advance. For urgent needs, we respond immediately."
  },
  {
    question: "What areas do you serve in the UAE?",
    answer: "We serve all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also provide inter-emirate transfers and can arrange international medical repatriation."
  },
  {
    question: "Are your paramedics licensed?",
    answer: "Yes, all our medical staff hold valid UAE healthcare professional licenses (DHA, HAAD, or MOH). They are certified in BLS, ACLS, and other advanced life support protocols. Learn more on our Licensing page."
  },
  {
    question: "How much does private ambulance service cost?",
    answer: "Pricing depends on the type of service, distance, and medical equipment required. We provide transparent quotes before service. Many insurance plans cover our services—we can help verify your coverage."
  },
  {
    question: "Can you transport patients who need medical equipment?",
    answer: "Absolutely. Our ambulances are equipped with stretchers, wheelchairs, oxygen, cardiac monitors, and other life-support equipment. We handle ventilator patients, dialysis transport, and specialized medical needs."
  },
  {
    question: "Do you offer doctor home visits?",
    answer: "Yes, our Doctor on Call service provides licensed physicians for home and hotel visits across the UAE. Available 24/7 for consultations, IV therapy, and minor treatments."
  }
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our medical transport services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default HomeFAQ;
