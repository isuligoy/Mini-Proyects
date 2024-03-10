import proyects from "@scripts/projects.json";

const PLACEHOLDER = {
    GITHUB_URL: "https://isuligoy.github.io/Mini-Proyects/",
    PROYECT_NUMBER: "%{{number}}%",
    LINK_PAGE: "%{{link_page}}%",
    LINK_CODE: "%{{link_code}}%",
};

const tableTemplete = ({ PROYECT_NUMBER, LINK_PAGE, LINK_CODE }) => `<table>
<tr>
    <th>Number</th>
    <th>Page</th>
    <th>Code</th>
</tr>
<tr>
    <td>${PROYECT_NUMBER}</td>
    <td>${LINK_PAGE}</td>
    <td>${LINK_CODE}</td>
</tr>
</table>`;

const getProyectNumber = () => {};
const getProyectPageLink = () => {};
const getProyectCodeLink = () => {};

const generateTable = () => {
    proyects.map((proyect) => {
        const { name, number, url } = proyect;
    });
};
generateTable();
