const PLACES = [
    {
        name: "Switzeland",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        name: "Irealand",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Australia",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1711619034500-8f562ce7bf4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Nedeland",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1708923878558-6ab2c906e099?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ireland",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1711730131609-6a5cb68e6d59?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ireland",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nisi, architecto facilis reprehenderit",
        img: "https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const slider = document.querySelector(".slider");

for (let index = 0; index < PLACES.length; index++) {
    const items = document.createElement("div");
    items.classList.add("item");
    items.style.backgroundImage = `url(${PLACES[index].img})`;

    items.innerHTML = `
    <div class="content">
        <div class="name">${PLACES[index].name}</div>
        <div class="des">${PLACES[index].des}</div>
        <button>See More</button>
        </div>
    </div>`;

    slider.appendChild(items);
}

// Create the slider
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slider").appendChild(items[0]);
});

prev.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slider").prepend(items[items.length - 1]);
});
