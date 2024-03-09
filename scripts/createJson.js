import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { readdir, stat } = require("fs").promises;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const proyectosPath = path.join(__dirname, "../public/projects");

const getProyectosData = async () => {
    try {
        const proyectos = await readdir(proyectosPath);

        const proyectosData = await Promise.all(
            proyectos.map(async (proyecto) => {
                const proyectoPath = path.join(proyectosPath, proyecto);
                const stats = await stat(proyectoPath);

                return {
                    nombre: proyecto,
                    id: crypto.randomUUID(),
                    url: proyectoPath,
                    image: `1`,
                    fecha_creacion: stats.birthtime,
                };
            })
        );

        return proyectosData;
    } catch (error) {
        console.error("Error al obtener datos de los proyectos:", error);
        throw error;
    }
};

const generarJSON = async () => {
    try {
        const proyectosData = await getProyectosData();
        const jsonData = JSON.stringify(proyectosData, null, 2);

        await fs.writeFile("proyectos.json", jsonData);

        console.log("Archivo JSON generado exitosamente.");
    } catch (error) {
        console.error("Error al generar el archivo JSON:", error);
    }
};

generarJSON();
