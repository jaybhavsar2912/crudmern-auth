import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { updateData, singleData } from '../redux/action';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);
  const getSingleUser = () => {
    dispatch(singleData(id));
  };

  useEffect(() => {
    getSingleUser();
    console.log(selector);
  }, [id]);

  useEffect(() => {
    setUserdata({
      fname: selector ? selector.fname : '',
      lname: selector ? selector.lname : '',
      email: selector ? selector.email : '',
      phone: selector ? selector.phone : '',
    });
  }, [selector]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = userdata;
    dispatch(updateData(id, newData)).then(() => {
      navigate('/getuser');
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
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" onClick={logoutHandle}>
          Logout User
        </button>
      </div>
      <Link to={'/getuser'}>View All Data</Link>
      <h1 align="center">Edit User</h1>

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
            name="number"
            className="form-control"
            value={userdata.phone}
            onChange={(e) =>
              setUserdata({ ...userdata, phone: e.target.value })
            }
          />

          <button className="btn btn-success mt-2" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
