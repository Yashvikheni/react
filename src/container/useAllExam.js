import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewExamRequest,viewExamSuccess,viewExamFailure } from "../store/Actions/Action"
import {useEffect} from 'react'
import {baseUrl} from '../utils/Constant'
import axios from "axios"

const useAllExam = () => {
      
  const state = useSelector((state) => state.Exam);
  const { loading, exam, error } = state;
  const key = exam && exam.length ? Object.keys(exam[0]) : []
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
   const api = `student/studentExam`;
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
 const handle=(data) =>{
  data.map((user,index)=>
     user.key==='_id'?localStorage.setItem("examId",user.val):null
     )
     history("../exampaper")
}
return [{loading,error,exam,handle,key}]
}

export default useAllExam