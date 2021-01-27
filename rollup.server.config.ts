const format = "es" as const;

export default {
  input: "./src/server/mod.tsx",
  output: {
    dir: "./bin/",
    format,
    sourcemap: true,
  },
  watch: {
    include: ["src/**"],
  },
  onwarn() {},
};
