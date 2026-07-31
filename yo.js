const products = document.querySelectorAll('.box');
let cartCount = 0;
const cart = [];
const cartCounter = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = {
                name: products[index].querySelector('h4').textContent,
                price: products[index].querySelector('p').textContent
            };
            cart.push(product);
            cartCount++;
            cartCounter.textContent = cartCount;
            alert(`${product.name} added to cart!`);
            console.log(cart);
        });
    });
});
const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions-box");

const productNames = [
    "FORZA HORIZEN LIMITED",
    "GTA V LIMITED",
    "GOD OF WAR RAGNAROCK LIMITED",
    "PS5 GTA6 ONLINE LIMITED"
];

// show suggestions when typing
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    
    if (value.trim() === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    const filtered = productNames.filter(item =>
        item.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        div.classList.add("suggestion-item");

        div.addEventListener("click", () => {
            searchInput.value = item;
            suggestionsBox.style.display = "none";
        });

        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = "block";
});

// hide dropdown on outside click
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-area")) {
        suggestionsBox.style.display = "none";
    }
});




const slides = [

{
img:"https://imgs.search.brave.com/Zo3SbhyJ0-sLMn2L87fc6snYqn3uT3KDLTu9K5_krUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvZGtqNTMw/ZXdpaDRjMS5wbmc",
title:"GTA VI",
desc:"Experience the next generation of gaming."
},

{
img:"https://imgs.search.brave.com/0CHSYd51ylrgjg1TC2x5CVklKcJCwiDgyVG67S1Euy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExNDg0/ODgzLmpwZw",
title:"God Of War",
desc:"Fight like a true warrior."
},

{
img:"https://imgs.search.brave.com/rku8JSl0fKLmdnHawPyCMH4xdw_hYarGhfGUJvEHe5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyNDA1/NDY1LmpwZw",
title:"Forza Horizon",
desc:"Drive your dream cars."
},

];

let i=0;

const image=document.getElementById("banner");
const title=document.getElementById("title");
const desc=document.getElementById("desc");

function show(){

image.src=slides[i].img;
title.innerHTML=slides[i].title;
desc.innerHTML=slides[i].desc;

}

document.querySelector(".right").onclick=function(){

i++;

if(i==slides.length){

i=0;

}
