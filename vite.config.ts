import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerender } from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/about-us",
        "/licensing",
        "/medical-oversight",
        "/services",
        "/ambulance-services-uae",
        "/non-emergency-medical-transport-uae",
        "/doctor-on-call-uae",
        "/home-healthcare-services-uae",
        "/wellness-diagnostic-services-uae",
        "/dubai-ambulance-services",
        "/abu-dhabi-ambulance-services",
        "/sharjah-ambulance-services",
        "/ajman-ambulance-services",
        "/ras-al-khaimah-ambulance-services",
        "/fujairah-ambulance-services",
        "/umm-al-quwain-ambulance-services",
        "/blog/how-to-choose-ambulance-service",
        "/blog/private-ambulance-services-across-uae",
        "/blog/emergency-patient-transfers-uae",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
