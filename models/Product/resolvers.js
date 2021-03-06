const Product = require('./Product');

// Get All Prodducts
const getAllProducts = async() => {
    return await Product.find();
};

// Get Product by id
const getProduct = async(_, { id }, ctx, info) => {
    try {
        const product = await Product.findById(id);
        if(!product) {
            return new Error(`Product with id ${id} does not exists`);
        }
        return product;
    } catch (err) {
        return new Error(err);
    }
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

// Update product
const updateProduct = async(_, { id, input }, ctx, info) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product does not exists');
    }
    Object.keys(input).forEach(key => {
        product[key] = input[key];
    });
    product.save();
    return product;
};

// Delete product
const deleteProduct = async(_, { id }, ctx, info) => {
    try {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Product does not exists');
        }
        product.remove();
        return {
            wasDeleted: true,
            message: `product with ${id} was deleted successfully`
        }
    } catch (err) {
        return {
            wasDeleted: false,
            message: err.message
        }
    }
};

const createProduct = async(_, { input }, ctx, info) => {
    // check if product exists
    const { name } = input;
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

// Find product
const findProduct = async(_, { text }) => {
    const product = await Product.find({ $text: { $search: text } });
    return product;
};

module.exports = {
    getProduct,
    getAllProducts,
    createProduct,
    updateStock,
    updateProduct,
    deleteProduct,
    findProduct
}
