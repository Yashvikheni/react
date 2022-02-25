import React, { useState } from "react";
import Form from "../shared/Form";
import { Validators } from "../utils/Validators";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
import { isEmpty } from "../utils/Regex";
import axios from "axios";
const NewPassword = (props) => {
  const [msg, setMsg] = useState(null);
  const location = useLocation();
  const [error, setError] = useState({});
  const template = {
    title: "New password",
    fields: [
      {
        title: "Password",
        type: "password",
        name: "Password",
        placeholder: "New password",
      },
      {
        title: "confirm password",
        type: "password",
        name: "ConfirmPassword",
        placeholder: "Confirm Password",
      },
    ],
    buttonName: "Submit",
  };

  async function handleSubmit(e, values) {
    e.preventDefault();
    const ans = Validators(values);
    setError(ans);

    if (isEmpty(ans.Password) && isEmpty(ans.ConfirmPassword)) {
      const token = location.search.replace("?token=", "");
      await axios
        .get(`${baseUrl}users/newPassword`, {
          headers: { "access-token": `${token}` },
        })
        .then((response) => {
          setMsg(response.data.message);
          console.log("first");
          if (response.data.statusCode === 200) {
            axios
              .post(
                `${baseUrl}users/ForgotPassword/Verify?token=${token}`,
                values
              )
              .then((response) => {
                setMsg(response.data.message);
                console.log(response.data);
              })
              .catch((error) => setMsg(error.message));
          }
        })
        .catch(function (err) {
          setMsg(error.message);
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
};

export default NewPassword;
