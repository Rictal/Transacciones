const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(`/api/v1/products`, productRouter);
module.exports = app;
