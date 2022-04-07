import React from "react";
import Table from "../../shared/Table";
import { useGetStudentDetailQuery } from "../../store/services/StudentData";
import "../../App.css";
const StudentDetails = () => {
  const id = localStorage.getItem("studentid");
  const { isLoading, isError, data } = useGetStudentDetailQuery(id);
  const key = ["name", "email", "Result"];
  return (
    <div style={{ marginLeft: "200px" }}>
      StudentDetails
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{data.message}</h2>
      ) : (
        <Table tableData={data.data} headingColumns={key}></Table>
      )}
    </div>
  );
};
export default React.memo(StudentDetails);
