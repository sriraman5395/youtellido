import React from 'react'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentValue = () => {
    const [value, setValue] = useState('');
    const [otherValue, setOtherValue] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = () => {
      // Store the value in LocalStorage
      window.localStorage.setItem('value', value);
     
      
    };
    function handleBack(){
    

    
        navigate('/form2');
      }

  
    useEffect(() => {
      // Retrieve the value from LocalStorage
      const storedValue = window.localStorage.getItem('value');
      if (storedValue) {
        setOtherValue(storedValue);
      }
    }, []);
  return (
    
        <div>
            <h1>Please Enter the value</h1>
     
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit" className='stuval'>Submit</button>
      </form>
      <p>{otherValue}</p>
      <button onClick={handleBack} className='stuval' >Go back</button>
  
    </div>
    
  )
}

export default StudentValue