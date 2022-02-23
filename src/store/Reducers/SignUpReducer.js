const initialState = {
    loading: false,
    user: [],
    error: "",
  };
  
  const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_UP":
        return {
          loading: true,
        };
      case "SIGN_UP_SUCCESS":
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
      case "SIGN_UP_FAILURE":   
        return {
          loading: false,
          users: [],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default SignUpReducer;