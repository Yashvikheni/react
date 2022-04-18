import React, { useState } from 'react'
import { Query } from 'react-apollo'
//import gql from 'graphql-tag'
import Table from '../shared/Table'
import ApolloClient from 'apollo-boost'
import { gql, useQuery } from '@apollo/client';
 import InputField from '../shared/InputField'
import { Button } from '@material-ui/core';
const Courses = () => {
  const [data1, setData1] = useState(  {name: "",
    username: "wetwet",
    email: "Wgtewg@gmail.com",
    address: "WEgtewg",
    phone: "ewtgew",
    website: "Egfeg",
    company: "fwef"})

const GET_USER= gql`
        {
           user(id: 5) {
            id,
            name
          }
        }
      `;
      const { loading, error, data } = useQuery(GET_USER);
      if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
const array=[]
array[0]=data.user
const handleChange=(e)=>{
 const value=e.target.value
  setData1(prev=>({...prev,[e.target.name]:value}
  ))
}
const handle=()=>{
  console.log(data1);
  const ok=gql`{
    createUser(input: ${data1}){
     user
    }
  }`
  console.log(ok);
}
  return (
      <div style={{marginTop:"100px"}}>
     {array.length>0 && 
     <>
         <p>User {array[0].id} data</p>
         <Table  tableData={array} headingColumns={["id","name"]}></Table>
         </>
     }
<p>post User</p>
<InputField style={{width:"auto"}} name="name" onChange={(e)=>handleChange(e)} placeholder="enter data"></InputField>
<button onClick={handle}>add</button>
      </div>
  );

}

export default Courses