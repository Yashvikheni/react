
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'
const InputField = ({placeholder, type ,onChange,...fields}) => {
    return (
        <div>
            {type === 'radio'? (
           
                <input
                    type="radio"
                    onChange={onChange}
                    {...fields}
                />
            ) : (
                <>
                <label>{fields.name}</label>
                <input     
                    placeholder={placeholder}
                   onChange={onChange}
                    {...fields}
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