import ServicePageTemplate from "@/components/ServicePageTemplate";

const AbuDhabiAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Abu Dhabi"
      subtitle="Licensed 24/7 private ambulance and medical transport services across Abu Dhabi and Al Ain."
      description={`EMRS provides specialized medical response and private ambulance services throughout the emirate of Abu Dhabi. Our operations are fully compliant with Department of Health (DoH) regulations, ensuring that every patient receives gold-standard care from the capital to the farthest corners of the emirate.

Whether you're in Downtown Abu Dhabi, Al Reem Island, Yas Island, or the historic city of Al Ain, our ambulances are equipped with advanced life support systems and staffed by expert medical professionals. We provide regular patient transfers to Cleveland Clinic Abu Dhabi, Sheikh Shakhbout Medical City (SSMC), and Burjeel Hospital, coordinating every step for a safe and efficient handover.

Our Abu Dhabi services are known for their reliability, professionalism, and commitment to patient safety, making us the preferred choice for private medical transport in the UAE capital.`}
      seoTitle="Ambulance Service Abu Dhabi | 24/7 Private Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Abu Dhabi & Al Ain. DoH licensed paramedics, advanced life support, and safe patient transport to all major hospitals."
      canonicalUrl="https://emrs.ae/abu-dhabi-ambulance-services"
      features={[
        { title: "DoH Certified", description: "Fully compliant with Abu Dhabi Department of Health medical standards." },
        { title: "Advanced Life Support", description: "Mobile ICU units with cardiac monitors and ventilators for critical cases." },
        { title: "Nationwide Transfer", description: "Seamless patient transport between Abu Dhabi and other emirates." },
        { title: "24/7 Availability", description: "Our dispatch and medical crews are active round-the-clock in the capital." },
        { title: "Al Ain Coverage", description: "Providing dedicated ambulance and patient transport services in Al Ain." },
        { title: "Hospital Liaison", description: "Expert coordination with Cleveland Clinic and other major Abu Dhabi facilities." }
      ]}
      whoNeedsIt={[
        "Critical care transport in Abu Dhabi",
        "Discharge from Cleveland Clinic to home",
        "Inter-hospital transfers within Abu Dhabi",
        "Patient transport to Al Ain clinics",
        "Non-emergency medical escort services",
        "Airport medical transfers in AUH/XNB"
      ]}
      howItWorks={[
        { step: "1", title: "Book Medical Crew", description: "Contact our Abu Dhabi dispatch center for immediate assistance." },
        { step: "2", title: "COORDINATION", description: "Our team coordinates with your doctor or hospital for medical history." },
        { step: "3", title: "SAFE PICKUP", description: "Licensed paramedics arrive on time and stabilize the patient for travel." },
        { step: "4", title: "ARRIVAL", description: "Professional medical handover at the destination facility in Abu Dhabi." }
      ]}
      faqs={[
        {
          question: "How long is the wait for an ambulance on Yas Island?",
          answer: "Our Abu Dhabi dispatch center ensures a fast response time of typically 20-30 minutes for Yas Island and Al Reem Island locations."
        },
        {
          question: "Can you transport patients to Cleveland Clinic Abu Dhabi?",
          answer: "Yes, we regularly perform structured patient transfers to Cleveland Clinic, Burjeel, and Sheikh Shakhbout Medical City (SSMC)."
        },
        {
          question: "Are your ambulance staff DoH licensed?",
          answer: "Absolutely. All our paramedics and nurses operating in the capital are fully licensed by the Department of Health (DoH) - Abu Dhabi."
        },
        {
          question: "Do you provide services in Al Ain?",
          answer: "Yes, EMRS provides comprehensive ambulance and patient transport services across the entire city of Al Ain."
        }
      ]}
    />
  );
};

export default AbuDhabiAmbulanceServices;
