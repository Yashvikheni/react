import React,{ useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '../../store/Actions/Action'
import Table from '../../shared/Table'
import { useNavigate } from 'react-router-dom';
const AllExam = () => {
    const dispatch = useDispatch();
  const state = useSelector((state) => state.SignUpReducer);
  const { loading, users, error } = state;
  const history=useNavigate();
  useEffect(() => {
      const api=`student/studentExam`
    dispatch(fetchUsers({ api }))
  },[dispatch])
  const handle=(data) =>{
  data.map((user,index)=>
     user.key==='id'?localStorage.setItem("examId",user.val):null
     )
     history("/exampaper")
}
  return (
    <div>
    <Table tableData={users} headingColumns={['id','notes','subjectName','email','Results','Give Exam']} title="All Exam" button="Exam Paper" handle={handle}></Table>
  </div>
  )
}

export default AllExam