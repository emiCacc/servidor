//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);//OBTENER TODOS LOS PRODUCTOS
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto); //OBTENER UN SOLO PRODUCTO
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;