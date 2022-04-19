import React, { useState,useEffect } from 'react'
import { Query } from 'react-apollo'
//import gql from 'graphql-tag'
import Table from '../shared/Table'
import ApolloClient from 'apollo-boost'
import { gql, useQuery,useMutation } from '@apollo/client';
 import InputField from '../shared/InputField'
import { Button } from '@material-ui/core';
const Courses = () => {
  const [data1, setData1] = useState("")
  const [idd, setId] = useState(0)


const GET_AlBUM= gql`
        {
          album(id: 5) {
            id,
            title
          }
        }
      `;

      const ALL_DATA=gql`
      {
        albums{
         data{
          id
          title
          user{
            id
            name
          }
        }
        }
      }`
const ADD_ALBUM=gql`
  mutation updateAlbum($id:ID!,$title: String!,
    $userId: ID!){
      updateAlbum(id:$id,input:{title:$title,userId:$userId}){
      id
      title
      
    }
  }
`;
const ADD=gql`
  mutation createAlbum($title: String!,
    $userId: ID!){
      createAlbum(input:{title:$title,userId:$userId}){
      id,title
    }
  }
`;
const DELETE=gql`
mutation deleteAlbum($id:ID!){
  deleteAlbum(id:$id)
  
}
`


//const { loading, error, data } = useQuery(GET_AlBUM);
const [addAlbum] = useMutation(ADD_ALBUM);
const [add] = useMutation(ADD);
const [del] = useMutation(DELETE);

const {loading,error,data}= useQuery(ALL_DATA);
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
const handleChange=(e)=>{
  const value=e.target.value
 if(e.target.name==="ID"){
  setId(e.target.value)
 }else{
  setData1(value)
 }
}

const handle=()=>{
  addAlbum( { variables: {id: idd, title: data1 ,userId:25},refetchQueries:{
    include: [ALL_DATA],
  }
  })
}
const handle1=()=>{
  console.log(data1)
  add({ variables: { title: data1 ,userId:1}})
}

  return (
      <div style={{marginTop:"100px"}}>
     <br/>
     <p>post data</p>
<InputField style={{width:"auto"}} name="title" onChange={(e)=>handleChange(e)} placeholder="enter title"></InputField>
<button onClick={handle1}>POST DATA</button>

     <p> update  data</p>
<InputField style={{width:"auto"}} name="ID" onChange={(e)=>handleChange(e)} placeholder="ID"></InputField>
<InputField style={{width:"auto"}} name="title" onChange={(e)=>handleChange(e)} placeholder="enter title"></InputField>
<button onClick={handle}>update</button>
<br/>
<br/>
<p> delete  data</p>
<InputField style={{width:"auto"}} name="ID" onChange={(e)=>handleChange(e)} placeholder="ID"></InputField>
<button onClick={()=> del({ variables: { id:idd}})}>DELETE</button>
      <p> All data</p> 
         <Table  tableData={data.albums.data}   headingColumns={["id","title"]}></Table>

      </div>
  );

}

export default Courses