import axios from 'axios'
import {baseUrl} from '../utils/Constant'

export async function Update(final) {
    const token = localStorage.getItem("userIn");
    const id=localStorage.getItem("examId")
    await axios
      .put(`${baseUrl}dashboard/Teachers/editExam?id=${id}`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message); 
        if (response.data.statusCode === 200) {
         window.location="/teacherdashboard/viewexam"
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
 export async function submit(final) {
    console.log(final);
    const token = localStorage.getItem("userIn");
    await axios
      .post(`${baseUrl}dashboard/Teachers/Exam`, final, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.statusCode === 200) {
          window.location="/teacherdashboard/viewexam"
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error.message);
        window.location.reload();
      });
  }