import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Home from '../Home.js';
import {Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/MainDashboard'; 
import Preferences from '../Preferences/Preferences';


 const Login = ({setToken}) => {
  const [username, setUserName] = useState("user");
  const [password, setPassword] = useState("pass123");
  const [user, setUser] = useState(undefined);
  const [authenticated, setAuthenticated] = useState(false);
  const [cred, setCred] = useState();
  const [credP, setCredP] = useState();
  async function loginUser(credentials) {
    return fetch('http://localhost:8080/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    /*  .then(body => {
     if (body === '') {
       setAuthenticated(false);
     } else {
       console.log(body.bodyUsed)
     }})  */
     .then(data => data.json())
   }

  
 
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token.jwt);
    
   
    var passCorrect = "pass123";

    for(var i = 1; i <= 11; i++){
      var userNString = "user" + i;
      console.log(username);
      console.log(userNString);
      if( username === userNString  && password === passCorrect ){
        setAuthenticated(true);
        break;
      }
      else if(username ==="admin1" && password === passCorrect){
        setAuthenticated(true);
        break;
      } 

    }
    console.log("WRONG USERNAME OR PASSWORD");
     
    
  }

  
  if(!authenticated){
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
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

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
   
  




};

export default Login;


/*

async function getUserInfo(token) {
     console.log(token);
     let headers = new Headers();

     headers.append('Content-Type', 'application/json');
     headers.append('Accept', 'application/json');
     headers.append('Authorization', 'Bearer ' + token);
     headers.append('Origin','http://localhost:3000');

    return fetch('http://localhost:8080/api/user/info', {
       
      method: 'GET',
      headers: {
        headers,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }}).then(res => res.json())
    } */