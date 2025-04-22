import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls"],
      },
    },
  },

  server: {
    port: 5050, // Set your desired port here
  },
});
