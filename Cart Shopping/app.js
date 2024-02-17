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
    addCartToMemory();
};

const addCartToMemory = () => {
    localStorage.setItem("cart", JSON.stringify(carts));
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach((cart) => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement("div");
            newCart.classList.add("item");
            newCart.dataset.id = cart.id;

            let positionProduct = listProducts.findIndex(
                (value) => value.id == cart.id
            );
            let info = listProducts[positionProduct];
            listCartHTML.appendChild(newCart);

            newCart.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
            </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * cart.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        });
    }
    iconCartSpan.innerHTML = totalQuantity;
};

listCartHTML.addEventListener("click", (event) => {
    let positionClick = event.target;
    let btnMinus = positionClick.classList.contains("minus");
    let btnPlus = positionClick.classList.contains("plus");
    if (btnMinus || btnPlus) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = "minus";
        if (btnPlus) {
            type = "plus";
        }
        changeQuantity(product_id, type);
    }
});

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.id == product_id);

    if (positionItemInCart >= 0) {
        let info = carts[positionItemInCart];
        switch (type) {
            case "plus":
                carts[positionItemInCart].quantity =
                    carts[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = carts[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    carts[positionItemInCart].quantity = changeQuantity;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
};

const initApp = () => {
    // get data from json
    fetch("products.json")
        .then((res) => res.json())
        .then((data) => {
            listProducts = data;
            addDataToHTML();
            if (localStorage.getItem("cart")) {
                carts = JSON.parse(localStorage.getItem("cart"));
                addCartToHTML();
            }
        });
};
initApp();
