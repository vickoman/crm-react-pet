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
    getOrderById,
    updateOrder,
    deleteOrder,
    getOrderByStatus,
    getTopclients
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
        getOrderById,
        getOrderByStatus,
        getTopclients
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
        addOrder,
        updateOrder,
        deleteOrder
    }
};

module.exports = resolvers;
