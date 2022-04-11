import React,{useEffect} from "react";
import Form from "../shared/Form";
import {useNavigate} from "react-router-dom";
import { Email, Password } from "../container/useFields";
import { useSignInMutation } from "../store/services/User";
function LogIn() {
  const history = useNavigate();
 const [signIndata,responseInfo]=useSignInMutation()
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
      signIndata(values);
  }
  useEffect(() => {
    if(responseInfo.data && responseInfo.data.statusCode === 200){
      localStorage.setItem("userIn", responseInfo.data.data.token);
     localStorage.setItem("isAuthenticated", JSON.stringify(true));
    localStorage.setItem("role", responseInfo.data.data.role);
    if (responseInfo.data.data.role === "teacher") {
              history("/teacherdashboard")
            } else {
              history("/studentdashboard")
            }
    } 
  },[responseInfo.data])
  return <div><Form template={template} handle={handle}/></div>;
}
export default React.memo(LogIn);
