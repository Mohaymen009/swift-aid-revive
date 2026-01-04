import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// All routes that need to be prerendered for SEO
const routesToPrerender = [
  "/",
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
  "/licensing",
  "/about-us",
  "/blog/how-to-choose-ambulance-service",
  "/blog/private-ambulance-services-across-uae",
  "/blog/emergency-patient-transfers-uae",
];

const Renderer = vitePrerender.PuppeteerRenderer;

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
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: routesToPrerender,
      renderer: new Renderer({
        renderAfterTime: 3000, // Wait 3 seconds for React to render
        headless: true,
      }),
      postProcess(renderedRoute) {
        // Add data-server-rendered attribute for hydration
        renderedRoute.html = renderedRoute.html.replace(
          '<div id="root">',
          '<div id="root" data-server-rendered="true">'
        );
        return renderedRoute;
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
