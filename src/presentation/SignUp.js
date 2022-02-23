import React, { useState } from "react";
import Form from "../shared/Form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../utils/Constant";
function SignUp(props) {
  
  const history = useNavigate();
  let template = {
    title: "Sign Up",
    fields: [
      {
        title: "Name",
        type: "text",
        name: "name",
        required: true,
      },
      {
        title: "Email",
        type: "email",
        name: "email",
        required: true,
      },
      {
        title: "Password",
        type: "password",
        name: "password",
        required: true,
      },
      {
        title: "Role",
        type: "radio",
        name: "role",
        value: ["Teacher", "Student"],
      },
      {
        type: "link",
        path: "/logIN",
        name: "Already have an Account ?",
      },
    ],
    buttonName: "Sign Up",
  };

  async function handleSubmit(e, values) {
    e.preventDefault();
    console.log(values);
   // const err = Validators(values);
    // setError(Validators(values));
    // if (Object.keys(err).length === 0) {
    //   await axios
    //     .post(`${baseUrl}users/SignUp`, values)
    //     .then((response) => {
    //       alert("successFully SignUp");
    //       history("/logIN");
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // }
  }

  return <Form template={template} onSubmit={handleSubmit} />;
}

export default SignUp;
