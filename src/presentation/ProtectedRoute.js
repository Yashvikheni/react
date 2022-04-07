import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProtectedRoute(props) {
  let Com = props.comp;
  const history = useNavigate();

  useEffect(() => {
    const Auth = localStorage.getItem("isAuthenticated");
    const token = localStorage.getItem("userIn");
    Auth ? !JSON.parse(Auth) && history("/logout") : history("/logout");
    !token && history("/logout");
  }, [localStorage]);

  return <div>{<Com />}</div>;
}

export default ProtectedRoute;
