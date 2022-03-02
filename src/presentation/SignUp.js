import Form from "../shared/Form";
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/Constant";
import {useSelector, useDispatch} from 'react-redux'
import {signUpRequest,signUpSuccess,signUpFailure} from '../store/Actions/Action'
function SignUp(props) {

  const [msg, setMsg] = useState(null);
  const state = useSelector((signup) => signup.SignUpReducer)
  const dispatch = useDispatch();
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
  dispatch(signUpRequest())
  await axios
        .post(`${baseUrl}users/SignUp`, value)
        .then((response) => {
          const user=response.data.data
          dispatch(signUpSuccess(user))
           alert(response.data.message)
            history("/login");
          })
          .catch(function (error) {
            dispatch(signUpFailure(error.message))
            alert(error.message)
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