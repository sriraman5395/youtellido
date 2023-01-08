import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';


const Form = () => {
    const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(handleSubmit)
    if (name !== 'master' && name !== 'student') {
        setError('Invalid username');
        return;
      }
      if (password !== 'master' && password !== 'student') {
        setError('Invalid password');
        return;
      }
      const role = name === 'master' && password === 'master' ? 'master' : 'student';
    
    window.localStorage.setItem('role', role);
    
    setRole(role);

    const formData = {
      name: name,
    
      password: password
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/form2');
}
  return (
    <form onSubmit={handleSubmit}>
        <h1>You tell i do</h1>
        <h3>Master or Student</h3>
        <p>Password hint : same</p>
    <label>
      Name:
      <br />
      </label>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
    
    <br />

    <br />
    <label>
      Password:
      <br />
      </label>
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
   
    <br />
    
    <button className='sub' type="submit">Submit</button>
    {error && (
            <p>{error}</p>
          )}
  </form>
  )
}

export default Form;