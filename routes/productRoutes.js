const express = require(`express`);
const productController = require(`../controllers/ProductController`);
const productModel = require("../models/productoModel");
const router = express.Router();

router
  .route("/")
  .get(productController.readAllProducts)
  .post(productController.creatProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);

module.exports = router;
