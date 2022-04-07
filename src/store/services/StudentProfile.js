import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../../utils/Constant'
export const StudentProfile=createApi({
    reducerPath:'studentProfile',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    endpoints:(builder)=>({
        getStudentProfile:builder.query({
            query:()=>( {
                url:`student/getStudentDetail`,
                method:'GET',
                headers: {
                    'access-token': `${localStorage.getItem("userIn")}`,
                },
            })
        }),
        editStudentProfile: builder.mutation({
            query: (final) => ({
              url: `student/studentProfile`,
              method: "PUT",
              body: final,
              headers: {
                "access-token": `${localStorage.getItem("userIn")}`,
              },
            }),
          }),

    }),
})
export const {useGetStudentProfileQuery,useEditStudentProfileMutation}= StudentProfile
