import SalesChart from '../Charts/SalesChart';
import GoalGauge from '../Charts/GoalGauge';
import PieChart from '../Charts/PieChart';
import StackedBar from '../Charts/StackedBar';
import BarChart from '../Charts/BarChart';
import useToken from '../Login/UseToken.js' 
const DeptChatDisplay = props => {


     const {token, setToken} = useToken();
    console.log(token)
   
     return(   
       <div className="DeptDisplay">
            <div id = "content_area">
               <div className='parent'>
                    <div className='child' style={{width: '80%'}} id='barchart'>
                          <BarChart/>
                    </div>
                    <div className='child' style={{width: '80%'}} id='stackedbar'>
                        <StackedBar/>
                     </div>
               </div>
            </div>
          <footer> 
            &copy; TriSamDylAlb 
          </footer>
        </div>
     );
   
     }
     export default DeptChatDisplay;