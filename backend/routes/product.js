const express = require('express');

const {
    getProducts, createProduct, deleteProduct,
} = require('../controllers/product');


const productRoutes = express.Router();

productRoutes.get('/', getProducts);

productRoutes.post('/', express.json(), createProduct);

productRoutes.delete('/:id', deleteProduct);

exports.productRoutes = productRoutes;
