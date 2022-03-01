const {  gql } = require('apollo-server');

// Schema
const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String
        profesor: String
    }

    input CursoInput {
        tecnologia: String
    }

    type Query {
        allCourses(input: CursoInput!) : [Curso]
        firstCourse : Curso
    }
`;

module.exports = typeDefs;