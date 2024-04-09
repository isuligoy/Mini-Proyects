// footer-navigation.js
class FooterNavigation extends HTMLElement {
    constructor() {
        super();

        // Crear el contenido del menú flotante
        const menu = document.createElement("div");
        menu.classList.add("footer-menu");
        menu.innerHTML = `
            <ul>
                <li><a href="../index.html">Link 1</a></li>
                <li><a href="./Landing/camping.html">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        `;

        // Agregar evento para mostrar/ocultar el menú al hacer clic en el icono
        this.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Agregar los estilos CSS para el menú flotante
        const style = document.createElement("style");
        style.textContent = `
            .footer-menu {
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                /*display: ; /* Ocultar el menú por defecto */
            }

            .footer-menu.show {
                display: block; /* Mostrar el menú al hacer clic en el icono */
            }

            .footer-menu ul {
                list-style: none;
                padding: 0;
            }

            .footer-menu ul li {
                margin-bottom: 5px;
            }

            .footer-menu ul li a {
                text-decoration: none;
                color: #333;
            }

            .footer-menu ul li a:hover {
                color: #666;
            }
        `;

        // Agregar el menú y los estilos al componente
        this.appendChild(menu);
        this.appendChild(style);
    }
}

// Registrar el Web Component
customElements.define("footer-navigation", FooterNavigation);
