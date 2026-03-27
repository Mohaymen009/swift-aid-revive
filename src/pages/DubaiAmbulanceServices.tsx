import ServicePageTemplate from "@/components/ServicePageTemplate";

const DubaiAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Dubai"
      subtitle="Professional private ambulance and patient transport services available 24/7 across Dubai."
      description={`EMRS provides premier private ambulance services in Dubai, catering to a wide range of medical transport needs. From emergency response to scheduled patient transfers between villas, apartments, and major hospitals, our team is equipped to handle every situation with professionalism and care.

Our Dubai fleet is strategically stationed to ensure rapid response times across all major areas, including Dubai Marina, Jumeirah, Downtown, Business Bay, and Deira. We specialize in transfers to and from Rashid Hospital, Mediclinic City Hospital, Al Zahra Hospital, and Saudi German Hospital, ensuring a smooth clinical handover at all times.

Whether you need a stretcher-bound transfer for an elderly family member, or a critical care ICU ambulance for a complex medical case, EMRS is Dubai's trusted partner for reliable, licensed medical transport.`}
      seoTitle="Ambulance Service Dubai | 24/7 Private Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Dubai. Licensed paramedics, modern equipment, and safe patient transport to all Dubai hospitals."
      canonicalUrl="https://emrs.ae/dubai-ambulance-services"
      features={[
        { title: "Rapid Response", description: "Strategic positioning in Dubai ensures minimum wait times for urgent calls." },
        { title: "DHA Licensed", description: "Fully authorized and compliant with Dubai Health Authority standards." },
        { title: "Hospital Coordination", description: "Direct liaison with major Dubai hospitals for efficient patient handover." },
        { title: "All Areas Covered", description: "Serving Marina, JBR, Palm Jumeirah, Downtown, and all Dubai suburbs." },
        { title: "Bed-to-Bed Transfer", description: "Full assistance from the patient's residence directly to the hospital bed." },
        { title: "Professional Crew", description: "Staffed by highly trained Dubai-based paramedics and EMTs." }
      ]}
      whoNeedsIt={[
        "Emergency medical situations in Dubai",
        "Discharge from Dubai hospitals to home",
        "Inter-hospital transfers within Dubai",
        "Non-emergency transport for medical visits",
        "Airport medical pickups at DXB/DWC",
        "Specialized ICU transport in Dubai"
      ]}
      howItWorks={[
        { step: "1", title: "Call Dispatch", description: "Contact our Dubai-based dispatch center any time of day or night." },
        { step: "2", title: "Location Setup", description: "Our team identifies the fastest route to your Dubai location." },
        { step: "3", title: "Expert Care", description: "Paramedics arrive and provide necessary medical stabilization." },
        { step: "4", title: "Safe Arrival", description: "Comfortable transport to your preferred hospital or clinic in Dubai." }
      ]}
      faqs={[
        {
          question: "How long does an ambulance take to arrive in Dubai Marina?",
          answer: "Our average response time in Dubai Marina and surrounding areas is 15-25 minutes, depending on the current traffic conditions."
        },
        {
          question: "Can you transport patients to Rashid Hospital?",
          answer: "Yes, we regularly coordinate transfers to Rashid Hospital, Mediclinic, and all other major government and private medical facilities in Dubai."
        },
        {
          question: "Is your ambulance service cheaper than Dubai Ambulance (DCAS)?",
          answer: "We are a private service provider. While DCAS handles public emergencies, we specialize in private transfers, clinic visits, and customized medical transport with transparent pricing."
        },
        {
          question: "Do you offer 'Doctor on Call' in Dubai?",
          answer: "Yes, alongside our ambulance service, we provide DHA-licensed doctors who can visit you at home in Dubai for consultations and minor treatments."
        }
      ]}
    />
  );
};

export default DubaiAmbulanceServices;
