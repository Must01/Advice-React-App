export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the output directory is 'dist'
    rollupOptions: {
      external: [],
    },
  },
});
