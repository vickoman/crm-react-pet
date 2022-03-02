// Data
const User = require('../models/User/User');
const {
    getAllProducts,
    getProduct,
    updateProduct,
    updateStock,
    createProduct,
    deleteProduct
} = require('../models/Product/resolvers');
const {
    auth,
    createUser,
    getUsers,
    getUser
} = require('../models/User/resolvers');
const {
    getClients,
    createClient
} = require('../models/Client/resolvers');

// Resolvers
const resolvers = {
    Query: {
        getUsers,
        getUser,
        getAllProducts,
        getProduct,
        getClients
    },
    Mutation: {
        auth,
        createUser,
        createProduct,
        updateStock,
        updateProduct,
        deleteProduct,
        createClient
    }
};

module.exports = resolvers;
