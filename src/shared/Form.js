import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../App.css";
import { isNullish, reset } from "../utils/Regex";
import { Validators, Validation } from "../utils/Validators";
function Form({
  template,
  handle,
  valuee,
  setValuee,
  Prev,
  Next,
  indexx,
}) {
  const [error, setError] = useState({});
  const [state, setState] = useState({});
  let { title, fields, buttonName, link, button } = template;
  useEffect(() => {
    fields.map((key) => setState((prev) => ({ ...prev, [key.name]: "" })));
    fields.map((key) =>
      key.value
        ? Array.isArray(key.value)
          ? key.value.map((value) =>
              setState((prev) => ({ ...prev, [value.name]: "" }))
            )
          : null
        : null
    );
  },[]);
  const renderFields = (fields) => {
    return fields.map((field, index) => {
      let { type, name, value, options } = field;
      <label htmlFor={name}>{title}</label>;
      if (type === "text" || type === "password" || type === "email") {
        return (
          <div key={index}>
            <TextField
              fullWidth={true}
              variant="outlined"
              {...field}
              value={
                valuee
                  ? !isNullish(valuee)
                    ? valuee[name] 
                    : state[name]?state[name]:""
                  : state[name]?state[name]:""
              }
              onChange={handleChange}
              disabled={name === "answer" ? true : false}
            />
            <span className="error">{error[name]}</span>
          </div>
        );
      } else if (type === "radio") {
        return (
          <div key={index}>
            {value
              ? value.map((element, i) => {
                  return (
                    <div style={{ display: "flex", marginTop: "10px" }} key={i}>
                      <InputField
                        style={{
                          marginTop:
                            typeof element === "string" ? null : "23px",
                        }}
                        type="radio"
                        name={name}
                        checked={name==="answer"?
                          state[element.name]?state[name]===state[element.name]?true:false:
                          valuee
                            ? !isNullish(valuee)
                              ? valuee[name]
                                ? valuee[element.name] === valuee[name]
                                  ? true
                                  : false
                                : false
                              : false:false:null 
                        }
                        onChange={handleChange}
                        value={
                          typeof element === "string"
                            ? element
                            : valuee
                            ? !isNullish(valuee)
                              ? valuee[element.name]
                              : state[element.name] ? state[element.name]:""
                              : state[element.name]
                        }
                      />
                      <label>
                        {typeof element === "string" ? (
                          element
                        ) : (
                          <div key={i}>
                            <TextField
                              onChange={handleChange}
                              value={
                                valuee
                                  ? !isNullish(valuee)
                                    ? valuee[element.name]
                                    : state[element.name] ? state[element.name]:""
                                  : state[element.name] 
                              }
                              name={element.name}
                              variant="outlined"
                              fullWidth={true}
                              type={element.type}
                              placeholder={element.placeholder}
                            />
                            <span className="error">{error[element.name]}</span>
                          </div>
                        )}
                      </label>
                    </div>
                  );
                })
              : null}
              {name==="role"?
            <span className="error">{error[name]}</span>:null}
          </div>
        );
      } else if (type === "dropDown") {
        return (
          <div key={index}>
            <select
              style={{ width: "100%", height: "50px" }}
              disabled={
                indexx === 1 ? false : state[name] !== ""? true :false
              }
              onChange={handleChange}
              value={state[name]}
              name={name}
            >
              <option value="">Select Subject</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="error">{error[name]}</span>
          </div>
        );
      } else {
        return <div key={index}>Invalid Field</div>;
      }
    });
  };
  const renderLinks = (link) => {
    return link.map((li, i) => {
      const { path, linkName } = li;
      return (
        <div key={i}>
          <Link to={path}>{linkName}</Link>
        </div>
      );
    });
  };
  function handleSubmit(e, values) {
    e.preventDefault();  
    if (valuee) {
      if(!isNullish(valuee)){
         values=valuee
      }
    }
    Validators(values, error, setError);
    const a = Object.values(error).map((ok) => ok);
    if (a.every((val) => val === "")) {
      handle(values);
      add();
    }
  }
  const handleChange =(e)=> {
    const { name, value, type } = e.target;
    if (valuee) {
      if(!isNullish(valuee)){
         setValuee((prev) => ({ ...prev, [name]: value }));
         setState(valuee)
      }
    }
    setState((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, state, type, error);
    setError(ans);
  };
// useEffect(() => {
//   if(valuee) {
//     if(!isNullish(valuee)){
//      setError(reset(error))
//        Validators(valuee, error, setError);
//      }
//   }
// },[state])
   
   
  const ccc=()=>{
    const obj=Object.keys(state).reduce(
    (accumulator, current) => {
      if(current!=="subjectName"){
        accumulator[current]="";   
      }
      return accumulator
    }, {})  ; return obj}
  const add=() => {
    const newObj = ccc();
    setState(newObj)
    valuee && setValuee(reset(valuee));
    } 
  const cancel = () => {
    if(indexx===1){
      state.subjectName=""
      setState(reset(state))
    }else{
      const newObj = ccc();
      setState(newObj)
    }
    valuee && setValuee(reset(valuee));
  };
  return (
    <div>
      <form className="form-outer-wrapper">
        <h4>{title}</h4>
        {renderFields(fields)}
        <br />
        {link ? renderLinks(link) : null}
        <div style={{ display: "flex" }}>
          {button
            ? button.map((btn, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      btn === "Prev"
                        ? Prev()
                        : btn === "Next"
                        ? Next()
                        : cancel();
                    }}
                    disabled={
                      btn === "Prev"
                        ? indexx === 1
                          ? true
                          : false
                        : btn === "Next"
                        ? indexx === 15
                          ? true
                          : false
                        : false
                    }
                  >
                    {btn}
                  </Button>
                );
              })
            : null}
          <Button
            onClick={(e) => handleSubmit(e, state)}
            type="submit"
            varient="contained"
            className="btn"
          >
            {buttonName}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default React.memo(Form);
