import { useState, React} from 'react';
import './App.css'; 
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import useToken from './Components/Login/UseToken.js' 

import Login from './Components/Login/Login.js';



// done below
function App() { 
  sessionStorage.clear();
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
