import React from 'react'
import Table from '../../shared/Table';
import useViewExamDetails from '../../container/useViewExamDetails'
import {useLocation} from 'react-router-dom'
const ViewExamDetails = () => {
  const {state } = useLocation();
 const {notes}=state
  const [{loading,error,exam,Edit,key}]=useViewExamDetails({notes});


  return (
    <div style={{marginLeft:"200px"}}>View Exam Details 
     {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (<Table tableData={exam.length>0 && exam} headingColumns={key} button="Edit" handle={Edit}></Table>)}
   
    </div>
  )
}

export default React.memo(ViewExamDetails)