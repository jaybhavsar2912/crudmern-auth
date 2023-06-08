import RegisterUser from './components/RegisterUser';
import EditUser from './components/EditUser';
import ReadUser from './components/ReadUser';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
  // const { isAuthincated } = useSelector((state) => state.userdata);
  // const { token } = localStorage.getItem('token');
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/getuser"
          element={isAuthincated ? <ReadUser /> : <Login />}
        />
        <Route
          path="/adduser"
          element={isAuthincated ? <RegisterUser /> : <Login />}
        />
        <Route
          path="/edit/:id"
          element={isAuthincated ? <EditUser /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/getuser" element={<ReadUser />} />
        <Route path="/adduser" element={<RegisterUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
