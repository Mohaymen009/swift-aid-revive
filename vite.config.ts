import { defineConfig, type ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from 'url';
import { componentTagger } from "lovable-tagger";
import crypto from 'crypto';
import path from "path";

// Generate a random nonce
const generateNonce = (): string => crypto.randomBytes(16).toString('base64');

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const isProduction = mode === 'production';
  const nonce = generateNonce();
  const __dirname = fileURLToPath(new URL('.', import.meta.url));

  return {
    base: isProduction ? "/" : "/",
    server: {
      host: "::",
      port: 8080,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean) as any[],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
            'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority'],
            'chart-vendor': ['recharts'],
          },
        },
      },
    },
  };
});
