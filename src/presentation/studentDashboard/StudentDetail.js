import React,{useEffect} from 'react'
import Table from '../../shared/Table'


const StudentDetail = () => {
;
    const array=[];
 
    const handle=(data) => {
console.log(data);
    }
 
  return (
     <div>Std
    {/* <Table tableData={array} headingColumns={['id','name','email','role',' ']} title="All Exam" button="Edit" handle={handle} >
         </Table> */}
    </div>
  )
}

export default StudentDetail