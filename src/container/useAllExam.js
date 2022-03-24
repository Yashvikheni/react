import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewExam} from "../store/Actions/Action"
import {useEffect} from 'react'

const useAllExam = () => {
      
  const state = useSelector((state) => state.Exam);
  const { loading, exam, error } = state;
  const key = exam && exam.length ? Object.keys(exam[0]) : []
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
   const api = `student/studentExam`;
   dispatch(viewExam({api}))
  }, []);

 const handle=(data) =>{
  data.map((user,index)=>
     user.key==='_id'?localStorage.setItem("examId",user.val):null
     )
     history("../exampaper")
}
return [{loading,error,exam,handle,key}]
}

export default useAllExam