import {studentData}from './StudentData'
import {Exam} from './Exam'
import { combineReducers } from "redux";
const RootReducers = combineReducers({

    [studentData.reducerPath]:studentData.reducer,
    [Exam.reducerPath]:Exam.reducer
})
export default RootReducers