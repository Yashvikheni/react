import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentProfile } from "../store/Actions/Action";
const useStudent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Student);
  const history = useNavigate();
  const { loading, student, error } = state;
  const key = ["_id", "name", "email", "role"];
  const array = [];
  useEffect(() => {
    const api = `student/getStudentDetail`;
    dispatch(studentProfile({ api }));
  }, [dispatch]);
  array[0] = student;
  const handle = (data) => {
    history("../editstudent");
  };

  return [{ array, key, handle, loading, error }];
};

export default useStudent;
