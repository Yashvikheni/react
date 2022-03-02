import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/Actions/Action";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table"
import {baseUrl} from "../../utils/Constant"
import axios from 'axios';
const ViewExam = () => {
  const state = useSelector((state) => state.SignUpReducer);
  const { loading, users, error } = state;
  const dispatch = useDispatch();
  const [showComp, setShowComp] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const api = `dashboard/Teachers/viewExam`;
    dispatch(fetchUsers({ api }));
  }, [dispatch]);
  const view = (id,subjectName) => {
    setShowComp(true);
    localStorage.setItem("examId", id);
    localStorage.setItem("subjectName", subjectName);
  };
 async function del(id){
   const token = localStorage.getItem("userIn")
     await axios.delete(`${baseUrl}dashboard/Teachers/deleteExam?id=${id}`,{headers:{'access-token':`${token}`}})
     .then(response =>{
      if(response.data.statusCode ===200){
        const api = `dashboard/Teachers/viewExam`;
        dispatch(fetchUsers({ api }));
      }
      alert(response.data.message)})
      .catch(error =>alert(error.message))
  }
  useEffect(() => {
    if (showComp) {
      history("/viewexamdetails");
    }
  }, [showComp]);
  return (
    <div>
      {loading ? (
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
      )}
    </div>
  );
};

export default ViewExam;
