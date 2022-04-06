import { Button } from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom";
import { postExam } from '../../container/useApiCall';
import Table from '../../shared/Table'
const Preview = () => {
    const history = useNavigate();
    const [data, setData] = useState([])

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
      postExam({final1,history})
    }
    console.log(data);
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