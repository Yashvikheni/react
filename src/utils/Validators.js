 import { emailValidation, passwordValidation, nameValidation ,isEmpty} from "./Regex";

export const Validators = (values, error, setError) => {

  Object.keys(values).map((key) => {
    if (isEmpty(values[key])) {
      error[key] = "required"
      setError((prev) => ({ ...prev, [key]: "required" }))
    }
  }
  )
};

export const Validation = (name, value, data, type, error) => {
  Object.keys(data).map((key) => {
    if (key === name) {
        error[key] = ""
    }  
  })
  if (isEmpty(value)) {
    error[name] = "required"
  } else {
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