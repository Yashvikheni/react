import React from 'react'
import Form from '../../shared/Form'
import {useLocation} from"react-router-dom"
import axios from 'axios'
import { baseUrl } from '../../utils/Constant'
const ResetPassword = () => {
    const template = {
        title: "Reset password",
        fields: [
            {
                title: "Password",
                type: "password",
                name: "oldPassword",
                autoComplete:'on',
                placeholder: "Old password",
              }, {
          title: "Password",
          type: "password",
          name: "Password",
          autoComplete:'on',
          placeholder: "New password",
        },
        {
            title: "confirm password",
            type: "password",
            name: "ConfirmPassword",
            autoComplete:'on',
            placeholder: "Confirm Password"
    }],buttonName: "Reset"}
    async function handle (values){
       console.log('values', values)
       const token=localStorage.getItem('userIn');
       await axios
       .post(`${baseUrl}users/ResetPassword`, values,{headers:{'access-token':`${token}`}})
       .then((response)=>
       alert(response.data.message))
       .catch((error)=>
       alert(error.message))
        }
  return (
    <div><Form template={template} handle={handle}/></div>
  )
}

export default ResetPassword