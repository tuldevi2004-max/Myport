// Sample products array strictly priced between ₹1 and ₹100
const products = [
    { id: 1, name: "Stylish Keychain", price: 29, img: "https://picsum.photos/200?random=1" },
    { id: 2, name: "Pocket Notebook", price: 49, img: "https://picsum.photos/200?random=2" },
    { id: 3, name: "Gel Pen Set", price: 15, img: "https://picsum.photos/200?random=3" },
    { id: 4, name: "Stainless Steel Ruler", price: 35, img: "https://picsum.photos/200?random=4" },
    { id: 5, name: "Premium Coffee Mug", price: 99, img: "https://picsum.photos/200?random=5" },
    { id: 6, name: "Eco-friendly Straw", price: 9, img: "https://picsum.photos/200?random=6" }
];

let cartCount = 0;
const productContainer = document.getElementById('products');
const cartCountSpan = document.getElementById('cart-count');

// Render products dynamically onto the page
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;
    productContainer.appendChild(card);
});

// Function to handle adding items to the cart
function addToCart() {
    cartCount++;
    cartCountSpan.innerText = cartCount;
    alert("Item added to cart!");
}
