import React from 'react';
// import './Button.css';

interface ButtonProps {
    text: string;
    type: 'submit' | 'reset' | 'button';
    color?: string;
    backgroundColor?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    type='submit',
    color = 'white',
    backgroundColor = 'blue',
    isDisabled = false,
    isLoading = false,
    onClick,
}) => {
    return (
        <button
            className="custom-button"
            style={{ color, backgroundColor }}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            type={type}
        >
            {isLoading ? 'Loading...' : text}
        </button>
    );
};

export default Button;