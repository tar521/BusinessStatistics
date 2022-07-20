import { useState, React} from 'react';
import './App.css'; 
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/MainDashboard'; 
import Preferences from './Components/Preferences/Preferences';
import useToken from './Components/Login/UseToken.js' 
import { Button} from 'reactstrap';
import Login from './Components/Login/Login.js';
import Home from './Home.js';
import DeptFetch from './Components/Dashboard/Models/DeptFetch.js';

// done below
function App() { 

  const {token, setToken} = useToken();
  function logout(){
    sessionStorage.removeItem('token');
  
    window.location.href="/";
  }
  
  if(!token) {
   
    return <Login setToken={setToken} />
  } 
  
  

  return (
    <div className="container">
      <button onClickCapture={logout}>logout user</button>
      <BrowserRouter>   
          <Routes>
            <Route path='/' element = {<Home />}>
              <Route path='/Login' element = {<Login />}/>
              <Route path='/Dashboard' element = {<Dashboard />}/>
              <Route path='/DeptFetch' element = {<DeptFetch />}/>
              <Route path='/Preferences' element = {<Preferences/>}/>   
            </Route>
             
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
