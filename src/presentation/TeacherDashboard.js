import React from 'react'
import {fetchUsers} from '../store/Actions/Action'

import {useSelector,useDispatch} from 'react-redux'
function TeacherDashboard() {
  const state=useSelector((state) => state.SignUpReducer)
  const dispatch=useDispatch();
 const fetch=()=>{
    dispatch(fetchUsers())
  
 }
 console.log(state.users)
   return <div>
     <button onClick={fetch}>
       Student Data
     </button>
     {/* {state && state.user && state.user.data && state.user.data.map((user)=> 
      <p1>{user.status}</p1>)} */}
   </div>
    //userData.loading?(
  //     <h2>Loading...</h2>):
  //     userData.error?(
  //       <h2>{userData.error}</h2>
  //     ):(
  //       <>
  //       <h2>UserData</h2>
  //       <div>
  //         {userData && userData.data && userData.data.map((student)=>(
  //         <h2>student.name</h2>))}
  //       </div>
  //       </>
  //     )

    
  
}


export default (TeacherDashboard)