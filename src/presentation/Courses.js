import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Table from '../shared/Table'
const Courses = () => {
  return (
   <Query query={gql`
    characters {   
            results{
                id
                name
                image
                gender
            }  
       
    }
   `}>
       {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            else if (error) return <p>Error </p>
            
            else{
                <p>data</p>
            //   <Table tableData={data.characters.results} headingColumns={["id","name","gender"]}></Table>
            }
   }}
   </Query>
  )
}

export default Courses