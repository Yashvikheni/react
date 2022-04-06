import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewExam } from "../store/Actions/Action";
import { useEffect } from "react";
import { useGetAllExamQuery } from "../store/services/Exam";

const useAllExam = () => {
  //const state = useSelector((state) => state.Exam);
  const state=useGetAllExamQuery()
  
   const { isLoading, data, isError } = state;
   const exam=data && data.data
  //const key = exam && exam.length ? Object.keys(exam[0]) : [];
  const key = ["subjectName", "notes", "email", "Result"]
  const key2 = ["rank", "score", "resultStatus"]
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    const api = `student/studentExam`;
    dispatch(viewExam({ api }));
  }, [dispatch]);

  const handle = (data,id) => {
  localStorage.setItem("examId", id)
   
    data.map((user, index) =>
      user.key === "subjectName"
        ? localStorage.setItem("subject", user.val)
        : null
    );
    localStorage.setItem("index", 1);
    localStorage.setItem("final", JSON.stringify([]));
    history(`../exampaper`);
  };
  return [{
   isLoading,exam,isError,data,handle, key, key2}];
};

export default useAllExam;
