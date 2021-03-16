import React, { FC } from 'react';
import '../styling/clear-button.css';

// create type for props
type ClearButtonProps = {
  handleClear: any;
}
        // generic type, FC 
export const ClearButton: FC<ClearButtonProps> = ({handleClear}) => {
  return (
    <div className="clear-btn"
      onClick={() => handleClear()}
    >Clear</div>
  )
}