const mongoose = require('mongoose');
const validator = require('validator');
const userShema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'please enter valid email'],
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('user', userShema);
