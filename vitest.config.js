import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    environment: "jsdom",
    exclude: ["tests/**", "node_modules/**", "dist/**"],
    globals: true,
    setupFiles: "./vitest.setup.js",
  },
});
