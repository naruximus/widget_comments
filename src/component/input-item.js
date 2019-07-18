import React from 'react';

const InputItem = ({ placeholder, type, value, name,onChange} ) => {
    return (
        <input 
            placeholder = {placeholder}
            type = {type}
            name = {name}
            value = {value}
            onChange={ev => { onChange(ev) } }
        />
    )
}
export default InputItem;
