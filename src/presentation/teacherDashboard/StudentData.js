import React, { useState, useEffect } from "react";
import Table from '../../shared/Table'
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {baseUrl} from "../../utils/Constant"
import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure} from "../../store/Actions/Action"

function TeacherDashboard() {
  const history = useNavigate();
  const [check, setCheck] = useState(null);
  const [api, setApi] = useState('')
  const [showComp, setShowComp] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Users);
  const { loading, student, error } = state;
  console.log(state);
  useEffect(() => {
    setCheck(false);
  },[])
  useEffect(() => {
    if (check === false) {
      setApi(`dashboard/Teachers`);
      fetch()
    } else {
      setApi(`dashboard/Teachers/StudentForExam`);
      fetch()
    }
  }, [dispatch, check]);
  const handle = (data) => {
    setShowComp(true);
    data.map((user,index)=>
    user.key==='id'?localStorage.setItem("studentid",user.val):null
 )
  };
  async function fetch(){
    dispatch(fetchUsersRequest());
    const token=localStorage.getItem('userIn');
    await axios.get(`${baseUrl}${api}`,{headers:{'access-token':`${token}`}})
   .then((response)=>{
       const user=response.data.data
       dispatch(fetchUsersSuccess(user))
   }).catch((error)=>{
       dispatch(fetchUsersFailure(error.message))
   })
  }
  useEffect(() => {
    if (showComp) {
      history("/studentdetails");
    }
  }, [showComp]);
  return (
    <div>
      <Button onClick={() => setCheck(false)}>Verified Student Data</Button>
      <Button onClick={() => setCheck(true)}> All Student Data</Button>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Table tableData={state.student} headingColumns={['status','id','name','email','view']} button="View Details" handle={handle}></Table>
        </>
      )}
    </div>
  );
}

export default TeacherDashboard;
