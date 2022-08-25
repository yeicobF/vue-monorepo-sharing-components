import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Components",
      // the proper extensions will be added
      fileName: "components",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        /* 
        Entry module "src/index.js" is using named and default exports together.
        Consumers of your bundle will have to use `Components["default"]` to
        access the default export, which may not be what you want. Use
        `output.exports: "named"` to disable this warning 
        */
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
    /* // https://rollupjs.org/guide/en/#watch-options
    watch: {
      exclude: "node_modules/**",
    }, */
  },
});
