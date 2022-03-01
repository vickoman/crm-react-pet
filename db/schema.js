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
        id: ID
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
        # Users
        getUsers: [User]
        getUser(token: String!): User

        # Products
        getAllProducts: [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        # Users 
        createUser(input: UserInput!) : User

        # Auth
        auth(input: AuthInput!) : Token

        # Product 
        createProduct(input: ProductInput!) : Product
        updateStock(id: ID!, stock: Int!) : Product
        updateProduct(id: ID!, input: ProductInput!) : Product
    }
`;

module.exports = typeDefs;