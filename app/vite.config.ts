import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Environment variables to prefix with VITE_
const envVars = ["API_URL"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../", "");
  envVars.forEach((key) => {
    process.env[`VITE_${key}`] = env[key];
  });
  return {
    plugins: [react()],
  };
});
