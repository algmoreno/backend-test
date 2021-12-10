const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User
  {
    _id: ID
    firstName: String
    lastName: String
    username: String
    age: Int
    posts: [Post]
  }

  type Post
  {
    _id: ID
    user: [User]
    postText: String
  }

  type Query {
    users: [User]
    posts(username: String): [Post]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, 
      username: String!): User!
    editUser(_id: ID!, firstName: String, lastName: String, username: String, age: Int): User!
    removeUser(_id: ID!): User!
    addPost(postText: String!, user: ID!): Post!
  }
`

module.exports = typeDefs; 