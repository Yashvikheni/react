import Form from "../shared/Form";
import React from "react";
import {useDispatch} from 'react-redux'
import {signUpRequest} from '../store/Actions/postAction'
import {text,Email,Password} from '../container/useFields'
import {useNavigate} from "react-router-dom";
function SignUp(props) {
  const dispatch = useDispatch();
  const history = useNavigate();
  let template = {
    title: "Sign Up",
    fields: [
      text,Email,Password,
      {
        title: "Role",
        type: "radio",
        name: "role",
        value: ["Teacher", "Student"],
      }],
   link:
   [
     {
      path: "../login",
      linkName: "Already have an Account ?",
     }
   ],
    buttonName: "Sign Up",
  };
  
 async function handle(values){
   const api=`users/SignUp`
  dispatch(signUpRequest({api,values,history}))
    }
  return (
    <Form
      template={template}
      handle={handle}
    />
  );
}
export default React.memo(SignUp);