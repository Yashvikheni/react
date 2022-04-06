import { useEffect, useState } from "react";
import { examDetail } from "../store/Actions/Action";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useGetViewExamDetailQuery} from '../store/services/Exam'
const useViewExamDetails = ({ notes }) => {
  const history = useNavigate();
  const location = useLocation();
  const id = location.search.replace("?id=", "");

  const response =useGetViewExamDetailQuery(id)
  const {isLoading, isError, data}=response
  const questions=data&& data.data.questions
  console.log(questions);
  const [state, setState] = useState({});
  const key = ["question", "options", "answer"];
  const Edit = (val,_id,index) => {
    console.log(index);
    const subject = localStorage.getItem("subject");
    state.options = val[0].val;
    state.question = val[1].val;
    state.answer = val[2].val;
    history("../editexam", {
      state: {
        data: state,
        index: index,
        eQuestions: questions,
        subject: subject,
        notes: notes,
      },
    });
  };
  return [{ isLoading, isError, questions,data, Edit, key }];
};

export default useViewExamDetails;
