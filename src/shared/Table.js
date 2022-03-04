import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
const Table = ({ tableData, headingColumns ,button,handle}) => {

  const data = tableData?tableData.map((row, index) => {
   let rowData = [];
    let i = 0;
    for(const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key]
      });
      i++;
    }
    return <tr key={index}>
      {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
      {button?<td><Button onClick={()=>handle(rowData)}>{button}</Button></td>:null}
    </tr>
  }):null;
  return(
    <div>
      <table >
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}

// Table.propTypes = {
//   tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
 
// }

export default Table;