const Mongoose = require("mongoose");
const Venta = require(`../models/ventaModel`);

exports.readAll = async () => {
  Venta.find()
    .then((ventas) => console.log(ventas))
    .catch((err) => console.log(err));
};

exports.creatPRoduct = async (newVenta) => {
  try {
    newVenta
      .save()
      .then(() => console.log(`${newVenta} registrada`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
exports.updateTotal = async (id, total) => {
  try {
    Venta.findOneAndUpdate({ _id: id }, { Total: total })
      .then(() => console.log(`Total de la venta ${id} actualizado a ${total}`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
exports.deleteVenta = async (idVenta) => {
  try {
    Venta.deleteOne({ _id: idVenta })
      .then(() => console.log(`${idVenta} eliminado`))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
