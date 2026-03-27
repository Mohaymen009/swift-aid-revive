import ServicePageTemplate from "@/components/ServicePageTemplate";

const RasAlKhaimahAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Ras Al Khaimah"
      subtitle="Licensed 24/7 private ambulance and medical transport services across RAK."
      description={`EMRS provides essential private ambulance services to the residents and visitors of Ras Al Khaimah. We are dedicated to providing safe and reliable medical transport for all RAK residents, from the city center to the resort areas of Al Marjan Island and Mina Al Arab.

Our RAK-based teams are strategically located to ensure fast response times across the emirate. We specialize in patient transfers to and from Saqr Hospital and RAK Hospital, ensuring that the clinical handover is smooth and professional.

Whether for a routine clinic visit, or a cross-emirate hospital move, EMRS is Ras Al Khaimah's trusted partner for private ambulance and medical care.`}
      seoTitle="Ambulance Service Ras Al Khaimah | 24/7 Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Ras Al Khaimah. Licensed paramedics, modern equipment, and safe patient transport to RAK hospitals."
      canonicalUrl="https://emrs.ae/ras-al-khaimah-ambulance-services"
      features={[
        { title: "24/7 Dispatch", description: "Our RAK-based ambulance crews are active round-the-clock for your calls." },
        { title: "Expert Medical Crew", description: "Highly trained paramedics and EMTs specializing in patient care." },
        { title: "Strategic Positioning", description: "Positioned across RAK to ensure minimal response times for all calls." },
        { title: "Bed-to-Bed Service", description: "Full assistance from the patient's bedside all the way to the final destination." },
        { title: "Modern Ambulances", description: "Equipped with advanced medical monitoring systems and life support." },
        { title: "Hospital Liaison", description: "Expert coordination with Saqr Hospital and other RAK facilities." }
      ]}
      whoNeedsIt={[
        "Patient transfers within RAK",
        "Discharge from RAK hospitals to home",
        "Inter-hospital transfers to Dubai or Sharjah",
        "Clinic and therapy visit transport",
        "Non-emergency medical escort services",
        "Elderly medical transport in RAK"
      ]}
      howItWorks={[
        { step: "1", title: "Contact Us", description: "Call our 24/7 hotline with your RAK location and patient needs." },
        { step: "2", title: "PREP & DISPATCH", description: "The nearest RAK-based medical crew is sent to your location." },
        { step: "3", title: "MEDICAL CARE", description: "Paramedics stabilize and prepare the patient for safe transport." },
        { step: "4", title: "SAFE ARRIVAL", description: "Professional handover at your target medical clinic in RAK." }
      ]}
      faqs={[
        {
          question: "How fast is your ambulance response in RAK?",
          answer: "Our RAK response times are typically within 25-30 minutes for areas such as Al Marjan Island and the city center."
        },
        {
          question: "Can you transport patients to RAK Hospital?",
          answer: "Yes, we regularly perform structured patient transfers to RAK Hospital, Saqr Hospital, and other major RAK facilities."
        },
        {
          question: "Are your services available in Al Jazirah Al Hamra?",
          answer: "Yes, EMRS provides full coverage across all areas of Ras Al Khaimah, including northern and southern districts."
        },
        {
          question: "Do you offer 'Doctor on Call' in RAK?",
          answer: "Alongside our ambulance service, we have licensed doctors available for home visits and consultations in RAK."
        }
      ]}
    />
  );
};

export default RasAlKhaimahAmbulanceServices;
