const { error } = require("console");
const {Sequelize} = require(`sequelize`);

const sequelize = new Sequelize(`transacciones`, `root`, `Rictal98.`,{
    host : `localhost`,
    dialect: `mssql`,
    port:3306
});

sequelize.authenticate()
.then( () => {console.log(`Conexion establecida`)})
.catch(error =>{
    console.error(`No se pudo conectar`)
})

module.exports = sequelize;