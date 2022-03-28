import { useEffect, useState } from "react";
import { examDetail } from "../store/Actions/Action";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const useViewExamDetails = ({ notes }) => {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const sta = useSelector((state) => state.ExamDetail);
  const { loading, exam, error } = sta;
  const [state, setState] = useState({});
  const key = ["question", "options", "answer"];
  const ids = location.search.replace("?id=", "");
  useEffect(() => {
    const api = `dashboard/Teachers/examDetail`;
    dispatch(examDetail({ api, ids }));
  }, [dispatch]);
  const Edit = (val, index) => {
    const subject = localStorage.getItem("subject");
    state.options = val[0].val;
    state.question = val[1].val;
    state.answer = val[2].val;
    history("../editexam", {
      state: {
        data: state,
        index: index+1,
        eQuestions: exam,
        subject: subject,
        notes: notes,
      },
    });
  };
  return [{ loading, error, exam, Edit, key }];
};

export default useViewExamDetails;
