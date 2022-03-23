import React,{ useEffect,useState} from 'react'
import useAllExam from "../../container/useAllExam"
import Table from '../../shared/Table'

const AllExam = () => {
  const [{loading,error,exam,handle,key}]=useAllExam();
  return (
    <div style={{marginLeft:"200px"}}>All Exam 
    {loading ? (
       <h2>Loading...</h2>
     ) : error ? (
       <h2>{error}</h2>):
    (<Table tableData={exam} headingColumns={key}  button="Exam Paper" handle={handle}></Table>)}
  </div>
  )
}

export default React.memo(AllExam)