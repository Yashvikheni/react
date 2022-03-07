
import React from 'react'
import useStudentDetails from '../../container/useStudentDetails'
import Table from '@material-ui/core/Table';

import '../../App.css'
const StudentDetails = ()=> {
    const api = `dashboard/Teachers/viewStudentDetail`;
  const [{student}]=useStudentDetails({api})
  return (
      <div>
      <div>StudentDetails</div>

{student?student.map((value)=>{
    const {_id,name,email,Result} = value;  
    return(
    <Table className="tablee" key={_id}>
        <thead><tr>
      <td>ID</td><td>{_id}</td></tr>
      <tr><td>Name</td><td>{name}</td></tr>
      <tr><td>Email</td><td>{email}</td></tr>
      <tr><td>Result</td> 
      <td>
       {
          (Array.isArray(Result)?
           (Result.map((rr)=>{return(
           <Table key={rr._id}>
               <thead>
      <tr><td>subjectId</td><td>{rr._id}</td></tr>
      <tr><td>subject</td><td>{rr.subjectName}</td></tr>
      <tr><td>score</td><td>{rr.score}</td></tr>
      <tr><td>resultStatus</td><td>{rr.resultStatus}</td></tr>
          <tr><td>Rank</td><td>{rr.rank}</td></tr>
          </thead>
               </Table>
           )})):null)}
          
          </td></tr></thead>
     </Table>
     )}):null}
         
 </div>
  )
}
export default StudentDetails