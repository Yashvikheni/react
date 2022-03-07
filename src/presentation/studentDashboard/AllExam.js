import React,{ useEffect,useState} from 'react'


import Table from '../../shared/Table'
import { useNavigate } from 'react-router-dom';
const AllExam = () => {
   
  const history=useNavigate();

  const handle=(data) =>{
  data.map((user,index)=>
     user.key==='id'?localStorage.setItem("examId",user.val):null
     )
     history("exampaper")
}
  return (
    <div>
    {/* <Table tableData={users} headingColumns={['id','notes','subjectName','email','Results','Give Exam']} title="All Exam" button="Exam Paper" handle={handle}></Table> */}
  </div>
  )
}

export default AllExam