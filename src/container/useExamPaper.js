import { useState, useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { reset } from "../utils/Regex";
import { useNavigate } from "react-router-dom";
import { Exam } from "../container/useFields";
import { useSelector, useDispatch } from "react-redux";
import { ViewExamPaper } from "../store/Actions/Action";
const useExamPaper = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ExamPaper);
  const { loading, data, error } = state;
  const final = JSON.parse(localStorage.getItem("final"));
  const [disabled, setDisabled] = useState(true);
  const [valuee, setValuee] = useState({
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    answer: "",
  });
  const [obj, setObj] = useState({ question: "", answer: "" });
  const ids = localStorage.getItem("examId");
  const inde = Number(localStorage.getItem("index"));
  let template = {
    fields: [{ ...Exam.question }, { ...Exam.option }, { ...Exam.answer }],
    buttonName: inde === 7 ? "GiveExam" : "Next",
  };
  useEffect(() => {
    const api = `student/examPaper`;
    dispatch(ViewExamPaper({ api, ids, history }));
    return () => {
      setDisabled(true);
    };
  }, [dispatch]);
  useEffect(() => {
    Next(inde);
  }, [data]);
  const Next = (ind) => {
    const preQ = data && data[ind - 1];
    if (preQ) {
      if (preQ.question !== "") {
        setValuee({
          question: preQ.question,
          ans1: preQ.options[0],
          ans2: preQ.options[1],
          ans3: preQ.options[2],
          ans4: preQ.options[3],
          answer: "",
        });
      } else {
        setValuee(reset(valuee));
      }
    }
  };

  const token = localStorage.getItem("userIn");
  async function postExam({ api, final }) {
    await axios
      .post(`${baseUrl}${api}?id=${ids}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          history("../allexam");
          alert(response.data.message);
        }
      })
      .catch((error) => alert(error.message));
  }

  const handle = (values) => {
    localStorage.setItem("index", inde + 1);
    Next(inde + 1);
    obj.question = values.question;
    obj.answer = values.answer;
    final.push(obj);
    localStorage.setItem("final", JSON.stringify(final));
    console.log(final);
    setObj(reset(obj));
    if (final.length === 7) {
      const api = `student/giveExam`;
      postExam({ api, final });
    }
  };

  return [
    {
      loading,
      error,
      template,
      data,
      inde,
      handle,
      valuee,
      setValuee,
      disabled,
    },
  ];
};

export default useExamPaper;
