
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


export const viewExamRequest=()=>{
    return {
        type:'VIEW_EXAM'    }
}
export const viewExamSuccess=(exam)=>{
    return {
        type:'VIEW_EXAM_SUCCESS',
      payload:exam    }
}
export const viewExamFailure=(error)=>{
    return {
        type:'VIEW_EXAM_FAILURE' ,
        payload:error   }
}

export const studentDetailRequest=()=>{
    return {
        type:'STUDENT_DETAIL'    }
}
export const studentDetailSuccess=(student)=>{
    return {
        type:'STUDENT_DETAIL_SUCCESS',
      payload:student    }
}
export const studentDetailFailure=(error)=>{
    return {
        type:'STUDENT_DETAIL_FAILURE' ,
        payload:error   }
}
