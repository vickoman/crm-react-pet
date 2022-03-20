const {  gql } = require('apollo-server');

// Schema
const typeDefs = gql`
    enum OrderStatus {
        PENDING
        COMPLETED
        CANCELED
    }

    type User {
        id: ID
        name: String
        lastName: String
        email: String
        created_at: String
    }

    type Client {
        id: ID
        name: String
        lastName: String
        company: String
        email: String
        telephone: String
        seller: ID
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

    type OrderProduct {
        id: ID
        amount: Int
    }

    type Order {
        id: ID
        order: [OrderProduct]
        total: Float
        client: ID
        seller: ID
        status: OrderStatus
        created_at: String
    }

    input ProductInput {
        name: String
        stock: Int
        price: Float
    }

    input ClientsInput {
        name: String!
        lastName: String
        company: String!
        email: String!
        telephone: String
    }

    input OrderProductInput {
        id: ID
        amount: Int
    }

    input OrdersInput {
        order: [OrderProductInput]
        total: Float
        client: ID
        status: OrderStatus
    }

    type responseDeleted {
        wasDeleted: Boolean!
        message: String,
    }

    type TopClient {
        total: Float
        client: Client
    }

    type TopSellers {
        total: Float
        seller: User
    }


    type Query {
        # Users
        getUsers: [User]
        getUser(token: String!): User

        # Products
        getAllProducts: [Product]
        getProduct(id: ID!): Product

        # Clients
        getClients: [Client]
        getClientsBySeller: [Client]

        # Orders
        getOrders: [Order]
        getOrdersBySeller: [Order]
        getOrderById(id: ID!): Order
        getOrderByStatus(status: String!): [Order]
        getTopclients: [TopClient]
        getTopSellers: [TopSellers]
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
        deleteProduct(id: ID!) : responseDeleted

        # Clients
        createClient(input: ClientsInput!) : Client
        updateClient(id: ID!, input: ClientsInput!) : Client
        deleteClient(id: ID!) : responseDeleted

        # Orders
        addOrder(input: OrdersInput!) : Order
        updateOrder(id: ID!, input: OrdersInput!) : Order
        deleteOrder(id: ID!) : responseDeleted
    }
`;

module.exports = typeDefs;