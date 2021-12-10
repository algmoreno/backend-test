const { User, Post }  = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
      .select('-__v -password')
      .populate({ path: "posts", populate: "postText" })
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params) 
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
    addPost: async (parent, args, context) => {
      const post = await Post.create(args);

      await User.findOneAndUpdate(
          { _id: args.user },
          { $push: { posts: post._id } }),
          { new: true }

      return post;
  },
  }
};

module.exports = resolvers; 