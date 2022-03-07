import React from 'react'
import { Link,Outlet} from 'react-router-dom'
import '../../App.css'
const TeacherDashboard = () => {  
 
  return (
    <div>
       <div className="sidebar">
              <ul>              
                <li>
                  <Link to="studentdata">Student Data</Link>
                </li>
                <li>
                  <Link to="createexam">Create Exam</Link>
                </li>
                <li>
             
                  <Link to="viewexam">View Exam</Link>
                </li>
               
              </ul>
            </div><Outlet/></div>
  )

}

export default TeacherDashboard