import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** The label for the input field */
    label?: string;
    /** The name of the input field */
    name: string;
    /** The value of the input field */
    value: string;
    /** The placeholder text for the input field */
    placeholder?: string;
    /** The function to call when the input value changes */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A basic customizable input field component.
 * 
 * @param {InputProps} props - The props for the input field.
 * @returns {JSX.Element} The input field component.
 */
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
