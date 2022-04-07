import { Button } from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom";
import Table from '../../shared/Table'
import { useGiveExamMutation } from '../../store/services/Exam';
const Preview = () => {
    const history = useNavigate();
    const [data, setData] = useState([])
  const [give,response]=useGiveExamMutation()
    const key=['question','options','answer']
    useEffect(() => {
     setData(JSON.parse(localStorage.getItem('final')))
    },[])
    const handle = (data,_id,index) => {
      console.log(_id);
        localStorage.setItem('index',index)
        history(`../exampaper`)
    }
    const giveExam=() => {
      const final=JSON.parse(localStorage.getItem('final'))
      console.log(final);
     final.forEach(value=>value.question=value._id)
      const final1=final.map((value)=>value = Object.keys(value).filter(key =>
        key !== '_id' && key !== 'options').reduce((obj, key) =>
        {
            obj[key] = value[key];
            return obj;
        }, {}
    ))
      console.log(final1);  
      give(final1);
    }
    useEffect(() => {
      if (response.data && response.data.statusCode === 200) {
        alert(response.data.message);
        history("../allexam");
      }
    },[response.data])
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>Preview
          <div>
          <Table tableData={data} ind={true} headingColumns={key} button='attempt' handle={handle}></Table>
        </div>
        <Button onClick={giveExam}>GIVE EXAM</Button>
    </div>
  )
}

export default Preview