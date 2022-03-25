import React from "react";
import Form from "../shared/Form";
import { useLocation,useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
const NewPassword = (props) => {
    const location = useLocation();
    const history = useNavigate();
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
          const token = location.search.replace("?token=", "");
          await axios
          .get(`${baseUrl}users/newPassword`, {headers:{'access-token':`${token}`}})
          .get(`${baseUrl}users/newPassword`, {
            headers: { "access-token": `${token}` },
          })
          .then((response) => {
            alert(response.data.message);
            if (response.data.statusCode === 200) {
              axios
                .post(
                  `${baseUrl}users/ForgotPassword/Verify?token=${token}`,
                  values
                )
                .then((response) => {
                  if(response.data.statusCode === 200){
                    alert(response.data.message);
                    history('/login')
                  }
                })
                .catch((error) => alert(error.message));
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
    />
  );
};

export default React.memo(NewPassword);  