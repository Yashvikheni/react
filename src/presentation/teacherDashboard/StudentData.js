import React, { useState } from "react";
import Table from '../../shared/Table'
import Button from "@material-ui/core/Button";
import useStudentData from "../../container/useStudentData"

function TeacherDashboard() {
  const [check, setCheck] = useState(false);
  const [{state,handle}]=useStudentData({check,setCheck});
  const {loading,students,error}=state
 //const key = students&& students.length ? Object.keys(students[0]) : []
  const key=['status','name','email']
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>
      <button className="btn-primary" onClick={() => setCheck(false)}> All Student Data</button>
      <button className="btn-primary" onClick={() => setCheck(true)}> Verified Student Data</button>
      {check===false?<h3>All Student Data</h3>:<h3>Verified Student Data</h3>}
      { error && (
        <h2>{error}</h2>
      ) }     
            {loading ? (        <h2>Loading...</h2>
      )  : (
        <div>
          <Table tableData={students} headingColumns={key} button="View Details" handle={handle}></Table>
        </div>
      )}
    </div>
  );
}

export default React.memo(TeacherDashboard);
