import React from "react";
import useViewExam from "../../container/useViewExam"
import Table from "../../shared/Table"

const ViewExam = () => {
  const [{isLoading,isError,data,del,viewDetails,key}]=useViewExam();
  return (
    <div style={{marginLeft:"200px"}}>View Exam 
     {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{data.message}</h2>
      ) : (<Table tableData={data.data} headingColumns={key} button="Delete" button2="Exam Details" handle={del} handle2={viewDetails}></Table>)}
    </div>
  );
};

export default React.memo(ViewExam);
