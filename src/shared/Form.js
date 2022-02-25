import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Validation } from "../utils/Validators";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../App.css";
function Form({ template, onSubmit, error, setError, msg }) {
  useEffect(() => {
    error = error;
  }, [error]);

  const [data, setData] = useState({});

  let { title, fields, buttonName } = template;

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { type, name, value, path, placeholder } = field;
      <label htmlFor={name}>{title}</label>;

      if (type === "text" || type === "password" || type === "email") {
        return (
          <div key={placeholder}>
            <TextField
              fullWidth={true}
              variant="outlined"
              {...field}
              onChange={handleChange}
            />
            {name === "name" ? (
              <span className="error">{error.name}</span>
            ) : (
              <span></span>
            )}
            {name === "password" ? (
              <span className="error">{error.password}</span>
            ) : (
              <span></span>
            )}
            {name === "email" ? (
              <span className="error">{error.email}</span>
            ) : (
              <span></span>
            )}
            {name === "Password" ? (
              <span className="error">{error.Password}</span>
            ) : (
              <span></span>
            )}
            {name === "ConfirmPassword" ? (
              <span className="error">{error.ConfirmPassword}</span>
            ) : (
              <span></span>
            )}
          </div>
        );
      } else if (type === "radio") {
        return (
          <div key={placeholder}>
            {value.map((element) => {
              return (
                <InputField
                  type="radio"
                  name={name}
                  value={element}
                  onChange={handleChange}
                />
              );
            })}
            <span className="error">{error.role}</span>
          </div>
        );
      } else if (type === "link") {
        return (
          <div>
            <Link to={path}>{name}</Link>
          </div>
        );
      } else {
        return <div>Invalid Field</div>;
      }
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, data);
    setError(ans);
  };
  return (
    <div>
      {msg}
      <form className="form-outer-wrapper">
        <h4>{title}</h4>
        {renderFields(fields)}
        <br />
        <Button
          onClick={(e) => onSubmit(e, data)}
          type="submit"
          varient="contained"
          className="btn"
        >
          {buttonName}
        </Button>
      </form>
    </div>
  );
}
export default React.memo(Form);
