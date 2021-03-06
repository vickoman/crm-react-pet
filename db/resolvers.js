// Data
const User = require('../models/User/User');
const {
    getAllProducts,
    getProduct,
    updateProduct,
    updateStock,
    createProduct,
    deleteProduct,
    findProduct
} = require('../models/Product/resolvers');
const {
    auth,
    createUser,
    getUsers,
    getUser
} = require('../models/User/resolvers');
const {
    getClients,
    getClientById,
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
    getTopclients,
    getTopSellers
} = require('../models/Order/resolvers');

// Resolvers
const resolvers = {
    Query: {
        getUsers,
        getUser,
        getAllProducts,
        getProduct,
        getClients,
        getClientById,
        getClientsBySeller,
        getOrders,
        getOrdersBySeller,
        getOrderById,
        getOrderByStatus,
        getTopclients,
        getTopSellers,
        findProduct
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
