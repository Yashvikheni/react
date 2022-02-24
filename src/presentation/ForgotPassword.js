import React,{useState} from 'react'
import Form from '../shared/Form'
import axios from 'axios';
import {Validators} from "../utils/Validators"
function ForgotPassword() {
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
     if (ans.email==="") {
       console.log("first")
    const response =  await axios.post(
      `https://nodejsexamination.herokuapp.com/users/ForgotPassword`,values
    ).then((response)=> {
      alert(response.data.message)
    }).catch(function(err) {console.log(err)})
   }
  }
  return (
    <div><Form
    template={template}
    onSubmit={handleSubmit}
    error={error}
    setError={setError}
/>
</div>
  )

}

export default ForgotPassword