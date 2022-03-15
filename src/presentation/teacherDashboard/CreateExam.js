import React,{useState,useEffect} from "react";
import Form from "../../shared/Form";
import useCreateExam from "../../container/useCreateExam"

const CreateExam = () => {
  const [final, setFinal] = useState({
    subjectName: "",
    questions:[],
    notes: ["10mins exam", "start time 10am"],
  });
 useEffect(() => {
   if(final.questions.length<15){
    for(let i=0;i<=14;i++){
      final.questions.push( {
        question:"",
        answer:"",
        options:[]
      })
    }
   }
  },[])
  const [{template,handle,valuee,setValuee,Prevs,Next,index}]=useCreateExam({final, setFinal})
  return (
    <div>
      <h2>{index<=15?`Question ${index}`:null}</h2>
      <Form
        template={template}
        handle={handle}
        valuee={valuee}
        setValuee={setValuee}
        Prev={Prevs}
        Next={Next}
        indexx={index}
      />
    </div>
  );
};

export default CreateExam;
