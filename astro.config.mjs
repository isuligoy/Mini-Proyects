import { defineConfig } from "astro/config";
// https://astro.build/config
import path from "node:path";

const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default defineConfig({
    root: "./",
    base,
    mode,
    envDir: "./",
    publicDir: "./public",
    build: {
        outDir: "./dist",
        assetsDir: "./",
    },
});
