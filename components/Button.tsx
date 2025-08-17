import React from 'react'

type ButtonProps = {
  text: string;
  customClass: string;
  onClick?: () => void;
  icon?: React.ReactNode; 
};


const Button = ({
    text,
    customClass = '',
    onClick,
    icon
}: ButtonProps) => {
  return (
    <button
      className={`bg-secondary-blue text-white text-body px-5 py-3 rounded-lg flex items-center gap-4 ${customClass}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  )
}

export default Button