import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const PROYECTS_PATH = {
    REAL_FOLDER: "projects/",
    DIRECTORY_PATH: "../public/projects",
    CURRET_DIRECTORY: "./scripts/",
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const proyectosPath = path.join(__dirname, PROYECTS_PATH.DIRECTORY_PATH);

// Create the JSON info, for then return
const getProyectData = async () => {
    try {
        const projects = await fs.readdir(proyectosPath);

        const createProjectJSON = projects.map((project, index) => {
            const { REAL_FOLDER } = PROYECTS_PATH;
            return {
                //id: crypto.randomUUID(),
                name: project,
                url: REAL_FOLDER + project + "/index.html",
                number: String(index + 1).padStart(2, "0"),
            };
        });
        return createProjectJSON;
    } catch (error) {
        console.error(error);
    }
};

// Check if the new json is the same as the old one
const checkJSONFile = async () => {
    try {
        let currentJsonData = [];
        const { CURRET_DIRECTORY } = PROYECTS_PATH;
        const currentJson = await fs.readFile(
            CURRET_DIRECTORY + "projects.json",
            "utf-8"
        );
        return (currentJsonData = JSON.parse(currentJson));
    } catch (error) {
        console.error(error);
    }
};

// Set the JSON info from getProyectData and then create
// the json file in the proyects folder
const generateJSONFile = async () => {
    try {
        const projectsData = await getProyectData();
        const oldData = await checkJSONFile();

        const jsonData = JSON.stringify(projectsData, null, 2);
        const areEqual = JSON.stringify(oldData, null, 2) === jsonData;

        if (areEqual)
            return console.log("Ya son el mismo json, nada para cambiar");

        const { CURRET_DIRECTORY } = PROYECTS_PATH;
        await fs.writeFile(CURRET_DIRECTORY + "projects.json", jsonData);
    } catch (error) {
        console.error(error);
    }
};

generateJSONFile();
