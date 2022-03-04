import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Validators, Validation } from "../utils/Validators";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "../App.css";
function Form({ template, msg, handle, vall, setVall, Prev, Next, indexx }) {
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
              value={
                name === "answer"
                  ? state[name]
                  : vall
                  ? vall[name]
                  : state[name]
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
                        value={
                          typeof element === "string"
                            ? element
                            : state[element.name]
                        }
                        onChange={handleChange}
                      />
                      <label>
                        {typeof element === "string" ? (
                          element
                        ) : (
                          <TextField
                            onChange={handleChange}
                            key={i}
                            value={state[element.name]}
                            name={element.name}
                            variant="outlined"
                            fullWidth={true}
                            type={element.type}
                            placeholder={element.placeholder}
                          />
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
          <select
            style={{ width: "100%", height: "50px" }}
            disabled={indexx === 1 ? false : true}
            onChange={handleChange}
            value={state[name]}
            name={name}
            key={index}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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
    if (vall) {
      setVall((prev) => ({ ...prev, [name]: value }));
    }
    setState((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, state, type, error);
    setError(ans);
  };
  const Cancel = () => {
    fields.map((key) => setState((prev) => ({ ...prev, [key.name]: "" })));
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
