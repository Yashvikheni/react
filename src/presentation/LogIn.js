import React, { useState } from "react";
import Form from "../shared/Form";
import {Validators} from "../utils/Validators";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
function LogIn() {
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
  console.log(ans)
    if (ans.email==="" && ans.password==="") {
    const response = await axios
      .post(`${baseUrl}users/Login`, values)
      .then((response) => {
        localStorage.setItem("userIn", response.data.data.token);
        console.log(response.data.data.role);
        if (response.data.data.role === "teacher") {
          console.log("first");
          history("/teacherDashboard");
        }
      })
      .catch(function (err) {
        // err.message="inc"
         err.msg = err.message
         setError(err)
      });}
  }

  return (
    <div>
      <Form template={template} onSubmit={handleSubmit} error={error} setError={setError}/>
    </div>
  );
}

export default LogIn;
