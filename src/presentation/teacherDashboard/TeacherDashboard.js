import React from 'react'
import { Link,Outlet} from 'react-router-dom'
import '../../App.css'
const TeacherDashboard = () => {  
 
  return (
    <div>
         <div style={{marginLeft:"200px"}}>Teacher Dashboard</div>
       <div className="sidebar">
              <div>
                  <Link to="studentdata">Student Data</Link>
                  </div>
                  <div>
                  <Link to="createexam">Create Exam</Link>
                  </div>
                
                  <div>
                  <Link to="viewexam">View Exam</Link>
                  </div>     
            </div>
            <Outlet/>
            
            </div>
         
  )

}

export default React.memo(TeacherDashboard)