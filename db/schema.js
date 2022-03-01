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

    type Query {
        getUsers: [User]
        getUser(token: String!): User
    }

    type Mutation {
        createUser(input: UserInput!) : User
        auth(input: AuthInput!) : Token
    }
`;

module.exports = typeDefs;