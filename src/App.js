

import Signupform from './components/SignupForm.jsx';
import Form from './components/Form';
import Calculator from './components/Calculator';
import Form2 from './components/Form2';
import {
 
  Routes,
  Route
  } from "react-router-dom";
import StudentValue from './components/StudentValue.jsx';
import MasterValue from './components/MasterValue.jsx';
import StudentError from './components/StudentError.jsx';
import MasterError from './components/MasterError.jsx';

  


function App() {
  const role = window.localStorage.getItem('role')
  return (
    <div className="App">
      
   
    <Routes>
   
      <Route path="/" element={<Form />} />
      <Route path="/form2" element={<Form2 />} />
      <Route path="/activites" element={<Signupform />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/studentvalue" element={<StudentValue />} />
      <Route path="/mastervalue" element={<MasterValue />} />
      <Route path="/studenterror" element={<StudentError />} />
      <Route path="/mastererror" element={<MasterError />} />
      
     
      
    </Routes>

    </div>
  );
}

export default App;
