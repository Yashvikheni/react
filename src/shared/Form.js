import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Validators from "../utils/Validators";
import InputField from './InputField';
import { Link } from 'react-router-dom'
import '../App.css'
function Form({ template, onSubmit }) {

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({})
   
    let { title, fields, buttonName } = template;
   
    const renderFields = (fields) => {
        
        return fields.map(field => {
            let { title, type, name,value, path,required } = field;
            <label htmlFor={name}>{title}</label>

            if(type==='text' || type==='password'|| type==='email'){
                return(
                <div key={name}> 
           
                  <TextField fullWidth={true} type={type} variant="outlined" required={required} label={name} name={name} onChange={handleChange}></TextField>
                  {type==='text'?<span className="error">{errors.name}</span>:<span></span>}
                {type==='password'?<span className="error">{errors.password}</span>:<span></span>} 
                {type==='email'?<span className="error">{errors.email}</span>:<span></span>}
                          </div>)
            }
            else if(type==='radio'){
                return(
                <div key={name}>
                       
                          {value.map((element)=> {return (
                          
                             <InputField  type="radio" name={name} value={element} onChange={handleChange}/>
                            
                             )}
                            )}
                            <span className="error">{errors.role}</span>
                        </div>)
            }
            else if(type==='link'){
                return(<div><Link  to={path} >{name}</Link></div>
                )
            }
            else{
                return(
                    <div>Invalid Field</div>
                )
            }
        }
        )
    }
    const handleChange = (e) => {
        const { name,value } = e.target;
        setData((prev)=>({...prev,[name]:value}))
        setErrors(Validators(data));
    }
    return (
        <div>
            <form className='form-outer-wrapper'>
                <h4>{title}</h4>
                {renderFields(fields)}
                <br />
                <Button onClick={(e)=>onSubmit(e,data)}  type="submit" color='primary
                ' varient='contained' className="btn">{buttonName}</Button>
            </form>
        </div>
    );
}
export default Form