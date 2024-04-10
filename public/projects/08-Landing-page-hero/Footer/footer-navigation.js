// footer-navigation.js
//https://www.youtube.com/watch?v=HGeqO_8BlvY
import styles from "./Footer-navegation.css";
class FooterNavigation extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
        this.openMenu();
    }

    static get styles() {
        return styles;
    }

    openMenu() {
        const menu = this.shadowRoot.querySelector(".footer-menu");
        menu.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${UserInfo.styles}</style>
        <ul>
            <li><a href="../index.html">Link 1</a></li>
            <li><a href="./Landing/camping.html">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
    `;
    }
}

// Registrar el Web Component
customElements.define("footer-navigation", FooterNavigation);
