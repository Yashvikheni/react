import React, { useState } from "react";
import Form from "../shared/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
function LogIn() {
  const [msg, setMsg] = useState(null)
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
        autoComplete:'on',
        placeholder: "password",
      }],
      link:[
      {
        path: "/signUp",
        linkName: `Don't have an Account ?`,
      },
      {
        path: "/forgotPassword",
        linkName: "forgot Password?",
      },
    ],
    buttonName: "Log In",
  };
  async function handle(values) {
  console.log('values', values)
      await axios
        .post(`${baseUrl}users/Login`, values)
        .then((response) => {
          setMsg("Successfully logged in")
          localStorage.setItem("userIn", response.data.data.token);
          console.log(response.data.data.role);
          localStorage.setItem("role", response.data.data.role);
          if (response.data.data.role === "teacher") {
            console.log("first");
            history("/teacherDashboard");
         
          }
        })
        .catch(function (err) {
         console.log('err', err.message)
  
      });
    
    }
  
    return (
      <div>
        <Form template={template} handle={handle}  msg={msg}/>
      </div>
    );
  }
  export default LogIn;