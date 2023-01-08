import React from 'react';

import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Activites = () => {
    const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState('');
  const navigate = useNavigate();
    useEffect(() => {
     
        const retrievedInput = window.localStorage.getItem('input');
        const retrievedResult = window.localStorage.getItem('result');
        const retrievedCalculation = window.localStorage.getItem('calculation');
        if (retrievedInput && retrievedResult && retrievedCalculation) {
          setInput(retrievedInput);
          setResult(retrievedResult);
          setCalculation(retrievedCalculation);
        }
      }, []);
      function handleSubmit(){
    

    
        navigate('/form2');
      }
    
  return (
    <div> 
    
        <p className='para'>{input}</p>
        <p className='para'>{result}</p>
        <p  className='para'>{calculation}</p>
        <button  onClick={handleSubmit} className='go' >Go Back</button>
            
        </div>
  )
}

export default Activites