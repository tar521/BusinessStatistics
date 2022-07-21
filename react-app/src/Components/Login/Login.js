import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Home from '../Home.js';
import {BrowserRouter, Route, Routes, Link , useNavigate} from 'react-router-dom';
import App from '../../App';
import Dashboard from '../Dashboard/MainDashboard'; 
import Preferences from '../Preferences/Preferences';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/authenticate', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


 const Login = ({setToken}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token);
    //sessionStorage.setItem("token",token);
    setIsLogin(true);
    
  }
  if(!isLogin){
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit }>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
    
  }
  
  

   return(
    <div>
   
    <Routes>
    <Route path='/' element = {<Home />}>
        <Route path='/Dashboard' element = {<Dashboard />}/>
        <Route path='/Preferences' element = {<Preferences/>}/>   
      </Route>
    </Routes>
    </div>
  ) 
   



Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

};

export default Login;
/* Old code
import React from 'react';
import './Login.css';

export default function Login() { 
  const [token, setToken] = useState();
  return( 
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
*/