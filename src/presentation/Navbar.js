import React from 'react'
import '../App.css'
import { Link ,useNavigate} from 'react-router-dom'

function Navbar() {
  const history=useNavigate()
  const token=localStorage.getItem('userIn')
  const back=()=>{
    localStorage.clear();
  }
  if(token){
    return (
      <div>
        
    <nav>
      
       <ul>
            <li>
              <Link to="/login" onClick={back}>LogOut</Link>
            </li>
            
          </ul>
        </nav>
    
      </div>
    )
  }
  
else{
  return (
    <div>
      
  <nav>
    
     <ul>
          <li>
            <Link to="/signup">sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
  
    </div>
  )
 
}
  
}
export default Navbar