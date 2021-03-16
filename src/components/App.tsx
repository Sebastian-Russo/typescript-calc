import React, { useState } from 'react';
import * as math from 'mathjs';
import '../styling/App.css';
import { Button } from './button';
import { Input } from './input'
import { ClearButton } from './clear-button';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (val: number) => {
    setInput(input + val)
  }

  const handleEqual = () => {
    setInput(math.evaluate(input))
  }

  const handleClear = () => {
    setInput('');
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input}/>
        <div className="row">
          <Button handleClick={handleClick}>7</Button>
          <Button handleClick={handleClick}>8</Button>
          <Button handleClick={handleClick}>9</Button>
          <Button handleClick={handleClick}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={handleClick}>4</Button>
          <Button handleClick={handleClick}>5</Button>
          <Button handleClick={handleClick}>6</Button>
          <Button handleClick={handleClick}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={handleClick}>1</Button>
          <Button handleClick={handleClick}>2</Button>
          <Button handleClick={handleClick}>3</Button>
          <Button handleClick={handleClick}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={handleClick}>.</Button>
          <Button handleClick={handleClick}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={handleClick}>+</Button>
        </div>
        <ClearButton handleClear={handleClear} />
      </div>
    </div>
  );
}

export default App;
