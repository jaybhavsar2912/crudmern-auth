const express = require('express');
const Router = express.Router();
const user = require('../controller/user');

Router.post('/signup', user.Signup);
Router.post('/login', user.Login);

module.exports = Router;
