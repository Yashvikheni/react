import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function ProtectedRoute(props) {
  let Com = props.comp;
  const history = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const Auth = localStorage.getItem("isAuthenticated");
    const token = localStorage.getItem("userIn"); 
    Auth ? !JSON.parse(Auth) && history("/login") : history("/login");
    !token && history("/login");
  }, [location]);

  return <div>{<Com />}</div>;
}

export default ProtectedRoute;
