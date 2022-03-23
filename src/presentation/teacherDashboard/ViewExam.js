import React from "react";
import useViewExam from "../../container/useViewExam"
import Table from "../../shared/Table"

const ViewExam = () => {
  const [{loading,error,exam,del,viewDetails,key}]=useViewExam();
  return (
    <div style={{marginLeft:"200px"}}>View Exam 
     {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (<Table tableData={exam} headingColumns={key} button="Delete" button2="Exam Details" handle={del} handle2={viewDetails}></Table>)}
    </div>
  );
};

export default React.memo(ViewExam);
