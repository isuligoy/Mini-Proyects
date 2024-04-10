import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PROYECTS_PATH = {
    REAL_FOLDER: "projects/",
    DIRECTORY_PATH: "../public/projects",
    CURRET_DIRECTORY: "./scripts/",
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const proyectosPath = path.join(__dirname, PROYECTS_PATH.DIRECTORY_PATH);

const getProyectData = async () => {
    try {
        const projects = await fs.readdir(proyectosPath);

        const createProjectJSON = projects.map((project, index) => {
            const { REAL_FOLDER } = PROYECTS_PATH;
            return {
                name: project,
                id: crypto.randomUUID(),
                url: REAL_FOLDER + project + "/index.html",
                //Shown take the firt 2 numbres - Si se borra un proyecto que agregue ese numero
                number: String(index + 1).padStart(2, "0"),
                image: `1`,
                fecha_creacion: "15-05-1600",
            };
        });
        return createProjectJSON;
    } catch (error) {
        console.error(error);
    }
};

const generateJSONFile = async () => {
    try {
        const projectsData = await getProyectData();
        const jsonData = JSON.stringify(projectsData, null, 2);

        const { CURRET_DIRECTORY } = PROYECTS_PATH;
        await fs.writeFile(CURRET_DIRECTORY + "projects.json", jsonData);
    } catch (error) {
        console.error(error);
    }
};

generateJSONFile();
