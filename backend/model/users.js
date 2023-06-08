const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minimum: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('userlogin', userLoginSchema);
