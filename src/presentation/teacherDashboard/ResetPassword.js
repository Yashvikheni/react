import React,{useState} from 'react'
import Form from '../../shared/Form'
import {Validators} from '../../utils/Validators'
// import {useLocation} from"react-router-dom"
// import {baseUrl} from "../utils/Constant"
// import {isEmpty} from "../utils/Regex"

const ResetPassword = () => {
    const [error, setError] = useState({})
    const template = {
        title: "New password",
        fields: [
            {
                title: "Password",
                type: "password",
                name: "OldPassword",
                placeholder: "Old password",
              }, {
          title: "Password",
          type: "password",
          name: "Password",
          placeholder: "New password",
        },
        {
            title: "confirm password",
            type: "password",
            name: "ConfirmPassword",
            placeholder: "Confirm Password"
    }],buttonName: "Reset"}
    async function handleSubmit (e,values){
        e.preventDefault()
        const ans=Validators(values)
        setError(ans)
        console.log(ans)
        }
  return (
    <div> <Form template={template} onSubmit={handleSubmit} error={error} setError={setError}/></div>
  )
}

export default ResetPassword