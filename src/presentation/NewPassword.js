import React, { useState } from "react";
import Form from "../shared/Form";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
const NewPassword = (props) => {
    const [msg, setMsg] = useState(null);
    const location = useLocation();
    const template = {
      title: "New password",
      fields: [
        {
          title: "Password",
          type: "password",
          name: "Password",
          autoComplete:'on',
          placeholder: "New password",
        },
        {
          title: "confirm password",
          type: "password",
          name: "ConfirmPassword",
          autoComplete:'on',
          placeholder: "Confirm Password",
        },
      ],
      buttonName: "Submit",
    };
    async function handle( values) {
       console.log('values', values)
    
          const token = location.search.replace("?token=", "");
          await axios
          .get(`${baseUrl}users/newPassword`, {headers:{'access-token':`${token}`}})
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
            console.log(err.message)
        });
  }
  return (
  
    <Form
      template={template}
      handle={handle}
      msg={msg}
    />
  );
};

export default NewPassword;  