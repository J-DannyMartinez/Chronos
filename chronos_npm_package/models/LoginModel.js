const mongoose = require('mongoose');
const { stringify } = require('node:querystring');
const { Schema } = mongoose;

const LoginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: String,
    //required: true,
  },
})

module.exports(mongoose.model('login', LoginSchema))