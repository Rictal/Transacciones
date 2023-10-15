const express = require(`express`);
const productController = require(`../controllers/ProductController`);
const productModel = require("../models/productoModel");
const router = express.Router();

//Obtener todos los productos
router.get(`/`, productController.readAllProducts);
//Crear ptoducto
router.post(`/`, productController.creatProduct);

//Obtener ptoducto por ID
router.get(`/:id`, productController.getProduct);
//Eliminar ptoducto por ID
router.delete(`/:id`, productController.deleteProduct);
//Actualizar ptoducto por ID
router.patch(`/:id`, productController.updateProduct);

module.exports = router;
