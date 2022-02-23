import React from 'react'
import Form from '../shared/Form'
import axios from 'axios';
function ForgotPassword() {

  let template = {
    title: 'Forgot Password',
    fields: [ {
      title: 'Email',
      type: 'email',
      name: 'email'
  }],buttonName:'Send'}

   async function handleSubmit (e,values){
     e.preventDefault()
    const response =  await axios.post(
      `https://nodejsexamination.herokuapp.com/users/ForgotPassword`,values
    ).then((response)=> {
      alert(response.data.message)
    }).catch(function(err) {console.log(err)})
   }
  return (
    <div><Form
    template={template}
    onSubmit={handleSubmit}
/>
</div>
  )
}

export default ForgotPassword