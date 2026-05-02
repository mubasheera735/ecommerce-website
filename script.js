let cart = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => displayProducts(data));

function displayProducts(products) {
  const container = document.getElementById("products");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${product.image}" />
      <h4>${product.title}</h4>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart() {
  cart.push(1);
  document.getElementById("cart-count").innerText = cart.length;
}
