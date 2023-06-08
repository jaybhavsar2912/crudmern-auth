const USER = require('../model/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'JBA123';

//......SignUP.......//
const Signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const { email, username } = req.body;
    const exist = await USER.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: 'this email is already exist',
      });
    }
    const signup = new USER({
      email,
      username,
      password: hashedPassword,
    });
    const savedData = await signup.save();
    return res.status(200).json({
      success: true,
      message: 'User Signup successfully',
      savedData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Somthing wents Wrong!!!!',
      error: error.message,
    });
  }
};

//......Login.......//

const Login = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await USER.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (!user) {
      return res.status(404).send({ message: 'User not Found!!!!' });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      // To Create token
      const token = jwt.sign({ id: user._id, email }, SECRET_KEY, {
        expiresIn: '2h',
      });

      // save user token
      user.token = token;
      return res.status(200).json({
        token: token,
        message: 'Login successfully',
        status: 200,
        user,
      });
    }
    return res
      .status(400)
      .send({ message: 'Invalid Credentials', status: 400 });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

module.exports = { Signup, Login };
