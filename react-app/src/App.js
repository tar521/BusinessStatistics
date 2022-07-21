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
   
    return (  
      <Routes>
    <Route path='*' element = {<Login  setToken={setToken} />}/>
    </Routes>)
  }   
  return(
      <div>
        should not display
      </div>
    )
  }
  
/* 
  return (
    <div className="container">
    
      <Routes>
        {!token  ?(
        <Route path='*' element = {<Login setToken={setToken} />}/>
        ) :(
        <Route path='/' element = {<Home />}>
          <Route index element = {<Dashboard />}/>
          <Route path='/Preferences' element = {<Preferences/>}/>   
        </Route>
        )}
      </Routes> 
     
    </div>
  );
} */

export default App;
