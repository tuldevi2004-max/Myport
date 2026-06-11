let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart");
const cartCounter = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);
    });
});
