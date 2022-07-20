import {Link,Outlet } from 'react-router-dom';

const Home = () => {



    return(
      
      <div className="wrapper">
       
        <h2>Application Home</h2>
        <Link to="/Dashboard">Dashboard</Link> |{" "}
        <Link to="/Preferences">Preferences</Link>|{" "}
        <Outlet />
      </div>
    );
  }
  export default Home;