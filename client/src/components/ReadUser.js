import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { readData, deleteData } from '../redux/action';

function ReadUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) =>
    state.data.data.length > 0 ? state.data.data : []
  );

  const getdata = () => {
    dispatch(readData());
  };
  useEffect(() => {
    getdata();
  }, []);

  const handelDelete = (_id) => {
    dispatch(deleteData(_id))
      .then(() => {
        dispatch(readData());
      })
      .catch(() => {
        console.log('somthing went wrong');
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
        <Link to={'/adduser'}>Add More Data</Link>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selector?.map((item, index) => (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>Edit</Link> |
                  <Link onClick={() => handelDelete(item._id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReadUser;
