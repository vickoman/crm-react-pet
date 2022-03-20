const Order = require("./Order");
const Client = require("../Client/Client");
const Product = require("../Product/Product");

const addOrder = async (_, { input }, ctx) => {
    const {client} = input;
    let amount = 0.00;

    // verify if client exists
    const cliente = await Client.findById(client);
    if (!cliente) {
        throw new Error("Client not found");
    }
    // Verify if seller is editing
    if(cliente.seller.toString() !== ctx.user.id) {
        throw new Error("You are not the seller and this operation it's not allowed!");
    }

    // Check stock availability
    for await (const product of input.order) {
        const { id } = product;
        const article = await Product.findById(id);
        if (article.stock < product.amount) {
            throw new Error(`Stock of the product ${id} not available`);
        } else {
            article.stock = article.stock-product.amount;
            await article.save();
            amount = amount+(product.amount * article.price);
        }
    }

    try {
        // Assign seller to order
        const newOrder = new Order(input);
        newOrder.seller = ctx.user.id;
        newOrder.status = "PENDING";
        newOrder.total = amount.toFixed(2);

        const result = await newOrder.save();
        return result;
    } catch (err) {
        throw new Error(err);
    }
};

// get Orders
const getOrders = async () => {
    try {
        const result = await Order.find();
        return result;
    }catch (err) {
        throw new Error(err);
    }
};

// Get orders by seller
const getOrdersBySeller = async (_, {}, ctx) => {
    try {
        const result = await Order.find({seller: ctx.user.id});
        return result;
    }catch (err) {
        throw new Error(err);
    }
};

// Get order by id
const getOrderById = async (_, { id }, ctx) => {
    // If order exists
    const order = await Order.findById(id);
    if (!order) {
        throw new Error(`Order ${id} not found`);
    }
    // If seller is requesting
    if (order.seller.toString() !== ctx.user.id) {
        throw new Error("You are not the seller and this operation it's not allowed!");
    }
    return order;
};

// Update order
const updateOrder = async (_, { id, input }, ctx) => {
    const { client } = input;
    // If order exists
    const order = await Order.findById(id);
    if (!order) {
        throw new Error(`Order ${id} not found`);
    }

    // client exists
    const userClient = await Client.findById(client);
    if (!userClient) {
        throw new Error(`Client ${client} not found`);
    }

    // If client and order belongs to seller
    if (userClient.seller.toString() !== ctx.user.id) {
        throw new Error("You are not the seller and this operation it's not allowed!");
    }

    // Check the stock availability
    for await (const product of order.order) {
        const { id } = product;
        const article = await Product.findById(id);
        if (article.stock < product.amount) {
            throw new Error(`Stock of the product ${id} not available`);
        } else {
            article.stock = article.stock-product.amount;
            await article.save();
        }
    }

    // update the order
    const result = await Order.findOneAndUpdate(id, input, {new: true});
    return result;
}

// Delete order
const deleteOrder = async (_, { id }, ctx) => {
    // If order exists
    const order = await Order.findById(id);
    if (!order) {
        return {
            wasDeleted: false,
            message: `Order ${id} not found`
        }
    }
    // If seller is requesting
    if (order.seller.toString() !== ctx.user.id) {
        return {
            wasDeleted: false,
            message: "You are not the seller and this operation it's not allowed!"
        }
    }
    try {
        await Order.findOneAndDelete(id);
        return {
            wasDeleted: true,
            message: `Order ${id} was deleted successfully`
        }
    } catch (err) {
        return {
            wasDeleted: false,
            message: err
        }
    }
};

// Get orders by status
const getOrderByStatus = async (_, { status }, ctx) => {
    try {
        const result = await Order.find({seller: ctx.user.id, status});
        return result;
    }catch (err) {
        throw new Error(err);
    }
};

// Get best clients
const getTopclients = async () => {
    const clients = await Order.aggregate([
        {
            $match: {
                status: "COMPLETED"
            }
        },
        {
            $group: {
                _id: "$client",
                total: { $sum: "$total" }
            }
        },{
            $lookup: {
                from: "clients",
                localField: "_id",
                foreignField: "_id",
                as: "clients"
            }
        }
    ]);
    console.log(clients);
    return clients;
};

module.exports = {
    addOrder,
    getOrders,
    getOrdersBySeller,
    getOrderById,
    updateOrder,
    deleteOrder,
    getOrderByStatus,
    getTopclients
}