const initialState = {
    loading: false,
    user: [],
    error: "",
  };
  
  const SignUp = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_UP":
        return {
          loading: true,
          user:[]
        };
      case "SIGN_UP_SUCCESS":
        return {
          loading: false,
          user: action.payload,
          error: "",
        };
      case "SIGN_UP_FAILURE":   
        return {
          loading: false,
          user: [],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default SignUp;