import React, { useState, useEffect } from "react";
import Form from "../shared/Form";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  signInRequest,
  signInSuccess,
  signInFailure,
} from "../store/Actions/Action";
import { Email, Password } from "../container/useFields";
function LogIn() {
  const [msg, setMsg] = useState(null);
  const state = useSelector((state) => state.SignIn);
  const dispatch = useDispatch();
  let history = useNavigate();
  let template = {
    title: "Log IN",
    fields: [Email, Password],
    link: [
      {
        path: "../signup",
        linkName: `Don't have an Account ?`,
      },
      {
        path: "../forgotPassword",
        linkName: "forgot Password?",
      },
    ],
    buttonName: "Log In",
  };
  async function handle(values) {
    console.log(values);
    dispatch(signInRequest());
    await axios
      .post(`${baseUrl}users/Login`, values)
      .then((response) => {
        alert(response.data.message);
        dispatch(signInSuccess(response.data.data));
        localStorage.setItem("userIn", response.data.data.token);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("role", response.data.data.role);
        if (response.data.data.role === "teacher") {
          window.location = "/teacherdashboard";
        } else {
          window.location = "/studentdashboard";
        }
      })
      .catch(function (error) {
        dispatch(signInFailure(error.message));
        alert(error.message);
      });
  }
  return <Form template={template} handle={handle} msg={msg} />;
}
export default LogIn;
