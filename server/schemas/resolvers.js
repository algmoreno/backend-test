const { User, Post }  = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return await User.findById(_id).populate("posts")
    },
    users: async () => {
      return await User.find()
      .select('-__v -password')
      .populate("posts")
    },
    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate({ path: "user", populate: "username"})
    },
    posts: async (parent, { user }) => {
      const params = {};
      if (user) 
        params.user = user;
      return await Post.find(params).populate({ path: "user", populate: "username"})
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