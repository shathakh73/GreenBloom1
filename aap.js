// بيانات المنتجات (تجريبية)
const products = [
    { id: 1, name: "Gift Box 1", price: 25.99 },
    { id: 2, name: "Gift Box 2", price: 30.99 },
    { id: 3, name: "Gift Box 3", price: 15.99 }
];

// عرض المنتجات في صفحة المنتجات
const productContainer = document.getElementById('product-container');
if (productContainer) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// عربة التسوق
let cart = [];

// إضافة المنتجات إلى عربة التسوق
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(${product.name} added to cart!);
    updateCartUI();
}

// تحديث واجهة عربة التسوق
function updateCartUI() {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.innerHTML = '';  // تفريغ المحتويات الحالية
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}