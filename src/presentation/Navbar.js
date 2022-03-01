import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [role, setRole] = useState(null);
  const [navbar, setNavbar] = useState([]);
  useEffect(() => {
    const rolee = localStorage.getItem("role");
    setRole(rolee);
  });
  const back = () => {
   localStorage.clear();
  };
  useEffect(() => {
    if (role === "teacher") {
      setNavbar(() => {
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
                  <Link to="/studentdata">Student Data</Link>
                </li>
                <li>
      
                  <Link to="/createexam">Create Exam</Link>
                </li>
                <li>
             
                  <Link to="/viewexam">View Exam</Link>
                </li>
                <li>
                   <Link to="/resetpassword">Reset password</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      });
    }
    // else if (role === 'student'){
    //   return (
    //     <div>student</div>
    //   )
    // }
    else {
      setNavbar(() => {
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
      });
    }
  }, [role]);

  return <div>{navbar}</div>;
}

export default Navbar;
