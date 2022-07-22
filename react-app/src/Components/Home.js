//import {withRouter} from 'react-router';
import {Navigate, Route, Routes, Link,Outlet } from 'react-router-dom';
import useToken from './Login/UseToken.js' 
import Dashboard from './Dashboard/MainDashboard'; 


const Home = props => {
  return(   
    <div className="Container">
       <h2 to = "/Home">Application Home</h2>
       <Dashboard/>

      <Link to= "Login" >
        Logout user
      </Link>

      
      
      
      <Outlet/>
      
    </div>
  );

  }
  export default Home;

/*
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

*/