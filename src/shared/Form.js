import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../App.css";
import { reset } from "../utils/Regex";
import { Validators, Validation } from "../utils/Validators";
function Form({
  template,
  msg,
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
  }, []);
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
              value={valuee?
                name === "answer"
                  ? valuee
                    ? valuee[name]
                    : state[name]
                  : valuee[name]:value
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
                        checked={
                          valuee
                            ? valuee[name]
                              ? valuee[element.name] === valuee[name]
                                ? true
                                : false
                              : false
                            : null
                        }
                        onChange={handleChange}
                        value={
                          typeof element === "string"
                            ? element
                            : valuee
                            ? valuee[element.name]
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
                                ? valuee[element.name]
                                : state[element.name]
                            }
                            name={element.name}
                            variant="outlined"
                            fullWidth={true}
                            type={element.type}
                            placeholder={element.placeholder}
                          />
                          <span className="error">{error[name]}</span>
                          </div>
                        )}
                      </label>
                   
                    </div>
                  );
                })
              : null}
            <span className="error">{error[name]}</span>
          </div>
        );
      } else if (type === "dropDown") {
        return (
          <div key={index}>
          <select
            style={{ width: "100%", height: "50px" }}
            disabled={indexx === 1 ? false : state[name]===""? false:true}
            onChange={handleChange}
            value={state[name]}
            name={name}
          >
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
    Validators(values, error, setError);
    const a = Object.values(error).map((ok) => ok);
    if (a.every((val) => val === "")) {
      handle(values);
    }
  }
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (valuee) {
      setValuee((prev) => ({ ...prev, [name]: value }));
    }
    setState((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, state, type, error);
    setError(ans);
  };
  const Cancel = () => {
    setState(reset(state));
    valuee && setValuee(reset(valuee))
  };
  return (
    <div>
      {msg}
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
                        : Cancel();
                    }}
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
