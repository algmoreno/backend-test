const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({ typeDefs, resolvers })

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bfuf.mongodb.net/backend-test?retryWrites=true&w=majority`)

const PORT = process.env.PORT || 3001; 
const app = express();

server.applyMiddleWare({ app })

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
