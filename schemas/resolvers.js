const { users } = require('../exampleData');

const resolvers = {
  Query: {
    users() {
      return users
    }
  },
  Mutation: {
    addUser(parent, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    }
  }
};

module.exports = resolvers;