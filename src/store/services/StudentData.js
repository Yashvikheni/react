import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../../utils/Constant'
const token = localStorage.getItem("userIn");
export const studentData=createApi({
    reducerPath:'studentData',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    endpoints:(builder)=>({
        getAllStudent:builder.query({
            query:()=>({
                url:'dashboard/Teachers',
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            }),
        }),
        getVerifiedStudent:builder.query({
            query:()=>({
                url:'dashboard/Teachers/StudentForExam',
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            })
        }),
        getStudentDetail:builder.query({
            query:(id)=>({
                url:`dashboard/Teachers/viewStudentDetail?id=${id}`,
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            })
        }),
     

    }),
})
export const {useGetAllStudentQuery,useGetVerifiedStudentQuery,useGetStudentDetailQuery}= studentData