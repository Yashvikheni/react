import { combineReducers } from "redux";
import SignUp from './SignUp'
import SignIn from './SignIn'
import Users from './Users'
import Exam from './Exam'
import Student from './Student'
import StudentDetail from'./StudentDetail'
import ExamDetail from './ExamDetail'
import ExamPaper from './ExamPaper'
const RootReducers = combineReducers({
    SignUp,
    SignIn,
    Users,
    StudentDetail,
    Exam,
    ExamDetail,
    ExamPaper,
    Student,

     
   
})
export default RootReducers