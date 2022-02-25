
import './App.css';
import Navbar from './presentation/Navbar'
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom'
import SignUp from './presentation/SignUp'
import LogIn from './presentation/LogIn'
import ForgotPassword from './presentation/ForgotPassword'
import TeacherDashboard from './presentation/teacherDashboard/TeacherDashboard'
import ResetPassword from './presentation/teacherDashboard/ResetPassword'
import StudentData from './presentation/teacherDashboard/StudentData'
import StudentDetails from './presentation/teacherDashboard/StudentDetails'

import NewPassword from './presentation/NewPassword'
function App() {
  return (
    <div className="App">
     
        <Router>
        <Navbar/>
           <Routes>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route  path='/login' element={<LogIn />}> </Route>
              <Route  path='/forgotPassword' element={<ForgotPassword />}></Route>
            <Route path="/teacherDashboard" element={<TeacherDashboard />}></Route>
            <Route path="/studentdata" element={<StudentData />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route path="/newpassword" element={<NewPassword />}></Route>
            <Route path="/studentdetails" element={<StudentDetails />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
