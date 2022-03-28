import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Logout = () => {
  const history = useNavigate();
  useEffect(() => {
    history("/login");
    localStorage.clear();
  },[]);
  return (
    <div>
    
    </div>
  );
};

export default React.memo(Logout);
