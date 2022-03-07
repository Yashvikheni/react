import { combineReducers } from "redux";
import SignUp from './SignUp'
import SignIn from './SignIn'
import Users from './Users'
import Exam from './Exam'
const RootReducers = combineReducers({
    SignUp,
    SignIn,
    Users,
    Exam
   
})
export default RootReducers