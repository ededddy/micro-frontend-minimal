import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInject()],
  preview: {
    port: 7200,
    open: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.vue"),
      preserveEntrySignatures: "exports-only",
      external: ["vue"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
