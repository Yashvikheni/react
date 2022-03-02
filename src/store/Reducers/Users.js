const initialState = {
    loading: false,
    student:[],
    error: "",
  };
  
  const Users = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS":
        return {
          loading: true,
          student:[],
        };
      case "FETCH_USERS_SUCCESS":
        return {
          loading: false,
          student: action.payload,
          error: "",
        };
      case "FETCH_USERS_FAILURE":   
        return {
          loading: false,
          student:[],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default Users;