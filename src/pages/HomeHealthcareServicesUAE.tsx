import FlatServicePage from "@/templates/FlatServicePage";
import { Heart, Clock, Users, Stethoscope, Activity, Pill, Syringe, TestTube, HeartPulse, Home } from "lucide-react";

const EXTERNAL_BOOK = "https://homehealthcare.emrs.ae/";

const HomeHealthcareServicesUAE = () => {
  const benefits = [
    { title: "Care at Home", description: "Recover where you're most comfortable. Familiar surroundings reduce stress and speed recovery.", icon: Home },
    { title: "Licensed Clinicians", description: "DHA/MOH-licensed doctors, nurses, and physiotherapists \u2014 vetted, insured, and clinically supervised.", icon: Stethoscope },
    { title: "One-to-One Attention", description: "Personalised care plans built around your condition, schedule, and family preferences.", icon: Heart },
    { title: "24/7 Coordination", description: "Round-the-clock dispatch, scheduling and clinical support across all seven emirates.", icon: Clock },
    { title: "Faster Than the Clinic", description: "Avoid waiting rooms. Most home visits scheduled within hours, often same-day.", icon: HeartPulse },
    { title: "Family Friendly", description: "We brief and involve family caregivers so support continues between visits.", icon: Users },
  ];

  const subServices = [
    { title: "Home Nursing", description: "Skilled nursing visits or live-in care: wound dressing, catheter care, injections, vitals, post-op recovery.", icon: Heart },
    { title: "Doctor on Call", description: "Licensed GPs and specialists visiting your home or hotel for consultation, prescriptions and follow-up.", icon: Stethoscope },
    { title: "IV Therapy at Home", description: "Hydration, vitamin and immunity drips administered by registered nurses in the comfort of your home.", icon: Syringe },
    { title: "Blood Tests at Home", description: "Phlebotomy collection at home with accredited lab processing and digital report delivery.", icon: TestTube },
    { title: "Physiotherapy at Home", description: "Rehabilitation, post-surgical recovery, mobility and pain management with licensed physiotherapists.", icon: Activity },
    { title: "Elderly & Chronic Care", description: "Long-term support for seniors and chronic conditions (diabetes, hypertension, COPD), with caregiver training.", icon: Pill },
  ];

  const nursingServices = [
    "IV therapy and infusion",
    "Wound dressing and care",
    "Catheter insertion and care",
    "Tracheostomy care",
    "PEG tube feeding",
    "Insulin administration",
    "Blood pressure monitoring",
    "Blood sugar testing",
    "Oxygen therapy",
    "Medication administration",
    "Pain management",
    "Vital signs monitoring",
  ];

  const faqs = [
    {
      question: "What types of nurses provide home healthcare?",
      answer: "We provide Registered Nurses (RN), Licensed Practical Nurses (LPN), and Certified Nursing Assistants (CNA) depending on the level of care required. All our nurses are licensed by UAE health authorities."
    },
    {
      question: "How do I know if home healthcare is right for my family member?",
      answer: "Home healthcare is ideal for patients recovering from surgery, those with chronic conditions, elderly individuals needing assistance, or anyone who prefers receiving care at home rather than in a facility."
    },
    {
      question: "Can home nurses administer IV medications?",
      answer: "Yes, our registered nurses are trained and licensed to administer IV medications, infusions, and other treatments as prescribed by physicians."
    },
    {
      question: "Do you provide care for patients with dementia or Alzheimer's?",
      answer: "Yes, we have specialized caregivers trained in dementia and Alzheimer's care, providing safe, compassionate support while maintaining the patient's dignity."
    },
    {
      question: "What are the costs of home healthcare services?",
      answer: "Costs vary based on the type of care needed and duration. Many insurance plans cover home healthcare services. Contact us for a personalized quote and insurance verification."
    },
    {
      question: "Can you provide care on weekends and holidays?",
      answer: "Yes, we provide home healthcare services 24/7, including weekends and public holidays. We understand healthcare needs don't follow a schedule."
    }
  ];

  const faqs = [
    { question: "What types of nurses provide home healthcare?", answer: "We provide Registered Nurses (RN), Licensed Practical Nurses (LPN), and Certified Nursing Assistants (CNA) depending on the level of care required. All our nurses are licensed by UAE health authorities." },
    { question: "How do I know if home healthcare is right for my family member?", answer: "Home healthcare is ideal for patients recovering from surgery, those with chronic conditions, elderly individuals needing assistance, or anyone who prefers receiving care at home rather than in a facility." },
    { question: "Can home nurses administer IV medications?", answer: "Yes, our registered nurses are trained and licensed to administer IV medications, infusions, and other treatments as prescribed by physicians." },
    { question: "Do you provide care for patients with dementia or Alzheimer's?", answer: "Yes, we have specialised caregivers trained in dementia and Alzheimer's care, providing safe, compassionate support while maintaining the patient's dignity." },
    { question: "What are the costs of home healthcare services?", answer: "Costs vary based on the type of care needed and duration. Many insurance plans cover home healthcare services. Contact us for a personalised quote and insurance verification." },
    { question: "Can you provide care on weekends and holidays?", answer: "Yes, we provide home healthcare services 24/7, including weekends and public holidays. Healthcare needs don't follow a schedule." },
  ];

  return (
    <FlatServicePage
      seoTitle="Home Healthcare Services UAE | Home Nursing, IV Therapy & Doctor on Call | EMRS"
      description="Licensed home healthcare across the UAE: home nursing, doctor on call, IV therapy, blood tests, physiotherapy, and elderly care \u2014 delivered to your door, 24/7."
      canonical="https://emrs.ae/home-healthcare-services-uae/"
      keywords={[
        "home healthcare UAE",
        "home nursing Dubai",
        "doctor on call UAE",
        "IV therapy at home Dubai",
        "blood test at home UAE",
        "physiotherapy at home",
        "elderly care at home UAE",
      ]}
      eyebrow="Care at home"
      h1="Home Healthcare Services Across the UAE"
      intro="Licensed doctors, nurses, and physiotherapists delivering hospital-grade care in the comfort of your home \u2014 home nursing, doctor on call, IV therapy, blood tests at home, physiotherapy and elderly care, available 24/7 in Dubai, Abu Dhabi and all seven emirates."
      primaryCta={{ label: "Book Home Visit", href: EXTERNAL_BOOK }}
      benefits={benefits}
      steps={[
        { title: "Tell us what you need", description: "Call or WhatsApp our care coordinators. We'll triage your case in minutes." },
        { title: "Matched clinician", description: "We assign a licensed nurse, doctor or physio based on the clinical need." },
        { title: "Care at your door", description: "The clinician arrives at your home or hotel \u2014 often same day." },
        { title: "Follow-up & reports", description: "Digital reports, prescriptions and follow-up visits coordinated end-to-end." },
      ]}
      trust={["DHA & MOH licensed", "Insurance accepted", "All 7 Emirates", "24/7 dispatch"]}
      sections={[
        {
          eyebrow: "Our services",
          title: "Complete home healthcare under one team",
          surface: "white",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline mt-4">
              {subServices.map(s => (
                <div key={s.title} className="bg-card p-6">
                  <s.icon className="w-7 h-7 text-accent mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          eyebrow: "Clinical scope",
          title: "Procedures our home nurses can perform",
          surface: "surface",
          bullets: nursingServices,
        },
        {
          eyebrow: "Elderly & long-term care",
          title: "Compassionate care that helps seniors stay at home",
          surface: "white",
          body: (
            <p>
              Our elderly care service supports seniors with daily living, medication management, mobility, companionship and clinical monitoring. We work closely with families to maintain independence and dignity while keeping clinicians on call when needs change.
            </p>
          ),
          bullets: [
            "Personal hygiene assistance",
            "Meal preparation",
            "Medication reminders",
            "Mobility support",
            "Companionship",
            "Light housekeeping",
          ],
        },
      ]}
      faqs={faqs}
      relatedLinks={[
        { label: "Doctor on Call", to: "/doctor-on-call-uae/" },
        { label: "Wellness & Diagnostics", to: "/wellness-diagnostic-services-uae/" },
        { label: "Event Medical Coverage", to: "/event-medical-services-uae/" },
        { label: "Patient Transport (NEMT)", to: "/non-emergency-medical-transport-uae/" },
        { label: "Book online", to: EXTERNAL_BOOK, external: true },
      ]}
      lastUpdated="2026-01-01"
    />
  );
};

export default HomeHealthcareServicesUAE;
