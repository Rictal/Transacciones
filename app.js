const express = require("express");
const productRouter = require("./routes/productRoutes");
const ventaRouter = require("./routes/ventasRoutes");
const ErrorGlobalHandling = require("./utils/errors");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

app.get("/login", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Login</title>
    </head>
    <body>
      <form method= "POST" action="/auth"> 
        Nombre de usuario: <input type="text" name="text"><br/>
        Clave: <input type="password"name="password"><br/>
        <input type="submit" value= "Iniciar sesion" /> 
      </form>
    </body>
  </html>`);
});

app.post("/auth", (req, res) => {
  console.log("1", res);
  const { username, password } = req.body;
  //revisar BD para validar usuario
  const user = { username: username, password: password };
  const accesToken = generateAccessTokeeen(user);
  res.header("autoritation", accesToken).json({
    message: "usuario autenticado",
    token: token,
  });
});


function generateAccessTokeeen(user) {
  return jwt.sign(user, process.env.SECRETKEY, { expiresIn: "5m" });
}


app.use(express.json);

app.use(express.urlencoded({ extended: false }));

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
  error.status = error.status = `error`;
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
