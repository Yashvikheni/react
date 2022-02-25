import React,{useState} from 'react'
import Form from '../shared/Form'
import axios from 'axios';
import {Validators} from "../utils/Validators"
import {isEmpty} from "../utils/Regex"
function ForgotPassword() {
  const [msg, setMsg] = useState(null)
const [error, setError] = useState({})
  let template = {
    title: 'Forgot Password',
    fields: [ {
      title: 'Email',
      type: 'email',
      name: 'email'
  }],buttonName:'Send'}

   async function handleSubmit (e,values){
    
     e.preventDefault()
     const ans=Validators(values)
     setError(ans)
     if (isEmpty(ans.email)) {
       console.log("first")
    const response =  await axios.post(
      `https://nodejsexamination.herokuapp.com/users/ForgotPassword`,values
    ).then((response)=> {
      setMsg(response.data.message)
    }).catch(function(err) {setMsg(err.message)})
   }
  }
  return (
    <div><Form
    template={template}
    onSubmit={handleSubmit}
    error={error}
    setError={setError}
    msg={msg}
/>
</div>
  )

}

export default ForgotPassword