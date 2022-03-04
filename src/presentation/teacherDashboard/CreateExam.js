import React, { useState,useEffect} from "react";
import Form from "../../shared/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../../utils/Constant";
import axios from "axios";

const CreateExam = () => {
 
  const [index, setIndex] = useState(1);
  const [notes, setNotes] = useState(["10mins exam", "start time 10am"]);
  const [final,setFinal] = useState({
    subjectName: "",
    questions:"",
    notes:""
  })
  const [array, setArray] = useState([]);
  let qqq = {};
  let options = [];
  const[val,setval] = useState(null)
  const[que,setque] = useState(null)
  const[inde,setinde] = useState(null)
  
  const history = useNavigate();
  const location = useLocation();
  if(location.state){
      ( { val, que, inde } = location.state)
      setval(val)
      setque(que)
      setinde(inde)
    }
  const Next=() => {
    {(index)<=15 && setIndex(index + 1)}
    fetch(index)
  }
  const Prevs=() => {
    {(index)>0&& setIndex(index - 1)}
    fetch(index)
  }
  const fetch=(index) => {
    const preQ=array.at(index)
    setval(preQ)
    setque(final.questions)
    setinde(index)
    console.log(index);
    console.log(val);
  }
  const [value, setValue] = useState({});
  useEffect(() => {
    setValue( val?{
      question: val.question,
      answer: val.answer,
      ans1: val.options[0],
      ans2: val.options[1],
      ans3: val.options[2],
      ans4: val.options[3],
    }:null)
},[val])
let template = {
  fields: [
    {
      title: "subjectName",
      type: "dropDown",
      name: "subjectName",
      options:["English","Maths","Science"],
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
      value:[{
        type:"text",
        name:"ans1",
        placeholder: "Option1",
      },{
        type:"text",
        name:"ans2",
        placeholder: "Option2",
      },{
        type:"text",
        name:"ans3",
        placeholder: "Option3",
      },{
        type:"text",
        name:"ans4",
        placeholder: "Option4",
      }]
    },
     {
      title: "answer",
      type: "text",
      name:'answer',
      placeholder: "answer",
    }
  ],
  buttonName: val ? "Update" : "ADD",
  button:["Prev","Next","Cancel"]
};
  const idd = localStorage.getItem("examId");
  const subject = localStorage.getItem("subjectName");
  const handle = (values) => {
    const result =val?values.question === val.question?true:false:null;
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
      if (que) {
        que[inde] = qqq;
        final.questions = que;
        final.subjectName=values.subjectName;
        final.notes = notes;
        update();
      } else {
        array.push(qqq);
        final.subjectName=values.subjectName;
        final.questions = array;
        final.notes = notes;
       array.length===15&&submit(final)
       {(index)<=14?setIndex(index + 1):setIndex("")}
    }
  };
}
  const token = localStorage.getItem("userIn");
  async function update() {  
    await axios
      .put(`${baseUrl}dashboard/Teachers/editExam?id=${idd}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert("Update exam successfully");
        history("/viewexamdetails");
      })
      .catch((error) => alert(error.message));
  }
  async function submit(final) {  
    console.log(final);
    await axios.post(`${baseUrl}dashboard/Teachers/Exam`,final, 
      {headers: { "access-token":`${token}`}})
      .then((response) => {
        if (response.data.statusCode === 200) {
          alert("exam created successfully");
          history("/teacherDashboard");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div>
      <h2>Question {inde ? inde + 1 : index}  </h2>
      <Form
        template={template}
        handle={handle}
        vall={value}
        setVall={setValue}
        Prev={Prevs}
        Next={Next}
        indexx={index}
      />
    </div>
  );
};

export default CreateExam;
