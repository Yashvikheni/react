import axios from 'axios';
import {baseUrl} from '../../utils/Constant'
export const signUpRequest=()=>{
    return {
        type:'SIGN_UP'    }
}
export const signUpSuccess=(users)=>{
    return {
        type:'SIGN_UP_SUCCESS',
    payload:users    }
}
export const signUpFailure=(error)=>{
    return {
        type:'SIGN_UP_FAILURE' ,
        payload:error   }
}
export const set=(users)=>{
    return {
        type:'FILL',
    payload:users    }
}
export const empty=(error)=>{
    return {
        type:'EMPTY' ,
        payload:error   }
}
export const fetchUsers=()=>
async(dispatch)=>{
        dispatch(signUpRequest)
        const token=localStorage.getItem('userIn');
       await axios.get(`${baseUrl}dashboard/Teachers`,{headers:{'access-token':`${token}`}})
       .then((response)=>{
           const user=response.data.data
           
           dispatch(signUpSuccess(user))
       }).catch((error)=>{
           const errorMsg=error.message
           dispatch(signUpFailure(errorMsg))
       })
    
}