import React,{useEffect,useState} from 'react'
import useExamPaper  from '../../container/useExamPaper';
import Button from "@material-ui/core/Button";
import '../../Exam.css'
const ExamPaper = () => {
  const [{data,currentQuestion,handle}]=useExamPaper();
 

  return (<div style={{marginLeft:"200px"}}>Exam Paper
  <br/><br/>
  {data && data.length>0?currentQuestion<7 &&(
      <div style={{marginLeft:"0px"}}>
    <div className='app1' style={{display:"block",marginLeft:"170px"}}>
        <div className='question-section'>   
          <span>Question {currentQuestion+1}</span>/{data.length}
        </div>
        <br/>
        <div className='question-text'>{ data[currentQuestion].question}</div>
        <br/>
    <div className='answer-section'>
        {data[currentQuestion].options.map(option =>(
            <Button key={option}  onClick={()=>handle(option,data[currentQuestion])}>{option}</Button>
        ))}
      </div> 
    
      {currentQuestion===7}   </div>
 
    </div> ):null}
    </div>
  )
}

export default ExamPaper