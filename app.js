const Productito = require(`./models/productoModel`);
const Producto = require("./controllers/ProductController");

const producto = new Productito({
  Nombre: `Leche`,
  Precio: 22,
  Stock: 70,
});
Producto.readAll();
//Producto.creatPRoduct(producto);
//Producto.updateStock(`Leche`, 65);
//Producto.deleteProduct(`Leche`);
