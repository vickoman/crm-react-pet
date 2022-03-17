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
    createClient,
    getClientsBySeller,
    updateClient,
    deleteClient
} = require('../models/Client/resolvers');
const {
    addOrder,
    getOrders,
    getOrdersBySeller,
    getOrderById
} = require('../models/Order/resolvers');

// Resolvers
const resolvers = {
    Query: {
        getUsers,
        getUser,
        getAllProducts,
        getProduct,
        getClients,
        getClientsBySeller,
        getOrders,
        getOrdersBySeller,
        getOrderById
    },
    Mutation: {
        auth,
        createUser,
        createProduct,
        updateStock,
        updateProduct,
        deleteProduct,
        createClient,
        updateClient,
        deleteClient,
        addOrder
    }
};

module.exports = resolvers;
