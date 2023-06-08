import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createData } from '../redux/action';

function RegisterUser() {
  const [userdata, setUserdata] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = userdata;
    console.log(userdata);
    dispatch(createData(newData)).then(() => {
      navigate('/getuser');
      setUserdata({
        fname: '',
        lname: '',
        email: '',
        phone: '',
      });
    });
  };

  // to logout the user
  const logoutHandle = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('token');

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <>
      <div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" onClick={logoutHandle}>
            Logout
          </button>
        </div>

        <Link to={'/getuser'}>View All Data</Link>
        <h1 align="center">Add User</h1>

        <div className="container">
          <form className="form-group">
            <label>Enter First Name:</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              value={userdata.fname}
              onChange={(e) =>
                setUserdata({ ...userdata, fname: e.target.value })
              }
            />

            <label>Enter Last Name</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              value={userdata.lname}
              onChange={(e) =>
                setUserdata({ ...userdata, lname: e.target.value })
              }
            />

            <label>Enter Email-Id</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={userdata.email}
              onChange={(e) =>
                setUserdata({ ...userdata, email: e.target.value })
              }
            />

            <label>Enter contact</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              value={userdata.phone}
              onChange={(e) =>
                setUserdata({ ...userdata, phone: e.target.value })
              }
            />

            <button className="btn btn-success mt-2" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
