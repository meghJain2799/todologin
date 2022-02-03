import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const[state, setState] = useState({
    name:'',
    email: '',
    password: ''
  })
 
  const redirect = useNavigate()
  const handleChange = (event) =>{
    setState({...state,[event.target.name]:event.target.value})

  }
  const signUser = () =>{
    
  let val = state
    axios.post('http://localhost:5000/api/auth/singup', val)
    .then(res =>  {
      if(res.success = true){
        localStorage.setItem("token",res.data.authtoken)
        redirect('/home')
      }
    }) 

    setState({
      name:'',
      email: '',
      password: ''  
    })


  }
  return <div className='container d-flex justify-content-center'>
      <div className='main bg-warning text-center'>
      <div>
        <input type="text" className='px-3 loginput' placeholder="Enter Your Name:" value={state.name} name='name' id="naming" onChange={handleChange} />
      </div>
      <div>
        <input type="email" className='px-3 loginput' placeholder="Enter Your Email:"  value={state.email} name='email' id="mail" onChange={handleChange} />
      </div>
      <div>
        <input type="password" className='px-3 loginput' placeholder="Password: " value={state.password} name='password' id="password" onChange={handleChange} /><br/>
        <small className='text-secondary'>Minimum 6 characters </small>
      </div>
      <button type="button" className="btn btn-primary logbutton px-3 text-white nav-item m-2" onClick={signUser}>Sign Up</button>
      <div className='d-flex justify-content-center'>
        <p> Already Have An Account? &nbsp;</p><Link className='linkSign' to="/login">Log In</Link>
      </div>
      </div>
  </div>;
};

export default SignUp;
