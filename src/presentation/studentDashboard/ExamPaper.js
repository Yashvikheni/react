import React,{useEffect,useState} from 'react'

import '../../Exam.css'
const ExamPaper = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
 

const handle=(data) => {
    const newQuestion=currentQuestion+1
    setCurrentQuestion(newQuestion)
}
  return (<div>Exam Paper</div>
  // users.length>0?(
  //     <div>
  //   <div className='app1'>
  //       <div className='question-section'>   
  //         <span>Question {currentQuestion+1}</span>/{users.length}
  //       </div>
  //       <div className='question-text'>{users[currentQuestion].question}</div>
  //   </div>
  //   <div className='answer-section'>
  //       {/* {users[currentQuestion].options.map(option =>(
  //           <Button key={option} onClick={()=>handle(option)}>{option}</Button>
  //       ))} */}
  //     </div> 
  //     {currentQuestion===7}
  //   </div>):null
  )
}

export default ExamPaper