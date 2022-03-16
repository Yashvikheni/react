import React from "react";
import useStudentDetails from "../../container/useStudentDetails";
import Table from "../../shared/Table";

import "../../App.css";
const StudentDetails = () => {
  const api = `dashboard/Teachers/viewStudentDetail`;
  const [{ student, key }] = useStudentDetails({ api });
  return (
    <div style={{marginLeft:"200px"}}>
      StudentDetails
      <Table tableData={student} headingColumns={key}></Table>
    </div>
  );
};
export default StudentDetails;
