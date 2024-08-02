const products = [
    { title: "Televisor", category: "electronics" },
    { title: "Camiseta", category: "clothing" },
    { title: "Lampara", category: "home" },
    { title: "Telefono", category: "electronics" },
    { title: "Pantalones", category: "clothing" },
    { title: "Sofa", category: "home" }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("category");

function renderProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>Categoria: ${product.category}</p>
        `;
        productList.appendChild(productDiv);
    })
}

const filterProducts = () => {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === "all") {
        renderProducts(products)
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        renderProducts(filteredProducts)
    }
}

categoryFilter.addEventListener("change", filterProducts);

renderProducts(products);