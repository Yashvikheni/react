
import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import '../App.css'
const InputField = ({id,name,value,checked,disabled,placeholder, type ,onChange,...field}) => {
    return (
        <div>
            {type === 'radio'? ( 
                <input
                    type="radio"
                    onChange={onChange}
                    value={value}
                    checked={checked}
                    name={name}
                    {...field}
                />
            ) : (
                <>
                  <TextField
                    id={id}
                    onChange={onChange}
                    value={value}
                    name={name}
                    variant="outlined"
                    fullWidth={true}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                     className="text-field"
                    {...field}
        /></>
            )}
           
        </div>
    )
};


InputField.propTypes={
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
}
export default React.memo(InputField);