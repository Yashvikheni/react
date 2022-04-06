import React from 'react'
import Table from '../../shared/Table';
import useViewExamDetails from '../../container/useViewExamDetails'
import {useLocation} from 'react-router-dom'
const ViewExamDetails = () => {
  const {state } = useLocation();
 const {notes}=state
  const [{isLoading,isError,questions,data,Edit,key}]=useViewExamDetails({notes});


  return (
    <div style={{marginLeft:"200px"}}>View Exam Details 
     {isLoading ? (
        <h2>isLoading...</h2>
      ) : isError ? (
        <h2>{data.message}</h2>
      ) : (<Table tableData={questions.length>0 && questions} headingColumns={key} button="Edit" handle={Edit}></Table>)}
   
    </div>
  )
}

export default React.memo(ViewExamDetails)