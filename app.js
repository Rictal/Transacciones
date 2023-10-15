const express = require("express");
const productRouter = require("./routes/userRoutes");

const app = express();
app.use(`/api/v1/products`, productRouter);
module.exports = app;
