import React, { FC } from 'react';
import '../styling/input.css';

// create type for porps 
type InputProps = {
  input: any;
}

          // generic type FC
export const Input: FC <InputProps> = ({input}) => {
  return (
    <div className="input">
      {input}
    </div>
  )
}