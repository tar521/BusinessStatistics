//import {withRouter} from 'react-router';
import {BrowserRouter, Route, Routes, Link,Outlet } from 'react-router-dom';
import useToken from './Login/UseToken.js' 


const Home = props => {

 // const {token, setToken} = useToken();
 // setToken(sessionStorage.getItem("token"));

  return(   
    <div className="Container">
      <Link to= "Login">Logout user</Link>

      <h2>Application Home</h2>
      <Link to= "/DashBoard"> DashBoard</Link>
      <Link to= "/Preferences"> Preferences</Link>
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