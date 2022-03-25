import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Logout = () => {
  const history = useNavigate();
  useEffect(() => {
    localStorage.clear();
    history("/login");
  }, []);
  return (
    <div>
      <Navbar auth={false} />
    </div>
  );
};

export default React.memo(Logout);
