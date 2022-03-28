
 export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

export const passwordValidation = password => {
    const a=password.length>5?true:false;
    return a
}
export const nameValidation=name=>{
    const letters =/^[A-Za-z]+$/
    return letters.test(name)
}
export const isEmpty=value=>{
const a=value===""?true:false
return a
}
export const whitespace=value=>{
  const reg= /^\s*$/
  return reg.test(value)
}
export const reset=(obj) => {
    const newObj = Object.keys(obj).reduce(
      (accumulator, current) => {
        accumulator[current] = ""; 
        return accumulator
      }, {});
      return newObj;
  }
  export const checkAns=(options,answer)=>{
    const anscheck = options.some((val) => val === answer);
    return anscheck;
  }
  export const isNullish =(obj)=> {
    const isnull=Object.values(obj).every(value => {
    if (value === "") {
      return true;
    }
    return false;
   
  }) 
 return isnull
};
export const EqualArray=(a, b) => {
const result=JSON.stringify(a) === JSON.stringify(b)?true:false;
return result;
}
export const EqualObj=(obj1,obj2)=> {
  const b={}
  Object.keys(obj1).forEach(key=>b[key]=obj2[key])
  const a=JSON.stringify(obj1) === JSON.stringify(b) ? true : false;
  return a;
}
export const hasDuplicates=(array)=> {
  return (new Set(array)).size !== array.length;
}
export const confirmAlert=(Msg)=>{  
  const ans = window.confirm(Msg?Msg:"Are you sure you want to update")
  ? true
  : false;
  return ans
}