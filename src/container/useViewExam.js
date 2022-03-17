import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewExamRequest,viewExamSuccess,viewExamFailure } from "../store/Actions/Action"
import {useEffect} from 'react'
import {baseUrl} from '../utils/Constant'
import axios from "axios"

const useViewExam = () => {
const state = useSelector((state) => state.Exam);
const { loading, exam, error } = state;
const key = exam && exam.length ? Object.keys(exam[0]) : []
const dispatch = useDispatch();
const history = useNavigate();
useEffect(() => {
 const api = `dashboard/Teachers/viewExam`;
 fetch({api})
}, [dispatch]);
async function fetch({api}){
 dispatch(viewExamRequest());
 const token=localStorage.getItem('userIn');
 await axios.get(`${baseUrl}${api}`,{headers:{'access-token':`${token}`}})
.then((response)=>{
    const user=response.data.data
    dispatch(viewExamSuccess(user))
}).catch((error)=>{
    dispatch(viewExamFailure(error.message))
})
}
async function del(data){
data.map((user,index)=>
user.key==='_id'?localStorage.setItem("examId",user.val):""
)
const id=localStorage.getItem("examId")
const token = localStorage.getItem("userIn")
  await axios.delete(`${baseUrl}dashboard/Teachers/deleteExam?id=${id}`,{headers:{'access-token':`${token}`}})
  .then(response =>{
   if(response.data.statusCode ===200){
     alert('Exam deleted successfully')
     const api = `dashboard/Teachers/viewExam`;
     fetch({ api });
   }})
   .catch(error =>alert(error.message))
}
async function viewDetails(data){
 data.map((user,index)=>{
 if(user.key==='_id'){
localStorage.setItem("examId",user.val)}
if(user.key==='subjectName'){
  localStorage.setItem("subject",user.val)}
}
)
const id=localStorage.getItem("examId")
history(`../viewexamdetails?id=${id}`)
}
return [{loading,error,exam,viewDetails,del,key}]
}
export default useViewExam

