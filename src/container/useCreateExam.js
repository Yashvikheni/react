import { useState, useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isNullish, EqualObj, reset, hasDuplicates } from "../utils/Regex";

const useCreateExam = ({ final, state }) => {
  const history = useNavigate();
  const [index, setIndex] = useState(state?state.index:1);
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
  useEffect(() => {
    if (!state) return;
    if(state){
      final.questions=state.eQuestions;
    final.subjectName=state.subject}
    fetch(index-1);
    setInd(index-2)

  }, []);
  const Next = (data1) => {
    if (index <= 15) {
      setIndex(index + 1);
      setInd(ind + 1);
      fetch(index, data1);
    }
  };
  const Prevs = (data1) => {
    if (index >= 2) {
      setIndex(index - 1);
      setInd(ind - 1);
      fetch(ind, data1);
    }
  };
  const fetch = (i, data1) => {
    console.log(i);
    const preQ = final.questions.at(i);
    setPre(preQ);
    handleAlert(data1);
    if (preQ.options[0]) {
      setValuee({
        question: preQ.question,
        answer: preQ.answer,
        ans1: preQ.options[0],
        ans2: preQ.options[1],
        ans3: preQ.options[2],
        ans4: preQ.options[3],
      });
    } else {
      setValuee(reset(valuee));
      setPre(reset(pre));
    }
  };
  let template = {
    fields: [
      state ?{}: {
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
    buttonName: state?"Update":index===15?"CREATE":isNullish(pre) ? "ADD" : "Update",
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
  const handleAlert = (data1) => {
    if (!isNullish(valuee)) {
      const val = { ...valuee };
      !state && showAlert(val);
    } else if (data1) {
      if (!isNullish(data1)) {
        const val = { ...data1 };
        showAlert(val);
      }
    }
  };
  const showAlert = (val) => {
    val.options = handleOptions(val);
    if (!isNullish(final.questions.at(index - 1)) || !isNullish(valuee)) {
      ["ans1", "ans2", "ans3", "ans4", "subjectName"].forEach(
        (e) => delete val[e]
      );
      const result = EqualObj(val, final.questions.at(index - 1));
      if (!result) {
        alert("you are losing your data");
      }
    }
  };
  const Format = (values) => {
    const value = final.questions.at(index - 1);
    value.options = handleOptions(values);
    value.question = values.question;
    value.answer = values.answer;
  };
  const handle = (values, add) => {
    
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
        } else {
          return;
        }
      }
      if(state){
        final.subjectName=state.subject
      }
      else if (index === 1) {
        if (values.subjectName) {
          final.subjectName = values.subjectName;
        }
      }
      console.log(final);
      const ff = final.questions[14];
      if (ff.question !== "") {
        state?update(final):submit(final);
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
        if (response.data.statusCode === 200) {
          history("../viewexam");
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.message);
        window.location.reload();
      });
  }
  async function update(final) {
    const token = localStorage.getItem("userIn");
    const id=localStorage.getItem("examId")
    await axios
      .put(`${baseUrl}dashboard/Teachers/editExam?id=${id}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message); 
        if (response.data.statusCode === 200) {
          history(`../viewexamdetails?id=${id}`);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return [
    { template, handle, valuee, index, setValuee, Prevs, Next, final },
  ];
};
export default useCreateExam;
