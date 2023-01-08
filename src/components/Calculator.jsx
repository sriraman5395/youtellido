import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './calculator.css';



function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const navigate = useNavigate();

  function handleClick(value) {
    setInput(input + value);
  }

  function calculate() {
    const evaluatedInput = eval(input);
   
    if (input.includes('/')) {
        // If the division operator is present, round the result to the nearest whole number
        const roundedResult = Math.round(evaluatedInput);
        setResult(roundedResult);
      } else {
        // If the division operator is not present, set the result to the evaluated input
        setResult(evaluatedInput);
      }
    window.localStorage.setItem('input', input);
    

    
    window.localStorage.setItem('result', evaluatedInput);
  
    
    window.localStorage.setItem('calculation', `${input} = ${evaluatedInput}`);
    

  }

  function reset() {
    setInput('');
    setResult(0);
  }
  function handleSubmit(){
    

    
    navigate('/form2');
  }
  return (
    <div className='cal'>
      <input type="text" value={input} onChange={event => setInput(event.target.value)} className='val'/>
      <br />
      <div className='button'>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick('+')} >+</button>
      
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick('-')} >-</button>
     
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button onClick={() => handleClick('*')} >&#215;</button>
    
      <button onClick={() => handleClick('.')} >.</button>
      <button onClick={() => handleClick(0)}>0</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleClick('/')} >/</button>
      <button onClick={reset}>C</button>
     
      </div>
      <br/>
      <input type="text" value={result} readOnly className='val' />
      <br/>
      <button  onClick={handleSubmit} className='go' >Go Back</button>
    </div>
  );
}

export default Calculator;

