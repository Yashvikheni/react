
import React,{useEffect} from 'react'

import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom'
import '../../App.css'
const ViewExamDetails = () => {

    const history=useNavigate();
  
    const show=(val,questions,index) => {
    history("createexam",{state:{val:val,que:questions,inde:index}})
    }
  return (
    <div>View Exam Details
      {/* {questions?questions.map((val,index) =>{
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
      )}):null} */}
    </div>
  )
}

export default ViewExamDetails