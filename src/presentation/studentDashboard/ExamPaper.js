import React, { useState, useEffect } from "react";
import Form from "../../shared/Form";
import { useLocation } from "react-router-dom";

import useCreateExam from "../../container/useCreateExam";
import { useGetExamPaperQuery } from "../../store/services/Exam";

const ExamPaper = () => {

const id=localStorage.getItem('examId')
  const state=useGetExamPaperQuery(id)
  const { isLoading, isError } = state;
  const data=state.data && state.data.data
  const examIndex=Number(localStorage.getItem("index"))
 
  const [disabled, setDisabled] = useState(true);
  const [final, setFinal] = useState(JSON.parse(localStorage.getItem("final")));
  useEffect(() => {
    if (final.length < 7) {
      for (let i = 0; i <= 6; i++) {
        final.push({ question: " ", answer: " ",_id: " ",options:[]});
      }
    }
  }, [])

 useEffect(()=>{
   if(data)
   {
    final[examIndex-1]._id = data[examIndex-1]._id;
    final[examIndex-1].options = data[examIndex-1].options;   
   }
  
 },[examIndex,data])
  const [{ template, handle, valuee, setValuee, Prevs, Next }] = useCreateExam({
    final,
    examIndex,
    data,
  });
  const subject = localStorage.getItem("subject");
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>
      Exam Paper
      <br />
      <br />
      <h2>{subject && subject}</h2>
      {valuee && isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{state.data.message}</h2>
      ) : (
        <>
          <h2>question {Number(localStorage.getItem("index"))}</h2>
          <Form
            template={template}
            handle={handle}
            valuee={valuee}
            setValuee={setValuee}
            disabled={disabled}
            Prev={Prevs}
            Next={Next}
            indexx={examIndex}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(ExamPaper);
