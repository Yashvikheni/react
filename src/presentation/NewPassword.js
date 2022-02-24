import React,{useState} from 'react'
import Form from '../shared/Form'
import {Validators} from '../utils/Validators'
import {useLocation} from"react-router-dom"
import {baseUrl} from "../utils/Constant"
import axios from "axios"
const NewPassword = (props) => {
  const location =useLocation();
  const [error, setError] = useState({})
    const template = {
        title: "New password",
        fields: [ {
          title: "Password",
          type: "password",
          name: "password",
          placeholder: "New password",
        },
        {
            title: "confirm password",
            type: "password",
            name: "ConfirmPassword",
            placeholder: "Confirm Password"
    }],buttonName: "Submit"}

    async function handleSubmit (e,values){
      e.preventDefault()
      const ans=Validators(values)
      setError(ans)
      console.log(values)
    
   if(ans.password==="") {    
     const token=location.search.replace("?token=","")
      await axios
        .get(`${baseUrl}users/newPassword`, {headers:{'access-token':`${token}`}})
        .then((response) => {
          console.log(response.data)
          console.log("first")
          if(response.data.statusCode===200){
          
             axios.post(`${baseUrl}users/ForgotPassword/Verify?token=${token}`,values)
            .then((response)=>{
              console.log("second")
              console.log(response.data)
            }).catch((error)=>console.log(error.message)
            )
          }
        })
        .catch(function (err) {
        console.log(err.message)
          //  err.msg = err.message
          //  setError(err)
        });}
      }

      
  
  return (
    <Form template={template} onSubmit={handleSubmit} error={error} setError={setError}/>
  )
}

export default NewPassword