const initialState = {
    loading: false,
    exam: [],
    error: "",
  };
  
  const Exam = (state = initialState, action) => {
    switch (action.type) {
      case "VIEW_EXAM":
        return {
          loading: true,
          exam:[]
        };
      case "VIEW_EXAM_SUCCESS":
        return {
          loading: false,
          exam: action.payload,
          error: "",
        };
      case "VIEW_EXAM_FAILURE":   
        return {
          loading: false,
          exam: [],
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default Exam;