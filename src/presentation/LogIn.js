import React,{useEffect} from "react";
import Form from "../shared/Form";
import {useDispatch } from "react-redux";
import {
  signInRequest
} from "../store/Actions/postAction";
import {useNavigate} from "react-router-dom";
import { Email, Password } from "../container/useFields";
function LogIn() {
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    localStorage.clear();
  },[])
  let template = {
    title: "Log IN",
    fields: [Email, Password],
    link: [
      {
        path: "/signup",
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
    const api=`users/Login`
    dispatch(signInRequest({api,values,history}));
   
  }
  return <div><Form template={template} handle={handle}/></div>;
}
export default React.memo(LogIn);
