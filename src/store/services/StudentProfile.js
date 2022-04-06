import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../../utils/Constant'
const token = localStorage.getItem("userIn");
export const StudentProfile=createApi({
    reducerPath:'studentProfile',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    endpoints:(builder)=>({
        getStudentProfile:builder.query({
            query:()=>({
                url:`student/getStudentDetail`,
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            })
        })

    }),
})
export const {useGetStudentProfileQuery}= StudentProfile
