const {  gql } = require('apollo-server');

// Schema
const typeDefs = gql`
    type User {
        id: ID
        name: String
        lastName: String
        email: String
        created_at: String
    }

    input UserInput {
        name: String
        lastName: String
        email: String
        password: String
    }

    type Token {
        token: String 
    }

    input CursoInput {
        tecnologia: String
    }

    input AuthInput {
        email: String!
        password: String!
    }

    type Product {
        name: String
        stock: Int
        price: Float
        created_at: String
    }
    input ProductInput {
        name: String
        stock: Int
        price: Float
    }

    type Query {
        getUsers: [User]
        getUser(token: String!): User
        getAllProducts: [Product]
    }

    type Mutation {
        createUser(input: UserInput!) : User
        auth(input: AuthInput!) : Token
        createProduct(input: ProductInput!) : Product
    }
`;

module.exports = typeDefs;