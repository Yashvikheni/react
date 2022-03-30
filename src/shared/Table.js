import React, { useState ,useEffect} from "react";
import Button from "@material-ui/core/Button";
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

}) => {

  const data = tableData
    ? tableData.map((row, index) => {
        let rowData = [];
        let id = [];
        let i = 0;
        for (const key in headingColumns) {
          headingColumns[i]
            ? rowData.push({
                key: headingColumns[i],
                val: row[headingColumns[i]] ?row[headingColumns[i]] :
                "  ",
              })
            : id.push(row["_id"]);
          i++;
            }
        return (
          <tr className="tablee" key={index}>

            {ind && <td>{index+1}</td>}
            {rowData.map((data, index) => (
              
              <td key={index} data-heading={data.key}>
                {Array.isArray(data.val) &&
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
                  onClick={() => handle2(rowData)}
                >
                  {button2}
                </button>
              </td>
            ) : null}
            {button ? (
              <td>
                <button className="btn-primary"                
                  onClick={() => handle(rowData, id, index+1)}
                >
                  {ind? rowData[1].val===" " ?"Attempt":"Update":button}
                </button>
              </td>
            ) : null}
          </tr>
        );
      })
    : null;
  return (
    <div>
      <table > 
        <thead>
          <tr>{ind && <th>Index</th>}
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};
export default Table;
