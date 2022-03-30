import React, { useEffect, useState } from "react";
import Table from "../shared/Table";
import { RemoveDuplicate } from "../utils/Regex";
import "../App.css";
import { TextField } from "@material-ui/core";
const FilterTable = () => {
  const initial = [
    {
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
      // wgrg: "gftwetgwer",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
      wgrg: "gftwetgwer",
    },
  ];
  const [data, setData] = useState(initial);
  const [filter, setFilter] = useState({});
  const [heading, setHeading] = useState([]);
  const [checked, setChecked] = useState({});
  const [temp, setTemp] = useState([]);
  const [arr, setArr] = useState([]);
  
  const set = () => {
    return RemoveDuplicate(
      initial.map((key) => Object.keys(key)).flat(Infinity)
    );
  };
  const [key, setKey] = useState(set());
  useEffect(() => {
    setKey(set());
  }, []);
  const checkIf = (checked) => {
    const a = Object.keys(checked).filter((key) => checked[key] === true);
    console.log(a);
    return a;
  };
  const handleChange = (key, key1) => {

    if(checked[key]){
      checked[key] = false;
      const check = Object.keys(checked).every((key) => checked[key] === false);
      const a=Object.keys(checked).filter((key) => checked[key] === true)
           
      if (check === true) {
            setData(initial);
          } else{
            console.log("uhuh");
            console.log(a);
            // a.map((key) =>)
            // a.length>0 && a.map((key) =>)
          }
      setData(initial)
    }else{
      checked[key] = true;
      setData(data.filter((key2) => key2[key1] === key));
     
    }
    // if (!checked[key]) {
    //   checked[key] = true;
    //   setData(data.filter((key2) => key2[key1] === key));
    //   temp.push(data);
    //   setArr(checkIf(checked));
    //   console.log(arr);
    // } else {
    //   checked[key] = false;
    //   setArr(checkIf(checked));
    //   const check = Object.keys(checked).every((key) => checked[key] === false);
    //   if (check === true) {
    //     setData(initial);
    //   } else {
    //     Object.keys(checked).forEach((val) => {
    //       if (checked[val] === true) {
    //         const values = RemoveDuplicate(
    //           initial
    //             .map((key) =>
    //               Object.keys(key).filter((value) => key[value[0]] === val)
    //             )
    //             .flat(Infinity)
    //         );
    //         if (arr.length <= 2) {
    //           setData(initial.filter((key2) => key2[values[0]] === val));
    //           setTemp([]);
    //           console.log(temp);
    //         } else {
    //           setData(
    //             temp
    //               .at(arr.length - 2)
    //               .filter((key2) => key2[values[0]] === val)
    //           );
    //         }
    //       }
    //     });
    //   }
    // }
  };
  const Change =(e)=>{
    console.log(data);
   const ok= data.filter((key) =>key.name===e.target.value)
      console.log(ok);
  setData(ok)
  }
  useEffect(() => {
    for (let i of key) {
      if (i !== "id" && i !== "name") {
        filter[i] = RemoveDuplicate(initial.map((key) => key[i]));
      }
    }
    setHeading(Object.keys(filter));
  }, [key]);
  useEffect(() => {
    const array = RemoveDuplicate(
      initial.map((key) => heading.map((key1) => key[key1])).flat(Infinity)
    );
    for (let i = 0; i < array.length; i++) {
      checked[array[i]] = false;
    }
  }, [heading]);
  useEffect(() => {
    setData(initial);
    Object.keys(filter).forEach((key) => {
      filter[key].forEach((key1) => {
        if (key1 === undefined) {
          delete filter[key];
        }
      });
    });
    setHeading(Object.keys(filter));
  }, [filter]);

  return (
    <div style={{ marginTop: "90px" }}>
      Filter table
      <div>
        <div style={{ display: "flex" }}>
          {heading.length > 0 &&
            heading.map((key1, index) => (
              <div style={{ padding: "50px" }} key={index}>
                <h3>
                  {key1}
                  {filter[key1].map(
                    (key, index) =>
                      key && (
                        <div key={index} style={{ display: "flex" }}>
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={checked[key]}
                              onChange={() => handleChange(key, key1)}
                            />
                            <span className="slider round"></span>
                          </label>
                          <span>{key}</span>
                        </div>
                      )
                  )}
                </h3> 
              </div>
            ))}
  
        </div>
        {key.includes("name")?
      (<TextField name="name" onChange={(e)=>Change(e)} placeholder="name" />):null }
      </div>
     
      <Table tableData={data} headingColumns={key}></Table>
    </div>
  );
};

export default FilterTable;
