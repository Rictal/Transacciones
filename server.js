const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
dotenv.config({ path: `./config.env` });
const app = require(`./app`);

const DB = process.env.DATABASE_LOCAL;

//Inicializa la base de datos
mongoose
  .connect(DB)
  .then((con) => {
    console.log(`Conectado correctamente a la BD`);
  })
  .catch((err) => {
    console.log(err);
  });

//Levanto el servidor
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
