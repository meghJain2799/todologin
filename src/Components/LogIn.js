import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";



const LogIn = () => {

  const redirect = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
 const handleChange = (event) => {
   setLogin({...login,[event.target.name]:event.target.value})
 }

 const LogUser = () => {
   axios.post('http://localhost:5000/api/auth/login', login)
   .then(res => {
     if(res.success = true){
       localStorage.setItem("token",res.data.authtoken)
       redirect('/home')
     }
   });
   
 }

  return <div className='container d-flex justify-content-center'>
     
     <div className='main bg-warning text-center'>

     <div >
        <input type="email" className='px-3 loginput' placeholder="Email" name='email' id="mail" onChange={handleChange} />
      </div>
      <div>
        
        <input type="password" className='px-3 loginput' placeholder="Password" name='password' id="pass" onChange={handleChange} />
      </div>
      <button type="button" className="btn btn-primary logbutton px-3 text-white nav-item m-2" onClick={LogUser}>Log In</button>
     </div>
       

  </div>;
};

export default LogIn;
