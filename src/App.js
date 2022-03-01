
import './App.css';
import Navbar from './presentation/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './presentation/SignUp'
import LogIn from './presentation/LogIn'
import ForgotPassword from './presentation/ForgotPassword'
import TeacherDashboard from './presentation/teacherDashboard/TeacherDashboard'
import ResetPassword from './presentation/teacherDashboard/ResetPassword'
import StudentData from './presentation/teacherDashboard/StudentData'
import StudentDetails from './presentation/teacherDashboard/StudentDetails'
import CreateExam from './presentation/teacherDashboard/CreateExam'
import NewPassword from './presentation/NewPassword'
import ViewExam from './presentation/teacherDashboard/ViewExam'
import ViewExamDetails from './presentation/teacherDashboard/ViewExamDetails'
import ProtectedRoute from './ProtectedRoute'
function App() {


  const Auth=localStorage.getItem('userIn')
  return (
    <div className="App">
     
        <Router>
        <Navbar/>
           <Routes>
              <Route path='/signup' element={<ProtectedRoute comp={SignUp} />}></Route>
              <Route  path='/login'element={!Auth && <ProtectedRoute comp={LogIn }/>} > </Route>
              <Route  path='/forgotPassword' element={<ProtectedRoute comp={ForgotPassword} />}></Route>
            <Route path="/teacherDashboard" element={<ProtectedRoute comp={TeacherDashboard} />}></Route>
            <Route path="/studentdata" element={<ProtectedRoute comp={StudentData} />}></Route>
            <Route path="/resetpassword" element={<ProtectedRoute comp={ResetPassword} />}></Route>
            <Route path="/newpassword" element={<NewPassword/>}></Route>
            <Route path="/studentdetails" element={<ProtectedRoute comp={StudentDetails} />}></Route>
            <Route path="/createexam" element={<ProtectedRoute comp={CreateExam} />}></Route>
            <Route path="/viewexam" element={<ProtectedRoute comp={ViewExam} />}></Route>
            <Route path="/viewexamdetails" element={<ProtectedRoute comp={ViewExamDetails} />}></Route>
         
            </Routes>
           
            
        </Router>
    </div>  
  );
}

export default App;
