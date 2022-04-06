
import { useNavigate } from "react-router-dom";
import {
  viewExam
} from "../store/Actions/Action";
import { useEffect } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { useGetViewExamQuery,useDeleteExamMutation } from "../store/services/Exam";

const useViewExam = () => {
  //const state = useSelector((state) => state.Exam);
  const state=useGetViewExamQuery();
  const [deletePost,responseInfo]=useDeleteExamMutation()
 const {isLoading,isError,data} = state;
 //let { loading, exam, error } = state;
  const key = data && data.data.length ? Object.keys(data.data[0]) : [];

  const history = useNavigate();
  // useEffect(() => {
  //   const api = `dashboard/Teachers/viewExam`;
  //   dispatch(viewExam({ api }))
  // }, [dispatch]);
useEffect(() => {
  if(responseInfo.data && responseInfo.data.statusCode === 200){
    console.log("object");
    alert(`Exam deleted successfully`)
  }
},[responseInfo.data])
  async function del(data,_id) {
   deletePost(_id)
  
    // data.map((user, index) =>
    //   user.key === "_id" ? localStorage.setItem("examId", user.val) : ""
    // );
    // const confirm=window.confirm("Are you sure you want to Delete")
    // ? true
    // : false;
    // if(confirm){
    // const id = localStorage.getItem("examId");
    // const token = localStorage.getItem("userIn");
    // await axios
    //   .delete(`${baseUrl}dashboard/Teachers/deleteExam?id=${id}`, {
    //     headers: { "access-token": `${token}` },
    //   })
    //   .then((response) => {
    //     if (response.data.statusCode === 200) {
    //       alert("Exam deleted successfully");
    //       const api = `dashboard/Teachers/viewExam`;
    //       dispatch(viewExam({ api }))
    //     }
    //   })
    //   .catch((error) => alert(error.message));}
  }
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
  return [{  viewDetails, del,isLoading,isError,data ,key }];
};
export default useViewExam;
