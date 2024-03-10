import { defineConfig } from "astro/config";
// https://astro.build/config

export default defineConfig({
    root: "./",
    envDir: "./",
    publicDir: "./public",
    build: {
        outDir: "./dist",
        assetsDir: "./",
    },
});
