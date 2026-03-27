import ServicePageTemplate from "@/components/ServicePageTemplate";

const HomeHealthcareServicesDubai = () => {
  return (
    <ServicePageTemplate
      title="Home Healthcare Services Dubai"
      subtitle="Professional medical care, nursing, and doctor visits in the comfort of your home."
      description={`EMRS brings high-quality medical services directly to your doorstep in Dubai. Our home healthcare services are designed for patients who prefer the comfort and convenience of their own home, while still requiring professional medical attention/oversight.

Whether you need post-operative care, chronic disease management, or a one-time doctor visit, our team of DHA-licensed nurses and doctors is available 24/7. We provide a wide range of services, including wound care, injections, medication management, and specialized nursing for elderly or bedridden patients.

Our mission is to provide compassionate, hospital-grade care at home, ensuring that every patient in Dubai has access to professional healthcare without the need for frequent travel to clinics or hospitals.`}
      seoTitle="Home Healthcare Dubai | Nursing & Doctor at Home | EMRS"
      seoDescription="EMRS provides 24/7 home healthcare services in Dubai. DHA-licensed nurses, doctor-on-call, and professional medical care in the comfort of your home."
      canonicalUrl="https://emrs.ae/home-healthcare-services-dubai"
      features={[
        { title: "24/7 Nursing Care", description: "Around-the-clock professional nursing for short-term or long-term needs." },
        { title: "Doctor on Call", description: "Licensed physicians available for home visits and consultations in Dubai." },
        { title: "Post-Surgical Care", description: "Specialized support for patients recovering from surgery at home." },
        { title: "Wound Management", description: "Professional dressing and care for surgical wounds and chronic ulcers." },
        { title: "Lab Tests at Home", description: "Convenient blood collection and diagnostic tests from your residence." },
        { title: "Elderly Care", description: "Dedicated medical support for the elderly, including vital monitoring." }
      ]}
      whoNeedsIt={[
        "Elderly patients needing regular care",
        "Patients recovering after surgery",
        "Individuals with chronic illnesses",
        "People needing home injections/IVs",
        "Mothers needing postnatal support",
        "Palliative care patients at home"
      ]}
      howItWorks={[
        { step: "1", title: "Inquiry", description: "Contact us via phone or WhatsApp to discuss your requirements." },
        { step: "2", title: "CONSULTATION", description: "Our medical team reviews the case and assigns the right professional." },
        { step: "3", title: "HOME VISIT", description: "Licensed nurse or doctor arrives at your home at the scheduled time." },
        { step: "4", title: "ONGOING CARE", description: "Continuous medical support and reporting for long-term patients." }
      ]}
      faqs={[
        {
          question: "Are your home care nurses DHA licensed?",
          answer: "Yes, every nurse and doctor in our home healthcare team is fully licensed by the Dubai Health Authority (DHA) and has passed strict quality checks."
        },
        {
          question: "How quickly can a doctor visit me in Dubai?",
          answer: "Our 'Doctor on Call' service typically responds within 45 to 90 minutes anywhere in Dubai, depending on your location."
        },
        {
          question: "Do you provide 24-hour nursing at home?",
          answer: "Yes, we offer both 12-hour and 24-hour nursing shifts for patients requiring constant medical attention or elderly care."
        },
        {
          question: "Is home healthcare covered by insurance?",
          answer: "Many premium insurance plans in the UAE cover home nursing and doctor visits. We can provide the necessary documentation for your reimbursement."
        }
      ]}
    />
  );
};

export default HomeHealthcareServicesDubai;
