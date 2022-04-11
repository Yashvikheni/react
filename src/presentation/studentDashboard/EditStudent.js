import React, { useEffect, useState } from "react";
import Form from "../../shared/Form";
import { useNavigate } from "react-router-dom";
import { text } from "../../container/useFields";
import { useEditStudentProfileMutation } from "../../store/services/StudentProfile";
const EditStudent = () => {
  const history = useNavigate();
  const [EditProfile, responseInfo] = useEditStudentProfileMutation();
  let template = {
    title: "Edit Profile",
    fields: [text],
    buttonName: "Update",
  };
  async function handle(values) {
    EditProfile(values);
  }
  useEffect(() => {
    if (responseInfo.data && responseInfo.data.statusCode === 200) {
      alert(responseInfo.data.message);
      history("../student");
    }
  }, [responseInfo.data]);

  return (
    <div style={{ marginLeft: "200px", marginTop: "40px" }}>
      <Form template={template} handle={handle} />
    </div>
  );
};
export default React.memo(EditStudent);
