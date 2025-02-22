import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  type: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'submit',
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  return (
    <button
      className="custom-button"
      disabled={isDisabled || isLoading}
      onClick={onClick}
      type={type}
    >
      {isLoading ? 'Loading...' : text}
    </button>
  );
};

export default Button;