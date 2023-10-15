const Productito = require(`./models/productoModel`);
const Producto = require("./controllers/ProductController");

const producto = new Productito({
  Nombre: `Jamon`,
  Precio: 80,
  Stock: 50,
});
Producto.readAll();
//Producto.creatPRoduct(producto);
//Producto.updateStock(`Jamon`, 48);
//Producto.deleteProduct(`Leche`);
