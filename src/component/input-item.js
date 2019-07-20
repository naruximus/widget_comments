import React from 'react';

const InputItem = ({ placeholder, type, value, name, onChange, onClick} ) => {
    const event = onChange || onClick;
    return (
        <input 
            placeholder = {placeholder}
            type = {type}
            name = {name}
            value = {value}
            onChange={ev => { event(ev)}} 
            onClick={ev => { event(ev)}}
        />
    )
}
export default InputItem;
