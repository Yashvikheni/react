import axios from 'axios'
import {baseUrl} from '../utils/Constant'

export async function Update(final,history) {
    const token = localStorage.getItem("userIn");
    const id=localStorage.getItem("examId")
    await axios
      .put(`${baseUrl}dashboard/Teachers/editExam?id=${id}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message); 
        if (response.data.statusCode === 200) {
         history("../viewexam")
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

 export async function submit(final,history) {
    console.log(final);
    const token = localStorage.getItem("userIn");
    await axios
      .post(`${baseUrl}dashboard/Teachers/Exam`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.statusCode === 200) {
          history("../viewexam")
        } else {
           history("../createexam")
        }
      })
      .catch((error) => {
        alert(error.message);
        history("../createexam")
      });
  }
 
  export async function postExam({ api, final ,history}) {
    const token = localStorage.getItem("userIn");
    const ids = localStorage.getItem("examId");
    await axios
      .post(`${baseUrl}student/giveExam?id=${ids}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.statusCode === 200) {
          history("../allexam");
          alert(response.data.message);
        }
      })
      .catch((error) => alert(error.message));
  }
