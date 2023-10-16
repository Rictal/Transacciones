const express = require("express");
const productRouter = require("./routes/productRoutes");
const ventaRouter = require("./routes/ventasRoutes");

const app = express();
app.use(`/api/v1/products`, productRouter);
app.use(`/api/v1/ventas`, ventaRouter);
module.exports = app;
