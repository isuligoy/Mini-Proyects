import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const proyectsPath = {
    realFolder: "projects/",
    directoryPath: "../public/projects",
    curretDirectory: "./scripts/",
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const proyectosPath = path.join(__dirname, proyectsPath.directoryPath);

const getProyectData = async () => {
    try {
        const projects = await fs.readdir(proyectosPath);

        const createProjectJSON = projects.map((project, index) => {
            const { realFolder } = proyectsPath;
            return {
                name: project,
                id: crypto.randomUUID(),
                url: realFolder + project + "/index.html",
                number: String(index + 1).padStart(2, "0"), //Shown take the firt 2 numbres
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

        const { curretDirectory } = proyectsPath;
        await fs.writeFile(curretDirectory + "projects.json", jsonData);
    } catch (error) {
        console.error(error);
    }
};

generateJSONFile();
