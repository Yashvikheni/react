import React,{useState} from 'react'
import Form from '../shared/Form'
import axios from 'axios'
function ForgotPassword() {
  const [msg, setMsg] = useState(null)
  let template = {
    title: 'Forgot Password',
    fields: [ {
      title: 'Email',
      type: 'email',
      name: 'email'
  }],buttonName:'Send'}
   async function handle (values){

   await axios.post(
     `https://nodejsexamination.herokuapp.com/users/ForgotPassword`,values
   ).then((response)=> {
    setMsg(response.data.message)
  }).catch(function(err) {setMsg(err.message)})
 }

return (
  <div><Form
  template={template}
  handle={handle}
  msg={msg}
/>
</div>
)
}
export default ForgotPassword