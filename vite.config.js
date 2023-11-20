import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/user-stories-tester",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-test.js",
  },
});
