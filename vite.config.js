import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Ecommerce/", // Ensure this matches the GitHub repository name
  plugins: [react()],
});
