
import './App.css';
import Navbar from './presentation/Navbar'
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom'
import SignUp from './presentation/SignUp'
import LogIn from './presentation/LogIn'
import ForgotPassword from './presentation/ForgotPassword'
import TeacherDashboard from './presentation/TeacherDashboard'

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
            </Routes>
        </Router>
    </div>
  );
}

export default App;
