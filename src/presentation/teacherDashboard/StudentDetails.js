import {useSelector,useDispatch} from 'react-redux'
import React,{useEffect} from 'react'
import {fetchUsers} from '../../store/Actions/Action'
import Table from '@material-ui/core/Table';
import '../../App.css'
const StudentDetails = ()=> {
  const dispatch=useDispatch();
  const state=useSelector((state) => state.SignUpReducer)
  const {loading,users,error}=state

    useEffect(() => {
    const id =localStorage.getItem('studentid')
    const api=`dashboard/Teachers/viewStudentDetail?id=${id}`
    dispatch(fetchUsers({api}))
    },[dispatch])

console.log(users)
  return (
      <div>
      <div>StudentDetails</div>

{users.map((value)=>{
    
    const {_id,name,email,Result} = value;
    return(
    <Table className="form-outer-wrapper" key={_id}>
        <thead><tr>
      <td>ID</td><td>{_id}</td></tr>
      <tr><td>Name</td><td>{name}</td></tr>
      <tr><td>Email</td><td>{email}</td></tr>
      <tr><td>Result</td> 
      <td>
        {loading?<div>Loading...</div>:error?<div>{error}</div>:
          (Array.isArray(Result))?
           (Result.map((rr)=>{return(
           <Table className="form-outer-wrapper" key={rr._id}>
               <thead>
      <tr><td>subjectId</td><td>{rr._id}</td></tr>
      <tr><td>subject</td><td>{rr.subjectName}</td></tr>
      <tr><td>score</td><td>{rr.score}</td></tr>
      <tr><td>resultStatus</td><td>{rr.resultStatus}</td></tr>
          <tr><td>Rank</td><td>{rr.rank}</td></tr>

          </thead>
               </Table>
          )})):"null"}
          
          </td></tr></thead>
     </Table>
)
})}  </div>
  )
}
export default StudentDetails