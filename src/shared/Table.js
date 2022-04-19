import React from "react";
import "../App.css";

const Table = ({
  tableData,
  headingColumns,
  button,
  handle,
  button2,
  handle2,
  headingColumns2,
  ind,
  fill

}) => {


  const data = tableData.length>0
    ? tableData.map((row, index) => {
     
        let rowData = [];
        let id = [];
        let i = 0;
        for (const key in headingColumns) {
          headingColumns[i]
            && rowData.push({
                key: headingColumns[i],
                val: row[headingColumns[i]]?row[headingColumns[i]]===" "? null:row[headingColumns[i]] :
                null,
              })
             
          id.push(row["_id"]);
          i++;
            }
        return (
          <tr className="tablee" key={index}>

            {ind && <td>{index+1}</td>}
            {rowData.map((data, index) => (
              
              <td key={index} data-heading={data.key}>
                {
                Array.isArray(data.val) &&
                data.val.every((val) => typeof val === "object") ? (
                  <div key={index}>
                    <Table
                      tableData={data.val}
                      headingColumns={
                        data.val.length
                          ? headingColumns2
                            ? headingColumns2
                            : Object.keys(data.val[0]).filter(
                                (key) => key !== "_id" && key !== "studentId"
                              )
                          : []
                      }
                    ></Table>
                  </div>
                ) : Array.isArray(data.val) ? (
                  data.val.map((ok, index) => <div key={index}>{ok}</div>)
                ) : (
                  data.val ? data.val: null
                )}
              </td>
            ))}
            {button2 ? (
              <td>
                <button className="btn-primary"
                  onClick={() => handle2(rowData)}>
                  {button2}
                </button>
              </td>
            ) : null}
            {button ? (
              <td>
                <button className="btn-primary"                
                  onClick={() => handle(rowData,id[0] ,index+1)}
                >
                  {ind? rowData[2].val===null?"Attempt":"Update":button}
                </button>
              </td>
            ) : null}
          </tr>
        );
      })
    : null;
  return (
    <div>
      <table>{tableData.length>0 && 
        <thead>
          <tr>{ind && <th>Index</th>}
            {headingColumns.map((col,index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>}
        <tbody>{data}</tbody>
      </table>
      {fill && tableData.length===0 && <h2>Data not Found</h2>}
    </div>
  );
};
export default Table;
