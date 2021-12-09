const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User
  {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    age: Int
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, 
      userName: String!,
      age: Int!): User!{
        firstName: String
        lastName: String
        userName: String
        age: Int
      }
  }
`

module.exports = typeDefs; 