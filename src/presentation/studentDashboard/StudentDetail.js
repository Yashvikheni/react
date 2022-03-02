import React,{useEffect} from 'react'
import Table from '../../shared/Table'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '../../store/Actions/Action'
const StudentDetail = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.SignUpReducer);
    const { loading, users, error } = state;
    const array=[];
    useEffect(() => {
        const api=`student/getStudentDetail`
      dispatch(fetchUsers({ api }))
     
    },[dispatch])
    const handle=(data) => {
console.log(data);
    }
    array.push(users)
    console.log(users);
  return (
    <div><Table tableData={array} headingColumns={['id','name','email','role',' ']} title="All Exam" button="Edit" handle={handle} >
        </Table></div>
  )
}

export default StudentDetail