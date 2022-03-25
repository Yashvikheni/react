import React from "react";
import {useState,useEffect} from 'react'
import { studentDetail } from '../../store/Actions/Action'
import {useSelector, useDispatch} from "react-redux";
import Table from "../../shared/Table";

import "../../App.css";
const StudentDetails = () => {
 
  const dispatch= useDispatch();
  const state= useSelector((state) => state.StudentDetail)
  const {loading,student,error}= state;
  const key = student && student.length>0 ? Object.keys(student[0]) : []
useEffect(() => {
  const api = `dashboard/Teachers/viewStudentDetail`
  dispatch(studentDetail({api}))
 },[dispatch])

  return (
    <div style={{marginLeft:"200px"}}>
      StudentDetails
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (<Table tableData={student} headingColumns={key}></Table>)}
    </div>
  );
};
export default React.memo(StudentDetails);
