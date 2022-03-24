import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  viewExam
} from "../store/Actions/Action";
import { useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";

const useViewExam = () => {
  const state = useSelector((state) => state.Exam);
  let { loading, exam, error } = state;
  const key = exam && exam.length ? Object.keys(exam[0]) : [];
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    const api = `dashboard/Teachers/viewExam`;
    dispatch(viewExam({ api }))
  }, [dispatch]);

  async function del(data) {
    data.map((user, index) =>
      user.key === "_id" ? localStorage.setItem("examId", user.val) : ""
    );
    const confirm=window.confirm("Are you sure you want to Delete")
    ? true
    : false;
    if(confirm){
    const id = localStorage.getItem("examId");
    const token = localStorage.getItem("userIn");
    await axios
      .delete(`${baseUrl}dashboard/Teachers/deleteExam?id=${id}`, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          alert("Exam deleted successfully");
          const api = `dashboard/Teachers/viewExam`;
          dispatch(viewExam({ api }))
        }
      })
      .catch((error) => alert(error.message));}
  }
  async function viewDetails(data) {
    let notes;
    data.map((user, index) => {
      if (user.key === "_id") {
        localStorage.setItem("examId", user.val);
      }
      if (user.key === "subjectName") {
        localStorage.setItem("subject", user.val);
      }
      if (user.key === "notes") {
        notes = user.val;
      }
    });
    const id = localStorage.getItem("examId");
    history(`../viewexamdetails?id=${id}`, { state: { notes: notes } });
  }
  return [{ loading, error, exam, viewDetails, del, key }];
};
export default useViewExam;
