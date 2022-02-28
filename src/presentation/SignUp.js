import Form from "../shared/Form";
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/Constant";

function SignUp(props) {

  const [msg, setMsg] = useState(null);
 
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
        autoComplete:'on',
        placeholder: "password",
      },
      {
        title: "Role",
        type: "radio",
        name: "role",
        value: ["Teacher", "Student"],
      }],
   link:
   [
     {
      path: "/logIN",
      linkName: "Already have an Account ?",
     }

   ],
    buttonName: "Sign Up",
  };
  
async function handle(value){
  console.log(value)
  await axios
        .post(`${baseUrl}users/SignUp`, value)
        .then((response) => {
            setMsg("successFully SignUp");
            history("/login");
          })
          .catch(function (err) {
           console.log(err.message);
        });
    }
 
    
  
  
  return (
    <Form
      template={template}
      msg={msg}
      handle={handle}
    />
  );
}

export default React.memo(SignUp);