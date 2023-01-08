import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterValue = () => {
    const [otherValue, setOtherValue] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        // Retrieve the value from LocalStorage
        const storedValue = window.localStorage.getItem('value');
        if (storedValue) {
          setOtherValue(storedValue);
        }
      }, []);
      function handleSubmit(){
    

    
        navigate('/form2');
      }

  return (
    <div> 
        <h1>Student value is</h1>
         <p style={{fontSize: '1.5rem', color: ' #66BFBF',fontFamily: '"Helvetica Neue", Arial, sans-serif'}}>{otherValue}</p>
         <br/>
      <button  onClick={handleSubmit} className='sub' >Go Back</button>

    </div>
  )
}

export default MasterValue