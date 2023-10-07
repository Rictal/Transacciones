const Mongoose = require("mongoose");
const mongoose = require("../utils/database");
const Schema = Mongoose.Schema;
mongoose.connect();
const schemaProduct = new Schema({
  Productos: [{
    type: String,
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

module.exports = Mongoose.model("Ventas", schemaProduct);