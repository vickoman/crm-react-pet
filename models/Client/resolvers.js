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

// Update client
const updateClient = async(_, { id, input }, ctx) => {
    // Verify if client exists
    const client = await Client.findById(id);
    if (!client) {
        throw new Error('Client does not exists');
    }
    // Verify if seller is who edit
    if (client.seller.toString() !== ctx.user.id) {
        throw new Error('Not authorized');
    }

    // Update client
    try {
        const nclient = await Client.findByIdAndUpdate(id, input, { new: true });
        return nclient;
    }catch (err) {
        console.log(err);
    }
};

module.exports = {
    getClients,
    createClient,
    getClientsBySeller,
    updateClient
}
