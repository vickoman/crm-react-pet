const Product = require('./Product');

// Get All Prodducts
const getAllProducts = async() => {
    return await Product.find();
};

// Update stock of product
const updateStock = async(_, { id, stock }, ctx, info) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product does not exists');
    }
    product.stock = stock;
    product.save();
    return product;
};

const createProduct = async(_, { input }, ctx, info) => {
    // check if product exists
    const { name, stock, price } = input;
    const product = await Product.findOne({ name });
    if (product) {
        throw new Error('Product already exists');
    }

    // save user in db
    try {
        const product = new Product(input);
        product.save();
        return product;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateStock
}
