import { useState, React} from 'react';
import './App.css'; 
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/MainDashboard'; 
import Preferences from './Components/Preferences/Preferences';
import useToken from './Components/Login/UseToken.js' 
import { Button} from 'reactstrap';
import Login from './Components/Login/Login.js';
import Home from './Components/Home.js';
import DeptFetch from './Components/Dashboard/Models/DeptFetch.js';

// done below
function App() { 

  const {token, setToken} = useToken();

  
   if(!token) {
   
    return <Login setToken={setToken} />
  } 
   
  

  return (
    <div className="container">
    
       
          <Routes>
            <Route path='/Home' element = {<Home />}>
              
              <Route path='/Home/Dashboard' element = {<Dashboard />}/>
              <Route path='/Home/DeptFetch' element = {<DeptFetch />}/>
              <Route path='/Home/Preferences' element = {<Preferences/>}/>   
            </Route>
            <Route path='/Login' element = {<Login />}/>
          </Routes> 
     
    </div>
  );
}

export default App;
