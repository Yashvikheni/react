import React, { useEffect, useState } from "react";
import Table from "../shared/Table";
import Switch from "react-switch";
import { RemoveDuplicate } from "../utils/Regex";
import { object } from "prop-types";
import '../App.css'
const FilterTable = () => {
    const initial=  [{
        id: 1,
        name: "foo",
        city: "dallas",
        category: "one",
        type: "A",
        active: "FALSE",
      },
      {
        id: 2,
        name: "bar",
        city: "dallas",
        category: "one",
        type: "B",
        active: "FALSE",
      },
      {
        id: 3,
        name: "jim",
        city: "san francisco",
        category: "one",
        type: "B",
        active: "TRUE",
      },
      {
        id: 4,
        name: "jane",
        city: "denver",
        category: "two",
        type: "C",
        active: "FALSE",
      }]
  const [data,setData] = useState(initial);
  const [filter, setFilter] = useState({
    city: RemoveDuplicate(data.map((key) => key.city)),
    category: RemoveDuplicate(data.map((key) => key.category)),
    type: RemoveDuplicate(data.map((key) => key.type)),
    active: RemoveDuplicate(data.map((key) => key.active)),
  });
  const [heading, setHeading] = useState([]);
  const [checked, setChecked] = useState({});
  
  useEffect(() => {
    setHeading(Object.keys(filter));
  }, [filter]);

  const key = Object.keys(data[0]);
  const handleChange = (key,key1) => {
    if(!checked[key]){
        setData(data.filter((key2)=>key2[key1]===key ))
        console.log(data);
        checked[key]=true
    }else{
        setData(initial)
        checked[key]=false
        setData(data.filter((key2)=>key2[key1]!==key ))
        
    }
};
useEffect(() => {
   const array= RemoveDuplicate((data.map((key) => heading.map((key1)=>key[key1]))).flat(Infinity))
   for(let i=0;i<array.length;i++){
    checked[array[i]]=false
  }
},[heading])
RemoveDuplicate((data.map((key) => heading.map((key1)=>key[key1]))).flat(Infinity))
  return (
    <div style={{ marginLeft: "200px", marginTop: "90px" }}>
      Filter table
      <div style={{ marginLeft: "200px", marginTop: "90px" }}>
        <div style={{ display: "flex" }}>
          {heading.length > 0 &&
            heading.map((key1, index) => (
              <div key={index}>
                <h3>
                  {key1}
                  {filter[key1].map((key, index) => (
                    <div key={index} style={{ display: "flex" }}>
                    <label className="switch">
                    <input type="checkbox" checked={checked[key]} onChange={()=>handleChange(key,key1)}/>
                    <span className="slider round"></span>
                    </label>
                      <span>{key}</span> 
                    </div>
                  ))}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <Table tableData={data} headingColumns={key}></Table>
    </div>
  );
};

export default FilterTable;
