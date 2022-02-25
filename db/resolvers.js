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

module.exports = resolvers;