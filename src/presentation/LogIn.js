import React, { useState } from "react";
import Form from "../shared/Form";
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
      },
      {
        title: "Password",
        type: "password",
        name: "password",
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
    const err = {};
    e.preventDefault();
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
      });
  }

  return (
    <div>
      <Form template={template} onSubmit={handleSubmit} errors={error} />
    </div>
  );
}

export default LogIn;
