import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetViewExamQuery,
  useDeleteExamMutation,
} from "../store/services/Exam";

const useViewExam = () => {
  const state = useGetViewExamQuery();
  const [deletePost, responseInfo] = useDeleteExamMutation();
  const { isLoading, isError, data } = state;
  const [data1, setData1] = useState(data && data.data);
  const key = data1 ? Object.keys(data1[0]) : [];
  const history = useNavigate();
  useEffect(() => {
    if (responseInfo.data && responseInfo.data.statusCode === 200) {
      console.log("object");
      alert(`Exam deleted successfully`);
    }
  }, [responseInfo.data]);
  async function del(data, _id) {
    const confirm = window.confirm("Are you sure you want to Delete")
      ? true
      : false;
    if (confirm) {
      setData1(data1.filter((value) => value._id !== _id));
      deletePost(_id);
    }
  }
  useEffect(() => {
    if (data) {
      setData1(data.data);
    }
  }, [data]);
  async function viewDetails(data) {
    let notes;
    data.map((user, index) => {
      if (user.key === "_id") {
        localStorage.setItem("examId", user.val);
      }
      if (user.key === "subjectName") {
        localStorage.setItem("subject", user.val);
      }
      if (user.key === "notes") {
        notes = user.val;
      }
    });
    const id = localStorage.getItem("examId");
    history(`../viewexamdetails?id=${id}`, { state: { notes: notes } });
  }
  return [{ viewDetails, del, isLoading, isError, data, data1, key }];
};
export default useViewExam;
