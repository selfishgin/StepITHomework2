const products = [
    { title: "Wireless Mouse", category: "Electronics", price: 25.99, stock: 150 },
    { title: "Bluetooth Headphones", category: "Electronics", price: 59.99, stock: 85 },
    { title: "Office Desk Chair", category: "Furniture", price: 119.99, stock: 0 },
    { title: "Stainless Steel Water Bottle", category: "Home & Kitchen", price: 19.99, stock: 0 },
    { title: "Yoga Mat", category: "Fitness", price: 29.99, stock: 75 },
    { title: "Gaming Keyboard", category: "Electronics", price: 79.99, stock: 60 },
    { title: "LED Desk Lamp", category: "Home & Kitchen", price: 39.99, stock: 0 },
    { title: "Electric Kettle", category: "Home & Kitchen", price: 34.99, stock: 90 },
    { title: "Fitness Tracker", category: "Wearables", price: 49.99, stock: 40 },
    { title: "Backpack", category: "Accessories", price: 39.99, stock: 10 }
];

let basket = [];

const productList = document.getElementById("productList");
products.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${product.title} - $${product.price} (${product.stock > 0 ? 'In stock' : 'Out of stock'})`;
    li.onclick = () => addToBasket(index);
    productList.appendChild(li);
});

function addToBasket(index) {
    const product = products[index];
    if (product.stock > 0) {
        basket.push(product);
        updateBasket();
    } else {
        console.log(`${product.title} is out of stock and cannot be added.`);
    }
}

function updateBasket() {
    const basketList = document.getElementById("basketList");
    basketList.innerHTML = "";
    let totalAmount = 0;

    basket.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - $${item.price}`;
        basketList.appendChild(li);
        totalAmount += item.price;
    });

    const basketSummary = document.getElementById("basketSummary");
    basketSummary.textContent = `Total Items: ${basket.length}, Total Price: $${totalAmount.toFixed(2)}`;
}
