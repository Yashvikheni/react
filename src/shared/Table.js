import React from "react";
import Button from "@material-ui/core/Button";
import "../App.css";
const Table = ({
  tableData,
  headingColumns,
  button,
  handle,
  button2,
  handle2,
}) => {
  const data = tableData
    ? tableData.map((row, index) => {
        let rowData = [];
        let i = 0;
        for (const key in row) {
          rowData.push({
            key: headingColumns[i],
            val: row[key],
          });
          i++;
        }
        return (
          <tr className="tablee" key={index}>
            {rowData.map((data, index) => (
              <td key={index} data-heading={data.key}>
                {Array.isArray(data.val) &&
                data.val.every((val) => typeof val === "object") ? (
                  <div key={index}>
                    <Table
                      tableData={data.val}
                      headingColumns={
                        data.val.length ? Object.keys(data.val[0]) : []
                      }
                    ></Table>
                  </div>
                ) : Array.isArray(data.val) ? (
                  data.val.map((ok, index) => `${ok} `)
                ) : (
                  data.val
                )}
              </td>
            ))}
            {button2 ? (
              <td>
                <Button
                  style={{ backgroundColor: "#E8E7E8" }}
                  onClick={() => handle2(rowData)}
                >
                  {button2}
                </Button>
              </td>
            ) : null}
            {button ? (
              <td>
                <Button
                  style={{ backgroundColor: "#E8E7E8" }}
                  onClick={() => handle(rowData, index)}
                >
                  {button}
                </Button>
              </td>
            ) : null}
          </tr>
        );
      })
    : null;
  return (
    <div>
      <table>
        <thead>
          <tr>
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
