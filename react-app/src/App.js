import { useState, React} from 'react';
import './App.css'; 

import Login from './Components/Login/Login.js';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/MainDashboard'; 
import Preferences from './Components/Preferences/Preferences';
import DeptList from './Components/Models/DeptList';
import SaleChartDisplay from './Components/Models/SaleChartDisplay';
import Home from './Components/Home.js';

// done below
function App() { 
  sessionStorage.clear();

  return(   
    <div className="Container">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Login' element = {<Login/> }/>
      </Routes> 
      
      <Routes>
        <Route path='/Dashboard' element = {<Dashboard />}/>
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
  );

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
