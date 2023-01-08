import React from 'react'
import { useNavigate } from 'react-router-dom';
const MasterError = () => {
    const navigate = useNavigate();
    function handleSubmit(){
    

    
        navigate('/form2');
      }
  return (
    <div>
    <div  style={{fontSize: '2rem', color: ' #66BFBF',fontFamily: '"Helvetica Neue", Arial, sans-serif',padding:'30px'}}>MASTER not allowed to access please login as STUDENT</div>
    <button  onClick={handleSubmit}  className='sub' >Go Back</button>
    </div>
  )
}

export default MasterError