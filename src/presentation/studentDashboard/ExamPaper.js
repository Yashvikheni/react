import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '../../store/Actions/Action'
import Button from "@material-ui/core/Button";
import '../../Exam.css'
const ExamPaper = () => {
    const dispatch = useDispatch();
  const state = useSelector((state) => state.SignUpReducer);
  const { loading, users, error } = state;
  const [currentQuestion, setCurrentQuestion] = useState(0)
  useEffect(() => {
      const id =localStorage.getItem('examId')
    const api=`student/examPaper?id=${id}`
  dispatch(fetchUsers({api}))
},[dispatch])
console.log(users);
const handle=(data) => {
    const newQuestion=currentQuestion+1
    setCurrentQuestion(newQuestion)
}
  return (
  users.length>0?(
      <div>
    <div className='app1'>
        <div className='question-section'>   
          <span>Question {currentQuestion+1}</span>/{users.length}
        </div>
        <div className='question-text'>{users[currentQuestion].question}</div>
    </div>
    <div className='answer-section'>
        {/* {users[currentQuestion].options.map(option =>(
            <Button key={option} onClick={()=>handle(option)}>{option}</Button>
        ))} */}
      </div> 
      {currentQuestion===7}
    </div>):null
  )
}

export default ExamPaper