const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User
  {
    _id: ID
    firstName: String
    lastName: String
    username: String
    age: Int
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, 
      username: String!,
      age: Int!): User!
  }
`

module.exports = typeDefs; 