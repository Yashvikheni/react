import Form from "../shared/Form";
import React, { useEffect } from "react";
import { text, Email, Password } from "../container/useFields";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../store/services/User";
function SignUp(props) {
  const history = useNavigate();
  const [signUpdata, responseInfo] = useSignUpMutation();
  useEffect(() => {
    localStorage.getItem("userIn") && history(-1);
  }, []);
  let template = {
    title: "Sign Up",
    fields: [
      text,
      Email,
      Password,
      {
        title: "Role",
        type: "radio",
        name: "role",
        value: ["Teacher", "Student"],
      },
    ],
    link: [
      {
        path: "/login",
        linkName: "Already have an Account ?",
      },
    ],
    buttonName: "Sign Up",
  };

  async function handle(values) {
    signUpdata(values);
  }
  useEffect(() => {
    if (responseInfo.data) {
      alert(responseInfo.data.message);
      history("/login");
    }
  }, [responseInfo.data]);
  return <Form template={template} handle={handle} />;
}
export default React.memo(SignUp);
