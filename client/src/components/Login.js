import React, { useState } from 'react';
import './form.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/action/user';

function Login() {
  const [logindata, setLoginData] = useState({
    username: '',
    password: '',
  });
  const selector = useSelector((state) => state.userdata.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const newdata = logindata;

    dispatch(loginUser(newdata));
    localStorage.setItem('token', selector.token);
    window.alert(selector.message);
    navigate('/getuser');
    setLoginData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <form className="loginForm" onSubmit={handleLogin}>
          <h1>Log in</h1>
          <div className="input_box">
            <div className="lable_theme">
              <lable>User Name</lable>
            </div>
            <input
              type="text"
              placeholder="Enter Your User Name"
              name="username"
              onChange={(e) =>
                setLoginData({ ...logindata, username: e.target.value })
              }
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
                setLoginData({ ...logindata, password: e.target.value })
              }
            />
          </div>
          <div>
            <input className="signUpBtn" type="submit" value="Login" />
          </div>
          <Link to="/">click to register!!!</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
