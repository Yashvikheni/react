import { baseUrl } from "../../utils/Constant";
import axios from "axios";

const id=localStorage.getItem('studentid')
const token = localStorage.getItem("userIn");
export const fetchUsers =
  ({ api }) =>
  (dispatch) => {
    dispatch({ type: "FETCH_USERS" });
    axios
      .get(`${baseUrl}${api}`, { headers: { "access-token": `${token}` } })
      .then((response) =>
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data.data })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message })
      );
  };

export const viewExam =
  ({ api }) =>
  (dispatch) => {
    dispatch({ type: "VIEW_EXAM" });
    axios
      .get(`${baseUrl}${api}`, { headers: { "access-token": `${token}` } })
      .then((response) =>
        dispatch({ type: "VIEW_EXAM_SUCCESS", payload: response.data.data })
      )
      .catch((error) =>
        dispatch({ type: "VIEW_EXAM_FAILURE", payload: error.message })
      );
  };
export const studentProfile =
  ({ api }) =>
  (dispatch) => {
    dispatch({ type: "STUDENT_PROFILE" });
    axios
      .get(`${baseUrl}${api}`, { headers: { "access-token": `${token}` } })
      .then((response) =>
        dispatch({
          type: "STUDENT_PROFILE_SUCCESS",
          payload: response.data.data,
        })
      )
      .catch((error) =>
        dispatch({ type: "STUDENT_PROFILE_FAILURE", payload: error.message })
      );
  };
  export const studentDetail =
  ({ api }) =>
  (dispatch) => {
    dispatch({ type: "STUDENT_DETAIL" });
    axios
      .get(`${baseUrl}${api}?id=${id}`, { headers: { "access-token": `${token}` } })
      .then((response) =>
        dispatch({
          type: "STUDENT_DETAIL_SUCCESS",
          payload: response.data.data,
        })
      )
      .catch((error) =>
        dispatch({ type: "STUDENT_DETAIL_FAILURE", payload: error.message })
      );
  };


  export const examDetail =
  ({ api ,ids}) =>
  (dispatch) => {
    dispatch({ type: "EXAM_DETAIL" });
    axios
      .get(`${baseUrl}${api}?id=${ids}`, { headers: { "access-token": `${token}` } })
      .then((response) =>
        dispatch({
          type: "EXAM_DETAIL_SUCCESS",
          payload: response.data.data.questions,
        })
      )
      .catch((error) =>
        dispatch({ type: "EXAM_DETAIL_FAILURE", payload: error.message })
      );
  };
  export const ViewExamPaper =
  ({ api ,ids,history}) =>
  (dispatch) => {
    dispatch({ type: "EXAM_PAPER" });
    axios
      .get(`${baseUrl}${api}?id=${ids}`, { headers: { "access-token": `${token}` } })
      .then((response) =>{
        dispatch({
          type: "EXAM_PAPER_SUCCESS",
          payload: response.data.data,
        })
        if (response.data.statusCode === 500){
            alert(response.data.message)
            history('../allexam')
          }}
      )
      .catch((error) =>{
        dispatch({ type: "EXAM_PAPER_FAILURE", payload: error.message })
        history('../allexam')}
        );
  };