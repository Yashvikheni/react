import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {baseUrl} from "../utils/Constant"
const useStudentDetails = ({api}) => {
    const [student, setStudent] = useState([])
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
  return [{student}]
}
export default useStudentDetails