import React, { useState } from 'react';
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import EditExam from "./presentation/teacherDashboard/EditExam";
import ProtectedRoute from "./presentation/ProtectedRoute";
import StudentDashboard from "./presentation/studentDashboard/StudentDashboard";
import AllExam from "./presentation/studentDashboard/AllExam";
import Student from "./presentation/studentDashboard/Student";
import EditStudent from "./presentation/studentDashboard/EditStudent";
import ExamPaper from "./presentation/studentDashboard/ExamPaper";
import PagedRoute from "./presentation/PagedRoute";
import Home from "./presentation/Home"
import { useEffect } from 'react';

function App() {
  let [auth,setAuth]=useState(localStorage.getItem("isAuthenticated"));
  const location = useLocation();
  useEffect(() => {
    setAuth(localStorage.getItem("isAuthenticated"))
  },[location])
  return (
    <div className="App"> 
      <Navbar auth={auth}/>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/logout" element={<ProtectedRoute comp={Logout} />} />
            <Route
              path="/resetpassword"
              element={<ProtectedRoute comp={ResetPassword} />}
            />
            <Route
              exact
              path="/teacherdashboard"
              element={<ProtectedRoute comp={TeacherDashboard} />}
            >
              <Route
                path="studentdata"
                element={<ProtectedRoute comp={StudentData} />}
              />
              <Route
                path="studentdetails"
                element={<ProtectedRoute comp={StudentDetails} />}
              />
              <Route
                path="createexam"
                element={<ProtectedRoute comp={CreateExam} />}
              />
              <Route
                path="viewexam"
                element={<ProtectedRoute comp={ViewExam} />}
              />
              <Route
                path="viewexamdetails"
                element={<ProtectedRoute comp={ViewExamDetails} />}
              />
              <Route
                path="editexam"
                element={<ProtectedRoute comp={EditExam} />}
              />
            </Route>
            <Route
              exact
              path="/studentdashboard"
              element={<ProtectedRoute comp={StudentDashboard} />}
            >
              <Route
                path="allexam"
                element={<ProtectedRoute comp={AllExam} />}
              />

              <Route
                path="exampaper"
                element={<ProtectedRoute comp={ExamPaper} />}
              />
              <Route
                path="student"
                element={<ProtectedRoute comp={Student} />}
              ></Route>
              <Route
                path="editstudent"
                element={<ProtectedRoute comp={EditStudent} />}
              />
            </Route>
      
          <Route path="/newpassword" element={<NewPassword />}></Route>
          <Route path="*" element={<PagedRoute />}></Route>
        </Routes>
     
    </div>
  );
}

export default App;
