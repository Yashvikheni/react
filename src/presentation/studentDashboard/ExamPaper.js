import React,{useEffect,useState} from 'react'
import useExamPaper  from '../../container/useExamPaper';
import Form from '../../shared/Form'
import '../../Exam.css'
const ExamPaper = () => {
  const [{handle,template,index,valuee,setValuee,disabled}]=useExamPaper();

  return (<div style={{marginLeft:"200px"}}>Exam Paper
  <br/><br/>
  <h2>question {index}</h2>
  <Form template={template} handle={handle} valuee={valuee} setValuee={setValuee} disabled={disabled}/>
    </div>
  )
}

export default React.memo(ExamPaper)