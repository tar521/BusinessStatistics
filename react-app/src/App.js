import React, {useState} from 'react';
import './App.css'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/MainDashboard.js'; 
import Login from './Components/Login/Login.js';
import Preferences from './Components/Preferences/Preferences.js';
 
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
} 

function getToken() { 
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

// done below
function App() { 
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  } 

 
  return ( 

    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

    // <></>
  );
}

export default App;