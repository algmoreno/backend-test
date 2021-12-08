const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0bfuf.mongodb.net/backend-test?retryWrites=true&w=majority`)

const PORT = process.env.PORT || 3001; 
const app = express();



app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})