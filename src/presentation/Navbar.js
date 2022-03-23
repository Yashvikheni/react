import React from "react";
import "../App.css";
import { Link ,Outlet} from "react-router-dom";

function Navbar() {
  return(
    <div >
      <nav>
        <ul>
      {localStorage.getItem("isAuthenticated") ? (
        <>
        <li>
          <Link to="logout">Logout</Link>&nbsp;&nbsp;</li>
          <li> <Link to="resetpassword">Reset Password</Link></li>      
        </>
      ) : (
        <>
        <li>
          <Link to="login">Login</Link> &nbsp;&nbsp;</li>
        <li><Link to="signup">SignUp</Link> &nbsp;&nbsp;</li>        
        </>
      )}
      </ul>
      </nav>
      <Outlet />
      
    </div>
  )
}

export default React.memo(Navbar);
