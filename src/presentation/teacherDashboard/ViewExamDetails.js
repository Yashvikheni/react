import React from 'react'
import Table from '../../shared/Table';
import useViewExamDetails from '../../container/useViewExamDetails'

const ViewExamDetails = () => {
  const [{data,Edit,key}]=useViewExamDetails({});

  return (
    <div style={{marginLeft:"200px"}}>View Exam Details <Table tableData={data.length>0 && data} headingColumns={key} button="Edit" handle={Edit}></Table>
   
    </div>
  )
}

export default ViewExamDetails