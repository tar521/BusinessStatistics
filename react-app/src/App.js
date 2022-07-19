import React from 'react';
import './App.css'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/MainDashboard'; 
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
 
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