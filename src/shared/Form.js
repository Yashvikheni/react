import React, { useState, useEffect, useCallback } from "react";
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
  final,
  subject,
  disabled,
}) {
  const [error, setError] = useState({});
  const [state, setState] = useState({});
  let { title, fields, buttonName, link, button } = template;
  useEffect(() => {
    fields.map(
      (key) =>
        key.type !== null && setState((prev) => ({ ...prev, [key.name]: "" }))
    );
    fields.map((key) =>
      key.type !== null && key.value
        ? Array.isArray(key.value)
          ? key.value.map((value) =>
              typeof value === "string"
                ? null
                : setState((prev) => ({ ...prev, [value.name]: "" }))
            )
          : null
        : null
    );
  }, []);
  const renderFields = (fields) => {
    return fields.map((field, index) => {
      let { type, name, value, options } = field;
      <label htmlFor={name}>{title}</label>;
      if (type === "text" || type === "password" || type === "email") {
        return (
          <div key={index}>
            <InputField
              {...field}
              value={
                valuee
                  ? !isNullish(valuee)
                    ? valuee[name]
                      ? valuee[name] !== " "
                        ? valuee[name]
                        : ""
                      : ""
                    : state[name]
                    ? state[name]
                    : ""
                  : state[name]
                  ? state[name]
                  : ""
              }
              onChange={(e) => handleChange(e)}
              disabled={name === "answer" ? true : disabled ? true : false}
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
                          name === "answer"
                            ? state[name]
                              ? state[element.name] &&
                                state[name] === state[element.name]
                                ? true
                                : false
                              : valuee
                              ? valuee.question !== ""
                                ? valuee[name]
                                  ? valuee[element.name] === valuee[name]
                                    ? true
                                    : false
                                  : false
                                : false
                              : false
                            : null
                        }
                        onChange={(e) => handleChange(e)}
                        value={
                          typeof element === "string"
                            ? element
                            : valuee
                            ? !isNullish(valuee)
                              ? valuee[element.name]
                              : state[element.name]
                              ? state[element.name]
                              : ""
                            : state[element.name]
                        }
                      />
                      <label>
                        {typeof element === "string" ? (
                          element
                        ) : (
                          <div key={i}>
                            <InputField
                              onChange={(e) => handleChange(e)}
                              value={
                                valuee
                                  ? !isNullish(valuee)
                                    ? valuee[element.name]
                                    : state[element.name]
                                    ? state[element.name]
                                    : ""
                                  : state[element.name]
                              }
                              name={element.name}
                              type={element.type}
                              placeholder={element.placeholder}
                              disabled={disabled ? true : false}
                            />
                            <span className="error">{error[element.name]}</span>
                          </div>
                        )}
                      </label>
                    </div>
                  );
                })
              : null}
            {name === "role" ? (
              <span className="error">{error[name]}</span>
            ) : null}
          </div>
        );
      } else if (type === "dropDown") {
        return (
          <div key={index} >
            <select
              style={{ width: "100%", height: "50px" }}
              disabled={
                indexx === 1 ? false : state[name] !== "" ? true : false
              }
              onChange={(e) => handleChange(e)}
              value={state[name]}
              name={name}
            >
              <option value=" ">Select Subject</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="error">{error[name]}</span>
          </div>
        );
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
      if (!isNullish(valuee)) {
        values = valuee;
      }
    }
    if (disabled) {
      state.answer = "";
    } else {
      Validators(values, error, setError);
    }
    const a = Object.values(error).map((ok) => ok);
    if (a.every((val) => val === "")) {
      handle(values, add);
    }
  }
  const handleChange = useCallback((e) => {
    const { name, value, type } = e.target;
    if (valuee) {
      if (!isNullish(valuee)) {
        setValuee((prev) => ({ ...prev, [name]: value }));
        setState(valuee);
      }
    }
    setState((prev) => ({ ...prev, [name]: value }));
    const ans = Validation(name, value, state, type, error);
    setError(ans);
  });
  useEffect(() => {
    if (!valuee || !indexx) return;
    else if (!subject && !disabled) {
      if (!isNullish(valuee)) {
        setError(reset(error));
        const newObj = ccc();
        setState(newObj);
        Validators(valuee, error, setError);
      } else if (indexx !== 1) {
        const newObj = ccc();
        setState(newObj);
      }
    }
  }, [valuee, indexx]);
  const ccc = () => {
    const obj = Object.keys(state).reduce((accumulator, current) => {
      if (current !== "subjectName") {
        accumulator[current] = "";
      }
      return accumulator;
    }, {});
    return obj;
  };
  const add = () => {
    const newObj = ccc();
    setState(newObj);
    valuee && setValuee(reset(valuee));
  };
  const cancel = () => {
    if (disabled) {
      setState((prev) => ({ ...prev, answer: "" }));
      setValuee((prev) => ({ ...prev, answer: "" }));
    } else {
      if (indexx === 1) {
        state.subjectName = " ";
        setState(reset(state));
      } else {
        const newObj = ccc();
        setState(newObj);
      }
      valuee && setValuee(reset(valuee));
    }
  };
  const cV = () => {
    if (disabled) {
      setState(reset(state));
      setError(reset(error));
      return true;
    } else {
      if (isNullish(state) && !isNullish(valuee)) {
        Validators(valuee, error, setError);
      } else {
        Validators(state, error, setError);
      }
    }
    const a = Object.values(error).map((ok) => ok);
    return a.every((val) => val === "");
  };
  return (
    <div>
      <form className="form-outer-wrapper">
        <h4>{title}</h4>
        {renderFields(fields)}
        <br />
        {link ? renderLinks(link) : null}
        <div style={{ display: button && "flex" }}>
          {button
            ? button.map((btn, index) => {
                return (
                  <Button
                    className="btn-primary"
                    key={index}
                    onClick={() => {
                      btn === "Prev"
                        ? disabled
                          ? cV(valuee) && Prev(state)
                          : final.questions.at(indexx - 1).question === ""
                          ? Prev(state)
                          : cV(valuee) && Prev(state)
                        : btn === "Next"
                        ? cV(valuee) && Next(state)
                        : cancel();
                    }}
                    disabled={
                      btn === "Prev"
                        ? indexx === 1
                          ? true
                          : false
                        : btn === "Next"
                        ? disabled
                          ? indexx === 7
                            ? true
                            : false
                          : indexx === 15 || buttonName === "ADD"
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
          >
            {buttonName}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default React.memo(Form);
