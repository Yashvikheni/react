import { emailValidation, passwordValidation, nameValidation ,isEmpty} from "./Regex";

export const Empty=(val)=>{
  const name=isEmpty(val)?"required":""
  return name;
}
export const Validators = (values) => {

  const errors = {};
  const obj = Object.keys(values);
  console.log(obj)
  const checkName = obj.some((val) => val === "name"); 
  const checkEmail = obj.some((val) => val === "email");
  const checkPassword = obj.some((val) => val === "password");
  const checkPass = obj.some((val) => val === "Password");
  const checkCP = obj.some((val) => val === "ConfirmPassword");
  if (checkName) {
      errors.name=Empty(values.name);
  } else {
    errors.name = "required";
  }
  if (checkEmail) {
      errors.email=Empty(values.email)
  } else {
    errors.email = "required";
  }
  if (checkPassword) {
    errors.password=Empty(values.password)
  } else {
    errors.password = "required";
  }
  if (checkPass) {
    errors.Password=Empty(values.Password)
  } else {
    errors.Password = "required";
  }
  if (checkCP) {
    errors.ConfirmPassword=Empty(values.ConfirmPassword)
  } else {
    errors.ConfirmPassword = "required";
  }
  const checkRole = obj.some((val) => val === "role");
  if (!checkRole) {
    errors.role = "select your Role";
  }
  else{
    errors.role=""
  }

  return errors;
};
export const Validation =(name,value,data) =>{
  const errors={}
  //Validators(data)
  if(name==="name"){
    if(isEmpty(value)){
      
      errors.name="required"
    }
    else if (!nameValidation(value)) {
    errors.name = "enter the character only"}
    else{
      errors.name = "";
      }}
    else{
    errors.name =Empty(data.name)
 
  }

  if(name==="email"){
  if(isEmpty(value)){
    errors.email="required"
  }
  else if (!emailValidation(value)) {
    errors.email = "enter Valid email";}
    else{
      errors.email = "";
      }
  }
 else{
    errors.email=Empty(data.email)
  }
if(name==="password"){
  if(isEmpty(value)){
    errors.password="required"
  }
else if (!passwordValidation(value)) {
    errors.password = "enter valid password";}
    else{
      errors.password = "";
      }
  }
  else{
    errors.password=Empty(data.password)
  }

  if(name==="role"){
    errors.role=Empty(value);}
    else{
      errors.role = ""
    }
  
return errors;
}