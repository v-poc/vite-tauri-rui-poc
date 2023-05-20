import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tauri from "vite-plugin-tauri";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tauri(),
    viteMockServe({
      mockPath: "src/mock",
      localEnabled: true,
      prodEnabled: true,
      logger: true,
      injectCode: `
        import { setupMock } from "./mock/index";
        setupMock();
      `,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600,
  },
  clearScreen: false,
  server: {
    open: false,
  },
});
