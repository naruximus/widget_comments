import React from 'react';

const InputItem = ({ placeholder, type, value, name, onChange, onClick }) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={ev => {
                if (onChange) {
                    onChange(ev);
                }
            }}
            onClick={ev => {
                if (onClick) {
                    onClick(ev);
                }
            }}
        />
    )
}
export default InputItem;
