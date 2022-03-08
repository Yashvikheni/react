import Form from "../shared/Form";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/Constant";
import {useSelector, useDispatch} from 'react-redux'
import {signUpRequest,signUpSuccess,signUpFailure} from '../store/Actions/Action'
import {text,Email,Password} from '../container/useFields'
function SignUp(props) {
  const state = useSelector((signup) => signup.SignUp)
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
  
 async function handle(value){
   console.log(value);
  dispatch(signUpRequest())
  await axios
        .post(`${baseUrl}users/SignUp`, value)
        .then((response) => {
          const user=response.data.data
          dispatch(signUpSuccess(user))
           alert(response.data.message)
            history("../login");
          })
          .catch(function (error) {
            dispatch(signUpFailure(error.message))
            alert(error.message)
        });
    }
  return (
    <Form
      template={template}
      handle={handle}
    />
  );
}
export default React.memo(SignUp);