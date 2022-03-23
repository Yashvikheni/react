import React from 'react'
import Table from '../../shared/Table';
import useViewExamDetails from '../../container/useViewExamDetails'
import {useLocation} from 'react-router-dom'
const ViewExamDetails = () => {
  const {state } = useLocation();
 const {notes}=state
  const [{data,Edit,key}]=useViewExamDetails({notes});


  return (
    <div style={{marginLeft:"200px"}}>View Exam Details <Table tableData={data.length>0 && data} headingColumns={key} button="Edit" handle={Edit}></Table>
   
    </div>
  )
}

export default React.memo(ViewExamDetails)