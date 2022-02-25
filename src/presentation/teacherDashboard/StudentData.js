import React,{useState,useEffect} from 'react'
import {fetchUsers} from '../../store/Actions/Action'
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
function TeacherDashboard({ap}) {
  const history=useNavigate()
  const [check, setCheck] = useState(false)
  const [showComp, setShowComp] = useState(false)
  const [val, setVal] = useState([])
  const dispatch=useDispatch();
  const state=useSelector((state) => state.SignUpReducer)
  const {loading,users,error}=state
useEffect(() => {
  if(check===false){
    const api=`dashboard/Teachers`
   dispatch(fetchUsers({api}))
  }
  else{
    const api=`dashboard/Teachers/StudentForExam`
    dispatch(fetchUsers({api}))
  }
},[dispatch,check])
const View=(id) => {
  setShowComp(true)
  localStorage.setItem('student',id)
}
useEffect(() =>{
 if(showComp){
  history("/studentdetails")
 }

},[showComp]
)
useEffect(() => {
  if(users.length>0){
    setVal(
      users.map((value,index)=>{
        return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{value.status}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td><Button onClick={(e)=>View(value._id)}>View Details</Button></td>
          </tr>
    )
      }
    ))
  }
}, [users])

   return <div>
    <Button onClick={()=>setCheck(false)}>All Student Data</Button>
    <Button onClick={()=>setCheck(true)}> Verified Student Data</Button>
     {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:
     <>
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
       </Table>
      </>}
     
     
   </div>
    
  
}


export default (TeacherDashboard)