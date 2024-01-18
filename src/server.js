const http = require('http');
const app = require('./app');

const { mongoConnect } = require('./services/mongo');
const { loadProductsData } = require('./components/products/products.model');

const PORT = process.env.port || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadProductsData();

    server.listen(PORT, () => {
        console.log('Listening on port ', PORT);
    });
}

startServer();