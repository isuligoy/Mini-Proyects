import { defineConfig } from "astro/config";

// https://astro.build/config
// import path from "node:path";

// const isGitHubPages = true;
// const folderName = path.basename(process.cwd()) + "/";
// const mode =
//     process.env.NODE_ENV === "production" ? "production" : "development";
// const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default defineConfig({
    site: "https://isuligoy.github.io",
    base: "/Mini-Proyects",
    root: "./",
    // base,
    // mode,
    envDir: "./",
    publicDir: "./public",
    // resolve: {
    //     alias: {
    //         "@": new URL("./src", import.meta.url).pathname,
    //     },
    // },
    build: {
        outDir: "./dist",
        assetsDir: "./",
    },
});
