import ServicePageTemplate from "@/components/ServicePageTemplate";

const SharjahAmbulanceServices = () => {
  return (
    <ServicePageTemplate
      title="Ambulance Service Sharjah"
      subtitle="Reliable 24/7 private ambulance and patient transport services across Sharjah and Khor Fakkan."
      description={`EMRS provides community-focused private ambulance services throughout the emirate of Sharjah. We are dedicated to delivering safe and respectful medical transport for all Sharjah residents, from the bustling city center to the coastal areas of the Northern Emirates.

Our Sharjah operations are fully equipped to handle and respond to medical needs anywhere in the emirate, including Al Nahda, Muwaileh, and university city areas. We maintain close coordination with hospitals such as Al Qassimi Hospital and Kuwaiti Hospital to provide professional patient handovers at any time of day or night.

Whether for a routine outpatient appointment or a more urgent medical transfer, our Sharjah-based teams bring professionalism and expert care to every journey.`}
      seoTitle="Ambulance Service Sharjah | 24/7 Medical Transport | EMRS"
      seoDescription="EMRS provides 24/7 private ambulance services in Sharjah. Licensed paramedics, modern equipment, and safe patient transport to Sharjah hospitals."
      canonicalUrl="https://emrs.ae/sharjah-ambulance-services"
      features={[
        { title: "24/7 Response", description: "Our Sharjah-based ambulance crews are always ready to respond to your call." },
        { title: "Experienced Staff", description: "Trained paramedics with extensive knowledge of Sharjah's medical landscape." },
        { title: "Northern Emirates Coverage", description: "Serving all Sharjah areas including Kalba and Khor Fakkan." },
        { title: "Nationwide Transport", description: "Safe and comfortable transfers between Sharjah and all other UAE emirates." },
        { title: "Bed-to-Bed Transfer", description: "Comprehensive assistance from your Sharjah home directly to the medical facility." },
        { title: "Modern Vehicles", description: "Ambulances equipped with advanced medical monitoring systems." }
      ]}
      whoNeedsIt={[
        "Patient transfers within Sharjah",
        "Discharge from Sharjah hospitals to home",
        "Inter-hospital transfers to Dubai or Abu Dhabi",
        "Clinic and therapy visit transport",
        "Non-emergency medical escort services",
        "Elderly medical transport in Sharjah"
      ]}
      howItWorks={[
        { step: "1", title: "Contact Us", description: "Call our 24/7 hotline with your Sharjah location and patient needs." },
        { step: "2", title: "PREP & DISPATCH", description: "The nearest Sharjah-based medical crew is sent to your location." },
        { step: "3", title: "MEDICAL CARE", description: "Paramedics stabilize and prepare the patient for safe transport." },
        { step: "4", title: "SAFE DELIVERY", description: "Comfortable and professional handover at your target medical center." }
      ]}
      faqs={[
        {
          question: "How fast is your ambulance response in Sharjah?",
          answer: "Our Sharjah response times typically range from 20 to 30 minutes for areas like Al Nahda and Sharjah city center."
        },
        {
          question: "Can you transport patients to Al Qassimi Hospital?",
          answer: "Yes, we regularly perform structured patient transfers to all Sharjah government and private hospitals."
        },
        {
          question: "Are your services available in Khor Fakkan?",
          answer: "Yes, EMRS provides full ambulance and patient transport coverage across the entire emirate, including the East Coast."
        },
        {
          question: "How do I book an ambulance for a Sharjah clinic visit?",
          answer: "Contact us via phone or WhatsApp. We recommend booking in advance for scheduled appointments."
        }
      ]}
    />
  );
};

export default SharjahAmbulanceServices;
