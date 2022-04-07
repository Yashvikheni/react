import { useNavigate } from "react-router-dom";
import { useGetAllExamQuery } from "../store/services/Exam";

const useAllExam = () => {
  const state = useGetAllExamQuery();
  const { isLoading, data, isError } = state;
  const exam = data && data.data;
  const key = ["subjectName", "notes", "email", "Result"];
  const key2 = ["rank", "score", "resultStatus"];
  const history = useNavigate();
  const handle = (data, id) => {
    localStorage.setItem("examId", id);
    data.map((user, index) =>
      user.key === "subjectName"
        ? localStorage.setItem("subject", user.val)
        : null
    );
    localStorage.setItem("index", 1);
    localStorage.setItem("final", JSON.stringify([]));
    history(`../exampaper`);
  };
  return [
    {
      isLoading,
      exam,
      isError,
      data,
      handle,
      key,
      key2,
    },
  ];
};

export default useAllExam;
