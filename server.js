const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./schemas');
const { resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();  
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

}

startServer(); 