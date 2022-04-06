import React,{useEffect} from "react";
import Form from "../shared/Form";
import {useDispatch } from "react-redux";
import {
  signInRequest
} from "../store/Actions/postAction";
import axios from 'axios'
import { baseUrl } from "../utils/Constant";
import {useNavigate} from "react-router-dom";
import { Email, Password } from "../container/useFields";
function LogIn() {
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    localStorage.getItem('userIn') && history(-1)
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
    axios
    .post(`${baseUrl}${api}`, values)
    .then((response) =>{
      //dispatch({ type: "SIGN_IN_SUCCESS", payload: response.data.data.name })
      if(response.data.statusCode === 200){
          localStorage.setItem("userIn", response.data.data.token);
          localStorage.setItem("isAuthenticated", JSON.stringify(true));
          localStorage.setItem("role", response.data.data.role);
          if (response.data.data.role === "teacher") {
            history("/teacherdashboard")
          } else {
            history("/studentdashboard")
          }}}
    )
    .catch((error) =>{
      //dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
      alert(error.message)
    });
   
  }
  return <div><Form template={template} handle={handle}/></div>;
}
export default React.memo(LogIn);
