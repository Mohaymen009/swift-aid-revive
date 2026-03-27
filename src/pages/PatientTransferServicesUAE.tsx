import ServicePageTemplate from "@/components/ServicePageTemplate";

const PatientTransferServicesUAE = () => {
  return (
    <ServicePageTemplate
      title="Patient Transfer Services UAE"
      subtitle="Safe and professional patient transport between hospitals, clinics, and homes across the Emirates."
      description={`EMRS specializes in the seamless transfer of patients between healthcare facilities and residences in the UAE. Our team understands that moving a patient, whether they are stable or require medical assistance, needs care, precision, and the right equipment.

Our patient transfer services cover a wide range of needs, from simple stretcher transfers for clinic visits to complex inter-hospital moves for patients requiring medical monitoring. We coordinate with both sending and receiving medical facilities to ensure that the patient’s clinical records are maintained and the handover is professional and safe.

We provide a 'bed-to-bed' service, meaning our team will assist the patient from their current hospital bed or home all the way to their destination, ensuring a stress-free experience for both the patient and their family.`}
      seoTitle="Patient Transfer Services UAE | Hospital & Home Transport | EMRS"
      seoDescription="EMRS provides safe patient transfer services across UAE. Inter-hospital transfers, clinic visits, and home medical transport. Licensed 24/7 care."
      canonicalUrl="https://emrs.ae/patient-transfer-services-uae"
      features={[
        { title: "Bed-to-Bed Service", description: "Complete assistance from the bedside to the final destination." },
        { title: "Inter-Hospital Transfer", description: "Professional coordination between medical facilities for seamless handover." },
        { title: "Clinic & Dialysis Visits", description: "Scheduled transport for routine medical appointments and treatments." },
        { title: "Trained Medical Escorts", description: "Nurses or paramedics accompanying patients who need monitoring during travel." },
        { title: "Airport Pickups", description: "Medical airport transfers for patients arriving for treatment in the UAE." },
        { title: "Adjustable Stretchers", description: "Modern, comfortable stretchers with hydraulic height adjustment for easy moves." }
      ]}
      whoNeedsIt={[
        "Patients moving from hospital to home",
        "Individuals needing transport for dialysis",
        "Patients moving between medical centers",
        "Elderly patients for specialist check-ups",
        "Repatriation to/from airports",
        "Physiotherapy patient transport"
      ]}
      howItWorks={[
        { step: "1", title: "Book Service", description: "Schedule your transfer via phone or WhatsApp with our team." },
        { step: "2", title: "COORDINATION", description: "We contact the medical facilities involved for a smooth handover." },
        { step: "3", title: "SAFE PICKUP", description: "Our team arrives on time and carefully prepares the patient for travel." },
        { step: "4", title: "ARRIVAL", description: "Patient is safely delivered and handed over to the receiving team." }
      ]}
      faqs={[
        {
          question: "What is a bed-to-bed transfer?",
          answer: "It means our team handles the entire process: picking up the patient from their bedside, securing them for transport, and delivering them right to their next bed or room."
        },
        {
          question: "Can family members accompany the patient?",
          answer: "Yes, our ambulances typically have space for one or two family members to travel alongside the patient."
        },
        {
          question: "How do I move a patient from Dubai to Abu Dhabi?",
          answer: "Contact EMRS. We handle cross-emirate transfers daily and will manage all the logistics for the travel."
        },
        {
          question: "Are your vehicles wheelchair accessible?",
          answer: "We have specific vehicles equipped with ramps and secure locks for patients who prefer to travel in their own wheelchairs."
        }
      ]}
    />
  );
};

export default PatientTransferServicesUAE;
