import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DubaiAmbulanceServices from "./pages/DubaiAmbulanceServices";
import AbuDhabiAmbulanceServices from "./pages/AbuDhabiAmbulanceServices";
import SharjahAmbulanceServices from "./pages/SharjahAmbulanceServices";
import AjmanAmbulanceServices from "./pages/AjmanAmbulanceServices";
import RasAlKhaimahAmbulanceServices from "./pages/RasAlKhaimahAmbulanceServices";
import FujairahAmbulanceServices from "./pages/FujairahAmbulanceServices";
import UmmAlQuwainAmbulanceServices from "./pages/UmmAlQuwainAmbulanceServices";
import BlogHowToChooseAmbulance from "./pages/BlogHowToChooseAmbulance";
import BlogPrivateAmbulanceAcrossUAE from "./pages/BlogPrivateAmbulanceAcrossUAE";
import BlogEmergencyPatientTransfersUAE from "./pages/BlogEmergencyPatientTransfersUAE";
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
          <Route path="/dubai-ambulance-services" element={<DubaiAmbulanceServices />} />
          <Route path="/abu-dhabi-ambulance-services" element={<AbuDhabiAmbulanceServices />} />
          <Route path="/sharjah-ambulance-services" element={<SharjahAmbulanceServices />} />
          <Route path="/ajman-ambulance-services" element={<AjmanAmbulanceServices />} />
          <Route path="/ras-al-khaimah-ambulance-services" element={<RasAlKhaimahAmbulanceServices />} />
          <Route path="/fujairah-ambulance-services" element={<FujairahAmbulanceServices />} />
          <Route path="/umm-al-quwain-ambulance-services" element={<UmmAlQuwainAmbulanceServices />} />
          <Route path="/blog/how-to-choose-ambulance-service" element={<BlogHowToChooseAmbulance />} />
          <Route path="/blog/private-ambulance-services-across-uae" element={<BlogPrivateAmbulanceAcrossUAE />} />
          <Route path="/blog/emergency-patient-transfers-uae" element={<BlogEmergencyPatientTransfersUAE />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
