const initialState = {
    loading: false,
    user: null,
    error: "",
  };
  
  const SignIn = (state = initialState, action) => {
    
    switch (action.type) {
      case "SIGN_IN_REQUEST":
        console.log("state");return {
          loading: true,
          user:""
        };
      case "SIGN_IN_SUCCESS":
        return {  
          loading: false,
          user: action.payload,
          error: "",
        };
      case "SIGN_IN_FAILURE":   
        return {
          loading: false,
          user: "",
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default SignIn;