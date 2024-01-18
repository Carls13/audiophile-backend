const express = require('express');
const { findAllProducts, findProductBySlug, findProductsByCategory } = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/', findAllProducts);
productsRouter.get('/:slug', findProductBySlug);
productsRouter.get('/categories/:category', findProductsByCategory);

module.exports = productsRouter;