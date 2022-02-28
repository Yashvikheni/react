
import './App.css';
import Navbar from './presentation/Navbar'
import {BrowserRouter as Router,Routes,Route,Redirect} from 'react-router-dom'
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
import Home from './Home'
function App() {


  const Auth=localStorage.getItem('userIn')
  return (
    <div className="App">
     
        <Router>
        <Navbar/>
           <Routes>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route  path='/login'element={!Auth && <LogIn  refresh="true"/>} > </Route>
              <Route  path='/forgotPassword' element={<ForgotPassword />}></Route>
            <Route path="/teacherDashboard" element={<TeacherDashboard refresh="true" />}></Route>
            <Route path="/studentdata" element={<StudentData />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route path="/newpassword" element={<NewPassword />}></Route>
            <Route path="/studentdetails" element={<StudentDetails />}></Route>
            <Route path="/createexam" element={<CreateExam />}></Route>
            <Route path="/viewexam" element={<ViewExam />}></Route>
            <Route path="/viewexamdetails" element={<ViewExamDetails />}></Route>
            <Route path="/" element={<Home />}></Route>
       
            </Routes>
            <Routes>
            <ProtectedRoute exact path="/" element={<Home/>}/>
            
            </Routes>
            
        </Router>
    </div>  
  );
}

export default App;
