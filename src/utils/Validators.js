import { emailValidation, passwordValidation, nameValidation } from "./Regex";
const Validators = (values) => {
  console.log(nameValidation(values.name));

  const errors = {};
  const obj = Object.keys(values);
  console.log(obj);
  const checkName = obj.some((val) => val === "name");

  if (checkName) {
    if (!nameValidation(values.name)) {
      errors.name = "enter the character only";
    }
  } else {
    errors.name = "name is required";
  }

  const checkEmail = obj.some((val) => val === "email");
  if (checkEmail) {
    if (!emailValidation(values.email)) {
      errors.email = "enter the email correctly";
    }
  } else {
    errors.email = "enter the email";
  }
  const checkPassword = obj.some((val) => val === "password");
  if (checkPassword) {
    if (!passwordValidation(values.password)) {
      errors.password = "enter the strong password";
    }
  } else {
    errors.password = "enter the password";
  }
  const checkRole = obj.some((val) => val === "role");
  if (!checkRole) {
    errors.role = "select your Role";
  }

  return errors;
};
export default Validators;
