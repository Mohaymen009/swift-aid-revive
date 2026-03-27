import ServicePageTemplate from "@/components/ServicePageTemplate";

const AjmanAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Ajman"
      subtitle="Fast 24/7 private ambulance and patient transport services across Ajman."
      description={`EMRS provides dedicated private ambulance services to the growing Ajman community. We are committed to providing safe and reliable medical transport for all Ajman residents, from the Corniche to the inland areas of Al Tallah and Al Mowaihat.

Our Ajman-based teams are strategically located to ensure fast response times across the emirate. We specialize in patient transfers to and from Sheikh Khalifa Hospital and Amina Hospital, ensuring that the clinical handover is smooth and professional.

Whether it's for dialysis, a clinic visit, or a cross-emirate hospital move, EMRS is Ajman's trusted partner for private ambulance and medical care.`}
      seoTitle="Ambulance Service Ajman | 24/7 Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Ajman. Licensed paramedics, modern equipment, and safe patient transport to Ajman hospitals."
      canonicalUrl="https://emrs.ae/ajman-ambulance-services"
      features={[
        { title: "24/7 Dispatch", description: "Our Ajman-based ambulance crews are active round-the-clock for your calls." },
        { title: "Expert Medical Crew", description: "Highly trained paramedics and EMTs specializing in patient care." },
        { title: "Strategic Positioning", description: "Positioned across Ajman to ensure minimal response times for all calls." },
        { title: "Bed-to-Bed Service", description: "Full assistance from the patient's bedside all the way to the final destination." },
        { title: "Modern Ambulances", description: "Equipped with advanced medical monitoring systems and life support." },
        { title: "Hospital Liaison", description: "Expert coordination with Sheikh Khalifa Hospital and other Ajman facilities." }
      ]}
      whoNeedsIt={[
        "Patient transfers within Ajman",
        "Discharge from Ajman hospitals to home",
        "Inter-hospital transfers to Dubai or Sharjah",
        "Dialysis transport in Ajman",
        "Maternity patient transport services",
        "Elderly medical escort in Ajman"
      ]}
      howItWorks={[
        { step: "1", title: "Book Service", description: "Contact our Ajman dispatch center via phone or WhatsApp." },
        { step: "2", title: "PREP & DISPATCH", description: "The nearest Ajman-based medical crew is sent to your location." },
        { step: "3", title: "MEDICAL CARE", description: "Paramedics stabilize and prepare the patient for safe transport." },
        { step: "4", title: "SAFE ARRIVAL", description: "Professional handover at your target medical clinic in Ajman." }
      ]}
      faqs={[
        {
          question: "How fast is your ambulance response in Ajman?",
          answer: "Our Ajman response times are typically within 20-30 minutes for areas such as the Corniche and Al Bustan."
        },
        {
          question: "Can you transport patients to Amina Hospital?",
          answer: "Yes, we regularly perform structured patient transfers to Amina Hospital, Sheikh Khalifa, and other major Ajman facilities."
        },
        {
          question: "Are your services available in Al Mowaihat?",
          answer: "Yes, EMRS provides full coverage across all areas of Ajman, including inland and coastal locations."
        },
        {
          question: "Do you offer 'Doctor on Call' in Ajman?",
          answer: "Alongside our ambulance service, we have licensed doctors available for home visits and consultations in Ajman."
        }
      ]}
    />
  );
};

export default AjmanAmbulanceServices;
