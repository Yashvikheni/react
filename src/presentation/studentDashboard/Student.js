import React from 'react'
import Table from '../../shared/Table'
import useStudent from '../../container/useStudent'
const Student = () => {
  const [{array,key,handle,loading,error}]=useStudent()
  return (
    <div style={{marginLeft:"200px"}}>Student Details
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
    <Table tableData={array} headingColumns={key} button="Modify Data" handle={handle} >
         </Table>)}
    </div>
  )
}
export default Student