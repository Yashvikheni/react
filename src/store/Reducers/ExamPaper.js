const initialState = {
    loading: false,
    data:{},
    error: "",
  };
  
  const ExamPaper = (state = initialState, action) => {
    switch (action.type) {
      case "EXAM_PAPER":
        return {
          loading: true,
          data:{},
        };
      case "EXAM_PAPER_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case "EXAM_PAPER_FAILURE":   
        return {
          loading: false,
          data:{},
          error: action.payload
        };
      default:
        return state;
    }
  }
  export default ExamPaper;