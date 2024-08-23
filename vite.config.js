import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/admin-yh/',
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default, but double-check it's correct
  },
});
