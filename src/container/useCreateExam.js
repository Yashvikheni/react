import { useState,useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { isNullish, EqualObj, reset,hasDuplicates } from "../utils/Regex";

const useCreateExam = ({final, setFinal}) => {
  const [index, setIndex] = useState(1);

  // let qqq = {};
  // let options = [];
  const [pre, setPre] = useState({});
  const [array, setArray] = useState([]);
  const [valuee, setValuee] = useState({
    question: "",
    answer: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  });
  const [ind, setInd] = useState(-1);
  const Next = () => {
   const a=final.questions.at(index);
    if (index <= 15 && a.question!=="") {
      setIndex(index + 1);
      setInd(ind + 1);
      fetch(index);
    }
  };
  const Prevs = () => {
    if (index >= 2 && final.questions.at(ind - 1)) {
      setIndex(index - 1);
      setInd(ind - 1);
      fetch(ind);
    }
  };
  const fetch = (i) => {
    const preQ = final.questions.at(i);
    setPre(preQ);
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
        options: ["English", "Maths", "Science", "physics", "history"],
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
      arr.map((value,index) => {
        if(index!==ind+1){
          if (value === values.question) {
            a = true;
          }
        } 
      });
    return a;
  };
  console.log(final);
  const handle = (values) => {
    if (index <= 15) {
  const { ans1, ans2, ans3, ans4 } = values;
        const value=final.questions.at(index-1)
        value.options.push(ans1, ans2, ans3, ans4);
        value.question = values.question;
        value.answer = values.answer;
       if (isNullish(pre)) {
        if (queCheck(values)) {
          alert("Question already exist");
          return;
       }
        //else if(hasDuplicates(value.options)){
        //   alert("options should be unique")
        //   return;
        // }   
        else{
          //array.push(qqq);
          {
            index <= 14 && setIndex(index + 1);
          }
          {
            ind <= 13 && setInd(ind + 1);
          }
       }}
       else {
        const result = EqualObj(pre, value);
         if(result) {
          alert("no need to update question");
           setPre(reset(pre));
        } else if (queCheck(values)) {
          alert("Question already exist");
        }
       else if(hasDuplicates(value.options)){
          alert("options should be unique")
        }else 
        {
          const ans = window.confirm("Are you sure you want to update")
            ? true
            : false;
          if (ans) {
            final.questions[index - 1] = value;
           
            setPre(reset(pre));
          } else {
            setPre(reset(pre));
          }
          
        }
      setIndex(final.questions.length + 1);
      setInd(final.questions.length - 1);
      } 
      if (index === 1) {
        if(values.subjectName){
          final.subjectName = values.subjectName;
        }
      }
      //console.log(final);
      //final.questions.length === 15 && submit(final);
    }
  };
  async function submit(final) {
    const token = localStorage.getItem("userIn");
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
  return [{ template, handle, valuee, index, setValuee, Prevs, Next, index }];
};
export default useCreateExam;
