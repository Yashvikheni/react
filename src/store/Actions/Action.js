import axios from 'axios';
import {baseUrl} from '../../utils/Constant'
export const signUpRequest=()=>{
    return {
        type:'SIGN_UP'    }
}
export const signUpSuccess=(user)=>{
    return {
        type:'SIGN_UP_SUCCESS',
    payload:user    }
}
export const signUpFailure=(error)=>{
    return {
        type:'SIGN_UP_FAILURE' ,
        payload:error   }
}
export const signInRequest=()=>{
    return {
        type:'SIGN_IN'    }
}
export const signInSuccess=(user)=>{
    return {
        type:'SIGN_IN_SUCCESS',
    payload:user    }
}
export const signInFailure=(error)=>{
    return {
        type:'SIGN_IN_FAILURE' ,
        payload:error   }
}
export const fetchUsersRequest=()=>{
    return {
        type:'FETCH_USERS'    }
}
export const fetchUsersSuccess=(student)=>{
    return {
        type:'FETCH_USERS_SUCCESS',
      payload:student    }
}
export const fetchUsersFailure=(error)=>{
    return {
        type:'FETCH_USERS_FAILURE' ,
        payload:error   }
}



export const fetchUsers=({api})=>
async(dispatch)=>{
        dispatch(signUpRequest())
        const token=localStorage.getItem('userIn');
       await axios.get(`${baseUrl}${api}`,{headers:{'access-token':`${token}`}})
       .then((response)=>{
           const user=response.data.data
           dispatch(signUpSuccess(user))
       }).catch((error)=>{
           dispatch(signUpFailure(error.message))
       })
    
}
// export const postData=({api},{values})=>

//     async(dispatch)=>{
//      console.log({api});
//         dispatch(signUpRequest)
//         await axios
//         .post(`${baseUrl}${api}`, values)
//         .then((response) => {
//           dispatch(signUpSuccess(response.data))
//         })
//         .catch(function (error) {
//             dispatch(signUpFailure(error.message))
//       }); 
//     }
