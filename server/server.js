const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { typeDefs, resolvers } = require('./schemas');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bfuf.mongodb.net/backend-test?retryWrites=true&w=majority`)

const PORT = process.env.PORT || 3001;
const app = express();

async function startServer() {
  const server = new ApolloServer(
    { typeDefs, 
      resolvers,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      playground: true }
  );

  await server.start();
  server.applyMiddleware({ app })

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
};

startServer();