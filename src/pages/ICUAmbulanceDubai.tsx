import ServicePageTemplate from "@/components/ServicePageTemplate";

const ICUAmbulanceDubai = () => {
  return (
    <ServicePageTemplate
      title="ICU Ambulance Service Dubai"
      subtitle="Critical care transport with advanced life support, ventilators, and ICU-trained paramedics."
      description={`EMRS provides specialized ICU ambulance services in Dubai for patients requiring intensive care during transport. Our critical care units are essentially mobile intensive care rooms, equipped with high-end medical technology to handle the most complex clinical situations.

Whether it's a neonate, an adult with severe cardiac issues, or a patient on a ventilator, our ICU ambulances are staffed with expert paramedics and nurses trained in advanced life support. We ensure a seamless transition of care from one medical facility to another, maintaining the highest standards of safety and medical monitoring throughout the journey.

Our ICU services are available 24/7 across Dubai and the entire UAE, providing a lifeline for those who need it most.`}
      seoTitle="ICU Ambulance Dubai | Critical Care Transport UAE | EMRS"
      seoDescription="EMRS provides 24/7 ICU ambulance services in Dubai. Specialized critical care transport with ventilators, cardiac monitors, and expert medical staff."
      canonicalUrl="https://emrs.ae/icu-ambulance-dubai"
      features={[
        { title: "Ventilator Support", description: "Advanced mechanical ventilation for patients requiring respiratory assistance." },
        { title: "Cardiac Monitoring", description: "Continuous multi-parameter monitoring of vitals, ECG, and SPO2." },
        { title: "Defibrillators", description: "Modern defibrillation and pacing equipment for cardiac emergencies." },
        { title: "Infusion Pumps", description: "Precise administration of critical medications and fluids during transport." },
        { title: "ICU Specialist Staff", description: "Staffed by paramedics and nurses with intensive care certifications." },
        { title: "Inter-Hospital ICU", description: "Seamless coordination for patient transfer between intensive care units." }
      ]}
      whoNeedsIt={[
        "Patients on ventilator support",
        "Critical cardiac or stroke patients",
        "Post-operative intensive care transfers",
        "Neonatal and pediatric ICU transport",
        "Patients requiring constant monitoring",
        "High-risk medical repatriations"
      ]}
      howItWorks={[
        { step: "1", title: "Medical Assessment", description: "Our doctors assess the patient's critical needs before dispatch." },
        { step: "2", title: "EQUIPMENT PREP", description: "We ensure all necessary life-support equipment is calibrated and ready." },
        { step: "3", title: "STABILIZATION", description: "Patient is stabilized and safely moved to our mobile ICU unit." },
        { step: "4", title: "CRITICAL MONITORING", description: "Continuous specialized care until the patient reaches the target ICU." }
      ]}
      faqs={[
        {
          question: "What equipment is in an ICU ambulance?",
          answer: "Our ICU ambulances include ventilators, cardiac monitors, defibrillators, infusion pumps, suction units, and a full range of emergency medications."
        },
        {
          question: "Are your staff trained for critical care?",
          answer: "Yes, our ICU teams consist of paramedics and nurses with specific certifications in Advanced Cardiac Life Support (ACLS) and intensive care."
        },
        {
          question: "Can you transfer a patient between Dubai and Abu Dhabi?",
          answer: "Absolutely. We specialize in cross-emirate critical care transfers, ensuring the patient remains stable throughout the journey."
        },
        {
          question: "How do I book an ICU ambulance?",
          answer: "Call our 24/7 dispatch center. We will require medical reports or a summary from the current physician to prepare the team and equipment."
        }
      ]}
    />
  );
};

export default ICUAmbulanceDubai;
