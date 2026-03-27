import ServicePageTemplate from "@/components/ServicePageTemplate";

const PrivateAmbulanceUAE = () => {
  return (
    <ServicePageTemplate
      title="Private Ambulance Service UAE"
      subtitle="Licensed 24/7 private medical transport and ambulance services across all seven Emirates."
      description={`EMRS provides professional, pre-hospital private ambulance services throughout the UAE. Our mission is to deliver safe, reliable, and efficient medical transport for patients requiring non-emergency and specialized care. 

Whether you need a transfer from home to a hospital, or between medical facilities, our fleet of modern ambulances and licensed paramedics are ready to assist. We operate 24/7, ensuring that professional medical help is always just a phone call away. 

Our private ambulance services are designed for comfort and safety, featuring advanced medical equipment and highly trained staff who prioritize patient care above all else.`}
      seoTitle="Private Ambulance Service UAE | 24/7 Medical Transport | EMRS"
      seoDescription="EMRS offers 24/7 private ambulance services across UAE. Licensed paramedics, modern fleet, and professional patient transport in Dubai, Abu Dhabi & Sharjah."
      canonicalUrl="https://emrs.ae/private-ambulance-uae"
      features={[
        { title: "24/7 Dispatch", description: "Our emergency and non-emergency dispatch center is active 24 hours a day, 7 days a week." },
        { title: "Licensed Paramedics", description: "Highly trained and DHA/DoH licensed medical professionals on every trip." },
        { title: "Modern Fleet", description: "State-of-the-art ambulances equipped with advanced life support systems." },
        { title: "Nationwide Coverage", description: "Serving all 7 Emirates including Dubai, Abu Dhabi, Sharjah, and Ajman." },
        { title: "Bed-to-Bed Transfer", description: "Complete assistance from the patient's bedside to the destination facility." },
        { title: "Oxygen Support", description: "Continuous oxygen supply and monitoring during the entire transport." }
      ]}
      whoNeedsIt={[
        "Patients needing hospital admission",
        "Discharge from hospital to home",
        "Inter-hospital transfers",
        "Elderly patients for clinic visits",
        "Post-surgery medical transport",
        "Non-emergency medical escort"
      ]}
      howItWorks={[
        { step: "1", title: "Contact Us", description: "Call our 24/7 hotline or WhatsApp us with patient details." },
        { step: "2", title: "Assessment", description: "Our medical team assesses the patient's condition for the right transport." },
        { step: "3", title: "Dispatch", description: "The nearest licensed ambulance is dispatched to your location." },
        { step: "4", title: "Safe Transport", description: "Professional care and monitoring until the destination is reached." }
      ]}
      faqs={[
        {
          question: "How much does a private ambulance cost in Dubai?",
          answer: "The cost depends on the type of ambulance (BLS vs ICU), the distance traveled, and any specific medical requirements. Contact us for a precise quote."
        },
        {
          question: "Can I book an ambulance for a scheduled doctor's visit?",
          answer: "Yes, we specialize in scheduled medical transports for clinic visits, dialysis, and routine check-ups across the UAE."
        },
        {
          question: "Do you provide services in Abu Dhabi and Sharjah?",
          answer: "Yes, EMRS provides full coverage across all seven emirates, including Abu Dhabi, Sharjah, Ajman, and beyond."
        },
        {
          question: "Are your ambulances licensed by the DHA?",
          answer: "Yes, our services and staff are fully licensed and certified by the Dubai Health Authority (DHA) and relevant UAE health departments."
        }
      ]}
    />
  );
};

export default PrivateAmbulanceUAE;
