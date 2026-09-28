import { defineConfig } from "tsdown";

import buildSize from "./src/index.ts";

export default defineConfig({
  attw: {
    profile: "esm-only",
  },
  dts: {
    tsgo: true,
  },
  exports: true,
  plugins: [buildSize()],
  publint: true,
});
