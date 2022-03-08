import { useState, useEffect }  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {baseUrl} from "../utils/Constant"
import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure} from "../store/Actions/Action"
const useStudentData = ({check,setCheck}) => {
    const history = useNavigate();
    const [api, setApi] = useState('')
  const [showComp, setShowComp] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Users);
  const { loading, student, error } = state;
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
      history(`../studentdetails`);
    }
  }, [showComp]);
 
  return [{loading,error,state,handle}]
   
}

export default useStudentData