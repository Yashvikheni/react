import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar=({auth})=> {
  const token = localStorage.getItem("userIn");
  return(
    <nav   style={{ position: 'fixed',
      top: '0',
      width: '100%' }}>
    <ul >
      {auth && JSON.parse(auth) && token && token!==null ?(
        <>
          {localStorage.getItem("role") === "teacher" ? (
            <li>
              <Link to="/teacherdashboard">Home</Link>
            </li>
          ) : (
            <li>
              <Link to="/studentdashboard">Home</Link>
            </li>
          )}
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/resetpassword">Reset Password</Link>
          </li>
        </>
      ) : ( 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      )}
    </ul>
  </nav>
  )


}

export default Navbar;
