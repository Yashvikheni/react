import {useSelector,useDispatch} from 'react-redux'
import React,{useState,useEffect} from 'react'
import {fetchUsers} from '../../store/Actions/Action'
import Table from '@material-ui/core/Table';
const ViewExamDetails = () => {
    const dispatch=useDispatch();
    const state=useSelector((state) => state.SignUpReducer)
    const {loading,users,error}=state
    useEffect(() => {
        const id =localStorage.getItem('examId')
        const api=`dashboard/Teachers/examDetail?id=${id}`
        dispatch(fetchUsers({api}))
        },[dispatch])
        console.log(state)
  return (
    <div>ViewExamDetails</div>
  )
}

export default ViewExamDetails