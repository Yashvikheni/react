import React from "react";
import useEditStudent from "../../container/useEditstudent";
import Form from "../../shared/Form";

const EditStudent = () => {
  const [{ template, handle }] = useEditStudent();
  return (
    <div style={{ marginLeft: "200px" }}>
      <Form template={template} handle={handle} />
    </div>
  );
};
export default React.memo(EditStudent);
