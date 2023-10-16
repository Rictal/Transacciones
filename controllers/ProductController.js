const Mongoose = require("mongoose");
const productoModel = require(`../models/productoModel`);
const catchAsync = require("../utils/catchAsync");

exports.creatProduct = async (req, res) => {
  console.log(req.body);
  try {
    const newProduct = await productoModel.create(req.body);

    res.status(201).json({
      status: `succes`,
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.readAllProducts = async (req, res) => {
  try {
    //*********bnusqueda es el nopmbre del "atributo" para la query
    //req.query comienza al final de la ruta agregando un signo de interrogacion
    const { busqueda } = req.query;
    //si no hay coincidencias con la query arroja todo y retornna
    if (!busqueda) {
      const products = await productoModel.find();
      return res.send(products);
    }
    //Expresion regular para busqueda con coincidencias con mayus o minusculas (mongoose al menos con una letra coincida)
    const regex = new RegExp(busqueda, "i");
    //guarda las coincidencias con la busqueda
    const products = await productoModel.find({ Nombre: regex });
    //devuelve las coincidencias
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await productoModel.findById(req.params.id);
  if (!product) {
    return next(new error("Not prodyct found with the ID", 404));
  }
  res.status(200).json({
    status: "sucess",
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await productoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await productoModel.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
