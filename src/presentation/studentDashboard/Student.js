import React from "react";
import Table from "../../shared/Table";
import { useGetStudentProfileQuery } from "../../store/services/StudentProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Student = () => {
  const history = useNavigate();
  const { isLoading, data, isError, refetch } = useGetStudentProfileQuery();
  
  const key = ["_id", "name", "email", "role"];
  const array = [];
  array[0] = data && data.data;
  useEffect(() => {
    refetch();
  }, []);
  const handle = (data) => {
    history("../editstudent");
  };
  return (
    <div style={{ marginLeft: "200px", marginTop: "40px" }}>
      Student Details
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{data.message}</h2>
      ) :   (
        <Table
          tableData={array}
          headingColumns={key}
          button="Modify Data"
          handle={handle}
        ></Table>
      )}
    </div>
  );
};
export default React.memo(Student);
