import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Home from '../Home.js';
import {Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/MainDashboard'; 
import Preferences from '../Preferences/Preferences';
import DeptList from '../Models/DeptList';
import SaleChartDisplay from '../Models/SaleChartDisplay';



 const Login = ({setToken}) => {
  const [username, setUserName] = useState("user");
  const [password, setPassword] = useState("pass123");
  const [user, setUser] = useState(undefined);
  const [authenticated, setAuthenticated] = useState(false);

 // const[newToken,setNewToken] = useState();
  var pass = 0;

  // useEffect(() => {
  //   var tokenChange = setChangeToken(() => setToken(newToken));
 
  //   return () => sessionStorage.clear();
  // });


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
     .then((dataJson)=>{
      setAuthenticated(true);
     })
     .catch((error) => {
      console.log(error);
      setAuthenticated(false);
    });


   }


 
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password

    });
   
    //setToken(token);
   // setNewToken(token);
    
    console.log(token);
    sessionStorage.setItem("token",token);
    
    

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

 const testT = sessionStorage.getItem("token");
 console.log(testT);

   return(
    <div>
 
    <Routes>
    <Route path='/' element = {<Dashboard />}/>
    <Route path='/SaleChatDisplay' element = {<Dashboard />}/>
    <Route path='/Preferences' element = {<Dashboard />}/>
    <Route path='/DeptList' element = {<Dashboard />}/>
    </Routes>

    <Routes>
    <Route path='/SaleChatDisplay' element = {<SaleChartDisplay />}/>
    </Routes>     
    
    <Routes>
    <Route path='/Preferences' element = {<Preferences />}/>
    <Route path='/DeptList' element = {<DeptList />}/>
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