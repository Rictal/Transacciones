async function getAllProducts() {
  const res = await fetch(`${`localhost:3000/api/v1`}/products`);
  const products = await res.json();
  return products;
}

async function displayProducts() {
  const productsContainer = document.querySelector(".products");

  const products = await getAllProducts();

  products.forEach((product) => {
    const productTemplate = `<tr>
      <td>${product.Nombre}</td>
      <td>${product.Precio}</td>
      <td>${product.Stock}</td>
      <td>
        <a href="">Editar</a>
        <a href="">Eliminar</a>
      </td>
    </tr>`;
  });
}
