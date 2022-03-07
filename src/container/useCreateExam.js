import React,{ useState}from 'react'
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Constant"
import axios from "axios";
const useCreateExam = () => {
    const [index, setIndex] = useState(1);
  const [notes, setNotes] = useState(["10mins exam", "start time 10am"]);
  const [final, setFinal] = useState({
    subjectName: "",
    questions: "",
    notes: "",
  });
  const [array, setArray] = useState([]);
  let qqq = {};
  let options = [];
  const [valuee, setValuee] = useState({
    question: "",
    answer: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
  });
  const [val, setval] = useState(null);
  const history = useNavigate();
  const [ind, setInd] = useState(0);
  const Next = () => {
    if (index <= 15 && array.at(index)) {
      setIndex(index + 1);
      setInd(ind + 1);
      fetch(index);
    }
  };
  const Prevs = () => {
    if (index >= 2 && array.at(ind-1)) {
      setIndex(index - 1);
      setInd(ind - 1);
      fetch(ind);
    }
  };
  const fetch = (i) => {
    const preQ = array.at(i);
    setValuee({
      question: preQ.question,
      answer: preQ.answer,
      ans1: preQ.options[0],
      ans2: preQ.options[1],
      ans3: preQ.options[2],
      ans4: preQ.options[3],
    });
  };
  let template = {
    fields: [
      {
        title: "subjectName",
        type: "dropDown",
        name: "subjectName",
        options: ["English", "Maths", "Science"],
        placeholder: "subjectName",
      },
      {
        title: "question",
        type: "text",
        name: "question",
        placeholder: "question",
      },
      {
        title: "Option1",
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
    buttonName: "ADD",
    button: ["Prev", "Next", "Cancel"],
  };

  const handle = (values) => {
    const result = val
      ? values.question === val.question
        ? true
        : false
      : null;
    if (result) {
      alert("no need to update");
      return;
    }
    if (index <= 15) {
      const { ans1, ans2, ans3, ans4 } = values;
      options.push(ans1, ans2, ans3, ans4);
      qqq.question = values.question;
      qqq.answer = values.answer;
      qqq.options = options;
      array.push(qqq);
      final.subjectName = values.subjectName;
      final.questions = array;
      final.notes = notes;
      array.length === 15 && submit(final);
      {
        index <= 14 && setIndex(index + 1);
      }
      {
        ind <= 13 && setInd(ind + 1) ;  
      }
    }
  };
  const token = localStorage.getItem("userIn");
  async function update() {
    //   await axios
    //     .put(`${baseUrl}dashboard/Teachers/editExam?id=${idd}`, final, {
    //       headers: { "access-token": `${token}` },
    //     })
    //     .then((response) => {
    //       alert("Update exam successfully");
    //       history("viewexamdetails");
    //     })
    //     .catch((error) => alert(error.message));
  }
  async function submit(final) {
    console.log(final);
    await axios
      .post(`${baseUrl}dashboard/Teachers/Exam`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
          alert(response.data.message);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return [{template,handle,valuee,index,setValuee,Prevs,Next,index}]
}

export default useCreateExam