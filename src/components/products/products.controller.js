const { getAllProducts, getAllProductsByCategory, getOneBySlug } = require("./products.model");

const findAllProducts = async (_, res) => {
    try {
        const data = await getAllProducts();

        res.send(data).status(200);
    } catch (error) {
        res.send(error.message).status(500);
    }
};

const findProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const data = await getAllProductsByCategory(category);

        res.send(data).status(200);
    } catch (error) {
        res.send(error.message).status(500);
    }
};

const findProductBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const product = await getOneBySlug(slug);

        res.send(product).status(200);
    } catch (error) {
        res.send(error.message).status(500);
    }
};

module.exports = {
    findAllProducts,
    findProductsByCategory,
    findProductBySlug,
};