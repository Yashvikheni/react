import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("userIn");

  const back = () => {
    localStorage.removeItem("userIn");
  };

  if (token) {
    return (
      <div>
        <nav>
          <ul>
            <li>
              {" "}
              <Link
                to="/login"
                className="logout_btn"
                refresh="true"
                onClick={back}
              >
                LogOut
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/studentdata">Student Data</Link>
            </li>
            <li>
              {" "}
              <Link to="/createexam">Create Exam</Link>
            </li>
            <li>
              {" "}
              <Link to="/viewexam">View Exam</Link>
            </li>
            <li>
              {" "}
              <Link to="/resetpassword">Reset password</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/signup">sign Up</Link>
          </li>
          <li>
            <Link to="/login" refresh="true">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
