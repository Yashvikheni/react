import React from "react";
import Form from "../../shared/Form";
import axios from "axios";
import { baseUrl } from "../../utils/Constant";
const ResetPassword = () => {
  const template = {
    title: "Reset password",
    fields: [
      {
        type: "password",
        name: "oldPassword",
        autoComplete: "on",
        placeholder: "Old password",
      },
      {
        type: "password",
        name: "Password",
        autoComplete: "on",
        placeholder: "New password",
      },
      {
        type: "password",
        name: "ConfirmPassword",
        autoComplete: "on",
        placeholder: "Confirm Password",
      },
    ],
    buttonName: "Reset",
  };
  async function handle(values) {
    console.log("values", values);
    const token = localStorage.getItem("userIn");
    await axios
      .post(`${baseUrl}users/ResetPassword`, values, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => alert(response.data.message))
      .catch((error) => alert(error.message));
  }
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>
      <Form template={template} handle={handle} />
    </div>
  );
};

export default React.memo(ResetPassword);
