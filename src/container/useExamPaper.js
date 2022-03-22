import {useState, useEffect} from 'react'
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import {reset} from '../utils/Regex'
import {useNavigate} from 'react-router-dom'
const useExamPaper = () => {
    const history = useNavigate();
    const [data, setData] = useState({})
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [final, setFinal] = useState([])
  
    const [obj,setObj]=useState({question:"",answer:""})
    useEffect(() => {
      const api = `student/examPaper`;
      fetch({ api });
    }, []);
 
    const id=localStorage.getItem("examId")
    const token = localStorage.getItem("userIn");
    async function fetch({ api }) {
      await axios
        .get(`${baseUrl}${api}?id=${id}`, {
          headers: { "access-token": `${token}` },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => alert(error.message));
    }
    async function postExam({ api,final }) {
   
      await axios
        .post(`${baseUrl}${api}?id=${id}`,final ,{
          headers: { "access-token": `${token}` },
        })
        .then((response) => {
            if(response.data.statusCode=== 200){
                history("../allexam")
            }
          
        })
        .catch((error) => alert(error.message));

    }
  
    const handle=(option,question) => {
        obj.question=question.question;
        obj.answer=option;
        final.push(obj)
        setObj(reset(obj))
        const newQuestion=currentQuestion+1
        setCurrentQuestion(newQuestion)
        if(final.length===7){
          const api=`student/giveExam`
          postExam({api,final})
       
        }
      }
  
  return [{data,currentQuestion,handle}]
}

export default useExamPaper