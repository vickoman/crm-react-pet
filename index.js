const { ApolloServer, gql} = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const dbConnection = require('./config/db');

// Connect with Database
dbConnection();

// Inicializar servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});


//Run server
server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`);
});