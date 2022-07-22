import SalesChart from '../Charts/SalesChart';
import GoalGauge from '../Charts/GoalGauge';
import PieChart from '../Charts/PieChart';
import StackedBar from '../Charts/StackedBar';
import BarChart from '../Charts/BarChart';
import useToken from '../Login/UseToken.js' 
const SaleChartDisplay = props => {


     const {token, setToken} = useToken();
    console.log(token)
   
     return(   
       <div className="SaleDisplay">
          <div id = "content_area">
            <div className='container' style = {{width: '80%'}} id='saleschart'>
              <SalesChart/>
            </div>
            <div className='parent'>
              <div className='child' style={{width: '40%'}} align='left' id='goalgauge'>
               <GoalGauge/>
              </div>
              <div className='child' style={{width: '40%'}} align='right' id='piechart'>
               <PieChart/>
              </div>
              <div className='child' style={{width: '80%'}} id='barchart'>
                          <BarChart/>
              </div>
            </div>
          </div> 
          <footer> 
            &copy; TriSamDylAlb 
          </footer>
        </div>
     );
   
     }
     export default SaleChartDisplay;