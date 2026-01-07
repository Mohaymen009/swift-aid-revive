import { defineConfig, type ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from 'vite-plugin-html';
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
        'Content-Security-Policy': `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self';`,
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
      createHtmlPlugin({
        minify: isProduction,
        inject: {
          data: {
            nonce,
            cspNonce: nonce,
          },
        },
      }),
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
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
});
