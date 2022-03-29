import { Button } from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom";
import { postExam } from '../../container/useApiCall';
import Table from '../../shared/Table'
const Preview = () => {
    const history = useNavigate();
    const [data, setData] = useState([])
 
    const ind=true
    const key=['question','answer']
    useEffect(() => {
     setData(JSON.parse(localStorage.getItem('final')))
    },[])
    const handle = (data,id,index) => {
        localStorage.setItem('index',index)
        history('../exampaper')
    }
    const giveExam=() => {
      const final=JSON.parse(localStorage.getItem('final'))
      console.log(final);
      postExam({final,history})
    }
  return (
    <div style={{marginLeft:"200px" ,marginTop:"40px"}}>Preview
          <div>
          <Table tableData={data} ind={ind} headingColumns={key} button='attempt' handle={handle}></Table>
        </div>
        <Button onClick={giveExam}>GIVE EXAM</Button>
    </div>
  )
}

export default Preview