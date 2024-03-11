import fs from "node:fs/promises";
/*
const getProyectNumber = () => {};
*/
const getProyectUrlLink = (url) => {
    return `[Link](${PLACEHOLDER.GITHUB_URL + url})`;
};
const getProyectNameLink = (name) => {
    return `[Link](${PLACEHOLDER.GITHUB_PAGE + name})`;
};

const PLACEHOLDER = {
    GITHUB_PAGE:
        "https://github.com/isuligoy/Mini-Proyects/tree/main/public/projects/",
    GITHUB_URL: "https://isuligoy.github.io/Mini-Proyects/",
    TEMPLATE: "%{{table_templete}}%",
    /* PROYECT_NUMBER: "%{{number}}%",
    LINK_PAGE: "%{{link_page}}%",
    LINK_CODE: "%{{link_code}}%",*/
};

const tableTemplete = (proyects) => {
    const table = `| Number | Proyecto Name | Page | Code |\n| :----: |  :----: |  :----: | :----: |\n${generateTable(
        proyects
    )}`;
    return table;
};

const generateTable = (proyects) => {
    const tableDataRows = proyects
        .map(({ name, number, url }) => {
            return `| # ${number} | ${name} | ${getProyectUrlLink(
                url
            )}| ${getProyectNameLink(name)} |`;
        })
        .join("\n");
    return tableDataRows;
};

async function readJson() {
    try {
        const jsonData = await fs.readFile("./scripts/projects.json");
        const proyects = await JSON.parse(jsonData);
        const tableWriten = tableTemplete(proyects);
        writeReadMe(tableWriten);
    } catch (error) {
        console.error(error);
    }
}

async function writeReadMe(tableWriten) {
    try {
        const getTemplateMarkdown = await fs.readFile(
            "./scripts/README.md.tpl",
            {
                encoding: "utf-8",
            }
        );
        const newMarkDown = getTemplateMarkdown.replace(
            PLACEHOLDER.TEMPLATE,
            tableWriten
        );
        await fs.writeFile("ReadMe.md", newMarkDown);
    } catch (error) {
        console.error(error);
    }
}
readJson();
