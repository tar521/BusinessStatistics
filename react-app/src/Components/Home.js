//import {withRouter} from 'react-router';
import {Navigate, Route, Routes, Link,Outlet } from 'react-router-dom';



const Home = props => {
  sessionStorage.clear();
  return(   
    <div className="Container">
       <h3 to = "/Home">Welcome</h3>
       <h2>
       <Link to= "/Login">Sign In</Link>
      
       </h2>
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