import React,{useState,useEffect} from "react";
import {useLocation} from 'react-router-dom'
import Form from "../../shared/Form";
import useCreateExam from "../../container/useCreateExam"

const CreateExam = () => {
  const { state } = useLocation();
  const [final, setFinal] = useState({
    subjectName: "",
    questions:[],
    notes: [],
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
  
  const [{template,handle,valuee,setValuee,Prevs,Next,index}]=useCreateExam({final})
  return (
    <div style={{marginLeft:"200px"}}>
      <h2>{index<=15?`Question ${index}`:null}</h2>
      <h2>{state?`subject:${state.subject}`:null}</h2>
      <Form
        template={template}
        handle={handle}
        valuee={valuee}
        setValuee={setValuee}
        Prev={Prevs}
        Next={Next}
        indexx={index}
        final={final}
        //subject={state&&state.subject}
      />
    </div>
  );
};

export default React.memo(CreateExam);
