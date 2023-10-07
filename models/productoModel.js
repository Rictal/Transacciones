const Mongoose = require("mongoose");
const mongoose = require("../utils/database");
const Schema = Mongoose.Schema;
mongoose.connect();
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

module.exports = Mongoose.model("Productos", schemaProduct);
