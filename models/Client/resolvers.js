const Client = require("./Client");

// Get all Clients
const getClients = async() => {
    try {
        const clients =  await Client.find();
        if (!clients) {
            return  new Error('Clients does not exists');
        }
        return clients;
    } catch (err) {
        return new Error(err);
    }
};

// Get Clients By seller logged
const getClientsBySeller = async(_, {}, ctx) => {
    try {
        const clients =  await Client.find({ seller: ctx.user.id });
        if (!clients) {
            return  new Error('Clients does not exists');
        }
        return clients;
    } catch (err) {
        return new Error(err);
    }
};

// Create Clients
const createClient = async (_, { input }, ctx) => {
    // check if client exists
    const { email } = input;
    const client = await Client.findOne({ email });
    if (client) {
        throw new Error('Client already exists');
    }
    // Fill seller
    const nclient = new Client(input);
    nclient.seller = ctx.user.id;

    // save client in db
    try {
        nclient.save();
        return nclient;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getClients,
    createClient,
    getClientsBySeller
}
