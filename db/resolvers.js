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
        allCourses: (_, { input }, ctx, info) => {
            return cursos.filter(curso => curso.tecnologia === input.tecnologia);
        },
        firstCourse: () => cursos[0]
    }
};

module.exports = resolvers;