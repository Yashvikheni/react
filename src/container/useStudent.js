import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../utils/Constant'
import {studentDetailRequest,studentDetailSuccess,studentDetailFailure} from "../store/Actions/Action"
const useStudent = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.Student);
    const history=useNavigate()
    const { loading, student, error } = state;
    const key = ["id","name","email","role"]
    const array=[];
    useEffect(() => {
        const api=`student/getStudentDetail`
        fetch({api})
    }, [dispatch]);
    async function fetch({api}){
        dispatch(studentDetailRequest());
        const token=localStorage.getItem('userIn');
        await axios.get(`${baseUrl}${api}`,{headers:{'access-token':`${token}`}})
        .then((response)=>{
            const user=response.data.data
            dispatch(studentDetailSuccess(user))         
        }).catch((error)=>{
            dispatch(studentDetailFailure(error.message))
        })
    }
    array[0]=student
      const handle=(data) => {
      history('../editstudent')
      }
  
 return[{array,key,handle,loading,error}]
}

export default useStudent