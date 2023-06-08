import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import { registerUser } from '../redux/action/user';

function Register() {
  const selector = useSelector((state) => state.userdata.data);
  const [regData, setRegData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RegsiterApi = (e) => {
    e.preventDefault();
    const newdata = regData;
    console.log(regData);
    dispatch(registerUser(newdata));
    window.alert(selector.message);
    navigate('/login');
    setRegData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <form className="loginForm" onSubmit={RegsiterApi}>
          <h1>Registration</h1>
          <div className="input_box">
            <div className="lable_theme">
              <lable>Email</lable>
            </div>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={(e) =>
                setRegData({ ...regData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="input_box">
            <div className="lable_theme">
              <lable>User Name</lable>
            </div>
            <input
              type="text"
              placeholder="Enter Your User Name"
              name="username"
              onChange={(e) =>
                setRegData({ ...regData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="input_box">
            <div className="lable_theme">
              <lable>Password</lable>
            </div>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={(e) =>
                setRegData({ ...regData, password: e.target.value })
              }
              required
            />
          </div>
          <div>
            <input className="signUpBtn" type="submit" value="Register" />
          </div>
          <Link to="/login">already registered ?</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
