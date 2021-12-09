const mongoose = require('mongoose');
const { Schema } = mongoose

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
  age: {
    type: Number,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;