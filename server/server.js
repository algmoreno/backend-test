const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://user123:@cluster0.0bfuf.mongodb.net/backend-test?retryWrites=true&w=majority"
)

const PORT = process.env.PORT || 3001; 
const app = express();

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
