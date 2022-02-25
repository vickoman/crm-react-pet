const { ApolloServer, gql} = require('apollo-server');

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

// Schema
const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String
        profesor: String
    }

    type Query {
        allCourses : [Curso]
        firstCourse : Curso
    }
`;

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