
const initialState = {
    loading: false,
    exam:{},
    error: "",
  };
  
  const ExamDetail = (state = initialState, action) => {
    switch (action.type) {
      case "EXAM_DETAIL":
        return {
          loading: true,
          exam:{},
        };
      case "EXAM_DETAIL_SUCCESS":
        return {
          loading: false,
          exam: action.payload,
          error: "",
        };
      case "EXAM_DETAIL_FAILURE":   
        return {
          loading: false,
          exam:{},
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default ExamDetail;