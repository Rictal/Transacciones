const Mongoose = require("mongoose");
const Producto = require(`../models/productoModel`);

exports.readAll = async () => {
  Producto.find()
    .then((productos) => console.log(productos))
    .catch((err) => console.log(err));
};

exports.creatPRoduct = async (newProduct) => {
  try {
    newProduct
      .save()
      .then(() => console.log(`${newProduct} creado exitosamente`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
exports.updateStock = async (product, newStock) => {
  try {
    Producto.findOneAndUpdate(
      { Nombre: product },
      { Stock: newStock }
    )
      .then(() => console.log(`Stock de ${product} actualizado a ${newStock}`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
exports.deleteProduct = async (productName) => {
  try {
    Producto.deleteOne({Nombre: productName})
      .then(() => console.log(`${productName} eliminado`))
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error);
  }
};
