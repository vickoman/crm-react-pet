const { ApolloServer, gql} = require('apollo-server');

// Data
const cursos = [
    {
        titulo: 'Curso de GraphQL',
        tecnologia: 'GraphQL'
    },
    {
        titulo: 'Curso de NodeJS',
        tecnologia: 'NodeJS'
    },
    {
        titulo: 'Curso de React',
        tecnologia: 'React'
    }
];

// Schema
const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String
    }

    type Query {
        obtenerCursos : [Curso]
    }
`;

// Resolvers
const resolvers = {
    Query: {
        obtenerCursos: () => cursos
    }
};

// Inicializar servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});


//Run server
server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`);
});