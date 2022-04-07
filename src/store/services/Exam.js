import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/Constant";
export const Exam = createApi({
  reducerPath: "Exam",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getViewExam: builder.query({
      query: () => ({
        url: "dashboard/Teachers/viewExam",
        method: "GET",
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    getViewExamDetail: builder.query({
      query: (id) => ({
        url: `dashboard/Teachers/examDetail?id=${id}`,
        method: "GET",
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    getAllExam: builder.query({
      query: () => ({
        url: `student/studentExam`,
        method: "GET",
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    getExamPaper: builder.query({
      query: (id) => ({
        url: `student/examPaper?id=${id}`,
        method: "GET",
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    deleteExam: builder.mutation({
      query: (id) => ({
        url: `dashboard/Teachers/deleteExam?id=${id}`,
        method: "DELETE",
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    giveExam: builder.mutation({
      query: (final1) => ({
        url: `student/giveExam?id=${localStorage.getItem("examId")}`,
        method: "POST",
        body: final1,
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    createExam: builder.mutation({
      query: (final) => ({
        url: `dashboard/Teachers/Exam`,
        method: "POST",
        body: final,
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
    editExam: builder.mutation({
      query: (final) => ({
        url: `dashboard/Teachers/editExam?id=${localStorage.getItem("examId")}`,
        method: "PUT",
        body: final,
        headers: {
          "access-token": `${localStorage.getItem("userIn")}`,
        },
      }),
    }),
  }),
});
export const {
  useGetViewExamQuery,
  useGetViewExamDetailQuery,
  useGetAllExamQuery,
  useGetExamPaperQuery,
  useDeleteExamMutation,
  useGiveExamMutation,
  useCreateExamMutation,
  useEditExamMutation,
} = Exam;
