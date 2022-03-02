import React, { useState } from "react";
import Form from "../shared/Form";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import {signInRequest,signInSuccess,signInFailure} from '../store/Actions/Action'
function LogIn() {

  const [msg, setMsg] = useState(null)
  const state = useSelector((state) => state.SignIn)
 const dispatch= useDispatch();
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
  async function handle(values){
    console.log(values);
   dispatch(signInRequest())
      await axios
        .post(`${baseUrl}users/Login`, values)
        .then((response) => {
          alert(response.data.message)
          dispatch(signInSuccess(response.data.data))
          localStorage.setItem("userIn", response.data.data.token);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("role", response.data.data.role);
          if (response.data.data.role === "teacher") {
             history("/teacherdashboard");
          }else {
            history("/studentdashboard");
          }
        })
        .catch(function (error) {
          dispatch(signInFailure(error.message))
         alert(error.message)
      }); 
  }

 
    return (
      <div>
        <Form template={template} handle={handle}  msg={msg}/>
      </div>
    );
  }
  export default LogIn;