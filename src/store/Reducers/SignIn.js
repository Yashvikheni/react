const initialState = {
    loading: false,
    user: [],
    error: "",
  };
  
  const LogIn = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          loading: true,
          user:[]
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
          user: [],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default LogIn;