const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Producto = sequelize.define("productos", {
  ID_producto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  Nombre: {
    type: Sequelize.STRING,
    allownull: false,
  },
  Precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Precio debe ser un unmero",
      },
    },
  },
  Cantidad: {
    type: Sequelize.INTEGER,
    allownull: false,
    validate: {
      isInt: {
        msg: `Cantidad debe ser un numero`,
      },
    },
  },
});

module.exports = Producto;