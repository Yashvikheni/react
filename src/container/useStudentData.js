import { useState, useEffect }  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchUsers} from "../store/Actions/Action"
const useStudentData = ({check,setCheck}) => {
    const history = useNavigate();
    const [api, setApi] = useState('')
  const [showComp, setShowComp] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Users);
  const { loading, students, error } = state;
  useEffect(() => {
    setCheck(false);
  },[])
  useEffect(() => {
    if (check === false) {
      setApi(`dashboard/Teachers`);
      dispatch(fetchUsers({api}))
    } else {
      setApi(`dashboard/Teachers/StudentForExam`);
      dispatch(fetchUsers({api}))
    }
  }, [dispatch,check]);
  const handle = (data) => {
    setShowComp(true);
    data.map((user,index)=>
    user.key==='_id'?localStorage.setItem("studentid",user.val):null
 )
  };

  useEffect(() => {
    if (showComp) {
      const id=localStorage.getItem("studentid")
      history(`../studentdetails?id=${id}`);
    }
  }, [showComp]);
 
  return [{loading,error,state,handle}]
   
}

export default useStudentData