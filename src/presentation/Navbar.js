import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Switch from "react-switch";

const Navbar = ({ auth, theme, toggleTheme }) => {
  const [checked, setChecked] = useState(false);
  const token = localStorage.getItem("userIn");
  const [text, setText] = useState("Enable Dark Mode");
  useEffect(() => {
    theme === "light"
      ? setText("Enable Dark Mode")
      : setText("Disable Dark Mode ");
  }, [theme]);
  return (
    <div style={{ backgroundColor: "red" }}>
      <nav style={{ position: "fixed", top: "0", width: "100%" }}>
        <ul>
          {auth && JSON.parse(auth) && token && token !== null ? (
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
              <li>
                <Link to="/filtertable"> Filter Task</Link>
              </li>
            </>
          )}
          <li>
            <Switch
              onChange={() => toggleTheme({ checked, setChecked })}
              checked={checked}
            />
          </li>
          {text}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
