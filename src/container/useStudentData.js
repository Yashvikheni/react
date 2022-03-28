import { useEffect }  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchUsers} from "../store/Actions/Action"
const useStudentData = ({check,setCheck}) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.Users);
    useEffect(() => {
      if (check === false) {
        const api=`dashboard/Teachers`
        dispatch(fetchUsers({api}))
      } else {
        const api=`dashboard/Teachers/StudentForExam`
        dispatch(fetchUsers({api}))
      }
    }, [dispatch,check]);
    
  const handle = (data,_id) => {
    console.log(_id)
    data.map((user,index)=>
    localStorage.setItem("studentid",_id))
    const id=localStorage.getItem("studentid")
      history(`../studentdetails?id=${id}`);
 
  };

 
 
  return [{state,handle}]
   
}

export default useStudentData