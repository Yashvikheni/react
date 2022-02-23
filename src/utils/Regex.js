export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

export const passwordValidation = password => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    return regex.test(password)
}
export const capitalize = string => string[0].toUpperCase() + string.slice(1)
export const nameValidation=name=>{
    const letters =/^[A-Za-z]+$/
    return letters.test(name)
}
export const isEmpty=value=>{
value =""
return true
}
export const camelCaseSpace = string => string.replace(/([a-z])([A-Z])/g, '$1 $2')
export const isNumber = value => /^[0-9]+$/.test(value)
