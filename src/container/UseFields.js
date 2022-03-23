export const Email= {
    title: "Email",
    type: "email",
    name: "email",
    placeholder: "email",
  }
  export const Password={
    title: "Password",
    type: "password",
    name: "password",
    autoComplete:'on',
    placeholder: "password",
  }
  export const text={
    title: "Name",
    type: "text",
    name: "name",
    placeholder: "name",
  }
  export const Exam={
  question:{
      title: "question",
      type: "text",
      name: "question",
      placeholder: "question",
    },
    option:{
      title: "Option",
      type: "radio",
      name: "answer",
      value: [
        {
          type: "text",
          name: "ans1",
          placeholder: "Option1",
        },
        {
          type: "text",
          name: "ans2",
          placeholder: "Option2",
        },
        {
          type: "text",
          name: "ans3",
          placeholder: "Option3",
        },
        {
          type: "text",
          name: "ans4",
          placeholder: "Option4",
        },
      ],
    },
    answer:{
      title: "answer",
      type: "text",
      name: "answer",
      placeholder: "answer",
    },
  }