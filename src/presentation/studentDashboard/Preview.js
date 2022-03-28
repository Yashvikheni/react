import React from 'react'
import {useLocation,useNavigate} from "react-router-dom";
import Table from '../../shared/Table'
const Preview = () => {
    const { state } = useLocation();
    const {data}=state
    const key=['question','options']
    let data1=data.filter(key =>key)
    console.log(data1);
    const handle = (data) => {
        console.log(data);
    }
  return (
    <div>Preview
          <div>
          <Table tableData={data1} headingColumns={key} button="attempt" handle={handle}></Table>
        </div>
    </div>
  )
}

export default Preview