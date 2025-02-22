import React, { FC, InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    ...rest
}) => {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default Input;
