import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));
const DubaiAmbulanceServices = lazy(() => import("./pages/DubaiAmbulanceServices"));
const AbuDhabiAmbulanceServices = lazy(() => import("./pages/AbuDhabiAmbulanceServices"));
const SharjahAmbulanceServices = lazy(() => import("./pages/SharjahAmbulanceServices"));
const AjmanAmbulanceServices = lazy(() => import("./pages/AjmanAmbulanceServices"));
const RasAlKhaimahAmbulanceServices = lazy(() => import("./pages/RasAlKhaimahAmbulanceServices"));
const FujairahAmbulanceServices = lazy(() => import("./pages/FujairahAmbulanceServices"));
const UmmAlQuwainAmbulanceServices = lazy(() => import("./pages/UmmAlQuwainAmbulanceServices"));
const AmbulanceServicesUAE = lazy(() => import("./pages/AmbulanceServicesUAE"));
const NonEmergencyMedicalTransport = lazy(() => import("./pages/NonEmergencyMedicalTransport"));
const DoctorOnCallUAE = lazy(() => import("./pages/DoctorOnCallUAE"));
const HomeHealthcareServicesUAE = lazy(() => import("./pages/HomeHealthcareServicesUAE"));
const WellnessDiagnosticServicesUAE = lazy(() => import("./pages/WellnessDiagnosticServicesUAE"));
const BlogHowToChooseAmbulance = lazy(() => import("./pages/BlogHowToChooseAmbulance"));
const BlogPrivateAmbulanceAcrossUAE = lazy(() => import("./pages/BlogPrivateAmbulanceAcrossUAE"));
const BlogEmergencyPatientTransfersUAE = lazy(() => import("./pages/BlogEmergencyPatientTransfersUAE"));
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const Licensing = lazy(() => import("./pages/Licensing"));
const MedicalOversight = lazy(() => import("./pages/MedicalOversight"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-primary border-t-accent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/" element={<ServicesHub />} />
            {/* Authority Pages - Critical for YMYL trust */}
            <Route path="/licensing/" element={<Licensing />} />
            <Route path="/medical-oversight/" element={<MedicalOversight />} />
            <Route path="/about-us/" element={<AboutUs />} />
            {/* Service Pages */}
            <Route path="/ambulance-services-uae/" element={<AmbulanceServicesUAE />} />
            <Route path="/non-emergency-medical-transport-uae/" element={<NonEmergencyMedicalTransport />} />
            <Route path="/doctor-on-call-uae/" element={<DoctorOnCallUAE />} />
            <Route path="/home-healthcare-services-uae/" element={<HomeHealthcareServicesUAE />} />
            <Route path="/wellness-diagnostic-services-uae/" element={<WellnessDiagnosticServicesUAE />} />
            {/* Emirate Pages */}
            <Route path="/dubai-ambulance-services/" element={<DubaiAmbulanceServices />} />
            <Route path="/abu-dhabi-ambulance-services/" element={<AbuDhabiAmbulanceServices />} />
            <Route path="/sharjah-ambulance-services/" element={<SharjahAmbulanceServices />} />
            <Route path="/ajman-ambulance-services/" element={<AjmanAmbulanceServices />} />
            <Route path="/ras-al-khaimah-ambulance-services/" element={<RasAlKhaimahAmbulanceServices />} />
            <Route path="/fujairah-ambulance-services/" element={<FujairahAmbulanceServices />} />
            <Route path="/umm-al-quwain-ambulance-services/" element={<UmmAlQuwainAmbulanceServices />} />
            {/* Blog Posts */}
            <Route path="/blog/how-to-choose-ambulance-service/" element={<BlogHowToChooseAmbulance />} />

            <Route path="/blog/private-ambulance-services-across-uae/" element={<BlogPrivateAmbulanceAcrossUAE />} />
            <Route path="/blog/emergency-patient-transfers-uae/" element={<BlogEmergencyPatientTransfersUAE />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
