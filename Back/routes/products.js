const express = require ("express")
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { remove } = require("../models/productos");

router.route("/productos").get(getProducts) //Establecemos desde que ruta queremos ver el get products
router.route('/producto/nuevo').post(newProduct); //establecemos la ruta
router.route('/producto/:id').get(getProductById); //ruta para consultar por ID
router.route('/producto/:id').put(updateProduct); //updating route
router.route('/producto/:id').delete(deleteProduct); //delete specific item by ID

module.exports = router;