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

export const reset=(state) => {
    const newObj = Object.keys(state).reduce(
      (accumulator, current) => {
        accumulator[current] = ""; 
        return accumulator
      }, {});
      return newObj;
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

export const EqualObj=(obj1,obj2)=> {
  const a= JSON.stringify(obj1) === JSON.stringify(obj2) ?true : false;
  return a;
}