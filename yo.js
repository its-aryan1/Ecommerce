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
