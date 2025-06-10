import React from 'react';
import './Button.css';
import './../../../colorSystem/color.css';

type ButtonProps = {
  variant: string;
  size: string;
  children: string;
  type?: "button" | "submit" | "reset"; 
  onClick?: () => void;
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  type='button',
  onClick,
}: ButtonProps) => {
  return (
    <button  type={type} className={`button ${variant} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
