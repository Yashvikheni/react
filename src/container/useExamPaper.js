import { useState, useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { reset } from "../utils/Regex";
import { useNavigate } from "react-router-dom";
import { Exam } from "../container/useFields";
const useExamPaper = () => {
  const history = useNavigate();
  const [data, setData] = useState({});
  const [index, setIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [final, setFinal] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [valuee, setValuee] = useState({
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    answer: "",
  });
  let template = {
    fields: [{ ...Exam.question }, { ...Exam.option }, { ...Exam.answer }],
    buttonName: index === 7 ? "GiveExam" : "Next",
  };
  const [obj, setObj] = useState({ question: "", answer: "" });
  useEffect(() => {
    const api = `student/examPaper`;
    fetch({ api });
    return () => {
      setDisabled(true) // This worked for me
    };
  }, []);
  useEffect(() => {
    Next(index);
  }, [data]);
  const Next = (ind) => {
    const preQ = data && data[index - 1];
    if (preQ) {
      if (preQ.question!=="") {
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
  const id = localStorage.getItem("examId");
  const token = localStorage.getItem("userIn");
  async function fetch({ api }) {
    await axios
      .get(`${baseUrl}${api}?id=${id}`, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        setData(response.data.data);
        if (response.data.statusCode === 500){
          alert(response.data.message)
          history('../allexam')
        }
      })
      .catch((error) => {
      alert(error.message)
      history('../allexam')
      }
      );
  }
  async function postExam({ api, final }) {
    await axios
      .post(`${baseUrl}${api}?id=${id}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          history("../allexam");
          alert(response.data.message)
        
        }
      })
      .catch((error) => alert(error.message));
  }

  const handle = (values) => {
    index < 7 && setIndex(index + 1);
    Next(index);
    obj.question = values.question;
    obj.answer = values.answer;
    final.push(obj);
    setObj(reset(obj));
    const newQuestion = currentQuestion + 1;
    setCurrentQuestion(newQuestion);
    if (final.length === 7) {
      const api = `student/giveExam`;
      postExam({ api, final });
    }
  };

  return [
    {
      template,
      data,
      currentQuestion,
      handle,
      index,
      valuee,
      setValuee,
      disabled,
    },
  ];
};

export default useExamPaper;
