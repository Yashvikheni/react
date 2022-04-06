import React, { useState } from "react";
import Table from '../../shared/Table'
import useStudentData from "../../container/useStudentData"
import { useGetVerifiedStudentQuery} from '../../store/services/StudentData';


function TeacherDashboard() {
  const [check, setCheck] = useState(false);
  const [{data,handle}]=useStudentData();
  const response=useGetVerifiedStudentQuery();
  const key=['status','name','email']
  
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>
      <button className="btn-primary" onClick={() => setCheck(false)}> All Student Data</button>
      <button className="btn-primary" onClick={() => setCheck(true)}> Verified Student Data</button>
      {check===false?<h3>All Student Data</h3>:<h3>Verified Student Data</h3>}
     {check===true ? response.data && 
     <div>
     <Table tableData={response.data.data} headingColumns={key} button="View Details" handle={handle}></Table>
   </div> :data && 
        <div>
          <Table tableData={data.data} headingColumns={key} button="View Details" handle={handle}></Table>
        </div>
}
    </div>
  );
}

export default React.memo(TeacherDashboard);
