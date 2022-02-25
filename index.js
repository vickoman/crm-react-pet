const { ApolloServer, gql} = require('apollo-server');
const typeDefs = require('./db/schema');
// Data
const cursos = [
    {
        titulo: 'Curso de GraphQL',
        tecnologia: 'GraphQL',
        profesor: 'Victor Diaz'
    },
    {
        titulo: 'Curso de NodeJS',
        tecnologia: 'NodeJS',
        profesor: 'Victor Diaz'
    },
    {
        titulo: 'Curso de React',
        tecnologia: 'React',
        profesor: 'Victor Diaz'
    }
];



// Resolvers
const resolvers = {
    Query: {
        allCourses: () => cursos,
        firstCourse: () => cursos[0]
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