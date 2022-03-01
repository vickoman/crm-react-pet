const Product = require('./Product');

// Get All Prodducts
const getAllProducts = async() => {
    return await Product.find();
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
    createProduct
}
