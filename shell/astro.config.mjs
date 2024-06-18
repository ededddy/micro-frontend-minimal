import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    solidJs(),
    vue(),
    // 	{
    //   template: {
    //     compilerOptions: {
    //       isCustomElement: (tag) => tag.startsWith("Micro"),
    //     },
    //   },
    // }
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["externals"] = [
              "react",
              "react-dom",
              "solid-js",
              "vue",
            ];
          }
        },
      },
    },
  ],
});
