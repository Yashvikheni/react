
import { baseUrl } from "../../utils/Constant";
import axios from "axios";
export const signInRequest=
  ({ api ,values,history}) =>
  (dispatch) => {
    
    dispatch({ type: "SIGN_IN" });
    axios
      .post(`${baseUrl}${api}`, values)
      .then((response) =>{
        dispatch({ type: "SIGN_IN_SUCCESS", payload: response.data.data.name })
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
        dispatch({ type: "SIGN_IN_FAILURE", payload: error.message })
        alert(error.message)
      });
  };
 
  export const signUpRequest=
  ({ api ,values,history}) =>
  (dispatch) => {
    dispatch({ type: "SIGN_UP" });
    axios
      .post(`${baseUrl}${api}`, values)
      .then((response) =>{
        dispatch({ type: "SIGN_UP_SUCCESS", payload: response.data.data })
        alert(response.data.message)
        history("/login")})
      .catch((error) =>{
        dispatch({ type: "SIGN_UP_FAILURE", payload: error.message })
        alert(error.message)}
      );
  };