const initialState = {
    loading: false,
    student:[],
    error: "",
  };
  
  const Student = (state = initialState, action) => {
    switch (action.type) {
      case "STUDENT_DETAIL":
        return {
          loading: true,
          student:[],
        };
      case "STUDENT_DETAIL_SUCCESS":
        return {
          loading: false,
          student: action.payload,
          error: "",
        };
      case "STUDENT_DETAIL_FAILURE":   
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