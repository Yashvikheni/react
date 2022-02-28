import React,{useState} from 'react'
import Form from '../../shared/Form'
import InputField from '../../shared/InputField'
import { useNavigate } from 'react-router-dom'
import {baseUrl} from '../../utils/Constant'
import axios from 'axios'
const CreateExam = () => {
  const [index, setIndex] = useState(1)
  const [subjectName, setSubjectName] = useState("")
  const [notes, setNotes] = useState( [
    "10mins exam",
    "start time 10am"
])
const [final,setFinal] = useState({
  subjectName: "",
  questions:''
})
const [array, setArray] = useState([])
 let qqq={}
  let options=[]
    const history=useNavigate()
    let template = {
        fields: [
          {

            title: "Question",
            type: "text",
            name: "Question",
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
        buttonName:'Add'
    }
    const handle=(values)=>{
        const {ans1,ans2,ans3,ans4}=values
        options.push(ans1,ans2,ans3,ans4)
       
        qqq.question=values.Question
        qqq.answer=values.answer
        qqq.options=options
      array.push(qqq)
        final.subjectName=subjectName
       final.questions=array
       final.notes=  notes
       setIndex(index+1)

      }
 
    const handleChange=(e) => {
     
setSubjectName(e.target.value)
    }
   async function submit(final) {
     console.log('final :>> ', final);
    console.log('first :>> ');
    const token=localStorage.getItem('userIn');
    console.log('token :>> ', token);
    await axios
    .post(`${baseUrl}dashboard/Teachers/Exam`, final,{headers:{'access-token':`${token}`}})
    .then((response) => {
      console.log('response.data :>> ', response.data);
      if (response.data.statusCode===200) {
       
        alert('exam created successfully')
        history("/teacherDashboard");
      }
    }).catch((error) => {alert(error.message)});
    }
  return (

    <div>
      <h2>Question {index}</h2>
      {index===1?<InputField type="text" name="subjectName" required={true} onChange={handleChange}/>:subjectName}
        <Form
    template={template}
    handle={handle}
  />
  <button onClick={()=>submit(final)}>Create</button>
  </div>
  )
}

export default CreateExam