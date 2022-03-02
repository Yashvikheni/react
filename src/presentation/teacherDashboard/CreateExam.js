import React, { useState} from "react";
import Form from "../../shared/Form";
import InputField from "../../shared/InputField";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../../utils/Constant";
import axios from "axios";
const CreateExam = () => {
  const [index, setIndex] = useState(1);
  const [subjectName, setSubjectName] = useState("");
  const [notes, setNotes] = useState(["10mins exam", "start time 10am"]);
  const [final,setFinal] = useState({
    subjectName: "",
    questions:"",
    notes:""
  })
  const [array, setArray] = useState([]);
  let qqq = {};
  let options = [];
  let val,que,inde
  const history = useNavigate();
  const location = useLocation();
  if(location.state){
      ({ val, que, inde } = location.state)
  }
 
  const [value, setValue] = useState( val?{
          question: val.question,
          answer: val.answer,
          ans1: val.options[0],
          ans2: val.options[1],
          ans3: val.options[2],
          ans4: val.options[3],
        }:null
  );
  let template = {
    fields: [
      {
        title: "Question",
        type: "text",
        name: "question",
        placeholder: "Question",
      },
      {
        title: "answer",
        type: "text",
        name: "answer",
        placeholder: "answer",
      },
      {
        title: "Option1",
        type: "text",
        name: "ans1",
        placeholder: "Option1",
      },
      {
        title: "Option2",
        type: "text",
        name: "ans2",
        placeholder: "Option2",
      },
      {
        title: "Option3",
        type: "text",
        name: "ans3",
        placeholder: "Option3",
      },
      {
        title: "Option4",
        type: "text",
        name: "ans4",
        placeholder: "Option4",
      },
    ],
    buttonName: val ? "Update" : "ADD",
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
      final.subjectName = subject ? subject : subjectName;
      const { ans1, ans2, ans3, ans4 } = values;
      options.push(ans1, ans2, ans3, ans4);
      qqq.question = values.question;
      qqq.answer = values.answer;
      qqq.options = options;
      if (que) {
        que[inde] = qqq;
        final.questions = que;
        update();
      } else {
        array.push(qqq);
        final.questions = array;
        final.notes = notes;
       {(index)<=14?setIndex(index + 1):setIndex("")}
      }
    }
  };
  const token = localStorage.getItem("userIn");
  async function update() {
    final.notes = notes;
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
  const handleChange = (e) => {
    setSubjectName(e.target.value);
  };
  async function submit(final) {  
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
      <h2>Question {inde ? inde + 1 : index}</h2>
      {subjectName ? (
        subjectName
      ) : (
        val? 
          subject
         : 
          <InputField
            type="text"
            name="subjectName"
            required={true}
            onChange={handleChange}
          />
      )}
      <Form
        template={template}
        handle={handle}
        vall={value}
        setVall={setValue}
      />
      {index === "" ? (
        <button visibility="hide" onClick={() => submit(final)}>
          Create
        </button>
      ) : null}
    </div>
  );
};

export default CreateExam;
