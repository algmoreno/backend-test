const User  = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
      .select('-__v -password')
      .populate('firstName')
      .populate('lastName')
      .populate('username')
      .populate('age')
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      return user;
    },
    editUser: async (parent, args) => {
      const user = await User.findOneAndUpdate({_id: args._id}, { firstName: args.firstName, lastName: args.lastName, username: args.username, age: args.age }, {new: true});
      await user.save();
      return user;
    },
    removeUser: async (parent, {_id}) => {
      const user = await User.findOneAndDelete({ _id: _id}, {new: true})
      return user;
    },
  }
};

module.exports = resolvers; 