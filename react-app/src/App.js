import React from 'react';
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

  if(!token) {
    return <Login setToken={setToken} />
  } 
 
  
  return (
    <div className="container">
      
      <BrowserRouter>   
          <Routes>
            <Route path='/' element = {<Home />}>
              <Route path='/Dashboard' element = {<Dashboard />}/>
              <Route path='/DeptFetch' element = {<DeptFetch />}/>
              <Route path='/Preferences' element = {<Preferences/>}/>   
            </Route>
            <Route path='/Login' element = {<Login setToken={setToken}/>}/>   
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
