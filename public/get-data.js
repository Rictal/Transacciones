async function getAllProducts() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  return products;
}

async function displayProducts() {
  const productsContainer = document.querySelector(".products");

  const products = await getAllProducts();

  products.forEach((product) => {
    //${product.id}
    const productTemplate = `<tr>
      <td></td>
      <td>Precio</td>
      <td>Stock</td>
      <td>
        <a href="">Editar</a>
        <a href="">Eliminar</a>
      </td>
    </tr>`;
  });
}
