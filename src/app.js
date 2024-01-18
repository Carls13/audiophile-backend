const express = require('express');
const cors = require('cors');
const productsRouter = require('./components/products/products.network');

const app = express();
require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:8001'
}));

app.use(express.json());

app.use('/products', productsRouter);

module.exports = app;