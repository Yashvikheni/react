import {useSelector,useDispatch} from 'react-redux'
import React,{useEffect} from 'react'
import {fetchUsers} from '../../store/Actions/Action'
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom'
import '../../App.css'
const ViewExamDetails = () => {
    const dispatch=useDispatch();
    const history=useNavigate();
    const state=useSelector((state) => state.SignUpReducer)
    const {users}=state
    const {questions}=users
    useEffect(() => {
        const id =localStorage.getItem('examId')
        const api=`dashboard/Teachers/examDetail?id=${id}`
        dispatch(fetchUsers({api}))
      },[dispatch])

    const show=(val,questions,index) => {
    history("/createexam",{state:{val:val,que:questions,inde:index}})
    }
  return (
    <div>
      {questions?questions.map((val,index) =>{
        let {question,answer,options} = val
        return(
          <div key={index} >
      <Table className="table" >
        <thead>
          <tr><td>question</td><td>{question}</td></tr>
          <tr><td>answer</td><td>{answer}</td></tr>
          <tr><td>options</td><td>{options.map((option,i)=>
          {return (
         <div key={i}><Table className="table"><thead><tr><td>{option}</td></tr></thead></Table></div>
       )
           } )}
       </td></tr></thead></Table>
       <Button onClick={() =>show(val,questions,index)}>Edit</Button>
       </div>
      )}):null}
    </div>
  )
}

export default ViewExamDetails