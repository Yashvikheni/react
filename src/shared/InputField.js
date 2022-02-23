
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../App.css'

const InputField = ({value, label, placeholder, type,name,onChange,refs}) => {
  
    return (
        <div>
            {/* {label && <label htmlFor="app-input-field">{label}</label>} */}

            {type === 'radio'? (
               <>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <label>{value}</label>
                </>
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                   onChange={onChange}
                />
               
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
export default InputField;