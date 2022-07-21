import {Link,Outlet } from 'react-router-dom';
//import {withRouter} from 'react-router';
const Home = () => {

  
    return(
      
      <div className="wrapper">
        <Link to= "/Login">Logout user</Link>
        <h2>Application Home</h2>
        <Link to="/Home/Dashboard">Dashboard</Link> |{" "}
        <Link to="/Home/Preferences">Preferences</Link>|{" "}
        <Outlet />
      </div>
    );
  }
  export default Home;

