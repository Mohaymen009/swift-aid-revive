import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DubaiAmbulanceServices from "./pages/DubaiAmbulanceServices";
import AbuDhabiAmbulanceServices from "./pages/AbuDhabiAmbulanceServices";
import SharjahAmbulanceServices from "./pages/SharjahAmbulanceServices";
import AjmanAmbulanceServices from "./pages/AjmanAmbulanceServices";
import RasAlKhaimahAmbulanceServices from "./pages/RasAlKhaimahAmbulanceServices";
import FujairahAmbulanceServices from "./pages/FujairahAmbulanceServices";
import UmmAlQuwainAmbulanceServices from "./pages/UmmAlQuwainAmbulanceServices";
import AmbulanceServicesUAE from "./pages/AmbulanceServicesUAE";
import NonEmergencyMedicalTransport from "./pages/NonEmergencyMedicalTransport";
import DoctorOnCallUAE from "./pages/DoctorOnCallUAE";
import HomeHealthcareServicesUAE from "./pages/HomeHealthcareServicesUAE";
import WellnessDiagnosticServicesUAE from "./pages/WellnessDiagnosticServicesUAE";
import BlogHowToChooseAmbulance from "./pages/BlogHowToChooseAmbulance";
import BlogPrivateAmbulanceAcrossUAE from "./pages/BlogPrivateAmbulanceAcrossUAE";
import BlogEmergencyPatientTransfersUAE from "./pages/BlogEmergencyPatientTransfersUAE";
import ServicesHub from "./pages/ServicesHub";
import Licensing from "./pages/Licensing";
import MedicalOversight from "./pages/MedicalOversight";
import AboutUs from "./pages/AboutUs";
import MedicalTransportUAE from "./pages/MedicalTransportUAE";
import PatientTransportUAE from "./pages/PatientTransportUAE";
import AmbulanceServicesAbuDhabi from "./pages/AmbulanceServicesAbuDhabi";
import AmbulanceServicesDubai from "./pages/AmbulanceServicesDubai";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesHub />} />
          {/* Authority Pages - Critical for YMYL trust */}
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/medical-oversight" element={<MedicalOversight />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Service Pages */}
          <Route path="/ambulance-services-uae" element={<AmbulanceServicesUAE />} />
          <Route path="/non-emergency-medical-transport-uae" element={<NonEmergencyMedicalTransport />} />
          <Route path="/doctor-on-call-uae" element={<DoctorOnCallUAE />} />
          <Route path="/home-healthcare-services-uae" element={<HomeHealthcareServicesUAE />} />
          <Route path="/wellness-diagnostic-services-uae" element={<WellnessDiagnosticServicesUAE />} />
          {/* Emirate Pages */}
          <Route path="/dubai-ambulance-services" element={<DubaiAmbulanceServices />} />
          <Route path="/abu-dhabi-ambulance-services" element={<AbuDhabiAmbulanceServices />} />
          <Route path="/sharjah-ambulance-services" element={<SharjahAmbulanceServices />} />
          <Route path="/ajman-ambulance-services" element={<AjmanAmbulanceServices />} />
          <Route path="/ras-al-khaimah-ambulance-services" element={<RasAlKhaimahAmbulanceServices />} />
          <Route path="/fujairah-ambulance-services" element={<FujairahAmbulanceServices />} />
          <Route path="/umm-al-quwain-ambulance-services" element={<UmmAlQuwainAmbulanceServices />} />
          {/* Blog Posts */}
          <Route path="/blog/how-to-choose-ambulance-service" element={<BlogHowToChooseAmbulance />} />

          <Route path="/blog/private-ambulance-services-across-uae" element={<BlogPrivateAmbulanceAcrossUAE />} />
          <Route path="/blog/emergency-patient-transfers-uae" element={<BlogEmergencyPatientTransfersUAE />} />

          {/* New SEO Pages */}
          <Route path="/medical-transport-uae" element={<MedicalTransportUAE />} />
          <Route path="/patient-transport" element={<PatientTransportUAE />} />
          <Route path="/ambulance-services-abu-dhabi" element={<AmbulanceServicesAbuDhabi />} />
          <Route path="/ambulance-services-dubai" element={<AmbulanceServicesDubai />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
