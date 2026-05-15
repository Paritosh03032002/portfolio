import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must match the repo name when serving via project pages
// (https://<user>.github.io/<repo>/). It is harmless for local dev.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: { port: 5174 },
});
