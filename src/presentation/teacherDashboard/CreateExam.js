import React from "react";
import Form from "../../shared/Form";
import useCreateExam from "../../container/useCreateExam"

const CreateExam = () => {
  const [{template,handle,valuee,setValuee,Prevs,Next,index}]=useCreateExam()
  return (
    <div>
      <h2>{index<=15?`Question ${index}`:"Exam Created successfully"}</h2>
      <Form
        template={template}
        handle={handle}
        valuee={valuee}
        setValuee={setValuee}
        Prev={Prevs}
        Next={Next}
        indexx={index}
      />
    </div>
  );
};

export default CreateExam;
