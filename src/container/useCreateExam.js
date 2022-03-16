import { useState, useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { isNullish, EqualObj, reset, hasDuplicates } from "../utils/Regex";

const useCreateExam = ({ final}) => {
  const history=useNavigate()
  const [index, setIndex] = useState(1);
  const [ind, setInd] = useState(-1);
  const [pre, setPre] = useState({});
  const [valuee, setValuee] = useState({
    question: "",
    answer: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
  });
  const Next = () => {
    if (index <= 15) {
      setIndex(index + 1);
      setInd(ind + 1);
      fetch(index);
    }
  };
  const Prevs = () => {
    if (index >= 2) {
      setIndex(index - 1);
      setInd(ind - 1);
      fetch(ind);
    }
  };
  const fetch = (i) => {
    const preQ =final.questions.at(i); 
    console.log(preQ);
    setPre(preQ);
    handleAlert();
     if(preQ.options[0]){ 
      setValuee({
        question: preQ.question,
        answer: preQ.answer,
        ans1: preQ.options[0],
        ans2: preQ.options[1],
        ans3: preQ.options[2],
        ans4: preQ.options[3],
      });
     }
     else{
       setValuee(reset(valuee))
       setPre(reset(pre))
     }
  };
  let template = {
    fields: [
      {
        title: "subjectName",
        type: "dropDown",
        name: "subjectName",
        options: ["English", "Maths", "Node", "React", "Flutter"],
        placeholder: "subjectName",
      },
      {
        title: "question",
        type: "text",
        name: "question",
        placeholder: "question",
      },
      {
        title: "Option",
        type: "radio",
        name: "answer",
        value: [
          {
            type: "text",
            name: "ans1",
            placeholder: "Option1",
          },
          {
            type: "text",
            name: "ans2",
            placeholder: "Option2",
          },
          {
            type: "text",
            name: "ans3",
            placeholder: "Option3",
          },
          {
            type: "text",
            name: "ans4",
            placeholder: "Option4",
          },
        ],
      },
      {
        title: "answer",
        type: "text",
        name: "answer",
        placeholder: "answer",
      },
    ],
    buttonName: isNullish(pre) ? "ADD" : "Update",
    button: ["Prev", "Next", "Clear"],
  };
  const queCheck = (values) => {
    let a;
    let arr = final.questions && final.questions.map((key) => key.question);
    arr &&
      arr.map((value, index) => {
        if (index !== ind + 1) {
          if (value === values.question) {
            a = true;
          }
        }
      });
    return a;
  };
  const handleOptions = (values) => {
    const { ans1, ans2, ans3, ans4 } = values;
    let option = [];
    option[0] = ans1;
    option[1] = ans2;
    option[2] = ans3;
    option[3] = ans4;
    return option;
  };
  const handleAlert = () => {
    if (!isNullish(valuee)) {
      const val={...valuee}
      val.options = handleOptions(val);
      if (!isNullish(final.questions.at(index - 1)) || !isNullish(valuee)) {
        ["ans1", "ans2", "ans3", "ans4","subjectName"].forEach((e) => delete val[e]);
        const result = EqualObj(val, final.questions.at(index - 1));
        if (!result ) {
          alert("you are losing your data");
        }
      }
    }
  };
  const Format = (values) => {
    const value = final.questions.at(index - 1);
    value.options = handleOptions(values);
    value.question = values.question;
    value.answer = values.answer;
  };
  const handle = (values,add) => {
   
    let options = handleOptions(values);
    if (index <= 15) {
      if (queCheck(values)) {
        alert("Question already exist");
        return;
      } else if (hasDuplicates(options)) {
        alert("options should be unique");
        return;
      }
      if (isNullish(pre)) {
        Format(values);
        add();
        {
          index <= 14 && setIndex(index + 1);
        }
        {
          ind <= 13 && setInd(ind + 1);
        }
      } else {
        const ans = window.confirm("Are you sure you want to update")
          ? true
          : false;
        if (ans) {
          Format(values);
          Next();
        }
        else{
          return;
        }
      }
      if (index === 1) {
        if (values.subjectName) {
          final.subjectName = values.subjectName;
        }
      }
      console.log(final);
      const ff = final.questions[14];
      if (ff.question !== "") {
        submit(final);
      }
    }
  };
  async function submit(final) {
    const token = localStorage.getItem("userIn");
    await axios
      .post(`${baseUrl}dashboard/Teachers/Exam`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message);
        if(response.data.statusCode ===200){
          history("../viewexam")
        }else{
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.message);
        window.location.reload();
      });
  }
  return [{ template, handle, valuee, index, setValuee, Prevs, Next ,final}];
};
export default useCreateExam;
