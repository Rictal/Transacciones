const sequelize = require(`./utils/database`);
const Producto = require(`./controllers/ProductoController`);

Producto.addProductoPromise(99, `Jamon`, 90, 90);