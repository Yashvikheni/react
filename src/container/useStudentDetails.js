import {useState,useEffect} from 'react'
import { studentDetail } from '../store/Actions/Action'
import {useSelector, useDispatch} from "react-redux";
const useStudentDetails = ({api}) => {
  const dispatch= useDispatch();
  const state= useSelector((state) => state.studentDetail)
  const {loading,student,error}= state;
  const key = student && student.length>0 ? Object.keys(student[0]) : []
useEffect(() => {
  dispatch(studentDetail({api}))
 },[])

  return [{loading,error,student,key}]
}
export default useStudentDetails