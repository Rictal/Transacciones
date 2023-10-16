const express = require(`express`);
const ventaController = require(`../controllers/VentaController`);
const router = express.Router();

//Obtener todas lss ventas
router.get(`/`, ventaController.readAllVentas);
//Crear ptoducto
router.post(`/`, ventaController.creatVenta);

//Obtener ventas por ID
router.get(`/:id`, ventaController.getVenta);
//Eliminar ventas por ID
router.delete(`/:id`, ventaController.deleteVenta);
//Actualizar ventas por ID
router.patch(`/:id`, ventaController.updateVenta);

module.exports = router;