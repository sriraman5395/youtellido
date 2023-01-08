import React from 'react';
import { Link , useNavigate } from "react-router-dom";
 import './form2.css';



const Form2 = () => {
    const role = window.localStorage.getItem('role');
    const navigate = useNavigate();
    const handleSignOut = () => {
        window.localStorage.removeItem('role');
        navigate('/');
      }
   
  return (
    <section>
        
            <h1 className='home'>Home</h1>
            
            <p>You are logged in  <span>{role}</span> </p>
           
            {/* <div> */}
     
      {/* {role === 'master' ? (
        <Link to="/calculator">Calculator</Link>
      ) : (
        <p>You do not have access to the calculator.</p>
      )}
    </div> */}
    {role === 'master' ? (
        <Link to="/calculator" className='link'>Calculator</Link>
      ) : (
        <Link to="/studenterror" className='link'>Calculator</Link>
      )}
      

            {/* <Link to="/calculator">Go to Calculator</Link>
            <br /> */}
           
              {role === 'student' ? (
        <Link to="/activites" className='link'>Activites of master</Link>
      ) : (
        <Link to="/mastererror" className='link'>Activites of master</Link>
      )}
     

     
              {role === 'student' ? (
        <Link to="/studentvalue" className='link'>Student input value</Link>
      ) : (
        <Link to="/mastererror" className='link'>Student input value</Link>
      )}
      
            {/* <Link to="/form">History of master</Link>
            <br /> */}
            {/* <Link to="/studentvalue">Student input value</Link>
            <br /> */}


              {role === 'master' ? (
        <Link to="/mastervalue" className='link'>Student output value</Link>
      ) : (
        <Link to="/studenterror" className='link'>Student output value</Link>
      )}
     
            {/* <Link to="/mastervalue">Student output value</Link>
             */}
            <div className="flexGrow">
                <button onClick={handleSignOut} className='sign'>Sign Out</button>
            </div>
        </section>
  )
}

export default Form2