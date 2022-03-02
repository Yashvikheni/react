import React, { useState, useEffect } from "react";
import "../App.css";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const history = useNavigate()
  const [role, setRole] = useState(null);
  const [navbar, setNavbar] = useState([]);
const [token, setToken] = useState("")
  setInterval(() => {
    const token=localStorage.getItem("userIn")
    const rolee = localStorage.getItem("role");
    setToken(token);
    setRole(rolee);
  },1000);
  const back = () => {
    history("/login")
   localStorage.clear();
   setToken(null)
  };
  useEffect(() => {
    if (token) {
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
                    onClick={()=>back()}
                  >
                    LogOut
                  </Link>
                </li>
                <li>
                   <Link to="/resetpassword">Reset password</Link>
                </li>
                {role==="teacher"?
                <div>
                <li>
                  <Link to="/studentdata">Student Data</Link>
                </li>
                <li>
                  <Link to="/createexam">Create Exam</Link>
                </li>
                <li>
             
                  <Link to="/viewexam">View Exam</Link>
                </li></div>:role==='student'?                 
                <>
                <li>
                  <Link to="/allexam">AllExam</Link>
                </li>
                <li>
                  <Link to="/studentdetail">student Details</Link>
                </li></>:null}
               
              </ul>
            </nav>
          </div>
        );
      });
    }
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
