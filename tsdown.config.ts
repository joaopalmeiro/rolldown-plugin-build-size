import { defineConfig } from "tsdown";

export default defineConfig({
  dts: {
    tsgo: true,
  },
  exports: true,
  publint: true,
  attw: {
    profile: "esm-only",
  },
});
