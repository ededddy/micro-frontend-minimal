import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig({
  plugins: [solid(), cssInject()],
  preview: {
    port: 7300,
    open: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/App.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
