const mongoose = require('mongoose');
const { Schema } = mongoose
const Post = require('./Post');

const userSchema = new Schema(
{
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  posts: [Post.schema]
})

const User = mongoose.model("User", userSchema);

module.exports = User;