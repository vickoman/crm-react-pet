const {  gql } = require('apollo-server');

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

module.exports = typeDefs;