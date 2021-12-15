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
    username: String
    postText: String
  }

  type Query {
    user(_id: ID!): User
    users: [User]
    post(_id: ID!): Post
    posts(username: String): [Post]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, 
      username: String!): User!
    editUser(_id: ID!, firstName: String, lastName: String, username: String, age: Int): User!
    removeUser(_id: ID!): User!
    addPost(postText: String!): Post
  }
`

module.exports = typeDefs; 