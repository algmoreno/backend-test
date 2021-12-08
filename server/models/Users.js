const mongoose = require('mongoose');

const UserSchema = new mongooseSchema({
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})