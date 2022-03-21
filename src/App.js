import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./presentation/Navbar";
import SignUp from "./presentation/SignUp";
import LogIn from "./presentation/LogIn";
import Logout from "./presentation/Logout";
import ForgotPassword from "./presentation/ForgotPassword";
import NewPassword from "./presentation/NewPassword";
import TeacherDashboard from "./presentation/teacherDashboard/TeacherDashboard";
import ResetPassword from "./presentation/teacherDashboard/ResetPassword";
import StudentData from "./presentation/teacherDashboard/StudentData";
import StudentDetails from "./presentation/teacherDashboard/StudentDetails";
import CreateExam from "./presentation/teacherDashboard/CreateExam";
import ViewExam from "./presentation/teacherDashboard/ViewExam";
import ViewExamDetails from "./presentation/teacherDashboard/ViewExamDetails";
import ProtectedRoute from "./ProtectedRoute";
import StudentDashboard from "./presentation/studentDashboard/StudentDashboard";
import AllExam from "./presentation/studentDashboard/AllExam";
import StudentDetail from "./presentation/studentDashboard/StudentDetail";
import ExamPaper from "./presentation/studentDashboard/ExamPaper";
import PagedRoute from './presentation/PagedRoute'
function App() {
  const Auth = localStorage.getItem("userIn");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute comp={Navbar} />}>
            <Route
              path="signup"
              element={<ProtectedRoute comp={SignUp} />}
            ></Route>
            <Route
              path="login"
              element={<LogIn />}
            >
              {" "}
            </Route>
            <Route
              path="forgotPassword"
              element={<ProtectedRoute comp={ForgotPassword} />}
            ></Route>

            <Route
              path="logout"
              element={<ProtectedRoute comp={Logout} />}
            />
            <Route
              path="resetpassword"
              element={<ProtectedRoute comp={ResetPassword} />}
            ></Route>
            <Route
              exact
              path="teacherdashboard"
              element={<ProtectedRoute comp={TeacherDashboard} />}
            >
              <Route
                path="studentdata"
                element={<ProtectedRoute comp={StudentData} />}
              ></Route>
              <Route
                path="studentdetails"
                element={<ProtectedRoute comp={StudentDetails} />}
              ></Route>
              <Route
                path="createexam"
                element={<ProtectedRoute comp={CreateExam} />}
              ></Route>
              <Route
                path="viewexam"
                element={<ProtectedRoute comp={ViewExam} />}
              ></Route>
              <Route
                path="viewexamdetails"
                element={<ProtectedRoute comp={ViewExamDetails} />}
              ></Route>
            </Route>
            <Route
              exact
              path="studentdashboard"
              element={<ProtectedRoute comp={StudentDashboard} />}
            >
              <Route
                path="allexam"
                element={<ProtectedRoute comp={AllExam} />}
              ></Route>
              <Route
                path="studentdetail"
                element={<ProtectedRoute comp={StudentDetail} />}
              ></Route>
              <Route
                path="exampaper"
                element={<ProtectedRoute comp={ExamPaper} />}
              ></Route>
            </Route>
          </Route>
          <Route path="/newpassword" element={<NewPassword />}></Route>
          <Route path="*" element={<PagedRoute />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
