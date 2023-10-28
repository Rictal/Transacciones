const express = require("express");
const productRouter = require("./routes/productRoutes");
const ventaRouter = require("./routes/ventasRoutes");
const ErrorGlobalHandling = require("./controllers/errors");

const app = express();

app.use(`/api/v1/products`, productRouter);

app.use(`/api/v1/ventas`, ventaRouter);

app.all(`*`, (req, res, next) => {
  /*res.status(404).json({
    status: `fail`,
    message: `Cant find ${req.originalUrl} on the Server`,
  });*/
  const err = new Error(`Cant find ${req.originalUrl} on the Server`);
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = errpr.status = `error`;
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

app.get("/", (req, res) => {
  reset.send(`
  <html>
    <head>
      <body>
        <form> 
          Nombreee de usuarui: <input type="text">
        </form>
      </body>
    </head>
  </html>`);
});
module.exports = app;
