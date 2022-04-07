import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { studentData } from './services/StudentData'
import { Exam } from './services/Exam'
import { StudentProfile } from './services/StudentProfile'
import { User } from './services/User'

const thunkMiddleware=require('redux-thunk').default
export const store = configureStore({
  reducer:{
    [studentData.reducerPath]:studentData.reducer,
    [Exam.reducerPath]:Exam.reducer,
    [StudentProfile.reducerPath]:StudentProfile.reducer,
    [User.reducerPath]:User.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunkMiddleware,
    studentData.middleware,Exam.middleware,StudentProfile.middleware,User.middleware)
});
setupListeners(store.dispatch)