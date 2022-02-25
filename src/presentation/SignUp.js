import React, { useState } from "react";
import Form from "../shared/Form";
import { useNavigate } from "react-router-dom";
import { Validators } from "../utils/Validators";
import { isEmpty } from "../utils/Regex";
import axios from "axios";
import { baseUrl } from "../utils/Constant";

function SignUp(props) {
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState({});
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
    const ans = Validators(values);
    setError(ans);
    console.log(Object.values(ans));
    //  if (Object.values(ans).map(ok=>ok===""?true:false)) {
    if (
      isEmpty(ans.name) &&
      isEmpty(ans.password) &&
      isEmpty(ans.role) &&
      isEmpty(ans.email)
    ) {
      await axios
        .post(`${baseUrl}users/SignUp`, values)
        .then((response) => {
          setMsg("successFully SignUp");
          history("/logIN");
        })
        .catch(function (err) {
          setMsg(err.message);
        });
    }
  }

  return (
    <Form
      template={template}
      onSubmit={handleSubmit}
      error={error}
      setError={setError}
      msg={msg}
    />
  );
}

export default React.memo(SignUp);
