import type { Plugin } from "https://deno.land/x/drollup@2.36.2+0.4.0/mod.ts";
import { pluginTerserTransform } from "https://deno.land/x/denopack@0.10.0/plugin/terserTransform/mod.ts";

const format = "es" as const;

export default {
  input: "./src/client/mod.tsx",
  plugins: [
    pluginTerserTransform() as Plugin,
  ],
  output: {
    dir: "./public/js/",
    format,
    sourcemap: true,
  },
  watch: {
    include: ["src/**"],
  },
};
