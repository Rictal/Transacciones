const Mongoose = require("mongoose");
const productoModel = require(`../models/productoModel`);
const catchAsync = require("../utils/catchAsync");

exports.creatProduct = async (newProduct) => {
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
      message: err,
    });
  }
};
exports.readAllProducts = async (req, res) => {
  try {
    const products = await productoModel.find();
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

exports.updateStock = async (product, newStock) => {
  catchAsync(async (req, res, next) => {
    const product = await productoModel
      .find({ nOMBRE: { $regex: "developer" } })
      .pretty();
    //////////////////////////////AQUI ME QUEDE///////////////////////////////////////////////////////////
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
};
