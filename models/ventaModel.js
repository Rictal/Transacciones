const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const schemaProduct = new Schema({
  Productos: [{
    type: [],
    required: true,
  }],
  Total: {
    type: Number,
    required: true,
  },
  Fecha: {
    type: Date,
    required: true,
  },
});

const ventatModel = Mongoose.model("Ventas", schemaProduct);
module.exports = ventatModel;