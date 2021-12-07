const { users } = require('../exampleData');

const resolvers = {
  Query: {
    users() {
      return users
    }
  }
};

module.exports = resolvers;