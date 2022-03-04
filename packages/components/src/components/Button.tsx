import React from 'react';

type ButtonProps = {
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;
