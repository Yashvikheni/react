import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("userIn");
  const back = () => {
    localStorage.clear();
  };

  if (token) {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <img src="settings.png" alt="Settings" />
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="/resetpassword">Reset Password</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/login" onClick={back}>
                LogOut &nbsp; &nbsp;
              </Link>
            </li>
            <li>
              <Link to="/studentdata"> Student Data </Link>
            </li>
       
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
