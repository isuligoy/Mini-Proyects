import fs from "node:fs/promises";
const getProyectCodeLink = (url) => {
    return BADGES.LINK_CODE(PLACEHOLDER.GITHUB_URL + url);
};
const getProyectPageLink = (name) => {
    return BADGES.LINK_PAGE(PLACEHOLDER.GITHUB_URL + name);
};

const PLACEHOLDER = {
    GITHUB_PAGE:
        "https://github.com/isuligoy/Mini-Proyects/tree/main/public/projects/",
    GITHUB_URL: "https://isuligoy.github.io/Mini-Proyects/",
    TEMPLATE_TABLE: "%{{table_templete}}%",
    TEMPLATE_DATE: "%{{formated_date}}%",
};

const BADGES = {
    LINK_PAGE: (URL) =>
        `[![GitHub Badge](https://img.shields.io/badge/Código-181717?logo=react&logoColor=fff&style=flat-square)](${URL})`,
    LINK_CODE: (URL) =>
        `[![Link Badge](https://img.shields.io/badge/Page-181717?logo=github&logoColor=fff&style=flat-square)](${URL})`,
};

const tableTemplete = (proyects) => {
    const table = `| Number | Proyecto Name | Page | Code |\n| :----: |  :---- |  :----: | :----: |\n${generateTable(
        proyects
    )}`;
    return table;
};

const generateTable = (proyects) => {
    const tableDataRows = proyects
        .map(({ name, number, url }) => {
            return `| # ${number} | ${name} | ${getProyectCodeLink(
                url
            )}| ${getProyectPageLink(name)} |`;
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
            PLACEHOLDER.TEMPLATE_TABLE,
            tableWriten
        );
        await fs.writeFile("ReadMe.md", newMarkDown);
    } catch (error) {
        console.error(error);
    }
}
readJson();
