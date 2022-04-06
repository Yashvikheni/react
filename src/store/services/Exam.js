import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../../utils/Constant'
const token = localStorage.getItem("userIn");
export const Exam=createApi({
    reducerPath:'Exam',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    endpoints:(builder)=>({
        getViewExam:builder.query({
            query:()=>({
                url:'dashboard/Teachers/viewExam',
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            })
        }),
        getViewExamDetail:builder.query({
            query:(id)=>({
                url:`dashboard/Teachers/examDetail?id=${id}`,
                method:'GET',
                headers: {
                    'access-token': `${token}`,
                },
            })
        }),
        getAllExam:builder.query({
            query:()=>({
                url:`student/studentExam`,
                method:'GET',
                headers: {
                    'access-token': `${localStorage.getItem("userIn")}`,
                },

            })
        }),
        getExamPaper:builder.query({
            query:(id)=>({
                url:`student/examPaper?id=${id}`,
                method:'GET',
                headers: {
                    'access-token': `${localStorage.getItem("userIn")}`,
                },
            })
        })
        
    })
})
export const {useGetViewExamQuery,useGetViewExamDetailQuery,useGetAllExamQuery,useGetExamPaperQuery}= Exam