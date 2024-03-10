import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// npm run cf <name-folder>
// console.dir(process.argv[2]);
// console.dir(process.argv.slice(2));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../public/projects/");
const argFolderName = process.argv[2];

const contentHTML = (folderName) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${folderName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hola, mundo!</h1>
  <script src="main.js"></script>
</body>
</html>
`;

const contentCSS = `
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}
`;

const contentJS = `
console.log('Hola, mundo!');
`;

//Create the folder
async function createNewFolder(folderName) {
    if (!folderName) {
        return console.error("Error: Debes proporcionar un nombre de carpeta.");
    }
    const lastFolderNumber = await getLastFolderNumber();
    const folder = path.join(publicPath, lastFolderNumber + "-" + folderName);
    try {
        await fs.mkdir(folder);
        await Promise.all([
            fs.writeFile(
                path.join(folder, "index.html"),
                contentHTML(folderName)
            ),
            fs.writeFile(path.join(folder, "styles.css"), contentCSS),
            fs.writeFile(path.join(folder, "main.js"), contentJS),
        ]);
    } catch (error) {
        console.error("Error", error);
    }
}

// Get de last folder in number
export async function getLastFolderNumber() {
    const folders = await fs.readdir(publicPath);
    const numbers = folders.map((folder) => parseInt(folder));
    const result = numbers.length ? Math.max(...numbers) + 1 : 0;
    return String(result).padStart(2, "0");
}

// Added to the json

// Create new folder
createNewFolder(argFolderName);
