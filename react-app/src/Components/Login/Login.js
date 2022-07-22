import React, { useState,useEffect } from 'react';
import './Login.css';
import useToken from './UseToken.js' 
import {Route, Routes,Link } from 'react-router-dom';
import Dashboard from '../Dashboard/MainDashboard'; 




 const Login = () => {
  const [username, setUserName] = useState("user");
  const [password, setPassword] = useState("pass123");
  const [user, setUser] = useState(undefined);
  const [authenticated, setAuthenticated] = useState(false);
  const {token, setToken} = useToken();


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
    });
   }

 
 
  const handleSubmit = async e => {
    e.preventDefault();
        const token = await loginUser({
        username,
        password
      });
      
     setToken(token); 
    console.log(token);
    
  }
     

    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
       <h2>
        <form onSubmit={handleSubmit }>
          <label>
            <p>Username</p>
            <input type="text"  onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password"  onChange={e => setPassword(e.target.value)} />
          </label>
          
          <div> 
           <Link to ="/Dashboard" element = {<Dashboard/> }>  <button type="submit"><h3>Submit</h3></button>
           </Link>

          </div>
        </form>
        </h2>
      </div>
    );
    
    
 
  /*
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };


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
*/

};

export default Login;


