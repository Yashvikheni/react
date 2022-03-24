const initialState = {
    loading: false,
    student:[],
    error: "",
  };
  
  const Student = (state = initialState, action) => {
    switch (action.type) {
      case "STUDENT_PROFILE":
        return {
          loading: true,
          student:[],
        };
      case "STUDENT_PROFILE_SUCCESS":
        return {
          loading: false,
          student: action.payload,
          error: "",
        };
      case "STUDENT_PROFILE_FAILURE":   
        return {
          loading: false,
          student:[],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default Student;