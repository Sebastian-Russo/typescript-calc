import React, {FC} from 'react';
import '../styling/button.css';

// create types for props
type ButtonProps = {
  handleClick: any;
  children: any;
}

const isOperator = (val:any) => {
  return !isNaN(val) || val === "." || val === "=";
}

// generic type, FC
export const Button: FC <ButtonProps> = ({children, handleClick}) => {
  return (
    <div className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
        onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}