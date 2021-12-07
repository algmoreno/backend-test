const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User{
    firstName: String!
    lastName: String!
  }
  
  type Query{
    users: [User]
  }

  type Mutation{
    addUser(firstName: String!, lastName: String!): User!
  }
`

module.exports = typeDefs;