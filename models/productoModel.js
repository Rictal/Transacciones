const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const schemaProduct = new Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  },
  Stock: {
    type: Number,
    required: true,
  },
});

const productModel = Mongoose.model("Productos", schemaProduct);
module.exports = productModel;
