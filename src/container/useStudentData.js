import { useNavigate } from "react-router-dom";

import { useGetAllStudentQuery } from "../store/services/StudentData";
const useStudentData = () => {
  const history = useNavigate();
  const response = useGetAllStudentQuery();
  let { data } = response;

  const handle = (data, _id) => {
   localStorage.setItem("studentid", _id)
    const id = localStorage.getItem("studentid");
    history(`../studentdetails?id=${id}`);
  };
  return [{ data, handle }];
};

export default useStudentData;
