import { combineReducers } from "redux";
import SignUpReducer from './SignUpReducer'
import SignIn from './SignIn'
import Users from './Users'
const RootReducers = combineReducers({
    SignUpReducer,
    SignIn,
    Users
   
})
export default RootReducers