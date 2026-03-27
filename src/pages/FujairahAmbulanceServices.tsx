import ServicePageTemplate from "@/components/ServicePageTemplate";

const FujairahAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Fujairah"
      subtitle="Licensed 24/7 private ambulance and medical transport services across Fujairah."
      description={`EMRS provides vital private ambulance services to the residents and visitors of Fujairah. We are dedicated to providing safe and reliable medical transport for all Fujairah residents, from the city center to the coastal areas of Dibba and Kalba.

Our Fujairah-based teams are strategically located to ensure fast response times across the emirate. We specialize in patient transfers to and from Fujairah Hospital and Sheikh Khalifa Hospital, ensuring that the clinical handover is smooth and professional.

Whether for a routine clinic visit, or a cross-emirate hospital move, EMRS is Fujairah's trusted partner for private ambulance and medical care.`}
      seoTitle="Ambulance Service Fujairah | 24/7 Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Fujairah. Licensed paramedics, modern equipment, and safe patient transport to Fujairah hospitals."
      canonicalUrl="https://emrs.ae/fujairah-ambulance-services"
      features={[
        { title: "24/7 Dispatch", description: "Our Fujairah-based ambulance crews are active round-the-clock for your calls." },
        { title: "Expert Medical Crew", description: "Highly trained paramedics and EMTs specializing in patient care." },
        { title: "Strategic Positioning", description: "Positioned across Fujairah to ensure minimal response times for all calls." },
        { title: "Bed-to-Bed Service", description: "Full assistance from the patient's bedside all the way to the final destination." },
        { title: "Modern Ambulances", description: "Equipped with advanced medical monitoring systems and life support." },
        { title: "Hospital Liaison", description: "Expert coordination with Fujairah Hospital and other RAK facilities." }
      ]}
      whoNeedsIt={[
        "Patient transfers within Fujairah",
        "Discharge from Fujairah hospitals to home",
        "Inter-hospital transfers to Dubai or Sharjah",
        "Clinic and therapy visit transport",
        "Non-emergency medical escort services",
        "Elderly medical transport in Fujairah"
      ]}
      howItWorks={[
        { step: "1", title: "Contact Us", description: "Call our 24/7 hotline with your Fujairah location and patient needs." },
        { step: "2", title: "PREP & DISPATCH", description: "The nearest Fujairah-based medical crew is sent to your location." },
        { step: "3", title: "MEDICAL CARE", description: "Paramedics stabilize and prepare the patient for safe transport." },
        { step: "4", title: "SAFE ARRIVAL", description: "Professional handover at your target medical clinic in Fujairah." }
      ]}
      faqs={[
        {
          question: "How fast is your ambulance response in Fujairah?",
          answer: "Our Fujairah response times are typically within 25-35 minutes for areas such as the city center and Kalba."
        },
        {
          question: "Can you transport patients to Sheikh Khalifa Hospital?",
          answer: "Yes, we regularly perform structured patient transfers to Sheikh Khalifa Hospital, Fujairah Hospital, and other major facilities."
        },
        {
          question: "Are your services available in Dibba?",
          answer: "Yes, EMRS provides full coverage across all areas of Fujairah, including Dibba and the East Coast."
        },
        {
          question: "Do you offer 'Doctor on Call' in Fujairah?",
          answer: "Alongside our ambulance service, we have licensed doctors available for home visits and consultations in Fujairah."
        }
      ]}
    />
  );
};

export default FujairahAmbulanceServices;
