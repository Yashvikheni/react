import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

function Navbar({ auth }) {
  return (
    <div>
      <nav>
        <ul>
          {auth ? (
            <>
              {localStorage.getItem("role") === "teacher" ? (
                <li>
                  <Link to="teacherdashboard">Home</Link>
                </li>
              ) : (
                <li>
                  <Link to="studentdashboard">Home</Link>
                </li>
              )}
              <li>
                <Link to="logout">Logout</Link>
              </li>
              <li>
                <Link to="resetpassword">Reset Password</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default React.memo(Navbar);
