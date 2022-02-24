import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import  { Validation } from "../utils/Validators";
import InputField from './InputField';
import { Link } from 'react-router-dom'
import '../App.css'
function Form({ template, onSubmit, error,setError }) {
    useEffect(() =>{
    error=error
    },[error])
    
    const [data, setData] = useState({})
   
    let { title, fields, buttonName } = template;
   
    const renderFields = (fields) => {
        
        return fields.map(field => {
            let { type, name,value, path} = field;
            <label htmlFor={name}>{title}</label>

            if(type==='text' || type==='password'|| type==='email'){
                return(
                <div key={name}> 
           
                  <TextField fullWidth={true}   variant="outlined" {...field} onChange={handleChange}/>
                  {type==='text'?<span className="error">{error.name}</span>:<span></span>}
                {type==='password'?<span className="error">{error.password}</span>:<span></span>} 
                {type==='email'?<span className="error">{error.email}</span>:<span></span>}
                          </div>)
            }
            else if(type==='radio'){
                return(
                <div key={name}>
                       
                          {value.map((element)=> {return (
                          
                             <InputField  type="radio" name={name} value={element} onChange={handleChange}/>
                            
                             )}
                            )}
                            <span className="error">{error.role}</span>
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
        const ans=Validation(name,value,data)
        setError(ans);
    
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