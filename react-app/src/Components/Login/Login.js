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

  
  // async function loginUser(credentials) {
  //   return fetch('http://localhost:8080/authenticate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials)
  //   })
  //    .then(data => data.json())
  //  }


  async function loginUser(credentials) {
    return fetch('http://localhost:8080/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
     .then(data =>  {
      if (data.ok) {
        return data.json();
      }
      throw new Error("WRONG USERNAME AND PASSWORD");
    })
     .catch((error) => {
      console.log(error);
      setAuthenticated(false);
    });


   }
 
  //  async function errorCheck(data){
  //   if (data.ok) {
  //     console.log()
  //     return data.json();
  //   }
  //   throw new Error("WRONG USERNAME AND PASSWORD");
  //  }

  const handleSubmit = async e => {
    e.preventDefault();
    
      const token = await loginUser({
        username,
        password
      });
      const realt = token;
      console.log(realt);
      setToken(token);
      
      
    
      var passCorrect = "pass123";

      
    
  }
     
  
  
 
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
    
    
 
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

 
   
  




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