import USERS from "../user.json" with { type: "json" };

class DashboardApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get styles() {
        return /* css */ ` 
            host { 
                --background: #29263d;
                --table-background: #29263d;
                --primary: #ffd45e;
                --text-color: #ffffff;
                --gray: #a0a7b1;
                --th-background: #2e2b43;
            }

            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, sans-serif;
        }
        
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: var(--background);
        }
        .table-widget {
            border-radius: 1rem;
            background: var(--table-background);
            padding: 1.5rem;
            text-align: left;
            overflow: auto;
            user-select: none;
            color: var(--text-color);
        }       
        .table-widget table {
            max-width: fit-content;
            border-collapse: collapse;
        }
        .table-widget table tr {
            background: var(--th-background);
        }
        .table-widget .caption {
            display: flex;
            justify-content: space-between;
        }
        .table-widget .export-btn {
            background: none;
            color: var(--text-color);
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .table-widget .export-btn:hover {
            color: var(--primary);
        }
        .table-widget .export-btn svg {
            width: 2rem;
            height: 2rem;
        }
        .table-widget th {
            padding: 1.25rem 1rem;
            font-size: 1.05rem;
            font-weight: 800;
            vertical-align: middle;
        }
        .table-widget th { 
            padding: 1rem;
            background: transparent;
            color: white;
            vertical-align: middle;
        }
        .table-widget tbody tr {
            transition: all 0.2s;
        }
        .table-widget tbody tr:hover {
            background: var(--th-background);
            cursor: pointer;
        }
        .team-member-profile {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .team-member-profile img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            object-fit: cover;
        }
        .profile-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        .profile-info__name {
            font-weight: 700;
            white-space: nowrap;
        }
        .status {
            display: flex;
            font-weight: 700;
            gap: 0.5rem;
            align-items: center;
        }
        .status__circle {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
        }
        .status--active {
            background: #2ecc71;
        }
        .status--inactive {
            background: #ffd071;
        }
        .status--offline {
            background: var(--gray);
        }
        .tags {
            display: flex;
            gap: 0.5rem;
        }
        .tag {
            padding: 0.5rem;
            border-radius: 0.5rem;
            font-weight: 700;
            color: var(--background);
        }
        .tag::first-letter {
            text-transform: uppercase;
        }
        .tag--design {
            background: #bd8eff;
        }
        .tag--QA {
            background: #ff8585;
        }
        .tag--dev {
            background: #89b8ff;
        }
        .tag--marketing {
            background: #ffd45e;
        }
        `;
    }

    connectedCallback() {
        this.render();
    }

    getHeaders() {
        const header = ["Name", "Status", "Email", "Tags"];
        const html = header.map((el) => /* html */ `<td>${el}</td>`).join("");
        return html;
    }

    getRows() {
        const rows = USERS.map(
            (el) => /* html */ `
                <tr>
                <td class="team-member-profile">
                <img src=${el.src} alt=${el.alt} />
                <div class="profile-info">
                    <div class="profile-info__name">${el.name}</div>
                    <div class="profile-info__alias">${el.alias}</div>
                </div>
            </td>
            <td>
                <div class="status">
                    <div class="status__circle status--${el.status}">${
                el.status
            } </div>
                </div>
            </td>
            <td>${el.email}</td>
            <td>
                <div class="tags">
                ${el.tag
                    .map(
                        (tag) =>
                            /* html */ `<div class="tag tag--${tag}">${tag}</div>`
                    )
                    .join("")}
                    </div>
            </td>
            </tr>
            `
        ).join("");
        return rows;
    }

    render() {
        this.shadowRoot.innerHTML = /* HTML */ `
            <style>
                ${DashboardApp.styles}
            </style>
            <article class="table-widget">
                <div class="caption">
                    <h2>Team Members</h2>
                    <button class="export-btn" type="button">Export</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            ${this.getHeaders()}
                        </tr>
                    </thead>
                    <tbody id="team-member-rows">
                           ${this.getRows()}
                    </tbody>
                </table>
            </article>
        `;
    }
}

customElements.define("dashboard-app", DashboardApp);