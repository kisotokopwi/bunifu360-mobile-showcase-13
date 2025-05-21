import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Critical GitHub Pages fix (must match repo name exactly)
  base: "/bunifu360-mobile-showcase-13/",
  
  // Development server settings
  server: {
    host: "::",
    port: 8080
  },

  // Plugins configuration
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Optional: Build optimization
  build: {
    outDir: "dist",
    emptyOutDir: true, // Clears dist folder before build
    sourcemap: mode === 'development', // Sourcemaps only in dev
    chunkSizeWarningLimit: 1600, // Larger chunk warning threshold
  }
}));