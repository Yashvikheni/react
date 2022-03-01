import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Validators, Validation } from "../utils/Validators";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../App.css";
function Form({ template, msg, handle ,vall,setVall}) {
  const [error, setError] = useState({});
  let index = 0;
  const [state, setState] = useState({});
  let { title, fields, buttonName, link } = template;

  useEffect(() => {
    fields.map((key) => setState((prev) => ({ ...prev, [key.name]: "" })));
  }, []);
  const renderFields = (fields) => {
    return fields.map((field) => {
 
      let { type, name, value } = field;
      
       <label htmlFor={name}>{title}</label>;
      if (type === "text" || type === "password" || type === "email") {
        return (
          <div key={name}>
            <TextField
              fullWidth={true}
              variant="outlined"
              {...field}
              value={vall?vall[name]:value}
              onChange={handleChange}
            />
            <span className="error">{error[name]}</span>
          </div>
        );
      } else if (type === "radio") {
        return (
          <div key={index}>
            {value.map((element) => {
              index++;
              return (
                <div key={element}>
                  <InputField
                    type="radio"
                    name={name}
                    value={element}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
            <span className="error">{error[name]}</span>
          </div>
        );
      } else {
        return <div>Invalid Field</div>;
      }
    });
  };
  const renderLinks = (link) => {
    return link.map((li) => {
      const { path, linkName } = li;
      return (
        <div key={path}>
          <Link to={path}>{linkName}</Link>
        </div>
      );
    });
  };
  function handleSubmit(e, values) {
    e.preventDefault();
    Validators(values, error, setError);  
    const a = Object.values(error).map((ok) => ok);
    if (a.every((val) => val === "")) {
      handle(values);
    }
  }
  const handleChange =(e) => {
    const { name, value, type } = e.target;
   if(vall){
    setVall((prev) => ({ ...prev, [name]: value }))}
    setState((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, state, type, error);
    setError(ans);
  }
  return (
    <div>
      {msg}
      <form className="form-outer-wrapper">
        <h4>{title}</h4>
        {renderFields(fields)}
        <br />
        {link ? renderLinks(link) : null}

        <Button
          onClick={(e) => handleSubmit(e, state)}
          type="submit"
          varient="contained"
          className="btn">
          {buttonName}
        </Button>
      </form>
    </div>
  );
}

export default React.memo(Form);
