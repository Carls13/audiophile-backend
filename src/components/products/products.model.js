const { readFileSync } = require('fs');
const path = require('path');

const productsSchema = require('./products.mongo');

const saveProduct = async (productData) => {
    try {
      await productsSchema.updateOne(productData, productData, { upsert: true });
    } catch (error) {
      console.error(`Could not save product ${error}`);
    }
}

const getAllProducts = async () => {
    return await productsSchema.find({}, {
      '_id': 0,
      '__v': 0,
    });
};

const getOneBySlug = async (slug) => {
    return await productsSchema.findOne({ slug }, {
      '_id': 0,
      '__v': 0,
    });
};

const getAllProductsByCategory = async (category) => {
    return await productsSchema.find({ category }, {
      '_id': 0,
      '__v': 0,
    });
};

const loadProductsData = async () => {
    try {
        const data = readFileSync(path.join(__dirname, '..', '..', 'data', 'data.json'), 'utf8');

        const parsedData = JSON.parse(data);

        parsedData.forEach(product => {
            saveProduct(product);
        });

        const loadedProducts = await getAllProducts();

        const countProductsFound = loadedProducts.length;
        console.log(`${countProductsFound} products found!`);
    } catch (error) {
        console.log({ error });
        
    }
}

module.exports = {
    loadProductsData,
    getAllProducts,
    getAllProductsByCategory,
    getOneBySlug,
};