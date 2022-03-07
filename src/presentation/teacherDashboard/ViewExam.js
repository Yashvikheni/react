import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { viewExamRequest,viewExamSuccess,viewExamFailure } from "../../store/Actions/Action";
import Button from "@material-ui/core/Button";
import {baseUrl} from "../../utils/Constant"
import Table from "../../shared/Table"
import axios from 'axios';
const ViewExam = () => {
   const state = useSelector((state) => state.Exam);
   const { loading, exam, error } = state;
   const key = exam && exam.length ? Object.keys(exam[0]) : []
   const dispatch = useDispatch();
  // const [showComp, setShowComp] = useState(false);
  // const history = useNavigate();
 useEffect(() => {
    const api = `dashboard/Teachers/viewExam`;
    fetch({api})
 }, [dispatch]);
  async function fetch({api}){
    dispatch(viewExamRequest());
    const token=localStorage.getItem('userIn');
    await axios.get(`${baseUrl}${api}`,{headers:{'access-token':`${token}`}})
   .then((response)=>{
       const user=response.data.data
       dispatch(viewExamSuccess(user))
   }).catch((error)=>{
       dispatch(viewExamFailure(error.message))
   })
  }
  console.log(exam);
  // const view = (id,subjectName) => {
  //   setShowComp(true);
  //   localStorage.setItem("examId", id);
  //   localStorage.setItem("subjectName", subjectName);
  // };
 async function del(data){
   console.log(data);
//    const token = localStorage.getItem("userIn")
//      await axios.delete(`${baseUrl}dashboard/Teachers/deleteExam?id=${id}`,{headers:{'access-token':`${token}`}})
//      .then(response =>{
//       if(response.data.statusCode ===200){
//         const api = `dashboard/Teachers/viewExam`;
//         dispatch(fetchUsers({ api }));
//       }
//       alert(response.data.message)})
//       .catch(error =>alert(error.message))
  }
  // useEffect(() => {
  //   if (showComp) {
  //     history("viewexamdetails");
  //   }
  // }, [showComp]);
  return (
    <div>Viewxam <Table tableData={exam} headingColumns={key} button="Delete" handle={del}></Table>
      {/* {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : Array.isArray(users) ? (
        users?.map((rr) => {
          return (
            <div key={rr._id}>
              <Table className="form-outer-wrapper">
                <thead>
                  <tr>
                    <td>subjectId</td>
                    <td>{rr._id}</td>
                  </tr>
                  <tr>
                    <td>subjectName</td>
                    <td>{rr.subjectName}</td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td>{rr.email}</td>
                  </tr>
                </thead>
              </Table>
              <Button onClick={(e) => view(rr._id,rr.subjectName)}>View Exam Detail</Button>
              <Button onClick={(e) => del(rr._id)}>Delete Exam</Button>
            </div>
          );
        })
      ) : (
        {error}
      )} */}
    </div>
  );
};

export default ViewExam;
