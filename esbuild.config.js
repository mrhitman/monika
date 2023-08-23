import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/main.js"],
    bundle: true,
    outfile: "www/main.js",
  },
  { root: "www" }
);
