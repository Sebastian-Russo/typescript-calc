import React, {FC} from 'react';
import '../styling/button.css';

// create types for props
type ButtonProps = {
  // HandleClick needs to a be a function type with a parameter that takes a ReactNode (since that's the type of props.children in this case, and you want to pass it into that function
  handleClick: (children: React.ReactNode) => void; // basically, clicking the reusable component I made, the arg is a ReactNode 
  // children: ReactNode; is specified by default
}

                // set type for value
const isOperator = (val: React.ReactNode) => {
  // isNaN() only takes a number parm, and only checks whether a number is set to specal value of 'NaN'
  return (typeof val === "number" && !isNaN(val)) || val === "." || val === "=";
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