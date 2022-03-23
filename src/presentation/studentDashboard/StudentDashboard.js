import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const StudentDashboard = () => {
  return (
    <div>
         <div style={{marginLeft:"200px"}}>Student Dashboard</div>
       <div className="sidebar">
              <div>
                  <Link to="allexam">All Exam</Link>
                  </div>
                  <div>
                  <Link to="student">Student Details</Link>
                  </div>     
            </div>
            <Outlet/>
            
            </div>
  )
}

export default React.memo(StudentDashboard)