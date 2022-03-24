
const initialState = {
    loading: false,
    students:[],
    error: "",
  };
  
  const Users = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS":
        return {
          loading: true,
          students:[],
        };
      case "FETCH_USERS_SUCCESS":
        return {
          loading: false,
          students: action.payload,
          error: "",
        };
      case "FETCH_USERS_FAILURE":   
        return {
          loading: false,
          students:[],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default Users;