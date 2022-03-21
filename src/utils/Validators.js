
import { emailValidation, passwordValidation, nameValidation ,isEmpty,reset,whitespace} from "./Regex";

export const Validators = (values, error, setError) => {
  Object.keys(values).map((key) => {
    if(key==="notes"){
      setError((prev) => ({ ...prev, [key]: "" }))
    }
    else if (isEmpty(values[key]) || whitespace(values[key])) {
        error[key] = "required"
        setError((prev) => ({ ...prev, [key]: "required" }))
      }
    } )
  }
  

export const Validation = (name, value, data, type, error) => {
  Object.keys(data).map((key) => {
    if (key === name) {
        error[key] = ""
    }  
  })
  if(name==="notes"){
    error[name] = ""
  }
  else if (isEmpty(value)) {
      error[name] = "required"
  }
  else if(whitespace(value)){
    error[name] = "required"
  } 
  else {
    if (name === "name") {
      if (!nameValidation(value)) {
        error[name] = "enter the character only"
      }
    }
    if (name === "email") {
      if (!emailValidation(value)) {
        error[name] = "enter Valid email"
      }
    }
    if (type==="password") {
      if (!passwordValidation(value)) {
        error[name] = "enter valid password"
      }
    }
    }    
  return error;
}
