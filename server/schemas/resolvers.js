const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
      .select('-__v -password')
      .populate('firstName')
      .populate('lastName')
      .populate('userName')
      .populate('age')
    }
  },
  Mutation: {
    addUser(parent, args) => {
      const 
    }
  }
}