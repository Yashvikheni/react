import React,{useState,useEffect} from 'react'
import {fetchUsers} from '../store/Actions/Action'

import Table from '@material-ui/core/Table';
import {useSelector,useDispatch} from 'react-redux'
function TeacherDashboard() {
  const [val, setVal] = useState([])
  const dispatch=useDispatch();
  const state=useSelector((state) => state.SignUpReducer)
  const {loading,users,error}=state
 const fetch=()=>{
    dispatch(fetchUsers())

 }
useEffect(() => {
  if( users==="undefined"||users.length>0){
    setVal(
      users.map((value,index)=>{
        return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{value.status}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
          </tr>
    )
      }
    ))
  }
}, [users])

   return <div>
     <button onClick={fetch}>
       Student Data
     </button>
     {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:
     <Table>
       <thead>
         <tr>
           <td>index</td>
           <td>status</td>
           <td>name</td>
           <td>email</td>
         </tr>
       </thead>
       <tbody>
         {val}
       </tbody>
       </Table>}
     
   </div>
    
  
}


export default (TeacherDashboard)