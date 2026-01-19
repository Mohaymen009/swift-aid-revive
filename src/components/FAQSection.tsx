import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : ''
      }
    }))
  };

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3
                  className="text-lg font-semibold text-gray-900 flex justify-between items-center"
                  itemProp="name"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </h3>
              </button>
              <div
                id={`faq-${index}`}
                className={`px-6 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div className="text-gray-600" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
