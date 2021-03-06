const mongoose = require('mongoose');
const { Schema } = mongoose; 

const postSchema = new Schema(
  {
    user: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    postText: 
    {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;