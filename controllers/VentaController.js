const Mongoose = require("mongoose");
const ventaModel = require(`../models/ventaModel`);
const catchAsync = require("../utils/catchAsync");

exports.readAllVentas = async (req, res) => {
  try {
    //*********bnusqueda es el nopmbre del "atributo" para la query
    //req.query comienza despues del final de la ruta con un signo de interrogacion
    const { busqueda } = req.query;
    console.log(req.query);
    //si no hay coincidencias con la query arroja todo y retornna
    if (!busqueda) {
      const ventas = await ventaModel.find();
      return res.send(ventas);
    }
    //Expresion regular para busqueda con coincidencias con mayus o minusculas (mongoose al menos con una letra coincida)
    const regex = new RegExp(busqueda, "i");
    //guarda las coincidencias con la busqueda
    const ventas = await ventaModel.find({ Nombre: regex });
    //devuelve las coincidencias
    res.send(ventas);
  } catch (err) {
    res.send(err);
  }
};

exports.creatVenta = async (req, res) => {
  console.log(req.body);
  try {
    const newVenta = await ventaModel.create(req.body);

    res.status(201).json({
      status: `succes`,
      data: {
        venta: newVenta,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getVenta = catchAsync(async (req, res, next) => {
  const venta = await ventaModel.findById(req.params.id);
  if (!venta) {
    return next(new error("No venta found with the ID", 404));
  }
  res.status(200).json({
    status: "sucess",
    data: {
      venta,
    },
  });
});

exports.updateVenta = catchAsync(async (req, res, next) => {
  const venta = await ventaModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!venta) {
    return next(new AppError("No venta found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product: venta,
    },
  });
});

exports.deleteVenta = catchAsync(async (req, res, next) => {
  const venta = await ventaModel.findByIdAndDelete(req.params.id);
  if (!venta) {
    return next(new AppError("No venta found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
