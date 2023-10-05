const Sequelize = require(`sequelize`).Sequelize;
const Producto = require(`../models/productoModelo`);

exports.addProductoPromise = (id, nombre, precio, cantidad)=>{
    Producto.create({
        ID_producto: id,
        Nombre: nombre,
        Precio: precio,
        Cantidad: cantidad
    })
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })
}