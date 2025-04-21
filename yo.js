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
