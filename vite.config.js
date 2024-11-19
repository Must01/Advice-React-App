import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build outputs to 'dist' (default, but can be explicitly stated)
    rollupOptions: {
      external: [], // External dependencies, if any
    },
    // You can also enable minification or other optimizations here, if needed:
    minify: "esbuild", // or 'terser' if you prefer
    // If you have static assets like images, you might want to configure assetsDir:
    assetsDir: "assets", // Optional: defines the folder for static assets inside 'dist'
  },
});
