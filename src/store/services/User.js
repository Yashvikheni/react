import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../../utils/Constant'
export const User=createApi({
    reducerPath:'User',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    endpoints:(builder)=>({
        signIn:builder.mutation({
            query:(data)=>({
                url:`users/Login`,
                method:'POST',
                body:data,
            })
        }),
        signUp:builder.mutation({
            query:(data)=>({ 
                url:`users/SignUp`,
                method:'POST',
                body:data,
            })
        }),
    })
})
export const {useSignInMutation,useSignUpMutation}= User