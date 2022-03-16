import React, { useState, useEffect } from "react";
import Table from '../../shared/Table'
import Button from "@material-ui/core/Button";
import useStudentData from "../../container/useStudentData"

function TeacherDashboard() {
  const [check, setCheck] = useState(null);
  const [{loading,error,state,handle}]=useStudentData({check,setCheck});
  const {student}=state
  const key = student && student.length ? Object.keys(student[0]) : []
  return (
    <div style={{marginLeft:"200px"}}>
      <Button style={{ width: "15%" }} onClick={() => setCheck(false)}>Verified Student Data</Button>
      <Button  style={{ width: "15%" }}onClick={() => setCheck(true)}> All Student Data</Button>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <Table tableData={student} headingColumns={key} button="View Details" handle={handle}></Table>
        </div>
      )}
    </div>
  );
}

export default TeacherDashboard;
