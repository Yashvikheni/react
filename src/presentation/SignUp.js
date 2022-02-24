import React, { useState } from "react";
import Form from "../shared/Form";
import { useNavigate } from "react-router-dom";
import { Validators } from "../utils/Validators";
import axios from "axios";
import { baseUrl } from "../utils/Constant";
function SignUp(props) {
  const [error, setError] = useState({})
  const history = useNavigate();
  let template = {
    title: "Sign Up",
    fields: [
      {
        title: "Name",
        type: "text",
        name: "name",
        placeholder: "name",
      },
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
   const ans=Validators(values)
 setError(ans)
console.log(Object.values(ans) )
    if (Object.values(ans).map(ok=>ok===""?true:false)) {
      console.log("first")
      await axios
        .post(`${baseUrl}users/SignUp`, values)
        .then((response) => {
          alert("successFully SignUp");
          history("/logIN");
        })
        .catch(function (err) {
           console.log(err.message)
        });
    }
  }

  return <Form template={template} onSubmit={handleSubmit} error={error} setError={setError} />;
}

export default SignUp;
