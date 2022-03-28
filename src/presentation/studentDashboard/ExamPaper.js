import React, { useState, useEffect } from "react";
import Form from "../../shared/Form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ViewExamPaper } from "../../store/Actions/Action";
import useCreateExam from "../../container/useCreateExam";

const ExamPaper = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const examIndex = Number(localStorage.getItem("index"));
  const state = useSelector((state) => state.ExamPaper);
  const { loading, data, error } = state;
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const api = `student/examPaper`;
    dispatch(ViewExamPaper({ api, history }));
    return () => {
      setDisabled(true);
    };
  }, [dispatch]);
  const [final, setFinal] = useState(JSON.parse(localStorage.getItem("final")));
  useEffect(() => {
    if (final.length < 7) {
      for (let i = 0; i <= 6; i++) {
        final.push({ question: " ", answer: " " });
      }
    }
  }, []);
  const [{ template, handle, valuee, setValuee, Prevs, Next }] = useCreateExam({
    final,
    examIndex,
    data,
  });
  const subject = localStorage.getItem("subject");
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>
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
          <h2>question {Number(localStorage.getItem("index"))}</h2>
          <Form
            template={template}
            handle={handle}
            valuee={valuee}
            setValuee={setValuee}
            disabled={disabled}
            Prev={Prevs}
            Next={Next}
            indexx={examIndex}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(ExamPaper);
