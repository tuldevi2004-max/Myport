// Premium sample items strictly between ₹1 and ₹100
const products = [
    { id: 1, name: "Minimalist Leather Keychain", price: 49, img: "https://picsum.photos/400/400?random=1" },
    { id: 2, name: "A5 Kraft Paper Journal", price: 79, img: "https://picsum.photos/400/400?random=2" },
    { id: 3, name: "Matte Black Fineliner Pens", price: 30, img: "https://picsum.photos/400/400?random=3" },
    { id: 4, name: "Sleek Aluminum Ruler", price: 55, img: "https://picsum.photos/400/400?random=4" },
    { id: 5, name: "Ceramic Espresso Cup", price: 99, img: "https://picsum.photos/400/400?random=5" },
    { id: 6, name: "Organic Bamboo Coasters", price: 85, img: "https://picsum.photos/400/400?random=6" }
];

let cartCount = 0;
const productContainer = document.getElementById('products');
const cartCountSpan = document.getElementById('cart-count');

// Render upgraded UI components
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="image-container">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price-tag">₹${product.price}</p>
            <button onclick="addToCart()">Add to Bag</button>
        </div>
    `;
    productContainer.appendChild(card);
});

function addToCart() {
    cartCount++;
    cartCountSpan.innerText = cartCount;
}
