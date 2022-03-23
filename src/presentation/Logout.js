import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    history("../login");
  },[]);

  return (
    <div>
      <Navbar />
      {localStorage.clear()}
    </div>
  );
};

export default React.memo(Logout);
