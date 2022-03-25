import React from "react";
import useExamPaper from "../../container/useExamPaper";
import Form from "../../shared/Form";
import "../../Exam.css";
const ExamPaper = () => {
  const [
    { loading, error, inde, handle, template, valuee, setValuee, disabled },
  ] = useExamPaper();
  const subject = localStorage.getItem("subject");
  return (
    <div style={{ marginLeft: "200px" }}>
      Exam Paper
      <br />
      <br />
      <h2>{subject && subject}</h2>
      {valuee && loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2>question {inde}</h2>
          <Form
            template={template}
            handle={handle}
            valuee={valuee}
            setValuee={setValuee}
            disabled={disabled}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(ExamPaper);
