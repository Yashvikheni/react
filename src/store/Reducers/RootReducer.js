import { combineReducers } from "redux";
import SignUp from './SignUp'
import SignIn from './SignIn'
import Users from './Users'
import Exam from './Exam'
import Student from './Student'
const RootReducers = combineReducers({
    SignUp,
    SignIn,
    Users,
    Exam,
    Student
   
})
export default RootReducers