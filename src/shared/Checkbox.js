


import PropTypes from 'prop-types';

const Checkbox = ({label, selected, styleClass, onChange}) => {

    // const handleChange = (event) => {
    //     const {checked} = event.target;
    //     onChange(checked);
    // };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={selected}
                    defaultChecked={selected}/>

                {label}
            </label>
        </div>
    )
};
export default Checkbox;