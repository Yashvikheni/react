import {useSelector,useDispatch} from 'react-redux'
import React,{useEffect,useState} from 'react'
import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure} from '../../store/Actions/Action'
import Table from '@material-ui/core/Table';
import axios from 'axios';
import {baseUrl} from "../../utils/Constant"
import '../../App.css'
const StudentDetails = ()=> {
const [student, setStudent] = useState([])


useEffect(() => {
  fetch();
 },[])
 async function fetch(){ 
  const token=localStorage.getItem('userIn');
  const id=localStorage.getItem('studentid')
   await axios.get(`${baseUrl}dashboard/Teachers/viewStudentDetail?id=${id}`,{headers:{'access-token':`${token}`}})
 .then((response)=>{
     setStudent(response.data.data)
 
    
 }).catch((error)=>{
    alert(error.message)
 })}
  return (
      <div>
      <div>StudentDetails</div>

{student?student.map((value)=>{
    const {_id,name,email,Result} = value;  
    return(
    <Table key={_id}>
        <thead><tr>
      <td>ID</td><td>{_id}</td></tr>
      <tr><td>Name</td><td>{name}</td></tr>
      <tr><td>Email</td><td>{email}</td></tr>
      <tr><td>Result</td> 
      <td>
       {
          (Array.isArray(Result)?
           (Result.map((rr)=>{return(
           <Table className="form-outer-wrapper" key={rr._id}>
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