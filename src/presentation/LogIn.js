import React, { useState } from "react";
import Form from "../shared/Form";
import { Validators} from "../utils/Validators";
import {isEmpty} from "../utils/Regex"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
function LogIn() {
  const [msg, setMsg] = useState(null)
  const [error, setError] = useState({});
  let history = useNavigate();
  let template = {
    title: "Log IN",
    fields: [
      {
        title: "Email",
        type: "email",
        name: "email",
        placeholder: "email",
      },
      {
        title: "Password",
        type: "password",
        name: "password",
        placeholder: "password",
      },
      {
        type: "link",
        path: "/signUp",
        name: `Don't have an Account ?`,
      },
      {
        type: "link",
        path: "/forgotPassword",
        name: "forgot Password?",
      },
    ],
    buttonName: "Log In",
  };

  async function handleSubmit(e, values) {
    e.preventDefault();
    const ans=Validators(values)
    setError(ans)
    if (isEmpty(ans.email) && isEmpty(ans.password)) {
    await axios
      .post(`${baseUrl}users/Login`, values)
      .then((response) => {
        setMsg("Successfully logged in")
        localStorage.setItem("userIn", response.data.data.token);
        localStorage.setItem("role", response.data.data.role);
        if (response.data.data.role === "teacher") {
          history("/teacherDashboard");
        }
      })
      .catch(function (err) {
      setMsg("Incorrect Username or password")
       
      });}
  }

  return (
    <div>
      <Form template={template} onSubmit={handleSubmit} error={error} setError={setError} msg={msg}/>
    </div>
  );
}

export default LogIn;
