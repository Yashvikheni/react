import {useState,useEffect} from 'react'
import axios from 'axios';
import {baseUrl} from "../utils/Constant"
const useStudentDetails = ({api}) => {
    const [student, setStudent] = useState([])
    const key = student && student.length>0 ? Object.keys(student[0]) : []
useEffect(() => {
  fetch();
 },[])
 async function fetch(){ 
  const token=localStorage.getItem('userIn');
  const id=localStorage.getItem('studentid')
   await axios.get(`${baseUrl}${api}?id=${id}`,{headers:{'access-token':`${token}`}})
 .then((response)=>{
     setStudent(response.data.data)
 }).catch((error)=>{
    alert(error.message)
 })}
  return [{student,key}]
}
export default useStudentDetails