const iconCart = document.querySelector(".icon-cart");
const closeCart = document.querySelector(".close");
const body = document.querySelector("body");
const listProductHTML = document.querySelector(".listProduct");
const listCartHTML = document.querySelector(".listCart");
const iconCartSpan = document.querySelector(".icon-cart span");

let listProducts;
let carts = [];

iconCart.addEventListener("click", () => {
    body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
    body.classList.toggle("showCart");
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = "";
    if (listProducts.length > 0) {
        listProducts.forEach((product) => {
            let newProduct = document.createElement("div");
            newProduct.classList.add("item");
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="img">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">
                    Add to cart
                </button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

listProductHTML.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains("addCart")) {
        let product_id = positionClick.parentElement.getAttribute("data-id");
        addToCart(product_id);
    }
});

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex(
        (value) => value.id == product_id
    );
    if (carts.length <= 0) {
        carts = [
            {
                id: product_id,
                quantity: 1,
            },
        ];
    } else if (positionThisProductInCart < 0) {
        carts.push({
            id: product_id,
            quantity: 1,
        });
    } else {
        carts[positionThisProductInCart].quantity++;
    }
    addCartToHTML();
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach((cart) => {
            totalQuantity += cart.quantity;
            let product = listProducts.find((value) => value.id == cart.id);
            let newCart = document.createElement("div");
            newCart.classList.add("item");
            newCart.innerHTML = `
            <div class="image">
                <img src="${product.image}" alt="img">
            </div>
                <div class="name">${product.name}</div>
                <div class="totalPrice">$${product.price}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${cart.quantity}</span>   
                    <span class="plus">></span>   
                </div>  
            </div>`;

            listCartHTML.appendChild(newCart);
        });
    }
    iconCartSpan.innerHTML = totalQuantity;
};

const initApp = () => {
    // get data from json
    fetch("products.json")
        .then((res) => res.json())
        .then((data) => {
            listProducts = data;
            addDataToHTML();
        });
};
initApp();
